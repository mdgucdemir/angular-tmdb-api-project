import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-on-air',
  templateUrl: './on-air.component.html',
  styleUrls: ['./on-air.component.scss'],
})
export class OnAirComponent implements OnInit {
  header: string = 'on the air tv shows top 20';
  items: any = [];
  dataImg: any = this.apiConfig.apiConfig;
  dataLength: any;

  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/tv/on_the_air').subscribe((res) => {
      this.items = res.results;
      this.dataLength = res.results.length;
    });
  }

  onClick(id: string) {
    this.router.navigateByUrl(`/tv/${id}`);
  }
}
