import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MoviesComponent, MovieComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
export class MoviesModule { }
