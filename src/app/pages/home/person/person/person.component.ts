import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { BaseService } from 'src/app/services/base.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  items: any = [];
  dataImg: any = this.apiConfig.apiConfig;
  person: any = [];
  movie_acting: any = [];
  displayedColumns: string[] = ['release_date', 'title', 'character'];
  id: any;
  constructor(
    private dataService: DataServiceService,
    private apiConfig: ApiConfigService,
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.items = this.dataService.getData();
    // console.log(this.items);

    this.baseService.getReq(`/person/${this.id}`).subscribe((res) => {
      this.person = res;
      // console.log(this.person);
    });

    this.baseService
      .getReq(`/person/${this.id}/movie_credits`)
      .subscribe((res) => {
        this.movie_acting = res.cast;
        // console.log(res);
      });
  }
}
