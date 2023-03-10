import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { SeriesComponent } from './series/series/series.component';
import { MovieCategoryComponent } from './movies/movie-category/movie-category.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { SeriesCategoryComponent } from './series/series-category/series-category.component';

const childRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/category/:id', component: MovieCategoryComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },

  { path: 'series', component: SeriesComponent },
  { path: 'series-detail/:id', component: SerieDetailComponent },
  { path: 'series/category/:id', component: SeriesCategoryComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
