import { TripsComponent } from './presentation/components/trips.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TripsListComponent } from './presentation/components/trips-list/trips-list.component';

const routes: Routes = [
  {
    path: '', component: TripsComponent,
    children: [
      {
        path: 'list', component: TripsListComponent
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
export class TripsRoutingModule { }