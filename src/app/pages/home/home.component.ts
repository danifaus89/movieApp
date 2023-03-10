import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  activeItem: any;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Movies', routerLink: 'movies' },
      { label: 'Series', routerLink: 'series' },
    ];
    this.activeItem = this.items[0];
  }
}
