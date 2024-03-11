import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  backdropPath: string = '';
  bannerImage: any = this.apiConfig.apiConfig;
  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/discover/tv').subscribe((res) => {
      this.backdropPath = res.results[0].backdrop_path;
      console.log(res.results);
    });
  }
}
