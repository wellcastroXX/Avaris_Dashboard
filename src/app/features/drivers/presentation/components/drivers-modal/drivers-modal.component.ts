import { MatSnackBar } from '@angular/material/snack-bar';
import { DriversStates } from './../../store/drivers.store';
import { FetchUpdateDriverLock } from './../../store/drivers.actions';
import { IUpdateDriverLock } from './../../../domain/entities/driver-lock.entity';
import { Store } from '@ngxs/store';
import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-drivers-modal',
  templateUrl: './drivers-modal.component.html',
  styleUrls: ['./drivers-modal.component.scss'],

})
export class DriversModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _store: Store,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  closeModal() {
    this._dialog.closeAll();
  }

  updateDriverLock(id: string, Locked: boolean) {
    let data: IUpdateDriverLock = { id, Locked };
    this._store.dispatch(new FetchUpdateDriverLock(data))
      .pipe(take(1))
      .subscribe(() => this._getDriverUpdate())
  }

  private _getDriverUpdate() {
    this._store.select(DriversStates.getDriversList)
      .subscribe(res => {
        res.dataList.map(item => {
          if (item.id === this.data.id) this.data = item;
        });
      });
    this.data['Locked'] == true ?
      this._snackBar.open('Motorista desbloqueado com sucesso', 'OK',
        {
          duration: 3000,
          panelClass: ['blue-snackbar']
        })
      : this._snackBar.open('Motorista bloqueado com sucesso', 'OK',
        {
          duration: 3000,
          panelClass: ['blue-snackbar']
        });
  }
}