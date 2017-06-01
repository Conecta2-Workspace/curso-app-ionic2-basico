import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { InicioPageModule } from '../pages/inicio/inicio.module';
import { PerfilesPageModule } from '../pages/perfiles/perfiles.module';
import { PerfilDetallePageModule } from '../pages/perfil-detalle/perfil-detalle.module';
import { ContactoPageModule } from '../pages/contacto/contacto.module';

//import { AcercaPage } from '../pages/acerca/acerca';
import { AcercaPageModule } from '../pages/acerca/acerca.module';

import { PlaylistsPageModule } from '../pages/playlists/playlists.module';
import { CancionesPageModule } from '../pages/canciones/canciones.module';
import { CancionPopoverPageModule } from '../pages/cancion-popover/cancion-popover.module';



import { DeezerServiceProvider } from '../providers/deezer-service/deezer-service';
//import { TecnoPlayerComponent } from '../components/tecno-player/tecno-player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //InicioPage,
      //PerfilesPage,
      //ContactoPage,
  //    AcercaPage,
      //PlaylistsPage,
      //CancionesPage,
//      TecnoPlayerComponent,
      //PerfilDetallePage,
      //CancionPopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AcercaPageModule,
      InicioPageModule,
      PerfilesPageModule,
      PerfilDetallePageModule,
      ContactoPageModule,
      AcercaPageModule,
      PlaylistsPageModule,
      CancionesPageModule,
      CancionPopoverPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      //InicioPage,
      //PerfilesPage,
      //ContactoPage,
     // AcercaPage,
      //PlaylistsPage,
      //CancionesPage,
      //PerfilDetallePage,
      //CancionPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeezerServiceProvider
  ]
})
export class AppModule {}