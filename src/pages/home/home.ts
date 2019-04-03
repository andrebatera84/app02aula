import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public obj: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPage(){
    this.navCtrl.push(DetalhesPage);
  }
  }

  