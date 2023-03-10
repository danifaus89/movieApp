import { Component, OnInit } from '@angular/core';
import { Movie, MovieGenre } from 'src/app/shared/models/movies.interface';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Router } from '@angular/router';
import { CategoryObject } from 'src/app/shared/models/components.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public carouselObject: CategoryObject[];
  public actualMovies: Movie[];
  public topRatedMovies: Movie[];
  public horrorMovies: Movie[];
  public latestMovies: Movie[];
  public upcomingMovies: Movie[];
  public movieGenre: MovieGenre[];
  public dataR: any[] = [];

  public popularOptions: any;
  public imgUrl: string = 'https://image.tmdb.org/t/p/original';
  public isLoading: boolean = true;
  public loadingUpcoming: boolean = true;
  public loadingActuals: boolean = true;
  public loadingTop: boolean = true;
  public loadingHorror: boolean = true;

  constructor(private service: MoviesService, private router: Router) {}

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
    this.getUpcoming();
    this.getActuals();
    this.getTopRated();
    this.getMoviesByGenre();
    this.carouselObject = [
      {
        id: 1,
        category_name_trans: 'Películas actuales',
        original_category_name: 'actuals',
        movies: this.actualMovies,
      },
      {
        id: 2,
        category_name_trans: 'Mejor valoradas',
        original_category_name: 'topRated',
        movies: this.topRatedMovies,
      },
      {
        id: 3,
        category_name_trans: 'Películas de terror',
        original_category_name: 'horror',
        movies: this.horrorMovies,
      },
      {
        id: 4,
        category_name_trans: 'Próximamente',
        original_category_name: 'upComing',
        movies: this.upcomingMovies,
      },
    ];
  }

  getActuals() {
    this.service.getPopulars().subscribe((movie) => {
      if (movie) {
        this.actualMovies = movie;
        this.actualMovies.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
        this.carouselObject[0].movies = this.actualMovies;
        if (this.actualMovies.length == movie.length) {
          this.loadingActuals = false;
        }
      }
    });
  }
  getTopRated() {
    /*TOPRATED*/
    this.service.getTopRated().subscribe((movie) => {
      if (movie) {
        this.topRatedMovies = movie;
        this.topRatedMovies.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
        this.carouselObject[1].movies = this.topRatedMovies;

        if (this.topRatedMovies.length == movie.length) {
          this.loadingTop = false;
        }
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
          this.horrorMovies = movie;
          this.horrorMovies.map((data) => {
            data.poster_path = this.imgUrl + data.poster_path;
          });
          this.carouselObject[2].movies = this.horrorMovies;
          if (this.horrorMovies.length == movie.length) {
            this.loadingHorror = false;
          }
        }
      });
    });
  }
  getUpcoming() {
    this.service.getUpcoming().subscribe((movie) => {
      if (movie) {
        this.upcomingMovies = movie;
        this.upcomingMovies.map((data) => {
          data.backdrop_path = this.imgUrl + data.backdrop_path;
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = data.vote_average;
        });
        this.carouselObject[3].movies = this.upcomingMovies;
        if (this.upcomingMovies.length == movie.length) {
          this.loadingUpcoming = false;
        }
      }
    });
  }

  //PRIVATE
  goToSeeMore(item: any) {
    //this.router.navigate(['movies/category/', item.original_category_name]);
    this.router.navigate(['movies/category/', item.original_category_name], {
      state: { data: item },
    });
  }
}
