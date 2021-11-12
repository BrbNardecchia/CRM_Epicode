import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from 'src/app/interfaces/ifatture';
import { FattureService } from 'src/app/services/fatture.service';
import { FormControl } from '@angular/forms';
import { ClientiService } from 'src/app/services/clienti.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  mostra: boolean = false;
  show: boolean = false;

  titolo = ''
  fatture: IFatture[] = []

  constructor(
    private fattureService: FattureService,
    private loginService: LoginService,
    private clientiService: ClientiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.mostra = this.loginService.setNavigationMode()
    this.refreshFatture();
  }

  refreshFatture() {
    this.route.params.subscribe(element => {
      this.fattureService.getFattureByClient(element.id).subscribe(resp => {
        this.fatture = resp.content;
        if (this.fatture[0]) {
          this.titolo = this.fatture[0].cliente.ragioneSociale;
        }
        else {
          if (this.loginService.setNavigationMode()) {
            this.router.navigate(['/addfattura']);
          }
          else{
            this.show = true;
          }

        }
      })
    })
  }

  goToClienti(){
    this.router.navigate(['/clienti']);
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
