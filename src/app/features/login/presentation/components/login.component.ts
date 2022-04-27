import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  messageError: string;
  loading: boolean = false;

  emailsList = [
    'well@hotmail.com',
  ]

  constructor(
    private _loginService: LoginService,
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    this.loginForm = this._fb.group({
      email: null,
      password: null
    })
  }

  signIn() {
    const email = this.loginForm.get("email").value;

    if (this.emailsList.includes(email)) {
      this._router.navigate(['users-list']);
    } else {
      this.messageError = "E-mail ou Senha Inválidos"
    }
    // const email = this.loginForm.get("email").value;
    // const password = this.loginForm.get("password").value;
    // this.loading = true;

    // this._loginService.signIn(email, password).then(res => {
    //   localStorage.setItem('user', JSON.stringify(res.user));
    //   this._router.navigate(['users-list']);
    //   this.loading = false;
    // }, () => {
    //   this.loading = false;
    //   this.messageError = "E-mail ou Senha Inválidos"
    // });
  }
}