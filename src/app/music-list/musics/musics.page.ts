import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { Music } from 'src/app/models/music.model';
import { MusicService } from 'src/app/musics.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit {
  modif: boolean = false;
  musics!: Music;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Musics: MusicService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && typeof id === 'string') { 
      this.Musics.get(id).subscribe((value: any) => {
        this.musics = value;
      });
    }
  }
  

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header : 'Etes vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Configurer',
            handler: () => {this.modif = !this.modif}
          }
        ]
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Musics.update(this.musics).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Musics.delete(id);
    this.router.navigate(['/musics']);
  }
}
