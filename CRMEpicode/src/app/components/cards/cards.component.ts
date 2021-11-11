import { Component, OnInit } from '@angular/core';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cliente: IClienti[] = []
  constructor(private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.clientiService.getClientiByMoneybet().subscribe(resp => this.cliente = resp.content)
  }
  
}
