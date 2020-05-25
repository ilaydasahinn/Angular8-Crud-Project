import { Component, OnInit } from '@angular/core';
import {OwnersService} from '../owners/owners.service';
import { Owner } from '../models/owner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  owners: Owner[];

  constructor(public ownerService: OwnersService,
  private router: Router) { }

  ngOnInit() {
    this.ownerService.getOwners().subscribe(owners => {
      this.owners = owners;
    });
  }

  addNewOwner(){
    this.router.navigate(['/addOwner']);

  }
  clickDelete(ownerItem){
    console.log(ownerItem);
    this.ownerService.deleteOwner(ownerItem.id);
  }
  clickEdit(ownerItem){
    this.router.navigate(['/updateOwner', ownerItem.id], {state:ownerItem});
  }
  clickAddPet(ownerItem){
    this.router.navigate(['/assignPet', ownerItem.id], {state:ownerItem});
  }
  clickProfile(ownerItem){
    this.router.navigate(['/profilOwner', ownerItem.id], {state:ownerItem});
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}
