import { TripsListComponent } from './presentation/components/trips-list/trips-list.component';
import { TripsComponent } from './presentation/components/trips.component';
import { TripsModalComponent } from './presentation/components/trips-modal/trips-modal.component';
import { SubNavBarModule } from '../../components/sub-nav-bar/sub-nav-bar.module';
import { SideNavBarModule } from '../../components/side-nav-bar/side-nav-bar.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { TripsRoutingModule } from './trips.routing';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    TripsComponent,
    TripsModalComponent,
    TripsListComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    SubNavBarModule,
    SideNavBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TripsModule { }