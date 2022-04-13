import { DriversComponent } from './presentation/components/drivers.component';
import { DriversRoutingModule } from './drivers.routing';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    DriversComponent
  ],
  imports: [
    CommonModule, 
    DriversRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DriversModule { }