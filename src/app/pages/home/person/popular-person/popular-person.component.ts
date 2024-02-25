import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-popular-person',
  templateUrl: './popular-person.component.html',
  styleUrls: ['./popular-person.component.scss'],
})
export class PopularPersonComponent implements OnInit {
  title: string = 'popular person';
  data: any = [];

  noPoster: string = 'assets/no-poster.png';

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/person/popular').subscribe((res) => {
      this.data = res.results;
    });
  }
}
