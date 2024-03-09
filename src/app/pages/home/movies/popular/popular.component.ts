import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  header: string = 'popular movies top 20';
  dataImg: any = this.apiConfig.apiConfig;
  items: any[] = [];
  dataLength: any;

  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/movie/popular').subscribe((res) => {
      this.items = res.results;
      this.dataLength = res.results.length;
    });
  }

  onClick(id: string) {
    this.router.navigateByUrl(`/movie/${id}`);
  }
}
