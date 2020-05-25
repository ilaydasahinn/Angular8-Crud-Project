import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { PetsService } from '../pets/pets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { element, Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
//@ViewChild("name", {static: false});


export class UpdatePetComponent implements OnInit {
  selectedFile: File = null;
  downloadURL: Observable<string>;
  pett: FormGroup;
  petInfo;
  constructor(private petService: PetsService,
    private router: Router,
    private route: ActivatedRoute, 
    private storage: AngularFireStorage) { 
    this.petInfo = this.router.getCurrentNavigation().extras.state;

    }

  ngOnInit() {

    this.pett = new FormGroup({
      name: new FormControl(),
      birth_year: new FormControl(),
      kind: new FormControl()
    });
    this.pett.controls.name.setValue(this.petInfo.name);
    this.pett.controls.birth_year.setValue(this.petInfo.birth_year);
    this.pett.controls.kind.setValue(this.petInfo.kind);
    console.log(this.pett);
  }

  editPet(){
    var petId=this.route.snapshot.paramMap.get('id');
    
    this.petService.updatePet(petId, this.pett.value);
    this.router.navigate(['/pets']);

  }

  onFileSelected(event) {
    var self=this;
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `petImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`petImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              var petId=self.route.snapshot.paramMap.get('id');
              var pet= {
                imageUrl: url
              }
              self.petService.updatePet(petId, pet);
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
