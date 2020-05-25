import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Pets } from '../models/pets';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PetsService {

  pets: Observable<Pets[]>;
  petsCollection: AngularFirestoreCollection<Pets>;
  constructor(private readonly afs: AngularFirestore) {
    this.petsCollection = afs.collection<Pets>('pets');
      this.pets = this.petsCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Pets;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }
  getPets() {
    return this.pets;
  }

  deletePet(petId){
    this.petsCollection.doc(petId).delete();
  }

  updatePet(petId ,pet){
    this.petsCollection.doc(petId).update(pet);
    
  }

}
