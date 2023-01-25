/*COMPONENTS*/
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselImageComponent } from './components/carousel-image/carousel-image.component';
import { CarouselVideoComponent } from './components/carousel-video/carousel-video.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

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
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselImageComponent,
    CarouselVideoComponent,
    CardMovieComponent,
    TableComponent,
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
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
