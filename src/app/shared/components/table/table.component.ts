import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() elements: any;

  constructor() {}

  ngOnInit(): void {}

  searchArtist(element: any) {
    window.open('https://es.wikipedia.org/wiki/' + element.original_name);
  }
}
