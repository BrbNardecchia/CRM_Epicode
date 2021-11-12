import { Component, OnInit } from '@angular/core';
import { IClienti } from 'src/app/interfaces/iclienti';
import { IFatture } from 'src/app/interfaces/ifatture';
import { IStatoFatture } from 'src/app/interfaces/istato-fatture';
import { ClientiService } from 'src/app/services/clienti.service';
import { FattureService } from 'src/app/services/fatture.service';
import { StatoFatturaService } from 'src/app/services/stato-fattura.service';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/classes/classes';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-fatture-form',
  templateUrl: './fatture-form.component.html',
  styleUrls: ['./fatture-form.component.css']
})
export class FattureFormComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  mostra:boolean = false;

  cliente: IClienti = new Cliente();
  titolo: string = 'Inserisci Nuova Fattura';
  button: string = 'Inserisci Fattura';
  show = true;
  show2 = false;
  stato = false;

  model: NgbDateStruct = {
    year: 0,
    month: 0,
    day: 0
  };

  fattura: IFatture = {
    data: '',
    anno: 0,
    importo: 0,
    stato: {
      nome: ''
    },
    cliente: this.cliente
  }

  statoFattura: IStatoFatture[] = []
  clienti: IClienti[] = [];


  constructor(
    private clientiService: ClientiService,
    private fattureService: FattureService,
    private statoFatturaService: StatoFatturaService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private calendar: NgbCalendar
  ) { }

  ngOnInit(): void {
    this.mostra = this.loginService.setNavigationMode()
    this.show2 = false;
    this.statoFatturaService.getAllStatiFatture().subscribe(resp => {
      this.statoFattura = resp.content;
      this.route.params.subscribe(element => {
        if (!element.id) {
          this.clientiService.getAllClient().subscribe(resp => {
            this.stato = false;
            this.titolo = 'Inserisci Nuova Fattura';
            this.button = 'Inserisci Fattura';
            this.clienti = resp.content;
          })
        }
        else {
          this.fattureService.getFatturaById(element.id).subscribe(fattura => {
            this.stato = true;
            this.titolo = 'Modifica Stato Fattura';
            this.button = 'Modifica Fattura';
            this.model = this.calendar.getToday();
            this.fattura = fattura;
          })
        }
      });
    }
    );

  }

  setFattura() {
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.fattura.data = this.changeFormatwithbar(this.model.year, this.model.month, this.model.day)
        if (this.fattura.data && this.fattura.anno && this.fattura.importo && this.fattura.stato.nome && this.fattura.cliente.ragioneSociale) {
          this.fattureService.createFattura(this.fattura).subscribe(resp => {
            this.router.navigate(['/clienti'])
          });
        }
        else {
          console.log(this.fattura)
          this.show2 = true;
        }
      }

      else {
        let fattura_put = {
          id: this.fattura.id,
          data: this.changeFormatwithbar(this.model.year, this.model.month, this.model.day),
          anno: this.fattura.anno,
          importo: this.fattura.importo,
          stato: {
            id: this.fattura.stato.id,
            nome: this.fattura.stato.nome
          },
          cliente: {
            id: this.fattura.cliente.id
          }
        }
        this.fattureService.updateFatturaById(fattura_put).subscribe(resp => {
          this.router.navigate(['/contabilita/' + this.fattura.cliente.id + '/detailsbyclient']);
        });
      }
    }
    )
  }

  changeFormatwithbar(anno: number, mese: number, giorno: number): string {
    let day = giorno.toString()
    let month = mese.toString()
    let year = anno.toString()
    if (giorno <= 9) {
      day = '0' + day
    }
    if (mese <= 9) {
      month = '0' + month
    }
    return year + '-' + month + '-' + day
  }

  goToAddnewClient() {
    this.router.navigate(['addcliente'])
  }


}


