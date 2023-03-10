import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Serie,
  SerieDetail,
  Video,
} from 'src/app/shared/models/series.interface';
import { SeriesService } from '../../../shared/services/series.service';
import { Seasons } from '../../../shared/models/series.interface';
import {
  CategoryObject,
  CategorySeriesObject,
} from 'src/app/shared/models/components.interface';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css'],
})
export class SerieDetailComponent {
  public carouselObject: CategoryObject[];
  public popularOptions: any;
  public imgUrl: string = 'https://image.tmdb.org/t/p/original';
  public id: number;
  public serieDetail: SerieDetail[] = [];
  public genres: any[];
  public nextEpisodes: any[];
  public seasons: Seasons[];
  public offTrailer: Video[] = [];
  public dataR: Serie[];
  public showButton: boolean = false;
  public trailerExists: boolean;
  public serieEnded: boolean = false;
  public commentsExists: boolean;
  public recomendedExists: boolean;

  public actorsExists: boolean;
  public seasonsExists: boolean = false;
  public hasImage: boolean = true;
  public displayBasic: boolean;
  displayCast: boolean;
  public trailerLink: string;
  public recommandations: any[] = [];
  public comments: any[] = [];
  public castTable: any[] = [];
  public colors = [
    { name: 'primary' },
    { name: 'secondary' },
    { name: 'success' },
    { name: 'danger' },
    { name: 'warning' },
    { name: 'info' },
    { name: 'dark' },
  ];
  attributeData: any = {};
  position: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: SeriesService
  ) {}

  ngOnInit(): void {
    this.initConfig();
    this.initPage();
  }

  initConfig() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.popularOptions = [
      {
        breakpoint: '768px',
        numVisible: 0,
        numScroll: 0,
      },
    ];
    this.carouselObject = [
      {
        id: 1,
        category_name_trans: 'Series Relacionadas',
        original_category_name: 'recommended',
        movies: this.dataR,
      },
    ];
  }
  initPage() {
    this.loadDetail();
    this.getOfficialTrailer(this.id);
    this.getCredits();
    this.loadRecomendations();
    this.getComments();
  }

  //APIS//
  loadDetail() {
    this.service.getSerieDetail(this.id).subscribe((detail) => {
      if (detail.next_episode_to_air == null) {
        this.serieEnded = true;
      } else {
        this.serieEnded = false;
      }

      if (detail) {
        this.serieDetail.push({
          adult: detail.adult,
          backdrop_path: detail.backdrop_path,
          created_by: detail.created_by,
          episode_run_time: detail.episode_run_time,
          first_air_date: detail.first_air_date,
          genres: detail.genres,
          homepage: detail.homepage,
          id: detail.id,
          in_production: detail.in_production,
          languages: detail.languages,
          last_air_date: detail.last_air_date,
          last_episode_to_air: [detail.last_episode_to_air],
          name: detail.name,
          networks: detail.networks,
          next_episode_to_air: [detail.next_episode_to_air],
          number_of_episodes: detail.number_of_episodes,
          number_of_seasons: detail.number_of_seasons,
          origin_country: detail.origin_country,
          original_language: detail.original_language,
          original_name: detail.original_name,
          overview: detail.overview,
          popularity: detail.popularity,
          poster_path: this.imgUrl + detail.poster_path,
          production_companies: detail.production_companies,
          production_countries: detail.production_countries,
          seasons: detail.seasons,
          spoken_languages: detail.spoken_languages,
          status: detail.status,
          tagline: detail.tagline,
          type: detail.type,
          vote_average: parseFloat(detail.vote_average).toFixed(1),
          vote_count: detail.vote_count,
        });
        this.serieDetail.forEach((detail) => {
          detail.seasons.forEach((seasons) => {
            seasons.poster_path = this.imgUrl + seasons.poster_path;
          });
        });
        this.genres = detail.genres;
        this.genres.map((obj) => {
          obj.color =
            this.colors[Math.floor(Math.random() * (6 - 0 + 1)) + 0].name;
          return obj;
        });
        console.log(this.serieDetail);
      }
    });
  }
  getOfficialTrailer(id: number) {
    let lang: string = 'es-ES';
    this.service.getOficialTrailer(id, lang).subscribe((data) => {
      this.offTrailer = data;
      this.offTrailer.forEach((x) => {
        if (x.name.includes('oficial') || x.name.includes('Oficial')) {
          this.trailerExists = true;
          this.trailerLink = x.key;
        } else {
          this.trailerExists = false;
        }
      });
    });
  }
  getCredits() {
    this.service.getCreditSeries(this.id).subscribe((data) => {
      if (data.cast) {
        this.actorsExists = true;
        this.castTable = data.cast;
        this.castTable.forEach((x) => {
          x.profile_path = this.imgUrl + x.profile_path;
        });
      } else {
        this.actorsExists = false;
      }
    });
  }
  loadRecomendations() {
    this.service.getRelatedSeries(this.id).subscribe((rec) => {
      if (rec.length > 0) {
        console.log(rec);
        this.recomendedExists = true;
        this.dataR = rec;
        this.dataR.map((data) => {
          data.poster_path = this.imgUrl + data.poster_path;
          data.vote_average = parseFloat(data.vote_average).toFixed(1);
        });
        this.carouselObject[0].movies = this.dataR;
      } else {
        this.recomendedExists = false;
      }
    });
  }
  getComments() {
    this.service.getReviews(this.id).subscribe((data) => {
      console.log(data.results);
      if (data.results.length > 0) {
        this.commentsExists = true;
        this.comments = data.results;
        this.comments.forEach((x) => {
          if (x.author_details.avatar_path != null) {
            x.author_details.avatar_path =
              x.author_details.avatar_path.substring(1);
          } else {
            x.author_details.avatar_path =
              'https://www.gravatar.com/avatar' + x.author_details.avatar_path;
          }
        });
      } else {
        this.commentsExists = false;
      }
    });
  }

  //PRIVATE//
  goToTrailer() {
    if (this.trailerExists)
      window.open('https://www.youtube.com/watch?v=' + this.trailerLink);
  }
  showSeason(item: Seasons) {
    this.displayBasic = true;
    this.attributeData['name'] = item.name;
    this.attributeData['src'] = item.poster_path;
    this.attributeData['air_date'] = item.air_date;
    this.attributeData['episode_count'] = item.episode_count;
    this.attributeData['overview'] = item.overview;
    if (this.attributeData.src.includes('originalnull')) {
      this.hasImage = false;
    }
  }
  seeMoreSeries(item: any) {
    this.router.navigate(['series/category/', item.original_category_name], {
      state: { data: item },
    });
  }
  goToSeeSeason(item: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/series-detail/', item.id]).then(() => {});
    });
  }
  showCast() {
    this.displayCast = true;
  }
}
