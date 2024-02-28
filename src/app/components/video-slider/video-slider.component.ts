import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss'],
})
export class VideoSliderComponent {
  dataImg: any = this.apiConfig.apiConfig;
  noPoster: any = 'assets/no-poster.png';

  constructor(
    private apiConfig: ApiConfigService,
    private router: Router,
    private dataService: DataServiceService
  ) {}

  @Input() data: any;
  @Input() title!: string;
  @Input() type!: string;

  onClick(item: any) {
    this.dataService.setData(item);

    this.router.navigateByUrl(`${this.type}/${item.id}`);
  }
}
