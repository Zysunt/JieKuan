import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import {BankCertPage} from '../bank-cert/bank-cert'

/**
 * Generated class for the MyCreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-credit',
  templateUrl: 'my-credit.html',
})
export class MyCreditPage {
public bank:any;
public cardcode:any;
public hascard=false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCreditPage');
  }

  changecredit(){
    var that= this
    this.events.subscribe('changebank',function(res){
      console.log(res)
that.bank=res[0].bank
that.cardcode=res[0].cardcode
    })
    this.navCtrl.push(BankCertPage)
  }

  addcard(){
    var that= this
    this.events.subscribe('changebank',function(res){
      console.log(res)
that.bank=res[0].bank
that.cardcode=res[0].cardcode
if(that.bank!=null&&that.cardcode!=null){
  that.hascard=true;
}
    })
    this.navCtrl.push(BankCertPage)
    
  }

}
