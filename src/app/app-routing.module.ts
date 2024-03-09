import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/home/movies/movie/movie.component';

import { TvComponent } from './pages/home/tv/tv/tv.component';
import { PersonComponent } from './pages/home/person/person/person.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

import { NowPlayingComponent } from './pages/home/movies/now-playing/now-playing.component';
import { PopularComponent } from './pages/home/movies/popular/popular.component';
import { TopRatedComponent } from './pages/home/movies/top-rated/top-rated.component';
import { UpComingComponent } from './pages/home/movies/up-coming/up-coming.component';

import { PopularPersonComponent } from './pages/home/person/popular-person/popular-person.component';
import { AiringTodayComponent } from './pages/home/tv/airing-today/airing-today.component';
import { OnAirComponent } from './pages/home/tv/on-air/on-air.component';
import { TvPopularComponent } from './pages/home/tv/tv-popular/tv-popular.component';
import { TvTopRatedComponent } from './pages/home/tv/tv-top-rated/tv-top-rated.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv/:id', component: TvComponent },
  { path: 'person/:id', component: PersonComponent },

  { path: 'movie_now_playing', component: NowPlayingComponent },
  { path: 'movie_popular', component: PopularComponent },
  { path: 'movie_top_rated', component: TopRatedComponent },
  { path: 'movie_upcoming', component: UpComingComponent },

  { path: 'popular_person', component: PopularPersonComponent },

  { path: 'tv_airing-today', component: AiringTodayComponent },
  { path: 'tv_on-air', component: OnAirComponent },
  { path: 'tv_popular', component: TvPopularComponent },
  { path: 'tv_top-rated', component: TvTopRatedComponent },

  { path: 'search', component: SearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
