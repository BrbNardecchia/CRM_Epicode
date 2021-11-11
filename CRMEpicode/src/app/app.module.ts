import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyHttpInterceptorInterceptor } from './my-http-interceptor.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CrmHomeComponent } from './components/crm-home/crm-home.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { LoginComponent } from './components/login/login.component';
import { ClientiComponent } from './components/clienti/clienti.component';
import { TablesClientComponent } from './components/tables-client/tables-client.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { FattureFormComponent } from './components/fatture-form/fatture-form.component';
import { TerritoriFormComponent } from './components/territori-form/territori-form.component';
import { FatturefilterPipe } from './pipes/fatturefilter.pipe';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { FirstChartsComponent } from './components/first-charts/first-charts.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ClientiDetailsComponent } from './components/clienti-details/clienti-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FattureClienteComponent } from './components/fatture-cliente/fatture-cliente.component';
import {MatSelectModule} from '@angular/material/select';
import { EchartsxModule } from 'echarts-for-angular';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    CrmHomeComponent,
    FattureComponent,
    LoginComponent,
    ClientiComponent,
    TablesClientComponent,
    TopNavComponent,
    ClientFormComponent,
    FattureFormComponent,
    TerritoriFormComponent,
    FatturefilterPipe,
    FirstChartsComponent,
    SidebarNavComponent,
    ClientiDetailsComponent,
    FattureClienteComponent,
    CardsComponent
  ],
  imports: [
    EchartsxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatNativeDateModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
