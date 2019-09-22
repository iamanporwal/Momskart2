import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';
import { UrlConstants } from '../shared/url-constant';

@Component({
  selector: 'app-login-signup-model',
  templateUrl: './login-signup-model.component.html',
  styleUrls: ['./login-signup-model.component.css']
})

export class LoginSignupModelComponent implements OnInit {
  createLoginForm: FormGroup;
  createSignupForm: FormGroup;
  submitted = false;
  errorMsg = '';
  signUpErrorMsg = '';
  signUpSuccessMsg = '';
  @ViewChild('crossBtn') public crossBtn: ElementRef;
  @Output() public eventEmitter = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    public commonService: CommonService,
    private router: Router
     ) { }

  ngOnInit() {
    this.createLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.createSignupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ],
      number: ['', Validators.required],
      password: ['', Validators.required],
      // confirmPassword:[''],
    }
    // , {validator: this.checkPasswords }
    );
  }

//   checkPasswords(createSignupForm: FormGroup) { // here we have the 'passwords' group
//   let pass = createSignupForm.controls.password.value;
//   let confirmPass = createSignupForm.controls.confirmPassword.value;
//   return pass === confirmPass ? null : { notSame: true }
// }
  signUp() {
    this.submitted = true;
    if (this.createSignupForm.invalid) {
      return;
    }
    this.commonService.post(UrlConstants.urlSignup,{
      full_name: this.createSignupForm.controls.name.value,
      email: this.createSignupForm.controls.email.value,
      mobile_number: this.createSignupForm.controls.number.value,
      password: this.createSignupForm.controls.password.value,
      device_id: '1234'
      // confirmPassword: this.createSignupForm.controls.confirmPassword.value
    }).subscribe(data => {
      console.log(data);
      if (data && data.status === true) {
        this.errorMsg = '';
        data = data.data;
        this.signUpSuccessMsg = 'Signup successful, please login to continue';
      } else {
        this.signUpErrorMsg = data.message;
      }
  });
}

  login() {
    this.submitted = true;
    if (this.createLoginForm.invalid) {
      return;
    }
    this.commonService.post(UrlConstants.urlLogin, {email: this.createLoginForm.controls.email.value,
       password: this.createLoginForm.controls.password.value } ).subscribe(data => {
      if (data && data.status === true) {
        this.errorMsg = '';
        data = data.data;
        localStorage.setItem('user', JSON.stringify(data));
        // this.router.navigate(['/']);
        this.eventEmitter.emit(data);
        this.crossBtn.nativeElement.click();
      } else {
        this.errorMsg = data.message;
      }
    });
  }

}
