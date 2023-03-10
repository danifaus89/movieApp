import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import {
  MovieDetail,
  MovieGenre,
} from 'src/app/shared/models/movies.interface';
import { TableConfig } from 'src/app/shared/models/table.interface';
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
  public castTable: any[] = [];
  public movieTrailer: any[] = [];
  public comments: any[] = [];
  public recommandations: any[] = [];
  public trailerLink: string;
  public trailerExists: boolean;
  public commentsExists: boolean;
  public actorsExists: boolean;
  public displayBasic: boolean;
  public dataR: any[] = [];
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.responsiveOptions = [
      {
        breakpoint: '768px',
        numVisible: 0,
        numScroll: 0,
      },
    ];
    this.initPage();
  }

  initPage() {
    this.loadDetail();
    this.loadTrailers();
    this.loadRecomendations();
    this.getOfficialTrailer();
    this.getCredits();
    this.getComments();
  }

  loadDetail() {
    this.service.getMovieDetail(this.id).subscribe((detail) => {
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
          production_companies: detail.production_companies[0].name,
          production_countries: detail.production_countries[0].iso_3166_1,
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
        console.log(this.movieDetail);
        this.genres = detail.genres;
        this.genres.map((obj) => {
          obj.color =
            this.colors[Math.floor(Math.random() * (6 - 0 + 1)) + 0].name;
          return obj;
        });
      }
    });
  }
  loadTrailers() {
    this.service.getMovieTrailers(this.id).subscribe((data) => {
      this.movieTrailer = data.results;
    });
  }
  loadRecomendations() {
    this.service.getRelatedMovies(this.id).subscribe((rec) => {
      this.dataR = rec.results;
      this.dataR.forEach((x, index) => {
        if (index < 6) {
          this.recommandations.push({
            adult: x.adult,
            backdrop_path: x.backdrop_path,
            genres: x.genres,
            id: x.id,
            original_language: x.original_language,
            original_title: x.original_title,
            overview: x.overview,
            poster_path: this.imgUrl + x.poster_path,
            release_date: x.release_date,
            title: x.title,
            video: x.video,
            vote_average: parseFloat(x.vote_average).toFixed(1),
            vote_count: x.vote_count,
          });
        }
      });
    });
  }
  getOfficialTrailer() {
    this.service.getMovieTrailers(this.id).subscribe((rec) => {
      this.dataR = rec.results;
      this.dataR.forEach((x) => {
        if (x.name.includes('oficial') || x.name.includes('Oficial')) {
          this.trailerExists = true;
          this.trailerLink = x.key;
        } else {
          this.trailerExists = false;
        }
      });
    });
  }
  getCredits() {
    this.service.getCreditMovies(this.id).subscribe((data) => {
      if (data.cast) {
        this.actorsExists = true;
        this.castTable = data.cast;
        this.castTable.forEach((x) => {
          x.profile_path = this.imgUrl + x.profile_path;
        });
      } else {
        this.actorsExists = false;
      }
    });
  }
  getComments() {
    this.service.getReviews(this.id).subscribe((data) => {
      if (data.results.length > 0) {
        this.commentsExists = true;
        this.comments = data.results;
        this.comments.forEach((x) => {
          if (x.author_details.avatar_path.length >= 68) {
            x.author_details.avatar_path =
              x.author_details.avatar_path.substring(1);
            x.author_details.avatar_path =
              x.author_details.avatar_path.substring(1);
          } else {
            x.author_details.avatar_path =
              'https://www.gravatar.com/avatar' + x.author_details.avatar_path;
          }
        });
      } else {
        this.commentsExists = false;
      }
    });
  }

  //PRIVATE//
  goToSeeMore(item: any) {
    //recarrega la mateixa pagina
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/movie-detail/', item.id]).then(() => {});
    });
  }
  goToTrailer() {
    if (this.trailerExists)
      window.open('https://www.youtube.com/watch?v=' + this.trailerLink);
  }
  goToRelatedMovies() {
    console.log('hola');
  }
  showCast() {
    this.displayBasic = true;
  }
}
