import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  header: string = 'now playing movie top 20';
  dataImg: any = this.apiConfig.apiConfig;
  items: any[] = [];

  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/movie/now_playing').subscribe((res) => {
      this.items = res.results;
      // console.log(this.items);
    });
  }

  onClick(id: string) {
    this.router.navigateByUrl(`/movie/${id}`);
  }
}
