import { ToSignComponent } from './presentation/components/to-sign.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToSignListComponent } from './presentation/components/to-sign-list/to-sign-list.component';

const routes: Routes = [
  {
    path: '', component: ToSignComponent,
    children: [
      {
        path: 'list', component: ToSignListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ToSignRoutingModule { }