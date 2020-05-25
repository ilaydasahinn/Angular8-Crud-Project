import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AddOwnerService {

  constructor(private db: AngularFirestore,
    private router: Router) { }

    createOwner(owner, imageUrl){
    //var imageUrl = this.router.getCurrentNavigation().extras.state.imageUrl;
      console.log(imageUrl);
      return this.db.collection('owners/').add({
        name: owner.name,
        surname: owner.surname,
        petList: [],
        imageUrl: imageUrl        
      });
  
  
    }
}
