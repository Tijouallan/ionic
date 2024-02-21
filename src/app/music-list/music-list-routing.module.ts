import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicListPage } from './music-list.page';

const routes: Routes = [
  {
    path: '',
    component: MusicListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./music-new/music-new.module').then( m => m.MusicNewPageModule)
  },
  {
    path: 'musics',
    loadChildren: () => import('./musics/musics.module').then( m => m.MusicsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicListPageRoutingModule {}
