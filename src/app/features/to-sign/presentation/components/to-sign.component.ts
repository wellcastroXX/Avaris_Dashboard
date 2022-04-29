import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-sign',
  templateUrl: './to-sign.component.html',
  styleUrls: ['./to-sign.component.scss']
})
export class ToSignComponent implements OnInit {

  public usersToSignList = [];

  constructor(
    private _store: Store
  ) { }

  ngOnInit() { }
}