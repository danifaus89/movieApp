import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize, map, of, tap } from 'rxjs';

import {
  RequestEndpointsMovies,
  RequestEndpointsDiscover,
  RequestEndpointsGenre,
} from '../config/api.constant';
import {
  CarteleraResponse,
  Genre,
  Movie,
  MovieDetail,
} from '../models/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public token: any =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjQ5MTNiZWE4YzU4N2ViMGEzNGU1ZTYzMjQwYTQ0ZCIsInN1YiI6IjYyZmI2OTZmMjU4ODIzMDA3YTdjMWFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2kTrlGSgJVgKQ5xIkMvjkhLY2Q1fkCx4rq1WafGimA';
  public apiKey: string = '624913bea8c587eb0a34e5e63240a44d';
  public lang: string = 'es-ES';
  public page: number = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) {}

  getMovieGenres(): Observable<any> {
    return this.http.get<Genre>(
      RequestEndpointsGenre.DISCOVER +
        `?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
  getUpcoming(): Observable<Movie[]> {
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsMovies.UPCOMING +
          `?api_key=${this.apiKey}&language=${this.lang}`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {})
      );
  }
  getPopulars(): Observable<Movie[]> {
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsMovies.POPULAR +
          `?api_key=${this.apiKey}&language=${this.lang}&page=${this.page}`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {})
      );
  }
  getLatest(): Observable<MovieDetail> {
    return this.http
      .get(
        RequestEndpointsMovies.LATEST +
          `?api_key=${this.apiKey}&language=${this.lang}`
      )
      .pipe(map((resp) => resp));
  }
  getTopRated(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }
    this.loading = true;

    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsMovies.TOPRATED +
          `?api_key=${this.apiKey}&language=${this.lang}&page=${this.page}`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.loading = false;
        })
      );
  }
  getHorrorMovies(horrorID: number): Observable<any> {
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsDiscover.DISCOVER +
          `?api_key=${this.apiKey}&language=${this.lang}&sort_by=popularity.desc&include_adult=true&page=1&with_genres=${horrorID}&page=${this.page}`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {})
      );
  }
  getMovieDetail(id: number): Observable<any> {
    return this.http.get(
      RequestEndpointsMovies.DETAIL +
        `/${id}?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
  getMovieTrailers(id: number): Observable<any> {
    return this.http.get(
      RequestEndpointsMovies.DETAIL +
        `/${id}/videos?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
  getRelatedMovies(id: number): Observable<any> {
    return this.http.get(
      RequestEndpointsMovies.RECOMMENDATION +
        `/${id}/recommendations` +
        `?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
  getCreditMovies(id: number): Observable<any> {
    return this.http.get(
      RequestEndpointsMovies.CREDITS +
        `/${id}/credits` +
        `?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
  getReviews(id: number): Observable<any> {
    this.lang = 'en-US';
    return this.http.get(
      RequestEndpointsMovies.REVIEWS +
        `/${id}/reviews` +
        `?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
}
