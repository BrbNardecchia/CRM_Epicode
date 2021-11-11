import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RouteGuardService } from 'src/app/services/route-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logIn = {
    username: '',
    password: ''
  }

  singUp = {
    nome: '',
    cognome: '',
    username: '',
    email: '',
    password: '',
    role: '["user"]'
  }

  nomeContattocognome = {}

  constructor(
    private loginService: LoginService,
    private router: Router,
    private guard : RouteGuardService
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.logIn);
    this.loginService.LoginUser(this.logIn).subscribe(resp => {
      localStorage.setItem('token', resp.accessToken);
      this.guard.setLogin();
      this.router.navigate(['dashboard']);
      console.log(resp);
    },
    err => {      
    console.log("utente non esistente");
  })
  }

  singup(){
    console.log(this.singUp)
  }
}
