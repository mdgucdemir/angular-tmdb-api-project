import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/home/movies/movie/movie.component';

import { TvComponent } from './pages/home/tv/tv/tv.component';
import { PersonComponent } from './pages/home/person/person/person.component';
import { MoviePageComponent } from './pages/page/movie-page/movie-page.component';
import { TvPageComponent } from './pages/page/tv-page/tv-page.component';
import { PersonPageComponent } from './pages/page/person-page/person-page.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv/:id', component: TvComponent },
  { path: 'person/:id', component: PersonComponent },
  { path: 'movie', component: MoviePageComponent },
  { path: 'tv', component: TvPageComponent },
  { path: 'person', component: PersonPageComponent },
  { path: 'search', component: SearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
