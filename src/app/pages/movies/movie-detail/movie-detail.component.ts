import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import {
  MovieDetail,
  MovieGenre,
} from 'src/app/shared/models/movies.interface';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  public imgUrl: string = 'https://image.tmdb.org/t/p/original';
  public img: string;
  public movieDetail: MovieDetail[] = [];
  public movieTrailer: any[] = [];
  public genres: any[];
  public colors = [
    { name: 'primary' },
    { name: 'secondary' },
    { name: 'success' },
    { name: 'danger' },
    { name: 'warning' },
    { name: 'info' },
    { name: 'dark' },
  ];

  public title: string;
  public responsiveOptions: any;
  public interval: number;
  public id: number;

  constructor(
    private service: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '768px',
        numVisible: 0,
        numScroll: 0,
      },
    ];
    this.loadDetail();
  }

  loadDetail() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getMovieDetail(this.id).subscribe((detail) => {
      console.log(detail);
      if (detail) {
        this.movieDetail.push({
          adult: detail.adult,
          backdrop_path: detail.backdrop_path,
          belongs_to_collection: detail.belongs_to_collection,
          budget: detail.budget,
          genres: detail.genres,
          homepage: detail.homepage,
          id: detail.id,
          imdb_id: detail.imdb_id,
          original_language: detail.original_language,
          original_title: detail.original_title,
          overview: detail.overview,
          popularity: detail.popularity,
          poster_path: this.imgUrl + detail.poster_path,
          production_companies: detail.production_companies,
          production_countries: detail.production_countries,
          release_date: detail.release_date,
          revenue: detail.revenue,
          runtime: detail.runtime,
          spoken_languages: detail.spoken_languages,
          status: detail.status,
          tagline: detail.tagline,
          title: detail.title,
          video: detail.video,
          vote_average: parseFloat(detail.vote_average).toFixed(1),
          vote_count: detail.vote_count,
        });
        this.genres = detail.genres;
        this.genres.map((obj) => {
          obj.color =
            this.colors[Math.floor(Math.random() * (6 - 0 + 1)) + 0].name;
          return obj;
        });
      }
    });
    this.service.getMovieTrailers(this.id).subscribe((data) => {
      this.movieTrailer = data.results;
      console.log(this.movieTrailer);
    });
  }
}
