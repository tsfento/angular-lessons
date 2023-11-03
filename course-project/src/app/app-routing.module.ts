import { NgModule, inject } from "@angular/core";
import { Routes, RouterModule, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { DataStorageService } from "./shared/data-storage.service";
import { RecipeService } from "./recipes/recipe.service";
import { AuthComponent } from "./auth/auth.component";

const recipeResolver: ResolveFn<any> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      const recipes = inject(RecipeService).getRecipes();

      if (recipes.length === 0) {
        return inject(DataStorageService).fetchRecipes();
      } else {
        return recipes;
      }
    };

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent, resolve: { data: recipeResolver } },
    { path: ':id/edit', component: RecipeEditComponent, resolve: { data: recipeResolver } },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}