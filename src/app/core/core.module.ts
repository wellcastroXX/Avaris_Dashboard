import { AuthService } from './auth/auth.service';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    AuthService
  ]

})
export class CoreModule { }