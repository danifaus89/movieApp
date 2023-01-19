export class MovieGenre {
  id: number;
  name: string;
  color: string;
}

export class Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: genre_id_Array[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export class MovieDetail {
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
