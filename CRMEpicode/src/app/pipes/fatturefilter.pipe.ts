import { Pipe, PipeTransform } from '@angular/core';
import { IFatture } from '../interfaces/ifatture';

@Pipe({
  name: 'fatturefilter'
})
export class FatturefilterPipe implements PipeTransform {

  transform(fatture: IFatture[], searchValue: number): IFatture[] {
    if(!fatture || !searchValue) {
      return fatture;
    }
    return fatture.filter(fattura =>
      fattura.anno == searchValue)
  }
}
