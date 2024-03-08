import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  items: any = [];
  movie: any = [];
  dataImg: any = this.apiConfig.apiConfig;
  castData: any = [];
  similarData: any = [];
  id: any;

  constructor(
    private dataService: DataServiceService,
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.items = this.dataService.getData();
    // console.log(this.items);

    this.baseService.getReq(`/movie/${this.id}`).subscribe((res) => {
      this.movie = res;
      // console.log(this.movie);
    });

    this.baseService.getReq(`/movie/${this.id}/credits`).subscribe((res) => {
      this.castData = res.cast;
      // console.log(this.castData);
    });

    this.baseService.getReq(`/movie/${this.id}/similar`).subscribe((res) => {
      this.similarData = res.results;
      // console.log(this.similarData);
    });
  }
}
