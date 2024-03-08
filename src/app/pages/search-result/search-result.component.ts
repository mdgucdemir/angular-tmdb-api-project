import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  search: string = '';
  dataImg: any = this.apiConfig.apiConfig;
  searchData: any[] = [];
  searchLength: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: BaseService,
    private apiConfig: ApiConfigService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.search = params['query'];
      // console.log(params['q']);

      this.baseService
        .getReq(`/search/multi?query=${this.search}`)
        .subscribe((res) => {
          console.log(res.results);
          this.searchData = res.results;
          this.searchLength = res.results.length;
          console.log(this.searchLength);
        });
    });
  }

  onClick(media_type: string, id: string) {
    // console.log(media_type, id);
    this.router.navigateByUrl(`/${media_type}/${id}`);
  }
}
