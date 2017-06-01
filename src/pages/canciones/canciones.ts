import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, PopoverController } from 'ionic-angular';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

import { CancionPopoverPage } from '../cancion-popover/cancion-popover';

/**
 * Generated class for the CancionesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
})
export class CancionesPage {
    public playList: any;
    public songs: any;
  constructor(public navCtrl: NavController, 
               public navParams: NavParams,
               public ds: DeezerServiceProvider,
               public loadingController: LoadingController,
              public popoverController:PopoverController) {
      
      this.playList = this.navParams.get("playList");
      
      this.songs = [];
      
      console.log("playlist = "+this.playList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
      let loader = this.loadingController.create();
      loader.present();
      this.ds.getPlayListSongs(this.playList.id).subscribe( data => {
            console.log(data.data);
          this.songs = data.data;
            loader.dismiss();
          
        }
        
        );
      
      
  }
    
    
    
    openCancionPopOver(event){
        let pop = this.popoverController.create(CancionPopoverPage);
        pop.present({ev:event});
    }

}
