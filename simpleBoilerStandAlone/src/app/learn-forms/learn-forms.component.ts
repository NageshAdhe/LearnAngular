import { Component } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-learn-forms',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './learn-forms.component.html',
  styleUrl: './learn-forms.component.scss',
})
export class LearnFormsComponent {
  formData = {
    password: '',
    email: '',
  };
  reactiveLoginForm: FormGroup;

  constructor() {
    this.reactiveLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(loginForm: any) {
    if (loginForm.valid) {
      alert('proceed to login');
    } else {
      Object.keys(loginForm.controls).forEach((key) => {
        loginForm.controls[key].markAsTouched();
      });
    }
  }
  submitReactiveLogin() {
    console.log('test');
  }
}
