import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  submitted;
  myForm: FormGroup;
  error: boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authorazationService: AuthorizationService) { }

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(6)]],
        pwd: ['', [Validators.required, Validators.minLength(6)]],
      }
    );
  }
  _formSubmit() {


    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    else {
      this.authorazationService.login(
        this.myForm.value.username,
        this.myForm.value.pwd
      ).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/todo-list']);
          localStorage.setItem("token", data.token);
        },
        error => {
          this.error = true;
          console.log(error);
        }
      );
    }
  }

}
