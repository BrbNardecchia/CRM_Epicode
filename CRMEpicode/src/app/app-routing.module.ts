import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientiDetailsComponent } from './components/clienti-details/clienti-details.component';
import { ClientiComponent } from './components/clienti/clienti.component';
import { CrmHomeComponent } from './components/crm-home/crm-home.component';
import { FattureClienteComponent } from './components/fatture-cliente/fatture-cliente.component';
import { FattureFormComponent } from './components/fatture-form/fatture-form.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { LoginComponent } from './components/login/login.component';
import { TerritoriFormComponent } from './components/territori-form/territori-form.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  { 
    path:'',
    pathMatch: 'full', 
    redirectTo: 'login'
  },
  {
    path: 'dashboard', 
    component: CrmHomeComponent,
    canActivate: [RouteGuardService]
  },

  {
    path: 'clienti', 
    component: ClientiComponent,
    canActivate: [RouteGuardService]
  },  
  {
    path: 'clienti/:id/details', 
    component: ClientiDetailsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'addcliente', 
    component: ClientFormComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'addcliente/:id/edit', 
    component: ClientFormComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'addfattura', 
    component: FattureFormComponent,
    canActivate: [RouteGuardService]
  },  
  {
    path: 'addfattura/:id/edit', 
    component: FattureFormComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'contabilita/:id/detailsbyclient', 
    component: FattureClienteComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'addcomprov', 
    component: TerritoriFormComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'contabilita', 
    component: FattureComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'addcliente/addcomprov', 
    component: TerritoriFormComponent,
    canActivate: [RouteGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
