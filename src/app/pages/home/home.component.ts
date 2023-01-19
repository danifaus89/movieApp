import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/shared/models/components.interface';
import { Movie, MovieGenre } from 'src/app/shared/models/movies.interface';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public carouselTitles: Title[];
  public actualMovies: Movie[];
  public topRatedMovies: Movie[];
  public horrorMovies: Movie[];
  public latestMovies: Movie[];
  public movieGenre: MovieGenre[];
  public popularOptions: any;
  public imgUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor(private service: MoviesService) {}

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
    this.carouselTitles = [
      {
        id: 1,
        name: 'Películas actuales',
      },
      {
        id: 2,
        name: 'Mejor valoradas',
      },
      {
        id: 3,
        name: 'Películas de terror',
      },
    ];
  }

  initCarousels() {
    this.getActuals();
    this.getTopRated();
    this.getMoviesByGenre();
  }

  getActuals() {
    /*ACTUALES*/
    this.service.getPopulars().subscribe((movie) => {
      if (movie) {
        this.actualMovies = movie.results;
        this.actualMovies.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
      }
    });
  }

  getTopRated() {
    /*TOPRATED*/
    this.service.getTopRated().subscribe((movie) => {
      if (movie) {
        this.topRatedMovies = movie.results;
        this.topRatedMovies.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
      }
    });
  }

  getMoviesByGenre() {
    /*get id's genres*/
    return this.service.getMovieGenres().subscribe((data) => {
      this.movieGenre = data.genres;
      /*get horror movies*/
      let horrorID = this.movieGenre[10].id;
      this.service.getHorrorMovies(horrorID).subscribe((movie) => {
        if (movie) {
          this.horrorMovies = movie.results;
          this.horrorMovies.map((data) => {
            data.poster_path = this.imgUrl + data.poster_path;
          });
        }
      });
    });
  }
}
