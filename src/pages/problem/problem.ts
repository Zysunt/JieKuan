import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProblemDetailPage} from '../problem-detail/problem-detail'

/**
 * Generated class for the ProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html',
})
export class ProblemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProblemPage');
  }

  toproblemdetail(){
    this.navCtrl.push(ProblemDetailPage)
  }

}
