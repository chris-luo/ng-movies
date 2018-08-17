import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from '../app-routing.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatTabsModule, AppRoutingModule, MatMenuModule],
  exports: [HeaderComponent, AppRoutingModule],
  providers: [],
})
export class CoreModule { }
