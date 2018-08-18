import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './show.component.html'
})
export class TVShowComponent implements OnInit {
  tv;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiService.getTV(+params['id'])
        .subscribe(res => {
          console.log(res);
          this.tv = res;
        });
    });
  }
}
