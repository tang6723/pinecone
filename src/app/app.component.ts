import { Component } from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  nav: NavController;
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      //退出按钮重写******开始******
      document.addEventListener('backbutton', () => {
        let activeVC = this.nav.getActive();
        let page = activeVC.instance;

        if (!(page instanceof TabsPage)) {
          if (!this.nav.canGoBack()) {
            console.log('检测到在根视图点击了返回按钮。');
            return platform.exitApp();
          }
          console.log('检测到在子路径中点击了返回按钮。');
          return this.nav.pop();
        }

        // let tabs = page.tab;
        // let activeNav = tabs.getSelected();
        //
        // if (!activeNav.canGoBack()) {
        //   console.log('检测到在 tab 页面的顶层点击了返回按钮。');
        //   return platform.exitApp();
        // }
        //
        // console.log('检测到当前 tab 弹出层的情况下点击了返回按钮。');
        // return activeNav.pop();

      }, false);

      //退出按钮重写******结束******




    });
  }
}
