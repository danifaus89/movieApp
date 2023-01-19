import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  RequestEndpointsMovies,
  RequestEndpointsDiscover,
  RequestEndpointsGenre,
} from '../config/api.constant';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public token: any =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjQ5MTNiZWE4YzU4N2ViMGEzNGU1ZTYzMjQwYTQ0ZCIsInN1YiI6IjYyZmI2OTZmMjU4ODIzMDA3YTdjMWFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2kTrlGSgJVgKQ5xIkMvjkhLY2Q1fkCx4rq1WafGimA';
  public apiKey: string = '624913bea8c587eb0a34e5e63240a44d';
  public lang: string = 'es-ES';
  public page: number = 1;
  constructor(private http: HttpClient) {}

  getMovieGenres(): Observable<any> {
    return this.http.get(
      RequestEndpointsGenre.DISCOVER +
        `?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
  getPopulars(): Observable<any> {
    return this.http.get(
      RequestEndpointsMovies.POPULAR +
        `?api_key=${this.apiKey}&language=${this.lang}&page=${this.page}`
    );
  }
  getLatest(): Observable<any> {
    return this.http.get(
      RequestEndpointsMovies.LATEST +
        `?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
  getTopRated(): Observable<any> {
    return this.http.get(
      RequestEndpointsMovies.TOPRATED +
        `?api_key=${this.apiKey}&language=${this.lang}&page=${this.page}`
    );
  }
  getHorrorMovies(horrorID: number): Observable<any> {
    return this.http.get(
      RequestEndpointsDiscover.DISCOVER +
        `?api_key=${this.apiKey}&language=${this.lang}&sort_by=popularity.desc&include_adult=true&page=1&with_genres=${horrorID}&page=${this.page}`
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
}
