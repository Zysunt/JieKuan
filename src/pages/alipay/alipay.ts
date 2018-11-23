import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

let pageNum = 2;

@IonicPage()
@Component({
  selector: 'page-alipay',
  templateUrl: 'alipay.html',
})
export class AlipayPage {
  public willpay=100;
  @ViewChild(Content) content:Content
  pageNum = pageNum;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pop() {
    if (pageNum > 2) {
      pageNum--;
    }
    this.navCtrl.pop();
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }
}
