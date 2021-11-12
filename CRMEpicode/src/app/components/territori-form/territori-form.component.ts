import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComuni } from 'src/app/interfaces/icomuni';
import { IProvince } from 'src/app/interfaces/iprovince';
import { ComuniService } from 'src/app/services/comuni.service';
import { LoginService } from 'src/app/services/login.service';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-territori-form',
  templateUrl: './territori-form.component.html',
  styleUrls: ['./territori-form.component.css']
})
export class TerritoriFormComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  mostra:boolean = false;

  province: IProvince[] = [];
  show = true;
  com = false;
  prov = false;

  name: any;
  provinciaSelected: IProvince = {
    nome: '',
    sigla: ''
  };

  comune: IComuni = {
    nome: '',
    provincia: {
      nome: '',
      sigla: ''
    }
  };

  constructor(
    private comuniService: ComuniService,
    private provinceService: ProvinceService,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.mostra = this.loginService.setNavigationMode()
    console.log(this.router.url);
    this.getProvince()
  }

  onChangeProvincia(provincia: IProvince) {
    this.provinciaSelected = provincia;
    this.comune.provincia = this.provinciaSelected;
  }

  addProvincia() {
    if (this.provinciaSelected.nome && this.provinciaSelected.sigla) {
      this.prov = false
      this.provinceService.createProvincia(this.provinciaSelected).subscribe(resp => this.getProvince())
      this.provinciaSelected = {nome: '', sigla: ''}
    }
    else {
        this.prov = true
    }
  }

  addComune() {
    this.com = false
    if(this.provinciaSelected && this.comune.nome){
    this.comuniService.createComune(this.comune).subscribe(resp => console.log(resp))
    this.comune = {nome: '', provincia: { nome: '', sigla: ''}}
  }
  else{
    this.com = true
  }
}

  getProvince() {
    this.provinceService.getAllProvince()
      .subscribe(resp => {
        this.province = resp.content;
      })
  }



}
