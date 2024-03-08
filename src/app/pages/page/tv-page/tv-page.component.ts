import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-tv-page',
  templateUrl: './tv-page.component.html',
  styleUrls: ['./tv-page.component.scss'],
})
export class TvPageComponent implements OnInit {
  header: string = 'popular tv series top 20';
  dataImg: any = this.apiConfig.apiConfig;
  items: any[] = [];

  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/tv/popular').subscribe((res) => {
      this.items = res.results;
      // console.log(res);
    });
  }

  onClick(id: string) {
    this.router.navigateByUrl(`/tv/${id}`);
  }
}
