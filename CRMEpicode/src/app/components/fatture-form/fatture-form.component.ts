import { Component, OnInit } from '@angular/core';
import { IClienti } from 'src/app/interfaces/iclienti';
import { IFatture } from 'src/app/interfaces/ifatture';
import { IStatoFatture } from 'src/app/interfaces/istato-fatture';
import { ClientiService } from 'src/app/services/clienti.service';
import { FattureService } from 'src/app/services/fatture.service';
import { StatoFatturaService } from 'src/app/services/stato-fattura.service';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fatture-form',
  templateUrl: './fatture-form.component.html',
  styleUrls: ['./fatture-form.component.css']
})
export class FattureFormComponent implements OnInit {

  cliente: IClienti = {
    ragioneSociale: '',
    partitaIva: '',
    tipoCliente: '',
    email: '',
    pec: '',
    telefono: '',
    nomeContatto: '',
    cognomeContatto: '',
    telefonoContatto: '',
    emailContatto: '',
    indirizzoSedeOperativa: {
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        nome: '',
        provincia: {
          nome: '',
          sigla: ''
        }
      }
    },
    indirizzoSedeLegale: {
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        nome: '',
        provincia: {
          nome: '',
          sigla: '',
        }
      }
    }
  }
  titolo: string = 'Inserisci Nuova Fattura';
  button: string = 'Inserisci Fattura';
  show = true;
  show2 = false;

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
  stato = false;

  constructor(
    private clientiService: ClientiService,
    private fattureService: FattureService,
    private statoFatturaService: StatoFatturaService,
    private route: ActivatedRoute,
    private router: Router,
    private calendar: NgbCalendar
  ) { }

  ngOnInit(): void {
    this.statoFatturaService.getAllStatiFatture().subscribe(resp => {
      this.statoFattura = resp.content;
      console.log(this.statoFattura);
    }
    );

    this.route.params.subscribe(element => {

      if (!element.id) {
        this.clientiService.getAllClient().subscribe(resp => {
          this.clienti = resp.content;
          console.log(this.clienti);
          this.stato = false;
          this.titolo = 'Inserisci Nuova Fattura';
          this.button = 'Inserisci Fattura';
          this.show2 = false;
        })
      }
      else {
        this.show2 = true;
        this.fattureService.getFatturaById(element.id).subscribe(fattura => {
          this.model = this.calendar.getToday();
          this.fattura = fattura;
          this.stato = true;
          this.titolo = 'Modifica Stato Fattura';
          this.button = 'Modifica Fattura';
        })
      }
    });
  }

  setFattura() {
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.fattura.data = this.model.year + '-' + this.model.month + '-' + this.model.day;
        console.log(this.fattura)
        this.fattureService.createFattura(this.fattura).subscribe(resp => {
          console.log(resp);
          this.router.navigate(['/clienti'])
        });

      }
      else {
        console.log(this.model)

        console.log(this.changeFormatwithbar(this.model.year,this.model.month, this.model.day))
        this.fattura.data = this.changeFormatwithbar(this.model.year,this.model.month, this.model.day)
        let fattura_put = {
          id: this.fattura.id,
          data: this.fattura.data,
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
          console.log(fattura_put);
        });

        this.router.navigate(['/contabilita/'+ this.fattura.cliente.id +'/detailsbyclient'])

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


