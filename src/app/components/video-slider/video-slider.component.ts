import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss'],
})
export class VideoSliderComponent implements OnInit {
  dataImg: any = this.apiConfig.apiConfig;
  data: any[] = [];

  isLoading: boolean = false;

  constructor(
    private apiConfig: ApiConfigService,
    private router: Router,
    private dataService: DataServiceService,
    private baseService: BaseService
  ) {}

  @Input() title!: string;
  @Input() type!: string;

  Req() {
    this.baseService.getReq(`/${this.title}/${this.type}`).subscribe((res) => {
      this.data = res.results;
      // console.log(this.data);
    });
  }
  onClick(item: any) {
    this.dataService.setData(item);
    this.router.navigateByUrl(`${this.type}/${item.id}`);
  }

  ngOnInit(): void {
    this.Req();
  }
}
