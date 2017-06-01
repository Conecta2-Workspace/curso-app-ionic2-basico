import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PerfilDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil-detalle',
  templateUrl: 'perfil-detalle.html',
})
export class PerfilDetallePage {
user:any;
    playlists:any;
    
  constructor(public navCtrl: NavController, 
               public navParams: NavParams,
              public viewController: ViewController) {
      
      this.user = this.navParams.get("user");
      this.playlists = this.navParams.get("playlists");
      
      
      console.log(this.user);
      console.log(this.playlists);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilDetallePage');
  }
    
    close(){
        this.viewController.dismiss({returnar: "parametro xx1"});
    }

}
