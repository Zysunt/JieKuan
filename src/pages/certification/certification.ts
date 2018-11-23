import { Component,ViewChild } from '@angular/core';
import {Http,Jsonp,Headers} from '@angular/http'
import { IonicPage, NavController, NavParams,Events, 
  Content,ViewController,LoadingController,ToastController,
  ActionSheetController,normalizeURL,Platform } from 'ionic-angular';
import {Camera,CameraOptions} from '@ionic-native/camera';
import {File} from '@ionic-native/file';
import {BaseUI} from '../baseUI/baseUI'
import {FileTransfer,FileUploadOptions,FileTransferObject} from '@ionic-native/file-transfer';
import {FilePath} from '@ionic-native/file-path'


declare var cordova:any; //导入第三方的库定义到 TS 项目中
/**
 * Generated class for the CertificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-certification',
  templateUrl: 'certification.html',
})
export class CertificationPage extends BaseUI{
  @ViewChild(Content) content:Content
 public identificated:boolean;
 public name:any;
 public identify:any;

 private headers = new Headers({'Content-Type': 'application/json'});

 public imgzheng:string=null;
 public imgfan:string=null;
 public imghand:string=null;
 
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private events:Events,
     private camera:Camera,
     private filetransfer:FileTransfer,
     private file:File,
     private loadingCtrl:LoadingController,
     private toastCtrl:ToastController,
     private viewCtrl:ViewController,
     private actionSheetCtrl:ActionSheetController,
     private transfer:FileTransfer,
     private platform:Platform,
     private filePath:FilePath,
     private http:Http,
     private jsonp:Jsonp) {
       super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CertificationPage');
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }

  submit(){
if(this.name!=null&&this.identify!=null){
  var url=''
  this.http.post(url,JSON.stringify({name:this.name,identify:this.identify}),{headers:this.headers}).subscribe(res =>
    console.log(res.json())
    )
  this.identificated=true;
  this.events.publish('identificatedif',this.identificated, Date.now());
this.navCtrl.pop()
}else{
  super.showToast(this.toastCtrl,'请填写完整...')
  this.identificated=false;
}

  }





// 上传图片
  dismiss(){
    this.viewCtrl.dismiss();
    }

//获取图片方式
    presentActionSheet1() {
      let actionSheet = this.actionSheetCtrl.create({
        title: '选择图片',
        buttons: [
          {
            text: '从图片库中选择',
            handler: () => {
              this.takePicture1(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: '使用相机',
            handler: () => {
              this.takePicture1(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: '取消',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();
    }

    presentActionSheet2() {
      let actionSheet = this.actionSheetCtrl.create({
        title: '选择图片',
        buttons: [
          {
            text: '从图片库中选择',
            handler: () => {
              this.takePicture2(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: '使用相机',
            handler: () => {
              this.takePicture2(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: '取消',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();
    }

    presentActionSheet3() {
      let actionSheet = this.actionSheetCtrl.create({
        title: '选择图片',
        buttons: [
          {
            text: '从图片库中选择',
            handler: () => {
              this.takePicture3(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: '使用相机',
            handler: () => {
              this.takePicture3(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: '取消',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();
    }


    takePicture1(sourceType) {
      //定义相机的一些参数
      const options:CameraOptions = {
        quality: 100, //图片的质量
        sourceType: sourceType,
        saveToPhotoAlbum: true, //是否保存拍摄的照片到相册中去
        correctOrientation: true, //是否纠正拍摄的照片的方向
        destinationType:this.camera.DestinationType.DATA_URL,
        encodingType:this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE
      };
  
      //获取图片的方法
      this.camera.getPicture(options).then((imagePath) => {   
     let base64Image='data:image/jpeg;base64,'+imagePath;
     this.imgzheng=base64Image
      }, (err) => {
        super.showToast(this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
      });
    }

    takePicture2(sourceType) {
      //定义相机的一些参数
      const options:CameraOptions = {
        quality: 100, //图片的质量
        sourceType: sourceType,
        saveToPhotoAlbum: true, //是否保存拍摄的照片到相册中去
        correctOrientation: true, //是否纠正拍摄的照片的方向
        destinationType:this.camera.DestinationType.DATA_URL,
        encodingType:this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE
      };
  
      //获取图片的方法
      this.camera.getPicture(options).then((imagePath) => {   
     let base64Image='data:image/jpeg;base64,'+imagePath;
     this.imgfan=base64Image
      }, (err) => {
        super.showToast(this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
      });
    }

    takePicture3(sourceType) {
      //定义相机的一些参数
      const options:CameraOptions = {
        quality: 100, //图片的质量
        sourceType: sourceType,
        saveToPhotoAlbum: true, //是否保存拍摄的照片到相册中去
        correctOrientation: true, //是否纠正拍摄的照片的方向
        destinationType:this.camera.DestinationType.DATA_URL,
        encodingType:this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE
      };
  
      //获取图片的方法
      this.camera.getPicture(options).then((imagePath) => {   
     let base64Image='data:image/jpeg;base64,'+imagePath;
     this.imghand=base64Image
      }, (err) => {
        super.showToast(this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
      });
    }


// //为文件生成一个新的文件名
createFileName() {
  var d = new Date(),
    n = d.getTime(),
    newFileName = n + ".jpg"; //拼接文件名
  return newFileName;
}

//处理图片的路径为可以上传的路径
public pathForImage(img) {
  
  if (img === null) {
    return '';
  } else {
    
    return normalizeURL(cordova.file.dataDirectory + img);
    
  }
}

uploadImage() {
  var url = '';
  var targetPath = normalizeURL(this.imgzheng);
  var filename = "zheng.jpg"; //定义上传后的文件名

  //fileTransfer 上传的参数
  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params: { 'fileName': filename }
  };

  const fileTransfer = this.transfer.create();

  var loading = super.showLoading(this.loadingCtrl, "上传中...");

  //开始正式地上传
  fileTransfer.upload(targetPath, url, options).then(data => {
    loading.dismiss();
    super.showToast(this.toastCtrl, "图片上传成功。");
    //在用户看清弹窗提示后进行页面的关闭
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 3000);
  }, err => {
    loading.dismiss();
    super.showToast(this.toastCtrl, "图片上传发生错误，请重试。");
  });
}
}
