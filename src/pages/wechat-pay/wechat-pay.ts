import { Component,ViewChild } from '@angular/core';
import { Http,Jsonp,Headers} from '@angular/http';
import { IonicPage, NavController, NavParams, Content, ToastController } from 'ionic-angular';
import { PhotoLibrary} from '@ionic-native/photo-library';
import { ActionSheetController} from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { BaseUI } from '../baseUI/baseUI';
import  "rxjs/Rx"
import {Observable} from "rxjs"
let pageNum = 2;
declare var cordova:any;

@IonicPage()
@Component({
  selector: 'page-wechat-pay',
  templateUrl: 'wechat-pay.html',
})
export class WechatPayPage extends BaseUI{
  @ViewChild(Content) content:Content
  pageNum = pageNum;
  imgsrc = "assets/imgs/code.png";
  monney= 1000055522;
  private headers = new Headers({'content-Type':'application/json'});
  constructor(
    private transfer: FileTransfer,
    private file: File,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private photoLibrary: PhotoLibrary,
    public actionSheetCtrl: ActionSheetController,
    private http:Http,
    private jsonp:Jsonp,
    private toastCtrl:ToastController
    
    ) {
        super()
  }
ngOnInit(): void {
  var url= "";
  //get提取数据
  this.http.get(url)
  .subscribe((data)=>{
    console.log(data);
  },(err)=>{
    console.log(err);
  });
  //post提交数据
//   this.http.post("url",JSON.stringify({}),{headers:this.headers})
//  .subscribe(function(res){
//    console.log(res.json());
//  });
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



  saveImage() {
    const actionSheet=this.actionSheetCtrl.create({
      title:'提示',
      buttons:[
        {
          text:'保存本地',
          handler:()=>{
            this.photoLibrary.requestAuthorization().then(() => {
              this.photoLibrary.getLibrary().subscribe(
                {
                next: library => {
                  console.log("保存图片");
                    library.forEach(function(libraryItem) {
                      console.log(libraryItem.id);          // ID of the photo
                      console.log(libraryItem.photoURL);    // Cross-platform access to photo
                      console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
                      console.log(libraryItem.fileName);
                      console.log(libraryItem.width);
                      console.log(libraryItem.height);
                      console.log(libraryItem.creationDate);
                      console.log(libraryItem.latitude);
                      console.log(libraryItem.longitude);
                      console.log(libraryItem.albumIds); 
                      });
                  this.photoLibrary.saveImage('imgsrc','Download').then(()=>{
                    // alert('保存成功')
                    super.showToast(this.toastCtrl,'保存成功').present()
                  })
                },
                error: err => { alert('保存失败') },
                complete: () => { console.log('done getting photos'); }
              });
            })
            .catch(err =>alert('失败') );
          }
        },
        {
          text:'取消',
          role:'cancel'
        }
      ]
    })
    actionSheet.present();
  }




}

