import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ItemSliding } from 'ionic-angular';

/**
 * Generated class for the MyCouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-coupon',
  templateUrl: 'my-coupon.html',
})
export class MyCouponPage {
  chats: any[];
  logins: any[];
  apptype='not';
  used = false;



  apps: any = {
    'not': [
      {
        val:'25t',
        datestart:'2018-10-11',
        dateend:'2018-10-18',
        used:false
      },
      {
        val:'50t',
        datestart:'2018-10-11',
        dateend:'2018-10-18',
        used:false
      }
    ],
    'has': [
      {
        val:'25s',
        datestart:'2018-10-11',
        dateend:'2018-10-18',
        used:false
      },
      {
        val:'50s',
        datestart:'2018-10-11',
        dateend:'2018-10-18',
        used:false
      }
    ],
    'had': [
      {
        val:'25d',
        datestart:'2018-10-11',
        dateend:'2018-10-18',
        used:false
      },
      {
        val:'50d',
        datestart:'2018-10-11',
        dateend:'2018-10-18',
        used:false
      }
    ]
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl:ToastController) {
    this.chats = [
      {
        img: './assets/avatar-cher.png',
        name: 'Cher',
        message: 'Ugh. As if.',
        time: '9:38 pm'
      }, {
        img: './assets/avatar-dionne.png',
        name: 'Dionne',
        message: 'Mr. Hall was way harsh.',
        time: '8:59 pm'
      }, {
        img: './assets/avatar-murray.png',
        name: 'Murray',
        message: 'Excuse me, "Ms. Dione."',
        time: 'Wed'
      }];
  
      this.logins = [
      {
          icon: 'logo-twitter',
          name: 'Twitter',
          username: 'admin',
      }, {
          icon: 'logo-github',
          name: 'GitHub',
          username: 'admin37',
      }, {
          icon: 'logo-instagram',
          name: 'Instagram',
          username: 'imanadmin',
      }, {
          icon: 'logo-codepen',
          name: 'Codepen',
          username: 'administrator',
      }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCouponPage');
  }
  status(type,i){
    this.apps[type][i].used = true;
    // console.log(this.apps[type])
  }

  more(item: ItemSliding) {
    console.log('More');
    item.close();
  }

  delete(item: ItemSliding) {
    console.log('Delete');
    item.close();
  }

  mute(item: ItemSliding) {
    console.log('Mute');
    item.close();
  }

  archive(item: ItemSliding) {
    this.expandAction(item, 'archiving', 'Chat was archived.');
  }

  download(item: ItemSliding) {
    this.expandAction(item, 'downloading', 'Login was downloaded.');
  }

  expandAction(item: ItemSliding, _: any, text: string) {
    // TODO item.setElementClass(action, true);

    setTimeout(() => {
      const toast = this.toastCtrl.create({
        message: text
      });
      toast.present();
      // TODO item.setElementClass(action, false);
      item.close();

      setTimeout(() => toast.dismiss(), 2000);
    }, 1500);
  }

  getItems(type: any) {
    return this.apps[type];
  }
}
