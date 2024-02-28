import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-airing-today',
  templateUrl: './airing-today.component.html',
  styleUrls: ['./airing-today.component.scss'],
})
export class AiringTodayComponent implements OnInit {
  title: string = 'airing today tv shows';
  data: any = [];
  type: string = 'tv';
  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/tv/airing_today').subscribe((res) => {
      this.data = res.results;
    });
  }
}
