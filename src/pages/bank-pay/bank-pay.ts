import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content ,ActionSheetController,Platform} from 'ionic-angular';
import { BindingFlags } from '@angular/core/src/view';
import {AlipayPage} from '../alipay/alipay';
import {WechatPayPage} from '../wechat-pay/wechat-pay';

import { StatusBar} from '@ionic-native/status-bar';
let pageNum = 2;
@IonicPage()
@Component({
  selector: 'page-bank-pay',
  templateUrl: 'bank-pay.html',
})
export class BankPayPage {
  @ViewChild(Content) content: Content;
  pageNum = pageNum;
  flag = true;
  btn=false;
  monney = "10000";
  banknum = "4578";
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
}
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public actionsheetCtrl:ActionSheetController,
    public platform:Platform,
    private statusBar:StatusBar
    ) {
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.statusBar.hide()
//this.statusBar.overlaysWebView(false);

  }
  showBox(){
    this.btn=true
    
  }
  
//倒计时
settime() {
  if (this.verifyCode.countdown == 0) {
    this.verifyCode.countdown=60;
      this.verifyCode.verifyCodeTips = "获取验证码";
      this.verifyCode.disable = true;
      return;
  } else {
      this.verifyCode.countdown--;
      this.verifyCode.disable=false;
  }
  setTimeout(() => {
      this.verifyCode.verifyCodeTips = "重新获取" + this.verifyCode.countdown + "秒";
          this.settime();
  }, 1000);
}
  pop() {
    if (pageNum > 2) {
      pageNum--;
    }
    this.navCtrl.pop();
  }
hideBox(){
  this.btn =false;
}

scrollTo() {
  　　window.addEventListener('native.keyboardshow',(e:any) =>{
  　　　　this.content.scrollTo(0,e.keyboardHeight);
  　});
}
choosepay(){
  let actionSheet = this.actionsheetCtrl.create({
    title: '选择支付方式',
    cssClass: 'action-sheets-basic-page',
    buttons: [
      {
        text: '支付宝',
        // icon: !this.platform.is('ios') ? 'share' : null,
        handler: () => {
          this.navCtrl.push(AlipayPage)
        }
      },
      {
        text: '微信',
        // icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
        handler: () => {
          this.navCtrl.push(WechatPayPage)
        }
      },
     
      {
        text: '取消',
        role: 'cancel', // will always sort to be on the bottom
        icon: !this.platform.is('ios') ? 'close' : null,
        handler: () => {
        }
      }
    ]
  });
  actionSheet.present();
}
}
