import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/home/movies/movie/movie.component';
import { TvComponent } from './pages/home/tv/tv/tv.component';
import { PersonComponent } from './pages/home/person/person/person.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv/:id', component: TvComponent },
  { path: 'person/:id', component: PersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
