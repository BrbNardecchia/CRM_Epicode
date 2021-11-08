import { Component, OnInit, PipeTransform } from '@angular/core';
import { IClienti } from '../../interfaces/iclienti';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientiService } from 'src/app/services/clienti.service';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-clienti-bootstrap',
  templateUrl: './clienti-bootstrap.component.html',
  styleUrls: ['./clienti-bootstrap.component.css'],
  providers: [DecimalPipe]
})
export class ClientiBootstrapComponent implements OnInit {

  clienti: IClienti[] = [];

  COUNTRIES: Country[] = [
    {
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754
    },
    {
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199
    },
    {
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463
    },
    {
      name: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397
    }
  ];

  clienti$: Observable<IClienti[]>;
  filter = new FormControl('');

  constructor(
    pipe: DecimalPipe,
    private clientiService: ClientiService
    ) {
    this.clienti$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
    this.clientiService.getAllClient().subscribe(response => this.clienti = response.content);

  }

  ngOnInit(): void {
    
  }

  search(text: string, pipe: PipeTransform): IClienti[] {
    return this.clienti.filter(cliente => {
      const term = text.toLowerCase();
      return cliente.ragioneSociale.toLowerCase().includes(term)
          || pipe.transform(cliente.tipoCliente).includes(term)
          || pipe.transform(cliente.telefono).includes(term);
    });
  }
}
