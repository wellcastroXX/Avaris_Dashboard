import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/drive.service';

@Component({
  selector: 'drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],

})
export class DriversComponent implements OnInit {

  dataList: Array<any>;

  constructor(private _driverService: DriverService) {

  }
  ngOnInit() {
    this.getDriversList();

  }

  private getDriversList() {
    this._driverService.getDriversList().subscribe(value => {
      this.dataList = value.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    })
  }
}