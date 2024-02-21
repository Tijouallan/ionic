import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Music } from './models/music.model'; // Assurez-vous d'importer la classe Music

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private dbPath = '/musics'; // Adapter le chemin de la base de données
  musicsRef: AngularFirestoreCollection<Music>; // Adapter la référence de la collection

  constructor(private db: AngularFirestore) { 
    this.musicsRef = db.collection(this.dbPath); // Initialiser la référence de la collection
  }

  getAll(): Observable<Music[]> {
    return this.musicsRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Music;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  saveNewMusic(music: Music): Observable<any> {
    return new Observable(obs => {
      this.musicsRef.add({...music}).then(() => {
        obs.next();
      });
    });
  }

  get(id: string): Observable<Music> {
    return new Observable(obs => {
      this.musicsRef.doc(id).get().subscribe(res => {
        obs.next({ id: res.id, ...res.data() } as Music);
      });
    });
  }

  update(music: Music): Observable<any> {
    return new Observable(obs => {
      this.musicsRef.doc(music.id).update(music);
      obs.next();
    });
  }

  delete(id: string): void {
    this.musicsRef.doc(id).delete();
  }
}
