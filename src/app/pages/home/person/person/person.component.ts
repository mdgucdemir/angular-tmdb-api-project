import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  items: any = [];
  dataImg: any = this.apiConfig.apiConfig;
  person: any = [];

  constructor(
    private dataService: DataServiceService,
    private apiConfig: ApiConfigService,
    private baseService: BaseService
  ) {}

  ngOnInit(): void {
    this.items = this.dataService.getData();
    console.log(this.items);

    this.baseService.getReq(`/person/${this.items.id}`).subscribe((res) => {
      this.person = res;
      console.log(this.person);
    });
  }
}
