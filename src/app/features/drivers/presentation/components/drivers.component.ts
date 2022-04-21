import { FetchDriversList } from './../store/drivers.actions';
import { DriversModalComponent } from './drivers-modal/drivers-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DriversService } from '../services/drive.service';
import { Store } from '@ngxs/store';
import { DriversStates } from '../store/drivers.store';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'nome',
    'sobrenome',
    'cpf',
    'dataDeNascimento',
    'email',
    'estado',
    'celular',
    'status'
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _driversService: DriversService,
    private _dialog: MatDialog,
    private _store: Store
  ) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this.getDriversList();
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openMoreInfoDrives(id: string) {
    this.dataSource.data.forEach(item => {
      if (item.id === id) {
        this._dialog.open(DriversModalComponent, {
          data: item,
          disableClose: true,
          width: '800px',
        });
      }
    });
  }

  private getDriversList() {
    this._store.dispatch(new FetchDriversList())

    this._store.select(DriversStates.getDriversList).subscribe(value => {     
      this.dataSource.data = value.dataList;
    })
  }
}