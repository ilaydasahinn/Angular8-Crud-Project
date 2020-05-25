import { Component, OnInit } from '@angular/core';
import { AddOwnerService } from '../add-owner/add-owner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  selectedFile: File = null;
  downloadURL: Observable<string>;
  imageUrl:string;

  constructor(private ownerService: AddOwnerService,
    private router: Router, 
    private storage: AngularFireStorage,
    private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  createOwner(frm){
    if(this.imageUrl){
      this.ownerService.createOwner(frm.value, this.imageUrl);
      this.router.navigate(['/owners']);
    }else{
      this.imageUrl = '';
      this.ownerService.createOwner(frm.value, this.imageUrl);
      this.router.navigate(['/owners']);
    }
   

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
              var owner= {
                imageUrl: url
              }
              this.imageUrl = url;
              //self.ownerService.createOwner(owner);
              console.log(this.imageUrl);
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
