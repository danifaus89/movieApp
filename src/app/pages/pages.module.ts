// Modulos
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SeriesComponent } from './series/series/series.component';
import { MovieCategoryComponent } from './movies/movie-category/movie-category.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { SeriesCategoryComponent } from './series/series-category/series-category.component';

@NgModule({
  declarations: [
    HomeComponent,
    NopagefoundComponent,
    MoviesComponent,
    MovieDetailComponent,
    SeriesComponent,
    PagesComponent,
    MovieCategoryComponent,
    SerieDetailComponent,
    SeriesCategoryComponent,
  ],
  exports: [PagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
  ],
})
export class PagesModule {}
