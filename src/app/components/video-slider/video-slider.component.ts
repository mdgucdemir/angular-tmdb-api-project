import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss'],
})
export class VideoSliderComponent {
  dataImg: any = this.apiConfig.apiConfig;

  constructor(private apiConfig: ApiConfigService, private router: Router) {}

  @Input() data: any;
  @Input() title!: string;

  onClick() {
    console.log(this.data);
    // this.router.navigateByUrl('details/123');
  }
}
