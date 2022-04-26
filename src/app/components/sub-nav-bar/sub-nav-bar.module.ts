import { RouterModule } from '@angular/router';
import { SubNavBarComponent } from './sub-nav-bar.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    SubNavBarComponent
  ],
  exports: [
    SubNavBarComponent
  ],
  imports: [
    RouterModule
  ]
})
export class SubNavBarModule { }
