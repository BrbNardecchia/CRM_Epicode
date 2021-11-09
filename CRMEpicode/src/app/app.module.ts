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
import { TerritorioComponent } from './components/territorio/territorio.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClientiComponent } from './components/clienti/clienti.component';
import { TablesClientComponent } from './components/tables-client/tables-client.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { FattureFormComponent } from './components/fatture-form/fatture-form.component';
import { TerritoriFormComponent } from './components/territori-form/territori-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CrmHomeComponent,
    FattureComponent,
    TerritorioComponent,
    LoginComponent,
    ClientiComponent,
    TablesClientComponent,
    TopNavComponent,
    ClientFormComponent,
    FattureFormComponent,
    TerritoriFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
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
