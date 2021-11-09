import { Component, OnInit } from '@angular/core';
import { IClienti } from 'src/app/interfaces/iclienti';
import { IComuni } from 'src/app/interfaces/icomuni';
import { IProvince } from 'src/app/interfaces/iprovince';
import { ClientiService } from 'src/app/services/clienti.service';
import { ComuniService } from 'src/app/services/comuni.service';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  cliente: IClienti = {
    ragioneSociale: '',
    partitaIva: 0,
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
  
  show = true;
  comuni: IComuni[] = [];
  province: IProvince[] = [];
  provinciaSelected: IProvince ={
    nome: '',
    sigla: ''
  };
  

  comuni_legale: IComuni[] = [];
  comuni_oper: IComuni[] = [];
  province_legale: IProvince[] = [];
  province_oper: IProvince[] = [];

  constructor(
    private comuniService: ComuniService,
    private provinceService: ProvinceService,
    private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince()
    .subscribe(resp => {
      this.province = resp.content; 
      this.province_legale = resp.content; 
      this.province_oper = resp.content; 
      this.showComuni_oper();
      this.showComuni_legale();
    })
  }

  setCliente(){
    console.log(this.cliente)
  }

  onChangeObj_oper(provincia: IProvince){
    this.provinciaSelected = provincia;
    console.log(this.provinciaSelected);
    this.showComuni_oper();
  }
  onChangeObj_legale(provincia: IProvince){
    this.provinciaSelected = provincia;
    this.showComuni_legale();
  }

  showComuni_oper(){
    this.comuni_oper = this.comuniService.getComuneByProvince(this.provinciaSelected);
  }
  
  showComuni_legale(){
    this.comuni_legale = this.comuniService.getComuneByProvince(this.provinciaSelected);
  }


}


