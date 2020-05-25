import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Pets } from '../models/pets';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilOwnerService {
  petsCollection: AngularFirestoreCollection<Pets>;
  constructor(private readonly afs: AngularFirestore) {
    this.petsCollection = afs.collection<Pets>('pets');

   }

  getPet(id){
    return this.petsCollection.doc(id).ref.get();
  }

  

}
