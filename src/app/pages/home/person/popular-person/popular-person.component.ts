import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-popular-person',
  templateUrl: './popular-person.component.html',
  styleUrls: ['./popular-person.component.scss'],
})
export class PopularPersonComponent implements OnInit {
  title: string = 'popular person';
  data: any = [];
  type: string = 'person';

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/person/popular').subscribe((res) => {
      this.data = res.results;
      // console.log(this.data);
    });
  }
}
