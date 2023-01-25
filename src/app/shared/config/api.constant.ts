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
