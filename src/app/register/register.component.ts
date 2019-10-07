import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginInfo} from '../auth/login-info';
import {AuthService} from '../auth/auth.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';
import {SingnupInfo} from '../auth/singnup-info';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SingnupInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  Successmessage = '';
  fSignup: FormGroup;

  constructor(private authService: AuthService, private  fb: FormBuilder, private route: Router) {
  }

  ngOnInit() {

    this.fSignup = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    this.signupInfo = new SingnupInfo(
      this.fSignup.get('username').value,
      this.fSignup.get('password').value,
      this.fSignup.get('email').value
    );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.Successmessage = 'Đăng ký thành công!!';
        alert('Dang ky thanh cong');
        this.route.navigate(['/manager']);
      },
      error => {
        this.errorMessage = 'Đăng ký thất bại, user hoặc email đã tồn lại';
        this.isSignUpFailed = true;
      }
    );
  }


}
