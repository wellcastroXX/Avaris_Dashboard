import { UsersComponent } from './presentation/components/users.component';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
