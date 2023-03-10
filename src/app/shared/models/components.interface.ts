import { Movie } from './movies.interface';
import { SerieDetail } from './series.interface';

export class CategoryObject {
  id: number;
  category_name_trans: string;
  original_category_name: string;
  movies: Movie[];
}

export class CategorySeriesObject {
  id: number;
  category_name_trans: string;
  original_category_name: string;
  series: SerieDetail[];
}
