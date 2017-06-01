import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { CancionesPage } from '../canciones/canciones';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
import { PerfilDetallePage } from '../perfil-detalle/perfil-detalle';

/**
 * Generated class for the PlaylistsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class PlaylistsPage {
    public user: any;
    public playlists: any;

  constructor(public navCtrl: NavController, 
               public navParams: NavParams, 
               public ds: DeezerServiceProvider,
              public loadingController: LoadingController,
              public modalController: ModalController) {
    this.user= this.navParams.get('user');
      console.log(this.user);
      this.playlists = [];
  }
    
    goToCanciones(playList){
        this.navCtrl.push(CancionesPage, {playList:playList});
    }

  ionViewDidLoad() {
      let loader = this.loadingController.create();
      loader.present();
      this.ds.getUserPlaylists(this.user.id).subscribe( data => {
            console.log(data.data);
          
          this.playlists = data.data;
          
          
        loader.dismiss();
        }
        
        );
      
    console.log('ionViewDidLoad PlaylistsPage');
  }
    
    goToPerfilDetalle(user, playlists){
        let modal = this.modalController.create(PerfilDetallePage, {
            user:user,
            playlists: playlists
        });
        
        
        modal.present();
        modal.onDidDismiss(data=>console.log(data));
    }

}
