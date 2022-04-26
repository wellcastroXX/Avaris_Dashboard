import { SideNavBarModule } from './../../components/side-nav-bar/side-nav-bar.module';
import { SubNavBarModule } from './../../components/sub-nav-bar/sub-nav-bar.module';
import { UsersModalComponent } from './presentation/components/users-modal/users-modal.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UsersComponent } from './presentation/components/users.component';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    UsersComponent,
    UsersModalComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    SubNavBarModule,
    SideNavBarModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
