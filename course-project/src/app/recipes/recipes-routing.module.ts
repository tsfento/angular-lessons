import { NgModule, inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeService } from "./recipe.service";
import { DataStorageService } from "../shared/data-storage.service";

const recipeResolver: ResolveFn<any> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      const recipes = inject(RecipeService).getRecipes();

      if (recipes.length === 0) {
        return inject(DataStorageService).fetchRecipes();
      } else {
        return recipes;
      }
    };

const routes: Routes = [
  {
    path: '', component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent, resolve: { data: recipeResolver } },
    { path: ':id/edit', component: RecipeEditComponent, resolve: { data: recipeResolver } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}