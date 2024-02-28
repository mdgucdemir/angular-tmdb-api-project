import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { DiscoverComponent } from './pages/discover/discover.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Swiper
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

//
import { BannerComponent } from './components/banner/banner.component';
import { PopularComponent } from './pages/home/movies/popular/popular.component';
import { TopRatedComponent } from './pages/home/movies/top-rated/top-rated.component';
import { UpComingComponent } from './pages/home/movies/up-coming/up-coming.component';
import { NowPlayingComponent } from './pages/home/movies/now-playing/now-playing.component';
import { AiringTodayComponent } from './pages/home/tv/airing-today/airing-today.component';
import { OnAirComponent } from './pages/home/tv/on-air/on-air.component';
import { VideoSliderComponent } from './components/video-slider/video-slider.component';
import { TvPopularComponent } from './pages/home/tv/tv-popular/tv-popular.component';
import { TvTopRatedComponent } from './pages/home/tv/tv-top-rated/tv-top-rated.component';
import { PopularPersonComponent } from './pages/home/person/popular-person/popular-person.component';
import { MovieComponent } from './pages/home/movies/movie/movie.component';
import { PersonComponent } from './pages/home/person/person/person.component';
import { TvComponent } from './pages/home/tv/tv/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscoverComponent,
    SearchResultComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PopularComponent,
    TopRatedComponent,
    UpComingComponent,
    NowPlayingComponent,
    AiringTodayComponent,
    OnAirComponent,
    VideoSliderComponent,
    TvPopularComponent,
    TvTopRatedComponent,
    PopularPersonComponent,
    MovieComponent,
    PersonComponent,
    TvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
