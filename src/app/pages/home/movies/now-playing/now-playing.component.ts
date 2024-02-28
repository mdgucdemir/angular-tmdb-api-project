import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit {
  title: string = 'playing now movies';
  data: any = [];
  type: string = 'movie';

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/movie/now_playing').subscribe((res) => {
      this.data = res.results;
    });
  }
}
