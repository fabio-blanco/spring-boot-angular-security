import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  unknownPath: string

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    this.unknownPath = this.location.path()
  }

}
