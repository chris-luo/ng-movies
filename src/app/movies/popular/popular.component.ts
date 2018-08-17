import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular.component.html',
  styles: [`
  .card {
    margin: 10px;
  }
  `]
})
export class PopularMoviesComponent implements OnInit {
  movies;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe(res => {
      console.log(res);
      this.movies = res.results;
    });
  }

  onMoreInfo(movie) {
    this.router.navigate(['movies', movie.id]);
  }
}
