import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiBootstrapComponent } from '././components/clienti-bootstrap/clienti-bootstrap.component';
import { CrmHomeComponent } from './components/crm-home/crm-home.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { LoginComponent } from './components/login/login.component';
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
    component: ClientiBootstrapComponent
  },
  {
    path: 'contabilità', 
    component: FattureComponent
  },
  {
    path: 'territorio', 
    component: TerritorioComponent
  }
  ,
  {
    path: 'account', 
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
