import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {GeneralService} from "../general.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};
  error?: string;

  constructor(private generalService: GeneralService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login():void {
    this.error = undefined;
    this.generalService.authenticate(this.credentials, (err?) => {
      if (err) {
        if (err.status == 401) {
          this.error = "Authentication failed. The Login or password is wrong!"
        } else {
          this.error = `Error ${err.status} - ${err.error}`;
        }
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }

}
