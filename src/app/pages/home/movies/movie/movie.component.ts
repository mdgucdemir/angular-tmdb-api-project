import { Component, OnInit } from '@angular/core';
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

  constructor(
    private dataService: DataServiceService,
    private baseService: BaseService,
    private apiConfig: ApiConfigService
  ) {}

  ngOnInit(): void {
    this.items = this.dataService.getData();
    console.log(this.items);

    this.baseService.getReq(`/movie/${this.items.id}`).subscribe((res) => {
      this.movie = res;
      console.log(res);
    });
  }
}
