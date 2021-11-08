import { Component, OnInit } from '@angular/core';
import { IClienti } from '../../interfaces/iclienti';
import { ClientiService } from '../../services/clienti.service';



@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
  
  clienti: IClienti[] = [];
  displayedColumns : string [] = [ 'id' , 'ragioneSociale' , 'tipoCliente' , 'telefonoContatto' ];
  dataSource = this.clienti;

  constructor(private clientiService: ClientiService) { }



  ngOnInit(): void {
    this.clientiService.getAllClient().subscribe(response => this.clienti = response.content);
  }


}
