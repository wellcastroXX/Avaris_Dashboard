import { take } from 'rxjs/operators';
import { TripsService } from './../../services/trips.service';
import { TripsModalComponent } from './../trips-modal/trips-modal.component';
import { TripsStates } from './../../store/trips.store';
import { FetchTripsList } from './../../store/trips.actions';
import { Store } from '@ngxs/store';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {
  public userList: any;
  public driverList: any;
  public displayedColumns: string[] = [
    'id',
    'start',
    'end',
    'distance',
    'date',
    'time',
    'price'
  ];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _store: Store,
    private _tripsService: TripsService
  ) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this._getTripsList();
    this._getUserList();
    this._getDriverList();
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

  private _getUserList() {
    this._tripsService.getUsersList()
      .pipe(take(1))
      .subscribe(res => {
        this.userList = res.map((e: any) => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        });
      });
  }

  private _getDriverList() {
    this._tripsService.getDriversList()
      .pipe(take(1))
      .subscribe(res => {
        this.driverList = res.map((e: any) => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        });
      });
  }

  private _getTripsList() {
    this._store.dispatch(new FetchTripsList());
    this._store.select(TripsStates.getTripsList).subscribe(value => {
      this.dataSource.data = value.dataList;
    })
  }


  openMoreInfoTrips(id: string) {
    this.dataSource.data.forEach(item => {
      if (item.order === id) {
        this._dialog.open(TripsModalComponent, {
          data: { item, userList: this.userList, driverList: this.driverList },
          disableClose: true,
          width: '1400px'
        });
      }
    });
  }
}