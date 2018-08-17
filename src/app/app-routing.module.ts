import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { TVComponent } from './tv/tv.component';
import { PersonComponent } from './person/person.component';
import { PopularMoviesComponent } from './movies/popular/popular.component';

const appRoutes: Routes = [
  {
    path: 'movies/popular',
    component: PopularMoviesComponent
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
