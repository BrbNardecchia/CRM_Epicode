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
  selector: 'app-first-charts',
  templateUrl: './first-charts.component.html',
  styleUrls: ['./first-charts.component.css']
})
export class FirstChartsComponent implements OnInit {
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
        series: [
          {
            label: {
              color: 'white',
            },
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [70, 130],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 735, name: this.tipiCliente[0] },
              { value: 735, name: this.tipiCliente[1] },
              { value: 580, name: this.tipiCliente[2] },
              { value: 484, name: this.tipiCliente[3] },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              }
            },
          }
        ],

      };
    });

  }
}

