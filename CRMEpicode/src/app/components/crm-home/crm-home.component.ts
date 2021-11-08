import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-crm-home',
  templateUrl: './crm-home.component.html',
  styleUrls: ['./crm-home.component.css']
})
export class CrmHomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { imageName:'https://picsum.photos/500/300?random', title: 'Clienti', cols: 2, rows: 1 },
          { imageName:'https://picsum.photos/500/300?random', title: 'Card 2', cols: 2, rows: 1 },
          { imageName:'https://picsum.photos/500/300?random', title: 'Card 3', cols: 2, rows: 1 },
          { imageName:'https://picsum.photos/500/300?random', title: 'Card 4', cols: 2, rows: 1 }
        ];
      }

      return [
        { imageName:'https://picsum.photos/500/300?random', title: 'Clienti', cols: 2, rows: 1 },
        { imageName:'https://picsum.photos/500/300?random', title: 'Card 2', cols: 1, rows: 1 },
        { imageName:'https://picsum.photos/500/300?random', title: 'Card 3', cols: 1, rows: 1 },
        { imageName:'https://picsum.photos/500/300?random', title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  getImage(imageName: string): string {
    return 'url(' + imageName + ')';
  }
}
