export interface CarteleraResponse {
  results: Movie[];
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface MovieGenre {
  id: number;
  name: string;
  color: string;
}

export interface Genre {
  genres: GenreOfMovies[];
}
export interface GenreOfMovies {
  id: number;
  name: string;
}

export interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: OriginalLanguage;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: any;
  overview: string;
  release_date: string;
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Ko = 'ko',
}

export interface MovieDetail {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: belongs_to_collection[];
  budget?: number;
  genres?: MovieGenre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: production_companies[];
  production_countries?: production_countries[];
  release_date?: string;
  revenue?: string;
  runtime?: string;
  spoken_languages?: spoken_languaje[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: string;
  vote_count?: number;
}

interface genre_id_Array {
  id: number;
}
interface belongs_to_collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface production_countries {
  iso_3166_1: string;
  name: string;
}
interface spoken_languaje {
  english_name: string;
  iso_639_1: string;
  name: string;
}
