import { Component, OnInit } from '@angular/core';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  page = 1;
  pageSize = 5;
  Clienti: IClienti[] = [];
  collectionSize = 0

  clientiTotali: IClienti[] = [];

  constructor(
    private clientiService: ClientiService) {  
    }

  ngOnInit(): void {
    this.clientiService.getAllClient().subscribe(resp => {
      this.Clienti = resp.content;
      this.collectionSize = this.Clienti.length;
      this.refreshClienti()
    })}

  refreshClienti() {
    this.clientiTotali = this.Clienti
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
