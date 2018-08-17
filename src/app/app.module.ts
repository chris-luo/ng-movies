import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieModule } from './movie/movie.module';
import { TvModule } from './tv/tv.module';
import { PersonModule } from './person/person.module';
import { CoreModule } from './core/core.module';
import { PopularMoviesModule } from './movies/popular/popular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SearchModule,
    HttpClientModule,
    MovieModule,
    TvModule,
    PersonModule,
    CoreModule,
    PopularMoviesModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
