import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
  styleUrls: ['./up-coming.component.scss'],
})
export class UpComingComponent implements OnInit {
  title: string = 'up coming movies';
  data: any = [];
  type: string = 'movie';

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/movie/upcoming').subscribe((res) => {
      this.data = res.results;
    });
  }
}
