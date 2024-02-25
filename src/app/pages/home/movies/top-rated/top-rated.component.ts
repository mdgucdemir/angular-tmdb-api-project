import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent implements OnInit {
  title: string = 'top rated movies';
  data: any = [];
  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/movie/top_rated').subscribe((res) => {
      this.data = res.results;
    });
  }
}
