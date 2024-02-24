import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit {
  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService
      .getReq('/movie/now_playing')
      .subscribe((res) => console.log(res));
  }
}
