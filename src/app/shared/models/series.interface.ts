export interface Serie {
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
export interface SerieDetail {
  adult?: boolean;
  backdrop_path?: string;
  created_by: Created_by[];
  episode_run_time: number[];
  first_air_date: string;
  genres: GenreOfSeries[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Last_episode_to_air[];
  name: string;
  networks: Networks[];
  next_episode_to_air: Next_episode_to_air[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  production_countries: Production_countries[];
  seasons: Seasons[];
  spoken_languages: Spoken_languages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: string;
  vote_count: number;
}
interface Genre_id_Array {
  id: number;
}
interface Belongs_to_collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface Production_countries {
  iso_3166_1: string;
  name: string;
}
interface Spoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface Created_by {
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
}
interface Last_episode_to_air {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: 1;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}
interface Networks {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface Next_episode_to_air {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}
export interface Seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
export interface SerieGenre {
  id: number;
  name: string;
  color: string;
}
export interface Genre {
  genres: GenreOfSeries[];
}
export interface GenreOfSeries {
  id: number;
  name: string;
}
export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
