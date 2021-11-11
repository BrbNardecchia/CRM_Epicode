import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IFatture } from 'src/app/interfaces/ifatture';
import { FattureService } from 'src/app/services/fatture.service';

 

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css'],
})
export class FattureComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  dataFatture :number[] = [];
  fatture :IFatture[] = [];
  searchFattura: number = 0 ;

  constructor(
    private fattureService: FattureService
    ) {
  }


  ngOnInit(): void {
    // this.fattureService.getAllFatture().subscribe(resp=> {
    //   this.fatture = resp.content;
    //   console.log(this.fatture);});
  }

}
