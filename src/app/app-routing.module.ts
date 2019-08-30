import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import { ThingComponent } from './thing/thing.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'songs',
    component: SongsComponent,
  },
  {
    path: 'thing',
    component: ThingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


