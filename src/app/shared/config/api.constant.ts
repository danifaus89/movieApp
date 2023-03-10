import { environment } from 'src/environments/environment';

export class RequestEndpointsMovies {
  static POPULAR = environment.API_URL + '/3/movie/popular';
  static LATEST = environment.API_URL + '/3/movie/latest';
  static TOPRATED = environment.API_URL + '/3/movie/top_rated';
  static DETAIL = environment.API_URL + '/3/movie/';
  static RECOMMENDATION = environment.API_URL + '/3/movie/';
  static CREDITS = environment.API_URL + '/3/movie/';
  static REVIEWS = environment.API_URL + '/3/movie';
  static UPCOMING = environment.API_URL + '/3/movie/upcoming';
}

export class RequestEndpointsDiscover {
  static DISCOVER = environment.API_URL + '/3/discover/movie';
}
export class RequestEndpointsGenre {
  static DISCOVER = environment.API_URL + '/3/genre/movie/list';
}

export class RequestEndpointsSeries {
  static POPULAR = environment.API_URL + '/3/tv/popular';
  static TOPRATED = environment.API_URL + '/3/tv/top_rated';
  static ONTHEAIR = environment.API_URL + '/3/tv/on_the_air';
  static ONTHEAIRTONIGHT = environment.API_URL + '/3/tv/airing_today';
  static LATEST = environment.API_URL + '/3/tv/latest';
  static DETAIL = environment.API_URL + '/3/tv/';
  static CREDITS = environment.API_URL + '/3/tv/';
  static RECOMMENDATION = environment.API_URL + '/3/tv/';
  static REVIEWS = environment.API_URL + '/3/tv/';
}
