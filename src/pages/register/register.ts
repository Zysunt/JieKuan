import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content,ToastController,LoadingController } from 'ionic-angular';
import {Http,Jsonp,Headers} from '@angular/http';
import { BaseUI } from '../baseUI/baseUI';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI{
  private headers = new Headers({'Content-Type': 'application/json'});

  public tel:any;
  public msgcode:any;
  public newpsd:any;
  public agreed=false;
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
}
@ViewChild(Content) content:Content
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl:ToastController,
    private http:Http,
    private jsonp:Jsonp,
    private loadingCtrl:LoadingController
    ) {
      super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }

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


agree(){
console.log(this.agreed)
// alert('aa')
}

register(){
  if(this.tel!=undefined&&this.msgcode!=undefined&&this.newpsd!=undefined&&this.agreed==true){
    var url=''
    var loading=super.showLoading(this.loadingCtrl,'注册中...')
    this.http.post(url,JSON.stringify({tel:this.tel,msgcode:this.msgcode,psd:this.newpsd}),{headers:this.headers})
    .subscribe(res =>
      console.log(res.json())
      )
      loading.dismiss()
  }else{
    super.showToast(this.toastCtrl,'请填写完整...')
  }
}
}
