import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content,ToastController,LoadingController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {ForgottenPage} from '../forgotten/forgotten';
import {Http,Jsonp,Headers} from '@angular/http';
import { BaseUI } from '../baseUI/baseUI';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI{
  private headers = new Headers({'Content-Type': 'application/json'});

  public tel:any;
  public psd:any;
@ViewChild(Content) content:Content
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private toastCtrl:ToastController,
     private http:Http,
     private jsonp:Jsonp,
     private loadingCtrl:LoadingController) {
       super()
  }

  ionViewDidLoad() {
    console.log(this.tel,this.psd);
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }
  toRegister(){
    this.navCtrl.push(RegisterPage)
  }

  tofogten(){
    this.navCtrl.push(ForgottenPage)
  }

  login(){
    if(this.tel!=undefined&&this.psd!=undefined){
      var url=''
      var loading=super.showLoading(this.loadingCtrl,'提交中...')
      this.http.post(url,JSON.stringify({tel:this.tel,psd:this.psd}),{headers:this.headers}).subscribe(res =>
        console.log(res.json())
        )
        loading.dismiss()
    }else{
      super.showToast(this.toastCtrl,'请填写完整...')
    }
  }
}
