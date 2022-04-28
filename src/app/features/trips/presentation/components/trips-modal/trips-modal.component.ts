import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-trips-modal',
  templateUrl: './trips-modal.component.html',
  styleUrls: ['./trips-modal.component.scss'],

})
export class TripsModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  closeModal() {
    this._dialog.closeAll();
  }
}