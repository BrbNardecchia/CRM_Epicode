import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/classes/classes';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-clienti-details',
  templateUrl: './clienti-details.component.html',
  styleUrls: ['./clienti-details.component.css']
})
export class ClientiDetailsComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  mostra:boolean = false;
  cliente: IClienti = new Cliente();

  constructor(private clientiService: ClientiService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.mostra = this.loginService.setNavigationMode()
    this.route.params.subscribe(element => {
      this.clientiService.getClienteById(element.id).subscribe(cliente => {
        this.cliente = cliente;
      })
    })
  }

  detagliFattura(cliente: IClienti) {
    this.router.navigate(['contabilita', cliente.id, 'detailsbyclient'])
  }

}
