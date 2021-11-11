import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IFatture } from 'src/app/interfaces/ifatture';
import { FattureService } from 'src/app/services/fatture.service';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

 

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css'],
})
export class FattureComponent implements OnInit {

  //datapicker
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  //between value
  maxValue = 0
  minValue = 0
  commento1 = '';
  commento2 = '';

  dataFatture :number[] = [];

  fatture_perData :IFatture[] = [];
  fatture_perValore :IFatture[] = [];
  fatture_find :IFatture[] = [];
  fatture :IFatture[] = [];

  searchFattura: number = 0 ;

  constructor(
    private fattureService: FattureService,
    private calendar: NgbCalendar, 
    public formatter: NgbDateParserFormatter
    ) {
      this.fromDate = calendar.getToday();
      this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }


  ngOnInit(): void {
    this.commento1 = '';
    this.commento2 = '';
  }

  clearFatture1(){
    this.fatture_perData = [];
    this.commento1 = '';
  }

  clearFatture2(){
    this.fatture_perValore = []
    this.commento2 = '';
    this.maxValue = 0
    this.minValue = 0
  }

  getFattureByValues(){
    this.fattureService.getFatturaByIdImpBet(this.minValue,this.maxValue).subscribe(resp => {
      console.log(resp.content);
      this.fatture_perValore = resp.content;
      if(this.fatture_perValore.length == 0){
        this.commento2 ='Non ci sono fatture per questo range di valori';
    }})
  }

  getFattureByRangeDate(){
    if(this.fromDate && this.toDate){  
      let data1 = this.changeFormatwithdot(this.fromDate.year,this.fromDate.month,this.fromDate.day)
      let data2 = this.changeFormatwithdot(this.toDate.year,this.toDate.month,this.toDate.day)
      this.fattureService.getFatturaByDataBet(data1,data2).subscribe(resp => {
        this.fatture_perData = resp.content;
        if(this.fatture_perData.length == 0){
          this.commento1 = 'Non ci sono fatture fra queste due date'
        }})
    }

  }

  changeFormatwithdot(anno: number, mese: number, giorno: number): string {
    let day = giorno.toString()
    let month = mese.toString()
    let year = anno.toString()
    if (giorno <= 9) {
      day = '0' + day
    }
    if (mese <= 9) {
      month = '0' + month
    }
    return day+ '.' + month + '.' + year
  }


  //datapicker

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  deleteFattura(fattura: IFatture) {
    if (fattura.id) {
      this.fattureService.deleteFatture(fattura.id).subscribe(resp => {
        console.log(resp);
        this.getFattureByRangeDate()
      })
    }
  }
}
