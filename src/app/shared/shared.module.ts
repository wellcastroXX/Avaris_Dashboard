import { AppServices } from './../app.service';
import { MaterialModule } from './../material/material.module';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule 
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule 
  ], 
  providers: [
    AppServices
  ]
})
export class SharedModule {}