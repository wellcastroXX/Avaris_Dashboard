import { MatDialog } from '@angular/material/dialog';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { UsersStates } from './../store/user.store';
import { FetchUsersList } from './../store/user.actions';
import { Store } from '@ngxs/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'nome',
    'sobrenome',
    'cpf',
    'dataDeNascimento',
    'email',
    'celular'
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _userService: UserService,
    private _store: Store,
    private _dialog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getUsersList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openMoreInfoUser(id: string) {
    this.dataSource.data.forEach(item => {
      if (item.id === id) {
        this._dialog.open(UsersModalComponent, {
          data: item,
          disableClose: true,
          width: '800px'
        });
      }
    });
  }

  private getUsersList() {
    this._store.dispatch(new FetchUsersList())

    this._store.select(UsersStates.getUsersList).subscribe(value => {
      this.dataSource.data = value.dataList;
    })
  }
}