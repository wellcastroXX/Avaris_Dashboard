import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-sub-nav-bar',
  templateUrl: './sub-nav-bar.component.html',
  styleUrls: ['./sub-nav-bar.component.scss']
})
export class SubNavBarComponent {

  constructor(
    private _router: Router
  ) { }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }
}

