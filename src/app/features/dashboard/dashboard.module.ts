import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    DashboardRoutingModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
