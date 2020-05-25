import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Owner} from '../models/owner';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  owners: Observable<Owner[]>;
  ownersCollection: AngularFirestoreCollection<Owner>;
  constructor(private readonly afs: AngularFirestore) { 

    this.ownersCollection = afs.collection<Owner>('owners');
    this.owners = this.ownersCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Owner;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  getOwners(){
    return this.owners;
  }

  deleteOwner(ownerId){
    this.ownersCollection.doc(ownerId).delete();
  }

  updateOwner(ownerId ,owner){
    console.log(ownerId, owner);
    this.ownersCollection.doc(ownerId).update(owner);
    
  }

  getOwner(id){
    return new Promise(function(resolve, reject) {
      try {
        this.ownersCollection.doc(id).ref.get().then(function (doc) {
          if (doc.exists) {
            resolve(doc.data()); 
          } else {
            console.log("There is no document!");
          }
        }).catch(function (error) {
          console.log("There was an error getting your document:", error);
        });
      } catch (error) {
          resolve( {});
      }

    }); 
  }
}
