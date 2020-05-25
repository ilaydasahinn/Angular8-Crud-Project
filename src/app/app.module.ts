import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { OwnersComponent } from './owners/owners.component';
import { PetsComponent } from './pets/pets.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { UpdateOwnerComponent } from './update-owner/update-owner.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { AssignPetComponent } from './assign-pet/assign-pet.component';
import { AssignOwnerComponent } from './assign-owner/assign-owner.component';
import { AdminsComponent } from './admins/admins.component';
import { UpdateAdminsComponent } from './update-admins/update-admins.component';
import { ProfilOwnerComponent } from './profil-owner/profil-owner.component';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
  StorageBucket
} from "@angular/fire/storage";
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    OwnersComponent,
    PetsComponent,
    AddPetComponent,
    AddOwnerComponent,
    UpdateOwnerComponent,
    UpdatePetComponent,
    AssignPetComponent,
    AssignOwnerComponent,
    AdminsComponent,
    UpdateAdminsComponent,
    ProfilOwnerComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [{ provide: StorageBucket, useValue: "crud-project-7.appspot.com" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
