import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-tv-top-rated',
  templateUrl: './tv-top-rated.component.html',
  styleUrls: ['./tv-top-rated.component.scss'],
})
export class TvTopRatedComponent implements OnInit {
  header: string = 'top rated tv shows top 20';
  items: any = [];
  dataImg: any = this.apiConfig.apiConfig;
  dataLength: any;

  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/tv/top_rated').subscribe((res) => {
      this.items = res.results;
      this.dataLength = res.results.length;
    });
  }

  onClick(id: string) {
    this.router.navigateByUrl(`/tv/${id}`);
  }
}
