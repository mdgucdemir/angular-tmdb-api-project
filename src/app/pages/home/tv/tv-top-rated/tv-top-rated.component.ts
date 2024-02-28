import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-tv-top-rated',
  templateUrl: './tv-top-rated.component.html',
  styleUrls: ['./tv-top-rated.component.scss'],
})
export class TvTopRatedComponent implements OnInit {
  title: string = 'top rated tv shows';
  data: any = [];
  type: string = 'tv';
  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/tv/top_rated').subscribe((res) => {
      this.data = res.results;
    });
  }
}
