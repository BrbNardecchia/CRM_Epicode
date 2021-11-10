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
import { TerritorioComponent } from './components/territorio/territorio.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    component: CrmHomeComponent
  },
  { 
    path:'',
    pathMatch: 'full', 
    redirectTo: 'dashboard'
  },
  {
    path: 'clienti', 
    component: ClientiComponent
  },  
  {
    path: 'clienti/:id/details', 
    component: ClientiDetailsComponent
  },
  {
    path: 'addcliente', 
    component: ClientFormComponent
  },
  {
    path: 'addcliente/:id/edit', 
    component: ClientFormComponent
  },
  {
    path: 'addfattura', 
    component: FattureFormComponent
  },  
  {
    path: 'addfattura/:id/edit', 
    component: FattureFormComponent
  },
  {
    path: 'contabilita/:id/detailsbyclient', 
    component: FattureClienteComponent
  },
  {
    path: 'addcomprov', 
    component: TerritoriFormComponent
  },
  {
    path: 'contabilita', 
    component: FattureComponent
  },
  {
    path: 'territorio', 
    component: TerritorioComponent
  },
  {
    path: 'addcliente/addcomprov', 
    component: TerritoriFormComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
