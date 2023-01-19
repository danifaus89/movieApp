import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movies.interface';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss'],
})
export class CarouselImageComponent implements OnInit {
  @Input() elements: Movie[];
  @Input() responsiveOptions: any;
  @Input() interval: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetail(movie: Movie) {
    this.router.navigate(['movie-detail/' + movie.id]);
  }
}
