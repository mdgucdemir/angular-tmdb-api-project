import { Component, OnInit } from '@angular/core';
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

  constructor(
    private dataService: DataServiceService,
    private baseService: BaseService,
    private apiConfig: ApiConfigService
  ) {}

  ngOnInit(): void {
    this.items = this.dataService.getData();
    console.log(this.items);

    this.baseService.getReq(`/tv/${this.items.id}`).subscribe((res) => {
      this.tv = res;
      console.log(this.tv);
    });
  }
}
