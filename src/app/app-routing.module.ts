import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { TVComponent } from './tv/tv.component';
import { PersonComponent } from './person/person.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
  {
    path: 'movies/popular',
    component: MoviesComponent
  },
  {
    path: 'movies/top-rated',
    component: MoviesComponent
  },
  {
    path: 'movies/upcoming',
    component: MoviesComponent
  },
  {
    path: 'movies/now-playing',
    component: MoviesComponent
  },
  {
    path: 'movies/:id',
    component: MovieComponent
  },
  {
    path: 'tv/:id',
    component: TVComponent
  },
  {
    path: 'person/:id',
    component: PersonComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
