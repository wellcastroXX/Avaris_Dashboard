import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-trips-modal',
  templateUrl: './trips-modal.component.html',
  styleUrls: ['./trips-modal.component.scss'],

})
export class TripsModalComponent implements OnInit {
  public userSelected: any;
  public driverSelected: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._getUserSelected();
    this._getDriverSelected();
  }

  closeModal() {
    this._dialog.closeAll();
  }

  private _getUserSelected() {
    this.userSelected = this.data?.userList.find(item => this.data.item.ID === item.ID); 
  }

  private _getDriverSelected() {
    this.driverSelected = this.data?.driverList.find(item => this.data.item.motorista === item.ID);
  }
}