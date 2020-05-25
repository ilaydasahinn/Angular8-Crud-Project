import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../admins/admins.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-update-admins',
  templateUrl: './update-admins.component.html',
  styleUrls: ['./update-admins.component.css']
})
export class UpdateAdminsComponent implements OnInit {

  constructor(private adminService: AdminsService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
  }

}
