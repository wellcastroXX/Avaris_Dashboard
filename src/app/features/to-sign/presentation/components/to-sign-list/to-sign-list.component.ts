import { Store } from '@ngxs/store';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-sign-list',
  templateUrl: './to-sign-list.component.html',
  styleUrls: ['./to-sign-list.component.scss']
})
export class ToSignListComponent implements OnInit {
  displayedColumns: string[] = [
    'teste',
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
  ngOnInit() { }

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
}