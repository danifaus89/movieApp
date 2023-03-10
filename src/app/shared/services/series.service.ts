import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import {
  RequestEndpointsMovies,
  RequestEndpointsSeries,
} from '../config/api.constant';
import { CarteleraResponse } from '../models/movies.interface';
import { Serie } from '../models/series.interface';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  public token: any =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjQ5MTNiZWE4YzU4N2ViMGEzNGU1ZTYzMjQwYTQ0ZCIsInN1YiI6IjYyZmI2OTZmMjU4ODIzMDA3YTdjMWFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2kTrlGSgJVgKQ5xIkMvjkhLY2Q1fkCx4rq1WafGimA';
  public apiKey: string = '624913bea8c587eb0a34e5e63240a44d';
  public lang: string = 'es-ES';
  public page: number = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) {}

  //CATEGORIES//
  getPopulars(): Observable<Serie[]> {
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsSeries.POPULAR +
          `?api_key=${this.apiKey}&language=${this.lang}&page=${this.page}`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {})
      );
  }
  getTopRated(): Observable<Serie[]> {
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsSeries.TOPRATED +
          `?api_key=${this.apiKey}&language=${this.lang}&page=${this.page}`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {})
      );
  }
  getOnTheAir(): Observable<Serie[]> {
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsSeries.ONTHEAIR +
          `?api_key=${this.apiKey}&language=${this.lang}&page=${this.page}`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {})
      );
  }
  getOnTheAirTonight(): Observable<Serie[]> {
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsSeries.ONTHEAIRTONIGHT +
          `?api_key=${this.apiKey}&language=${this.lang}&page=${this.page}`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {})
      );
  }
  getRelatedSeries(id: number): Observable<any> {
    this.lang = 'en-US';
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsSeries.RECOMMENDATION +
          `/${id}/recommendations` +
          `?api_key=${this.apiKey}&language=en-US`
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {})
      );
  }
  getReviews(id: number): Observable<any> {
    this.lang = 'en-US';
    return this.http.get(
      RequestEndpointsSeries.REVIEWS +
        `/${id}/reviews` +
        `?api_key=${this.apiKey}&language=${this.lang}`
    );
  }

  //PRIVATES//
  getOficialTrailer(id: number, lang: string): Observable<any> {
    return this.http
      .get<CarteleraResponse>(
        RequestEndpointsSeries.DETAIL +
          `/${id}/videos?api_key=${this.apiKey}&language=${lang}`
      )
      .pipe(map((resp) => resp.results));
  }
  getSerieDetail(id: number): Observable<any> {
    return this.http.get(
      RequestEndpointsSeries.DETAIL +
        `/${id}?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
  getCreditSeries(id: number): Observable<any> {
    return this.http.get(
      RequestEndpointsSeries.CREDITS +
        `/${id}/credits` +
        `?api_key=${this.apiKey}&language=${this.lang}`
    );
  }
}
