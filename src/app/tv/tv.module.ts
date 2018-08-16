import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TVComponent } from './tv.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [TVComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [],
  providers: [],
})
export class TvModule { }
