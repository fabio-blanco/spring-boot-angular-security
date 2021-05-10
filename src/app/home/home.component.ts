import { Component, OnInit } from '@angular/core';

import {GeneralService} from "../general.service";
import {InitialData} from "../initial-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: InitialData = {id: '', content: ''};

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.getInitialData();
  }

  getInitialData(): void {
    this.generalService.getInitialData().subscribe(data => {
      this.data = data;
    });
  }

  autenticated() {
    return this.generalService.authenticated;
  }

}
