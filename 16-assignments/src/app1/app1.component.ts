import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app1-root',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'Advanced';
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