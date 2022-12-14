import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        routerLink: "/players/dashboard"
      },
      {
        label: 'Players',
        routerLink: "/players/players"

      },
      {
        label: 'Physiotherapists',
        routerLink: "/physio/add-physio"
      },
      {
        label: 'Physical tests',
        routerLink: "/tests/add-tests"
      },
      {
        label: 'exercices',
        routerLink: "/training/exercices"
      }
    ];
  }

}
