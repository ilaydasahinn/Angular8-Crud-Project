import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Owner} from '../models/owner';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UpdateOwnerService {
  ownersCollection: AngularFirestoreCollection<Owner>;
  owners: Observable<Owner[]>;

  constructor(private readonly afs: AngularFirestore) { }


  
}
