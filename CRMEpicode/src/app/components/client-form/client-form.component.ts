import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/classes/classes';
import { IClienti } from 'src/app/interfaces/iclienti';
import { IComuni } from 'src/app/interfaces/icomuni';
import { IProvince } from 'src/app/interfaces/iprovince';
import { ClientiService } from 'src/app/services/clienti.service';
import { ComuniService } from 'src/app/services/comuni.service';
import { LoginService } from 'src/app/services/login.service';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  mostra:boolean = false;
  show = true;
  show2 = false;

  events: string[] = [];
  opened: boolean = true;

  cliente : IClienti = new Cliente();  

  provinciaSelected: IProvince ={
    nome: '',
    sigla: ''
  };

  titoloForm: string = '';
  set_btn: string = '';

  tipiCliente : string[] =[];
  
  comuni_legale: IComuni[] = [];
  comuni_oper: IComuni[] = [];

  province_legale: IProvince[] = [];
  province_oper: IProvince[] = [];

  constructor(
    private comuniService: ComuniService,
    private provinceService: ProvinceService,
    private clientiService: ClientiService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.mostra = this.loginService.setNavigationMode()
    this.route.params.subscribe(element=>{
      if(!element.id){
        this.titoloForm = 'Inserire il nuovo Cliente';
        this.set_btn = 'Inserisci Cliente'
      }
      else{
        this.titoloForm = 'Effettua le modifiche al cliente selezionato';
        this.set_btn = 'Modifica Cliente'
        this.clientiService.getClienteById(element.id).subscribe(cliente =>{ 
          this.cliente = cliente;
        })
      }
      this.clientiService.getTipiCliente().subscribe(resp => this.tipiCliente = resp);
      this.provinceService.getAllProvince()
      .subscribe(resp => {
        this.province_legale = resp.content; 
        this.province_oper = resp.content; 
        this.showComuni_oper();
        this.showComuni_legale();
      })
    });
    

  }

  setCliente(){
    this.route.params.subscribe(element=>{
      if(!element.id){
        if(this.cliente.ragioneSociale && 
          this.cliente.partitaIva && 
          this.cliente.tipoCliente && 
          this.cliente.email && 
          this.cliente.nomeContatto && 
          this.cliente.cognomeContatto && 
          this.cliente.telefonoContatto && 
          this.cliente.emailContatto && 
          this.cliente.indirizzoSedeOperativa.via &&
          this.cliente.indirizzoSedeOperativa.civico &&
          this.cliente.indirizzoSedeOperativa.comune.nome &&
          this.cliente.indirizzoSedeOperativa.comune.provincia.nome &&
          this.cliente.indirizzoSedeOperativa.comune.provincia.sigla &&
          this.cliente.indirizzoSedeLegale.via &&
          this.cliente.indirizzoSedeLegale.civico &&
          this.cliente.indirizzoSedeLegale.comune.nome &&
          this.cliente.indirizzoSedeLegale.comune.provincia.nome &&
          this.cliente.indirizzoSedeLegale.comune.provincia.sigla &&
          this.cliente.fatturatoAnnuale
          ){
          this.show2 = false
          this.clientiService.createCliente(this.cliente).subscribe(resp => {
            console.log(resp);
            this.router.navigate(['clienti']);
          })
        }
        else{
          this.show2 = true
        }
      }
      else{
        this.clientiService.updateClienteById(this.cliente).subscribe(resp => {
          console.log(resp);
          this.router.navigate(['clienti']);
        });
        }
      }
    )
  }

  onChangeObj_oper(provincia: IProvince){
    this.provinciaSelected = provincia;
    this.showComuni_oper();
  }
  onChangeObj_legale(provincia: IProvince){
    this.provinciaSelected = provincia;
    this.showComuni_legale();
  }

  showComuni_oper(){
    this.comuni_oper = this.comuniService.getComuneByProvince(this.provinciaSelected)
  }
  
  showComuni_legale(){
    this.comuni_legale = this.comuniService.getComuneByProvince(this.provinciaSelected);
  }

  goToAddCandP(){
    // localStorage dati inseriti
    this.router.navigate(['addcliente/addcomprov'])
  }
}


