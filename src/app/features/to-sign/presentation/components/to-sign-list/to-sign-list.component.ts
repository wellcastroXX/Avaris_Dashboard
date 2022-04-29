import { ToSignStates } from './../../store/to-sign.store';
import { FetchToSignList } from './../../store/to-sign.actions';
import { Store } from '@ngxs/store';
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
    'nome',
    'sobrenome',
    'dataDeNascimento',
    'cpf',
    'celular',
    'statusDaAssinatura'

  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _store: Store
  ) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this._getUserToSignList();
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

  private _getUserToSignList() {
    let avarisPremiumList = [];
    this._store.dispatch(new FetchToSignList())

    this._store.select(ToSignStates.getToSignList).subscribe(value => {
      avarisPremiumList = [];
      value.dataList.map(item => {
        if (item.avarispremium) {
          avarisPremiumList.push(item);
        }
      });
      this.dataSource.data = avarisPremiumList;
    });
  }
}