import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { TvModule } from './tv/tv.module';
import { PersonModule } from './person/person.module';
import { CoreModule } from './core/core.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SearchModule,
    HttpClientModule,
    TvModule,
    PersonModule,
    CoreModule,
    MoviesModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
