import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import { AdminsService } from './admins.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../auth/auth.service';




@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  oldPassword: string;
  oldName: User;
  user: firebase.User;

  constructor(public adminService: AdminsService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) {
        }

  ngOnInit() {
    this.authService.getUserState()
    .subscribe(user => {
      this.user = user;
    })

  }

  editAdmin(frm){
    var userId = this.route.snapshot.paramMap.get('id');
    //var oldPassword = this.route.snapshot.paramMap.get('password');
    var user = {
      firstname: frm.value.firstname,
      lastname: frm.value.lastname,
      password: frm.value.password,
      email: frm.value.email
    }
    console.log(user);
    //this.authService.login('ofk@ofk.com', '1234567');
    this.authService.updateUser(frm.value.email, frm.value.password);
    this.adminService.updateUser(userId, user);


    this.router.navigate(['/home']);

  }

  deleteAdmin(){
    var userId = this.route.snapshot.paramMap.get('id');
    this.adminService.deleteUser(userId);
    this.authService.deleteUser();
  }

}
