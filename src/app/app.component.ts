import { Component } from '@angular/core';

import { GeneralService } from "./general.service";
import { Router } from "@angular/router";

import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring Boot Angular Security';

  constructor(private generalService: GeneralService,
              private router: Router) {
  }

  logout(): void {
    this.generalService.logout().pipe(
      finalize(() => {
        this.generalService.authenticated = false;
        this.router.navigateByUrl('/login');
      })
    ).subscribe();
  }

  autenticated() {
    return this.generalService.authenticated;
  }

}
