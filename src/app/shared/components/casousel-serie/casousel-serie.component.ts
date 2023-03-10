import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movies.interface';
import { SerieDetail } from '../../models/series.interface';

@Component({
  selector: 'app-casousel-serie',
  templateUrl: './casousel-serie.component.html',
  styleUrls: ['./casousel-serie.component.css'],
})
export class CasouselSerieComponent {
  @Input() elements: any[];

  @Input() responsiveOptions: any;
  @Input() interval: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  goToDetail(movie: Movie) {
    console.log(movie);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/series-detail/', movie.id]).then(() => {});
    });
  }
}
