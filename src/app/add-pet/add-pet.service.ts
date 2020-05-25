import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AddPetService {

  constructor(private db: AngularFirestore,
    private router: Router) { }

  createPet(pet, imageUrl){
    return this.db.collection('pets/').add({
      name: pet.name,
      birth_year: pet.birth_year,
      kind: pet.kind,
      owner_id: '',
      imageUrl: imageUrl
      
    });


  }
}
