import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { TVComponent } from './tv/tv.component';
import { PersonComponent } from './person/person.component';

const appRoutes: Routes = [
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
