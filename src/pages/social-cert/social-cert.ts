import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, Content,ToastController } from 'ionic-angular';
import {Http,Jsonp,Headers} from '@angular/http';
import { BaseUI } from '../baseUI/baseUI';

let pageNum = 2;
@IonicPage()
@Component({
  selector: 'page-social-cert',
  templateUrl: 'social-cert.html',
})
export class SocialCertPage extends BaseUI{
@ViewChild(Content) content:Content
  skittlesData: any;
  skittles1:any
  skittles2:any;
  pageNum = pageNum;

  private headers = new Headers({'Content-Type': 'application/json'});

  public tel2:any
  public name2:any;
  public name:any;
  public tel:any;
  public socialed:boolean;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public events:Events,
     private toastCtrl:ToastController,
     private http:Http,
     private jsonp:Jsonp) {
       super();
    this.skittlesData = [
      { text: '家人', value: '家人' },
      { text: '朋友', value: '朋友' },
      { text: '陌生人', value: '陌生人' },
      { text: '同事', value: '同事' },
      { text: '其他', value: '其他' }
  ];
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
  compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
}

submitsocial(){
  if(this.name!=''&&this.tel!=''&&this.name2!=''&&this.tel2!=''&&this.skittles1!=undefined&&this.skittles2!=undefined){
    var url=''
    this.http.post(url,JSON.stringify({relationship1:this.skittles1,name:this.name,tel:this.tel,
    relationship:this.skittles2,name2:this.name2,tel2:this.tel2}),{headers:this.headers}).subscribe(res =>
     console.log(res.json())
      )
    this.socialed=true
    this.events.publish('socialedif',this.socialed, Date.now());
    this.navCtrl.pop()
  }else{
    super.showToast(this.toastCtrl,'请填写完整...')
    this.socialed=false
  }

    }

    ngAfterContentChecked(): void {
      //Called after every check of the component's or directive's content.
      //Add 'implements AfterContentChecked' to the class.
      // console.log(this.skittles)
      // console.log(this.skittles2)
    }
}
