import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/classes/classes';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  clienti: IClienti[] = []
  cliente = new Cliente;
  constructor(private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.clientiService.getClientiByMoneybet().subscribe(resp => {
      this.clienti = resp.content
      if(this.clienti[0]){
        this.cliente= this.clienti[0]
      }
    })
  }
  
}
