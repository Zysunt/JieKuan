import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, Content ,ToastController} from 'ionic-angular';
import {Http,Jsonp,Headers} from '@angular/http'
import { BaseUI } from '../baseUI/baseUI';

let pageNum = 2;
@IonicPage()
@Component({
  selector: 'page-operator-cert',
  templateUrl: 'operator-cert.html',
})
export class OperatorCertPage extends BaseUI{
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
}
  @ViewChild(Content) content:Content
  pageNum = pageNum;
  public tel:any;
  public psd:any;
  public idcode:any;
  public operatored:boolean;

  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public events:Events,
     private http:Http,
     private jsonp:Jsonp,
     private toastCtrl:ToastController) {
       super()
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
  submitoperator(){
    if(this.tel!=undefined&&this.psd!=undefined&&this.idcode!=undefined){
      var url=''
      this.http.post(url,JSON.stringify({tel:this.tel,psd:this.psd,idcode:this.idcode}),{headers:this.headers}).subscribe(res =>
        console.log(res.json())
        )
      this.operatored=true;
      this.events.publish('operatoredif',this.operatored, Date.now());
      this.navCtrl.pop();
    }else{
super.showToast(this.toastCtrl,'请填写完整...')
      this.operatored=false
    }

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
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      // console.log(this.tel)
    }
}
