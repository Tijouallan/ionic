import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicNewPage } from './music-new.page';

const routes: Routes = [
  {
    path: '',
    component: MusicNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicNewPageRoutingModule {}
