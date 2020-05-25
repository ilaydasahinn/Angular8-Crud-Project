import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets/pets.service';
import { Pets } from '../models/pets';
import { Router, ActivatedRoute } from '@angular/router';
import { Owner } from '../models/owner';
import { OwnersService } from '../owners/owners.service';

@Component({
  selector: 'app-assign-pet',
  templateUrl: './assign-pet.component.html',
  styleUrls: ['./assign-pet.component.css']
})
export class AssignPetComponent implements OnInit {

  pets: Pets[];
  oldName: Owner;

  constructor(public petService: PetsService,
    private router: Router,
    private route: ActivatedRoute,
    public ownerService: OwnersService) {

    this.oldName = this.router.getCurrentNavigation().extras.state;

  }

  ngOnInit() {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  clickAssignPet(pet_assigned) {
    this.oldName.petList.push(pet_assigned.id);
    var owner = {
      petList: this.oldName.petList
    }
    this.ownerService.updateOwner(this.oldName.id, owner);
    var ownerId = this.route.snapshot.paramMap.get('id');
    var pet = {
      owner_id: ownerId
    }
    this.petService.updatePet(pet_assigned.id, pet);
    this.router.navigate(['/owners']);


  }

}
