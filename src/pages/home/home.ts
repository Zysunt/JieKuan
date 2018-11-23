import { Component, ViewChild } from '@angular/core';
import { NavController,Events,Slides } from 'ionic-angular';
import {ToBorrowPage} from '../to-borrow/to-borrow';
import {AutoMonPage} from '../auto-mon/auto-mon';
import {RecommendPage} from '../recommend/recommend';
import { MessagePage} from '../message/message';
import { StatusBar} from '@ionic-native/status-bar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ava_money='1000.00';
  public should_pay='1000.00';
  public enddate=20;
  @ViewChild(Slides) slides:Slides;
step:number=3;
isChecking=false;
checkingstep:number=1;
date:any;
  constructor(public navCtrl: NavController,
    public events:Events,
    private statusBar:StatusBar) {

  }
  
  ngOnInit(): void {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#564eF1');
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.slides.autoplayDisableOnInteraction = false
  }
msg(){
  this.navCtrl.push(MessagePage);
}
  shenqing(){
    this.navCtrl.parent.select(1)
    // this.step=2
  }
  jiekuan(){
var that=this
this.events.subscribe('borrowif',function(res){
  // that.isChecking=res;
  that.step=3;
})
    this.navCtrl.push(ToBorrowPage)
  }
  restart(){
    this.isChecking=false;
    this.checkingstep=1;
  }

  toauto(){
    this.navCtrl.push(AutoMonPage)
  }

  torecommend(){
    this.navCtrl.push(RecommendPage)
  }
  nextchecking(){
    this.checkingstep=2
  }
  checkingend(){
    this.isChecking=false;
    this.step=2
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    var that=this
  this.events.subscribe('readyif',function(res){
that.isChecking=res
that.checkingstep=1
if(that.step==3){
  that.isChecking=false;
}
  })
  }
}
