import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController} from 'ionic-angular';
import {Http,Jsonp,Headers} from '@angular/http'
import { BaseUI } from '../baseUI/baseUI';

/**
 * Generated class for the ChangepsdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepsd',
  templateUrl: 'changepsd.html',
})
export class ChangepsdPage extends BaseUI{
public tel:any;
public idcode:any;
public newpsd:any;

  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
}
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
    console.log('ionViewDidLoad ChangepsdPage');
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

submit(){
  if(this.tel!=undefined&&this.idcode!=undefined&&this.newpsd!=undefined){
    var url=''
    var loading=super.showLoading(this.loadingCtrl,'提交中...')
    this.http.post(url,JSON.stringify({tel:this.tel,idcode:this.idcode,newpsd:this.newpsd})).subscribe(res =>
      console.log(res.json())
      )
      loading.dismiss()
  }else{
    super.showToast(this.toastCtrl,'请填写完整...')
  }
}
}
