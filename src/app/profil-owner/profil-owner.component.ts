import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from '../models/owner';
import { ProfilOwnerService } from './profil-owner.service';
import { Pets } from '../models/pets';



@Component({
  selector: 'app-profil-owner',
  templateUrl: './profil-owner.component.html',
  styleUrls: ['./profil-owner.component.css']
})
export class ProfilOwnerComponent implements OnInit {
  oldName: Owner;
  pets: Pets[];

  constructor(private router: Router,
    public profilOwnerService: ProfilOwnerService) { 
    this.oldName = this.router.getCurrentNavigation().extras.state;
    console.log(this.oldName);
    this.pets = [];
  }

  ngOnInit() {
    var self = this;
    for(let i=0; i<this.oldName.petList.length; i++){
      this.profilOwnerService.getPet(this.oldName.petList[i]).then(function(doc) {
        if (doc.exists) {
          self.pets.push(doc.data());
        } else {
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    }
    
  }


}
