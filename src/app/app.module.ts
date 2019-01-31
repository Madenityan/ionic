import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterPage} from './register/register.page';
import {HomePage} from './tabs/home/home.page';
import {FormsModule} from '@angular/forms';
import {HomePageModule} from './tabs/home/home.module';
import {RegisterPageModule} from './register/register.module';
import {AboutPage} from './tabs/about/about.page';
import {ContactPage} from './tabs/contact/contact.page';
import {AboutPageModule} from './tabs/about/about.module';
import {ContactPageModule} from './tabs/contact/contact.module';
import {LoginPage} from './login/login.page';
import {LoginPageModule} from './login/login.module';
import {TabsPage} from './tabs/tabs.page';
import {TabsPageModule} from './tabs/tabs.module';

@NgModule({
  declarations: [
      AppComponent,
  ],
  entryComponents: [
      HomePage,
      RegisterPage,
      AboutPage,
      ContactPage,
      LoginPage,
      TabsPage
  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      HomePageModule,
      RegisterPageModule,
      AboutPageModule,
      ContactPageModule,
      LoginPageModule,
      TabsPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
