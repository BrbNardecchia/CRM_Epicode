import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardService } from 'src/app/services/route-guard.service';


@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  constructor(    
    private router: Router,
    private guard : RouteGuardService) { }

  ngOnInit(): void {
  }

  logOut(){
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
      this.guard.setLogin();
  }
}
