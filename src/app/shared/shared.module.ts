/*COMPONENTS*/
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselImageComponent } from './components/carousel-image/carousel-image.component';
import { CarouselVideoComponent } from './components/carousel-video/carousel-video.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { TableComponent } from './components/table/table.component';
import { CasouselSerieComponent } from './components/casousel-serie/casousel-serie.component';

/*MODULES*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselImageComponent,
    CarouselVideoComponent,
    CardMovieComponent,
    TableComponent,
    CasouselSerieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    TabMenuModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    CardModule,
    TableModule,
    ProgressSpinnerModule,
    DialogModule,
  ],
  exports: [
    NavbarComponent,
    CarouselImageComponent,
    CarouselVideoComponent,
    CardMovieComponent,
    BrowserAnimationsModule,
    TableComponent,
    BrowserModule,
    MessageModule,
    TabMenuModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    CardModule,
    DialogModule,
    ProgressSpinnerModule,
    CasouselSerieComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
