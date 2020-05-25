import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  users: Observable<User[]>;
  usersCollection: AngularFirestoreCollection<User>;
  constructor(private readonly afs: AngularFirestore) { 
    this.usersCollection = afs.collection<User>('Users');
      this.users = this.usersCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

  getUsers(){
    return this.users;
  }
  deleteUser(userId){
    this.usersCollection.doc(userId).delete();
  }

  updateUser(userId ,user){
    this.usersCollection.doc(userId).update(user);
    
  }
}
