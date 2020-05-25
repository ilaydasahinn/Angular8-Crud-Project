import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import {OwnersService} from '../owners/owners.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  oldPassword: string;
  user: firebase.User;

  constructor(private auth: AuthService, 
    private router: Router) {}
    


  ngOnInit() {

    this.auth.getUserState()
    .subscribe(user => {
      this.user = user;
    })
  }


 

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.auth.logout();
  }

  register(){
    this.router.navigate(['/register']);
  }
  owners(){
    this.router.navigate(['/owners']);
  }
  pets(){
    this.router.navigate(['/pets']);
  }
  admins(){
    this.router.navigate(['/admins', this.user.uid]);
    
  }
}
