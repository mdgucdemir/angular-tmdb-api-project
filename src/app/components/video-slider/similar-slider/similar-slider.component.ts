import { Component, Input } from '@angular/core';
import { ApiConfigService } from 'src/app/services/api-config.service';

@Component({
  selector: 'app-similar-slider',
  templateUrl: './similar-slider.component.html',
  styleUrls: ['./similar-slider.component.scss'],
})
export class SimilarSliderComponent {
  @Input() data: any;
  @Input() type!: string;

  dataImg: any = this.apiConfig.apiConfig;
  constructor(private apiConfig: ApiConfigService) {}
}
