import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss'],
})
export class PersonPageComponent implements OnInit {
  header: string = 'popular people top 20';
  dataImg: any = this.apiConfig.apiConfig;
  items: any[] = [];

  constructor(
    private baseService: BaseService,
    private apiConfig: ApiConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.baseService.getReq('/person/popular').subscribe((res) => {
      this.items = res.results;
      // console.log(res);
    });
  }

  onClick(id: string) {
    this.router.navigateByUrl(`/person/${id}`);
  }
}
