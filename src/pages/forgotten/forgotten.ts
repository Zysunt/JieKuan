import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content,ToastController,LoadingController } from 'ionic-angular';
import {Http,Jsonp,Headers} from '@angular/http'
import { BaseUI } from '../baseUI/baseUI';

/**
 * Generated class for the ForgottenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotten',
  templateUrl: 'forgotten.html',
})
export class ForgottenPage extends BaseUI{
  private headers = new Headers({'Content-Type': 'application/json'});

  public tel=1234567890;
  public msgcode:any;
  public newpsd:any;
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
}
@ViewChild(Content) content:Content
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private http:Http,
     private jsonp:Jsonp,
     private toastCtrl:ToastController,
     private loadingCtrl:LoadingController) {
       super()
  }

  ionViewDidLoad() {
    console.log(this.msgcode);
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }
  submit(){
    if(this.msgcode!=undefined&&this.newpsd!=undefined&&this.tel!=undefined){
      var url=''
   var loading=super.showLoading(this.loadingCtrl,'提交中...')
      this.http.post(url,JSON.stringify({tel:this.tel,msgcode:this.msgcode,newpsd:this.newpsd}),{headers:this.headers}).subscribe(res =>
        console.log(res.json())
        )
        loading.dismiss()
        this.navCtrl.popToRoot()
        this.navCtrl.parent.select(0)
    }else{
      super.showToast(this.toastCtrl,'请填写完整...')
    }

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

}
