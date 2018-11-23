import { Component,ViewChild } from '@angular/core';
import {Http,Jsonp,Headers} from '@angular/http'
import { IonicPage, NavController, NavParams,Events, Content,ToastController } from 'ionic-angular';
import { BaseUI } from '../baseUI/baseUI';

let pageNum = 2;

@IonicPage()
@Component({
  selector: 'page-basic-cert',
  templateUrl: 'basic-cert.html',
})
export class BasicCertPage extends BaseUI{
  @ViewChild(Content) content:Content
  pageNum = pageNum;
public qqnum:any;
public living:any;
public factory:any;
public fac_tel:any;
public fac_location:any;
public skill:any;

private headers = new Headers({'Content-Type': 'application/json'});

  public basiced:boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private events:Events,
    private toastCtrl:ToastController,
    private http:Http,
    private jsonp:Jsonp) {
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicCertPage');
  }
  submitbasic(){
    if(this.qqnum!=undefined&&this.living!=undefined&&this.factory!=undefined&&
      this.fac_tel!=undefined&&this.fac_location!=undefined&&this.skill!=undefined){
        var url='';
        this.http.post(url,JSON.stringify({qqnum:this.qqnum,living:this.living,
          factory:this.factory,fac_tel:this.fac_tel,fac_location:this.fac_location,skill:this.skill}),
          {headers:this.headers}).subscribe(res =>
            console.log(res.json())
            )
            this.basiced=true
            this.events.publish('basicedif',this.basiced, Date.now());
            this.navCtrl.pop()
      }else{
        super.showToast(this.toastCtrl,'请填写完整...')
      }    
     
      }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.qqnum)
}
}
