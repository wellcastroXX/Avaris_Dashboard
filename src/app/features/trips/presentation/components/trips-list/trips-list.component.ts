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
  displayedColumns: string[] = [
    'id',
    'start',
    'end',
    'distance',
    'date',
    'time',
    'price'
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _store: Store
  ) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this._getTripsList();
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
  
  openMoreInfoTrips(id: string) {
    
  }

  private _getTripsList() {
    this._store.dispatch(new FetchTripsList());
    this._store.select(TripsStates.getTripsList).subscribe(value => {
      this.dataSource.data = value.dataList;
    })
  }


  // openMoreInfoDrives(id: string) {
  //   this.dataSource.data.forEach(item => {
  //     if (item.id === id) {
  //       this._dialog.open(DriversModalComponent, {
  //         data: item,
  //         disableClose: true,
  //         width: '1400px'
  //       });
  //     }
  //   });
  // }
}