import { Component, OnInit } from '@angular/core';
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import * as echarts from 'echarts/core';
import {
  TitleComponent
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti.service';


echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  SVGRenderer,
  LabelLayout
]);
@Component({
  selector: 'app-fatturato-echarts',
  templateUrl: './fatturato-echarts.component.html',
  styleUrls: ['./fatturato-echarts.component.css']
})
export class FatturatoEchartsComponent implements OnInit {
  readonly echartsExtentions: any[];
  echartsOptions = {};
  tipiCliente: string[] = [];
  constructor(
    private clientiService: ClientiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
  }



  ngOnInit() {
    this.clientiService.getTipiCliente().subscribe(resp => {
      this.tipiCliente = resp;
      this.echartsOptions = {
        textStyle: {
          color: '#f7f8fa',
          fontStyle: 'italic',
          fontSize: 20
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          inactiveColor: '#b60163',
          textStyle: {
            color: 'white'
          },
          orient: 'vertical',
          left: 'left'
        },  
        xAxis: {
          type: 'value'
        },
        yAxis: {
          
          type: 'category',
          data: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            data: [150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
          }
        ],

      };
    });

  }
}
