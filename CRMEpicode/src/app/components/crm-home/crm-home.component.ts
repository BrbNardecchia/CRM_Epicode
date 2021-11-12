import { ClientiService } from 'src/app/services/clienti.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IClienti } from 'src/app/interfaces/iclienti';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crm-home',
  templateUrl: './crm-home.component.html',
  styleUrls: ['./crm-home.component.css']
})
export class CrmHomeComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;

  mostra:boolean = false;

  
  ricerca = {
    key : '',
    value : '',
    operation : 'EQUAL'
  }

  clienti : IClienti[] = []


  constructor(
    private clientiService: ClientiService,
    private loginService: LoginService,
    private router: Router
  ) {}

  params = [
    {value: 'ragioneSociale', viewValue: 'Ragione Sociale'},
    {value: 'partitaIva', viewValue: 'Partita Iva'},
    {value: 'email', viewValue: 'Email'},
  ];


  ngOnInit(): void {
    this.mostra = this.loginService.setNavigationMode()
  }

  cercaCliente(){
    console.log(this.ricerca)
    if(this.ricerca.key && this.ricerca.value){
      this.clientiService.findClientebyElement(this.ricerca).subscribe(resp => 
        {
          this.clienti = resp.content;
        })
    }
  }

  updateCliente(cliente : IClienti) {
    this.router.navigate(['addcliente', cliente.id, 'edit'])
  }

  detailsCliente(cliente : IClienti) {
    this.router.navigate(['clienti', cliente.id, 'details'])
  }
}
