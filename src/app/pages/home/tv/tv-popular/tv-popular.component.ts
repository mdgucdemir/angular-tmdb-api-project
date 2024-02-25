import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-tv-popular',
  templateUrl: './tv-popular.component.html',
  styleUrls: ['./tv-popular.component.scss'],
})
export class TvPopularComponent implements OnInit {
  title: string = 'popular tv shows';
  data: any = [];
  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/tv/popular').subscribe((res) => {
      this.data = res.results;
    });
  }
}
