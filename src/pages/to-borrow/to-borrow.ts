import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { MyCouponPage} from '../my-coupon/my-coupon';
import { Http,Jsonp,Headers} from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-to-borrow',
  templateUrl: 'to-borrow.html',
})
export class ToBorrowPage {
public quickapp='10';
public msgmoney='1';
public adminmoney='10';
public coupon_val='10';
public should_pay='1000';
private headers = new Headers({'content-Type':'application/json'});
money='1000';
days='30';
express = "50";
accrual = "24";
manage = "1000";
discount = "-10";
public isBorrow:boolean;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public events:Events,
     private http:Http,
     private jsonp:Jsonp) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     //post提交数据
     var url ="";
  this.http.post(url,JSON.stringify({}),{headers:this.headers})
 .subscribe(function(res){
   console.log(res.json());
 });
  }
  borrow(){
    this.isBorrow=true;
    this.events.publish('borrowif',this.isBorrow, Date.now());
    this.navCtrl.pop();
    
  }
  myCoupon(){
    this.navCtrl.push(MyCouponPage);
  }
}
