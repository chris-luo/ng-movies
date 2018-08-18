import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html'
})
export class TVComponent implements OnInit {
  shows;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    const type = this.router.url.split('/')[2];
    switch (type) {
      case 'popular':
        this.apiService.getPopularShows().subscribe(res => {
          this.shows = res.results;
        });
        break;
      case 'top-rated':
        this.apiService.getTopRatedShows().subscribe(res => {
          this.shows = res.results;
        });
        break;
      case 'on-the-air':
        this.apiService.getOnTheAirShows().subscribe(res => {
          this.shows = res.results;
        });
        break;
      case 'airing-today':
        this.apiService.getAiringTodayShows().subscribe(res => {
          this.shows = res.results;
        });
        break;
      default:
        console.error(type, 'not yet implemented');
        break;
    }
  }

  onMoreInfo(show) {
    this.router.navigate(['tv', show.id]);
  }
}
