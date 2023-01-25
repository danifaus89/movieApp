import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent {
  @Input() items: any[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.items);
  }
}
