import {Component, ViewChild} from '@angular/core';

import { NavController,Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider:Slides;
  mySlideOptions={
    autoplay:2000,
    initialSlide:0,
    pager:true,
    loop:true,
    speed:300
  };
  searchQuery: string = '';
  items: string[];
  slidesInf:any;


  constructor(public navCtrl: NavController) {
    this.initializeItems();

  }
  initializeItems() {
    this.slidesInf=[
      {
        title: 'Welcome to the Docs!',
        description: 'The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.',
        image: 'assets/img/t1.jpg',
      },
      {
        title: 'What is Ionic?',
        description: '<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.',
        image: 'assets/img/t2.jpg',
      },
      {
        title: 'What is Ionic Cloud?',
        description: 'The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'assets/img/t3.jpg',
      }
    ];
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];

  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  pushItem(index: string){
    // this.navCtrl.push(GoodsListPage,{
    //   type:index
    // });
  }

}
