import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  CategoryObject,
  CategorySeriesObject,
} from 'src/app/shared/models/components.interface';

@Component({
  selector: 'app-series-category',
  templateUrl: './series-category.component.html',
  styleUrls: ['./series-category.component.css'],
})
export class SeriesCategoryComponent {
  catObjectSerie: any;

  constructor(private router: Router) {
    this.initCategory();
  }

  ngOnInit(): void {}

  initCategory() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as { data: CategorySeriesObject };
    this.catObjectSerie = state.data;
    console.log(this.catObjectSerie);
  }
  goToDetail(item: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/series-detail/', item.id]).then(() => {});
    });
  }
}
