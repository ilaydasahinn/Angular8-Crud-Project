import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {OwnersComponent} from './owners/owners.component';
import {PetsComponent} from './pets/pets.component';
import { HomeComponent } from './home/home.component';
import {AddPetComponent} from './add-pet/add-pet.component';
import {AddOwnerComponent} from './add-owner/add-owner.component';
import {UpdateOwnerComponent} from './update-owner/update-owner.component';
import {UpdatePetComponent} from './update-pet/update-pet.component';
import {AssignPetComponent} from './assign-pet/assign-pet.component';
import {AssignOwnerComponent} from './assign-owner/assign-owner.component';
import {AdminsComponent} from './admins/admins.component';
import {UpdateAdminsComponent} from './update-admins/update-admins.component';
import {ProfilOwnerComponent} from './profil-owner/profil-owner.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegistrationComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'owners',
  component: OwnersComponent
},
{
  path: 'pets',
  component: PetsComponent
},
{
  path: 'addPet',
  component: AddPetComponent
},
{  
  path: 'addOwner',
  component: AddOwnerComponent
},
{  
  path: 'updateOwner/:id',
  component: UpdateOwnerComponent
},
{  
  path: 'updatePet/:id',
  component: UpdatePetComponent
},
{  
  path: 'assignPet/:id',
  component: AssignPetComponent
},
{  
  path: 'assignOwner/:id',
  component: AssignOwnerComponent
},
{  
  path: 'admins/:id',
  component: AdminsComponent
},
{  
  path: 'updateAdmins/:id',
  component: UpdateAdminsComponent
},
{  
  path: 'profilOwner/:id',
  component: ProfilOwnerComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
