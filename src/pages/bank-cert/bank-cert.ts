import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, Content } from 'ionic-angular';

let pageNum = 2;
@IonicPage()
@Component({
  selector: 'page-bank-cert',
  templateUrl: 'bank-cert.html',
})
export class BankCertPage {
  @ViewChild(Content) content:Content
  pageNum = pageNum;
  public msg:any;
  public bank:any;
  public tel:any;
  public cardcode:any;
  public banked:boolean;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public events:Events) {
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }
  pop() {
    if (pageNum > 2) {
      pageNum--;
    }
    this.navCtrl.pop();
  }

  submit(){
    this.msg=[{
      bank:this.bank,
      tel:this.tel,
      cardcode:this.cardcode
    }]
    this.events.publish('changebank',this.msg, Date.now());
    this.navCtrl.pop()
      }



}
