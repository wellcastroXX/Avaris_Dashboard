import { ToSignStates } from './features/to-sign/presentation/store/to-sign.store';
import { TripsRepositoryImpl } from './features/trips/data/repositories/trips.repository.impl';
import { UsersStates } from './features/users/presentation/store/user.store';
import { DriversStates } from './features/drivers/presentation/store/drivers.store';
import { DriversRepositoryImpl } from './features/drivers/data/repositories/drivers.repository.impl';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { UsersDataSource, UsersDataSourceImpl } from './features/users/data/datasources/user.data-source';
import { UsersRepositoryImpl } from './features/users/data/repositories/users.repository.impl';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxsModule } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { UsersRepository } from './features/users/domain/repositories/users.repository';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DriversDataSource, DriversDataSourceImpl } from './features/drivers/data/datasources/drivers.data-source';
import { DriversRepository } from './features/drivers/domain/repositories/drivers.repository';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripsRepository } from './features/trips/domain/repositories/trips.repository';
import { TripsDataSource, TripsDataSourceImpl } from './features/trips/data/datasources/trips.data-source';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    CoreModule,
    TranslateModule.forRoot(),
    NgxsModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      DriversStates,
      UsersStates,
      ToSignStates
    ])
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-BR'
    },
    { provide: UsersRepository, useClass: UsersRepositoryImpl },
    { provide: UsersDataSource, useClass: UsersDataSourceImpl },

    { provide: DriversRepository, useClass: DriversRepositoryImpl },
    { provide: DriversDataSource, useClass: DriversDataSourceImpl },

    { provide: TripsRepository, useClass: TripsRepositoryImpl },
    { provide: TripsDataSource, useClass: TripsDataSourceImpl },
    // AuthGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
