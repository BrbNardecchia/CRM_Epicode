import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from 'src/app/interfaces/ifatture';
import { FattureService } from 'src/app/services/fatture.service';
import { FormControl } from '@angular/forms';
import { ClientiService } from 'src/app/services/clienti.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {
  titolo = ''
  stato = 'paga';
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  fatture: IFatture[] = []

  constructor(
    private fattureService: FattureService,
    private clientiService: ClientiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshFatture();
  }

  refreshFatture() {
    this.route.params.subscribe(element => {
      this.fattureService.getFattureByClient(element.id).subscribe(resp => {
        console.log(resp.content)
        this.fatture = resp.content;
        this.titolo = this.fatture[0].cliente.ragioneSociale;
      })
    })
  }

  deleteFattura(fattura: IFatture) {
    if (fattura.id) {
      this.fattureService.deleteFatture(fattura.id).subscribe(resp => {
        console.log(resp);
        this.refreshFatture()
      })
    }
  }

  cambiaStatoFattura(fattura: IFatture) {
    this.router.navigate(['addfattura', fattura.id, 'edit'])
  }

  deleteAllFattureCliente() {
    if (this.fatture[0].cliente.id) {
      this.fattureService.deleteFattureByClient(this.fatture[0].cliente.id).subscribe(resp => {
        console.log(resp);
        this.refreshFatture();
      })
    }
  }
}
