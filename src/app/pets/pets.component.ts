import { Component, OnInit } from '@angular/core';
import {PetsService} from '../pets/pets.service';
import {Pets} from '../models/pets';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: Pets[];

  constructor(public petService: PetsService,
    private router: Router,
    private pet: PetsService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  addNewPet(){
    this.router.navigate(['/addPet']);

  }
  clickDelete(petItem){
    console.log(petItem);
    this.pet.deletePet(petItem.id);
  }

  clickEdit(petItem){
    this.router.navigate(['/updatePet', petItem.id], {state: petItem});
    
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}
