import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppConfigService } from './services/app-config.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  exports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    {
      provide: FirebaseOptionsToken,
      deps: [AppConfigService],
      useFactory: (fcs: AppConfigService) => fcs.firebaseWebConfig,
    },
  ],
})
export class AppFirebaseModule { }
