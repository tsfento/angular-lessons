import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm;
  defaultSub = 'advanced';
  submitted: boolean = false;
  userSub = {
    email: '',
    password: '',
    sub: '',
  }

  onSubmit() {
    this.submitted = true;
    this.userSub.email = this.signupForm.value.email;
    this.userSub.password = this.signupForm.value.password;
    this.userSub.sub = this.signupForm.value.sub;

    this.signupForm.reset();
  }
}