import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

})
export class UsersComponent implements OnInit {

  dataList: Array<any>;

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    this.getUsersList();
  }

  private getUsersList() {
    this._userService.getUserList().subscribe(value => {
      this.dataList = value.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      console.log('dataList', this.dataList);
      
    })
  }
}