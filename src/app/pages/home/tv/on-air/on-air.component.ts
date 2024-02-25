import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-on-air',
  templateUrl: './on-air.component.html',
  styleUrls: ['./on-air.component.scss'],
})
export class OnAirComponent implements OnInit {
  title: string = 'on the air tv shows';
  data: any = [];
  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getReq('/tv/on_the_air').subscribe((res) => {
      this.data = res.results;
    });
  }
}
