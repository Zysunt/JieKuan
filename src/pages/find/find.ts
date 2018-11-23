import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FindDetailPage} from '../find-detail/find-detail'

/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
public find=[
  {
    imgSrc:'assets/imgs/find/picture_1@2x.png',
    title:'新年专享活动'
  },
  {
    imgSrc:'assets/imgs/find/picture_2@2x.png',
    title:'现金红包活动'
  }
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPage');
  }


  todetail(){
    this.navCtrl.push(FindDetailPage)
  }
}
