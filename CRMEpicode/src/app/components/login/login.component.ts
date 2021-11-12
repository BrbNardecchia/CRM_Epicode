import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RouteGuardService } from 'src/app/services/route-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() mostraNav = new EventEmitter();

  stato:boolean = false;

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
    role: ["user"]
  }

  nomeContattocognome = {}
  ruoli : string[] = []
  constructor(
    private loginService: LoginService,
    private router: Router,
    private guard: RouteGuardService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.LoginUser(this.logIn).subscribe(resp => {
      localStorage.setItem('token', resp.accessToken);
      localStorage.setItem('roles', JSON.stringify(resp.roles))
      this.stato = this.loginService.setNavigationMode()
      this.mostraNav.emit(this.stato)
      this.guard.setLogin();
      this.router.navigate(['dashboard']);
    },
      err => {
        console.log("utente non esistente");
      })
  }

  singup() {
    this.loginService.SingUpUser(this.singUp).subscribe(resp => {
      this.logIn.username = this.singUp.username;
      this.logIn.password = this.singUp.password;
      this.login();
    })
  }
}
