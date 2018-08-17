import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularMoviesComponent } from './popular.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PopularMoviesComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [],
  providers: [],
})
export class PopularMoviesModule { }
