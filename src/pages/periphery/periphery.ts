import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Periphery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-periphery',
  templateUrl: 'periphery.html'
})
export class PeripheryPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Periphery Page');
  }

}
