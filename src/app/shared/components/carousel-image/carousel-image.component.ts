import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movies.interface';
import { SerieDetail } from '../../models/series.interface';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss'],
})
export class CarouselImageComponent implements OnInit {
  @Input() elements: Movie[];

  @Input() responsiveOptions: any;
  @Input() interval: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  goToDetail(movie: Movie) {
    if (this.activatedRoute.snapshot.routeConfig?.path == 'movies') {
      this.router.navigate(['movie-detail/' + movie.id]);
    } else {
      this.router.navigate(['series-detail/' + movie.id]);
    }
  }
}
