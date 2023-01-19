/*COMPONENTS*/
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselImageComponent } from './components/carousel-image/carousel-image.component';
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
import { CarouselVideoComponent } from './components/carousel-video/carousel-video.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselImageComponent,
    CarouselVideoComponent,
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
  ],
  exports: [
    NavbarComponent,
    CarouselImageComponent,
    CarouselVideoComponent,
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
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
