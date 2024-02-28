import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  title: string = 'popular movies';
  data: any = [];
  type: string = 'movie';
  constructor(private baseService: BaseService) {}
  ngOnInit(): void {
    this.baseService.getReq('/movie/popular').subscribe((res) => {
      this.data = res.results;
    });
  }
}
