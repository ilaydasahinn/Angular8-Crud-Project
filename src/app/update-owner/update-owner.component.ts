import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../owners/owners.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.css']
})
export class UpdateOwnerComponent implements OnInit {
  selectedFile: File = null;
  downloadURL: Observable<string>;
  ownerr: FormGroup;
  ownerInfo;

  constructor(private ownerService: OwnersService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage) {

    this.ownerInfo = this.router.getCurrentNavigation().extras.state;

      
  }

  ngOnInit() {
    this.ownerr = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
    });
    this.ownerr.controls.name.setValue(this.ownerInfo.name);
    this.ownerr.controls.surname.setValue(this.ownerInfo.surname);
  }

  editOwner() {
    var ownerId = this.route.snapshot.paramMap.get('id');
    this.ownerService.updateOwner(ownerId, this.ownerr.value);
    this.router.navigate(['/owners']);

  }


  onFileSelected(event) {
    var self=this;
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `ownerImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ownerImages/${n}`, file);
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
              self.ownerService.updateOwner(petId, pet);
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
