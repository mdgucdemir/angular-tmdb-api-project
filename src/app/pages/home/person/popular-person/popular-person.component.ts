import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-popular-person',
  templateUrl: './popular-person.component.html',
  styleUrls: ['./popular-person.component.scss'],
})
export class PopularPersonComponent implements OnInit {
  header: string = 'popular person top 20';
  dataImg: any = this.apiConfig.apiConfig;
  items: any[] = [];
  dataLength: any;

  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/person/popular').subscribe((res) => {
      this.items = res.results;
      // console.log(this.data);
      this.dataLength = res.results.length;
    });
  }

  onClick(id: string) {
    this.router.navigateByUrl(`/person/${id}`);
  }
}
