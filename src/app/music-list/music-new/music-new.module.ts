import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicNewPageRoutingModule } from './music-new-routing.module';

import { MusicNewPage } from './music-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicNewPageRoutingModule
  ],
  declarations: [MusicNewPage]
})
export class MusicNewPageModule {}
