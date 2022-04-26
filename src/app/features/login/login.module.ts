import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './presentation/components/login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
