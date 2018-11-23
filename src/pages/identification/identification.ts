import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,Events, LoadingController, Loading ,ToastController} from 'ionic-angular';
import {CertificationPage} from '../certification/certification';
import {BasicCertPage} from '../basic-cert/basic-cert';
import {SocialCertPage} from '../social-cert/social-cert';
import {OperatorCertPage} from '../operator-cert/operator-cert';
import {BaseUI} from '../baseUI/baseUI'



/**
 * Generated class for the IdentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identification',
  templateUrl: 'identification.html',
})
export class IdentificationPage extends BaseUI{
public identificated=false;
public basiced=false;
public socialed=false;
public operatored=false;
public derail=false;
public eCommerced = false;
public banked = false;

allready=false;
// public banked=false;
// public eCommerced=false;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private events:Events,
    private loadingCtrl:LoadingController,
    private toastCtrl:ToastController
    ) {

      super()
  }


back(){
  this.navCtrl.pop()
}

tocertification(){
  var that=this
  this.events.subscribe('identificatedif',function(res){
that.identificated=res
  })
  this.navCtrl.push(CertificationPage)
}

tobasic(){
  var that=this
  this.events.subscribe('basicedif',function(res){
    console.log(res)
that.basiced=res
  })
  this.navCtrl.push(BasicCertPage)
}

tosocial(){
  var that=this
  this.events.subscribe('socialedif',function(res){
that.socialed=res
  })
  this.navCtrl.push(SocialCertPage)
}


tooperator(){
  var that=this
  this.events.subscribe('operatoredif',function(res){
that.operatored=res
  })
  this.navCtrl.push(OperatorCertPage)
}


submitidentification(){
  if(this.identificated==true&&this.basiced==true&&this.socialed==true&&this.operatored==true&&this.eCommerced==true && this.banked==true){
    if(this.derail==false){
      var loading= super.showLoading(this.loadingCtrl,'正在提交....')
      this.allready=true;
    this.events.publish('readyif',this.allready, Date.now());
      this.navCtrl.parent.select(0)
      this.derail=true
      loading.dismiss()
    }
  }
  else{
    super.showToast(this.toastCtrl,'请完成认证...')
  }
}


}



