import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  mostra:boolean = false;
  page = 1;
  pageSize = 8;
  collectionSize = 0
  



  Clienti: IClienti[] = [];
  clientiTotali: IClienti[] = [];

  constructor(
    private clientiService: ClientiService,
    private router: Router,
    private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.mostra = this.loginService.setNavigationMode()
    this.aggiornaLista();
  }

  aggiornaLista(){
    this.clientiService.getAllClient().subscribe(resp => {
      this.Clienti = resp.content;
      this.collectionSize = this.Clienti.length;
      this.refreshClienti()
    })
  }

  refreshClienti() {
    this.clientiTotali = this.Clienti
      .map((cliente, i) => ({ id: i + 1, ...cliente }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  deleteCliente(cliente : IClienti) {
    if (cliente.id) {
      this.clientiService.deleteClienteById(cliente.id).subscribe(resp => {
        console.log(resp);
        this.aggiornaLista()});
    }
  }

  updateCliente(cliente : IClienti) {
    this.router.navigate(['addcliente', cliente.id, 'edit'])
  }

  detailsCliente(cliente : IClienti) {
    this.router.navigate(['clienti', cliente.id, 'details'])
  }

}
