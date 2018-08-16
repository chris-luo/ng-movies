import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [PersonComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [],
  providers: [],
})
export class PersonModule { }
