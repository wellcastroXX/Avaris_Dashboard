import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SideNavBarComponent } from './side-nav-bar.component';

@NgModule({
  declarations: [
    SideNavBarComponent
  ],
  exports: [
    SideNavBarComponent
  ],
  imports: [
    RouterModule
  ] 
})
export class SideNavBarModule { }