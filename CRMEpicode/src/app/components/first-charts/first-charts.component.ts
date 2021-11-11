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
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  SVGRenderer,
  LabelLayout
]);

@Component({
  selector: 'app-first-charts',
  templateUrl: './first-charts.component.html',
  styleUrls: ['./first-charts.component.css']
})
export class FirstChartsComponent implements OnInit {

  readonly echartsExtentions: any[];
  echartsOptions = {};
  tipiCliente: any =this.clientiService.getPercentualiTipiClienti()

  constructor(
    private clientiService: ClientiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
  }


  ngOnInit() {

    setTimeout(() => {
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
          data: ['SRL', 'SPA', 'SAS', 'PA']
        },
        series: [
          {
            data: this.tipiCliente,
            type: 'bar',
            showBackground: true,
          }
        ],

      };
    },1000);

  }

}

