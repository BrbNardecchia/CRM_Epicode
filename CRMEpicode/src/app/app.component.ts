import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostra = this.loginService.setNavigationMode()

  constructor(private loginService: LoginService){
  }
  events: string[] = [];
  opened: boolean = true;
  title = 'CRMEpicode';

  mostraNav = (stato: boolean) => {
    this.mostra = stato;
  }
  
}
