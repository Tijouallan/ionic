import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path:'home',
        loadChildren: () => import('../home/home.module').then(m=>m.HomePageModule)
      }, {
        path: 'films',
        loadChildren: () => import('../films-list/films-list.module').then(m=>m.FilmsListPageModule)
      }, {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then(m=>m.PhotosPageModule)
      }, {
        path: 'apropos',
        loadChildren: () => import('../apropos/apropos.module').then(m=>m.AproposPageModule)
      }, {
        path: 'musics',
        loadChildren: () => import('../music-list/music-list.module').then(m=>m.MusicListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
