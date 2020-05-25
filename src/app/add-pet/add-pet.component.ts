import { Component, OnInit } from '@angular/core';
import { AddPetService } from '../add-pet/add-pet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  selectedFile: File = null;
  downloadURL: Observable<string>;
  imageUrl:string;

  constructor(private pet: AddPetService,
    private router: Router,
    private storage: AngularFireStorage,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  createPet(frm){
    if(this.imageUrl){
      console.log("Bos degil");
      this.pet.createPet(frm.value, this.imageUrl);
      this.router.navigate(['/pets']);
    }else{
      this.imageUrl = '';
      console.log("Bos");
      this.pet.createPet(frm.value, this.imageUrl);
      this.router.navigate(['/pets']);
    }
    

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
              var pet= {
                imageUrl: url
              }
              this.imageUrl = url;
              //self.ownerService.createOwner(owner);
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
