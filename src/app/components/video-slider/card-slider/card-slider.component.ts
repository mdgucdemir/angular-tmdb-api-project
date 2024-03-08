import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent {
  dataImg: any = this.apiConfig.apiConfig;

  constructor(private apiConfig: ApiConfigService, private router: Router) {}

  @Input() data: any;

  @Input() type!: string;

  onClick(item: any) {
    // console.log(item, this.type);
    this.router.navigateByUrl(`/person/${item.id}`);
  }
}
