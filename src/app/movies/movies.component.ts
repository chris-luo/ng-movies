import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [`
  .card {
    margin: 5px;
  }
  `]
})
export class MoviesComponent implements OnInit {
  movies;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    const type = this.router.url.split('/')[2];
    switch (type) {
      case 'popular':
        this.apiService.getPopularMovies().subscribe(res => {
          this.movies = res.results;
        });
        break;
      case 'top-rated':
        this.apiService.getTopRatedMovies().subscribe(res => {
          this.movies = res.results;
        });
        break;
      case 'upcoming':
        this.apiService.getUpcomingMovies().subscribe(res => {
          this.movies = res.results;
        });
        break;
      case 'now-playing':
        this.apiService.getNowPlayingMovies().subscribe(res => {
          this.movies = res.results;
        });
        break;
      default:
        console.error(type, 'not yet implemented');
        break;
    }
  }

  onMoreInfo(movie) {
    this.router.navigate(['movies', movie.id]);
  }
}
