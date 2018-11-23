import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

let pageNum = 2;
@IonicPage()
@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html',
})
export class RecommendPage {
  pageNum = pageNum;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pop() {
    if (pageNum > 2) {
      pageNum--;
    }
    this.navCtrl.pop();
  }

}
