import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  items: any = [];
  tv: any = [];
  dataImg: any = this.apiConfig.apiConfig;
  castData: any = [];
  similarData: any = [];
  id: any = '';

  constructor(
    private dataService: DataServiceService,
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.id = this.route.snapshot.params['id'];

    this.items = this.dataService.getData();
    // console.log(this.items);

    const url = '/tv/' + this.id;
    this.baseService.getReq(url).subscribe((res) => {
      this.tv = res;
      // console.log(this.tv);
    });

    this.baseService.getReq(url + '/credits').subscribe((res) => {
      this.castData = res.cast;
      // console.log('Credits: ', res);
    });

    this.baseService.getReq(url + '/similar').subscribe((res) => {
      this.similarData = res.results;
      // console.log('Similar: ', res);
    });
  }
}
