import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannerData: any = [];
  bannerImage: any = this.apiConfig.apiConfig;
  bannerDataLength: any;

  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/movie/upcoming').subscribe((res) => {
      this.bannerData = res.results;
      this.bannerDataLength = res.results.length;
    });
  }
}
