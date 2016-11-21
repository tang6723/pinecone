import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {CartPage} from "../pages/cart/cart";
import {PeripheryPage} from "../pages/periphery/periphery";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CartPage,
    PeripheryPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
        backButtonText: '返回',
        iconMode: 'ios',
        mode: 'ios',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        tabsPlacement: 'bottom',
        pageTransition: 'ios'
      }, {}
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CartPage,
    PeripheryPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
