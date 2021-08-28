import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './modules/primeng/primeng.module';
import { NavComponent } from './layout/nav/nav.component';
import { KullaniciModule } from './modules/kullanici/kullanici.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContentComponent } from './layout/content/content.component';
import { FormsModule } from '@angular/forms';
import { ProjeModule } from './modules/proje/proje.module';
import { NgZorroModule } from './modules/ngzorro/ngzorro.module';


@NgModule({
  declarations: [AppComponent, NavComponent, ContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    PrimengModule,
    NgZorroModule,
    KullaniciModule,
    ProjeModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
