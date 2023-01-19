import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] },
      { label: 'Movies', icon: 'pi pi-fw pi-calendar', routerLink: ['movies'] },
      { label: 'Series', icon: 'pi pi-fw pi-pencil', routerLink: ['series'] },
    ];
    this.activeItem = this.items[0];
  }
}
