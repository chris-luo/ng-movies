import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
export class MoviesModule { }
