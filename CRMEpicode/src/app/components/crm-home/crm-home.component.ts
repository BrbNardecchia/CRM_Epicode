import { ClientiService } from 'src/app/services/clienti.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crm-home',
  templateUrl: './crm-home.component.html',
  styleUrls: ['./crm-home.component.css']
})
export class CrmHomeComponent implements OnInit {
  email = ''
  cognome = ''
  constructor(
    private clientiService: ClientiService
  ) {}

  ngOnInit(): void {

  }

  cercaCliente(){
    
  }

}
