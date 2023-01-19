import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movies.interface';

@Component({
  selector: 'app-carousel-video',
  templateUrl: './carousel-video.component.html',
  styleUrls: ['./carousel-video.component.css'],
})
export class CarouselVideoComponent implements OnInit {
  @Input() responsiveOptions: any;
  @Input() interval: number;
  @Input() elements: any = {};
  @Input() videos: any[];

  constructor() {}

  ngOnInit(): void {}

  goToYoutube(element: any) {
    console.log(element);
  }
}
