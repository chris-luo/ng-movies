import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { TVComponent } from './tv/tv.component';
import { PersonComponent } from './person/person.component';
import { MoviesComponent } from './movies/movies.component';
import { TVShowComponent } from './tv/show/show.component';

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
    path: 'tv/popular',
    component: TVComponent
  },
  {
    path: 'tv/top-rated',
    component: TVComponent
  },
  {
    path: 'tv/on-the-air',
    component: TVComponent
  },
  {
    path: 'tv/airing-today',
    component: TVComponent
  },
  {
    path: 'tv/:id',
    component: TVShowComponent
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
