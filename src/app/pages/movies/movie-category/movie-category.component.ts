import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryObject } from 'src/app/shared/models/components.interface';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css'],
})
export class MovieCategoryComponent {
  catObjectMovie: CategoryObject;

  constructor(private router: Router) {
    this.initCategory();
  }

  ngOnInit(): void {}

  initCategory() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as { data: CategoryObject };
    this.catObjectMovie = state.data;
    console.log(this.catObjectMovie);
  }

  goToSeeMore(item: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/movie-detail/', item.id]).then(() => {});
    });
  }
}
