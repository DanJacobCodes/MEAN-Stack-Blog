import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey:  "AIzaSyACYQ1vKZYfXRUbUdV-ivQtKSycBqFCO0U",
  authDomain:  "chat-app-34d2f.firebaseapp.com",
  databaseURL: "https://chat-app-34d2f.firebaseio.com",
  storageBucket: "chat-app-34d2f.appspot.com"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
