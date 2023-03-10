import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryObject } from 'src/app/shared/models/components.interface';
import { Serie } from 'src/app/shared/models/series.interface';
import { SeriesService } from 'src/app/shared/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  public carouselObject: any[];
  public popularOptions: any;

  public imgUrl: string = 'https://image.tmdb.org/t/p/original';

  public popular: Serie[];
  public topRated: Serie[];
  public onTheAir: Serie[];
  public onTheAirTonight: Serie[];
  public latest: Serie[];

  constructor(private service: SeriesService, private router: Router) {}

  ngOnInit(): void {
    this.initConfig();
    this.initCarousels();
  }

  initConfig() {
    this.popularOptions = [
      {
        breakpoint: '768px',
        numVisible: 0,
        numScroll: 0,
      },
    ];
  }
  initCarousels() {
    this.getPopular();
    this.getTopRated();
    this.getOnTheAir();
    this.getOnTheAirTonight();
    this.carouselObject = [
      {
        id: 1,
        category_name_trans: 'Mejor Valoradas',
        original_category_name: 'topRated',
        movies: this.topRated,
      },
      {
        id: 2,
        category_name_trans: 'Más Populares',
        original_category_name: 'popular',
        movies: this.popular,
      },
      {
        id: 3,
        category_name_trans: 'Actualmente en emisión',
        original_category_name: 'onTheAir',
        movies: this.onTheAir,
      },
      {
        id: 4,
        category_name_trans: 'Para esta noche',
        original_category_name: 'onTheAirTonight',
        movies: this.onTheAirTonight,
      },
    ];
  }

  //APIS//
  getTopRated() {
    this.service.getTopRated().subscribe((serie) => {
      if (serie) {
        this.topRated = serie;
        this.topRated.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
        this.carouselObject[0].movies = this.topRated;
      }
    });
  }
  getPopular() {
    this.service.getPopulars().subscribe((serie) => {
      if (serie) {
        this.popular = serie;
        this.popular.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
        this.carouselObject[1].movies = this.popular;
      }
    });
  }
  getOnTheAir() {
    this.service.getOnTheAir().subscribe((serie) => {
      if (serie) {
        this.onTheAir = serie;
        this.onTheAir.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
        this.carouselObject[2].movies = this.onTheAir;
        if (this.onTheAir.length == serie.length) {
        }
      }
    });
  }
  getOnTheAirTonight() {
    this.service.getOnTheAirTonight().subscribe((serie) => {
      if (serie) {
        this.onTheAirTonight = serie;
        this.onTheAirTonight.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
        this.carouselObject[3].movies = this.onTheAirTonight;
        if (this.onTheAirTonight.length == serie.length) {
        }
      }
    });
  }

  //PRIVATE
  goToSeeMore(item: any) {
    this.router.navigate(['series/category/', item.original_category_name], {
      state: { data: item },
    });
  }
}
