import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesPage } from './canciones';
import { TecnoPlayerComponent } from '../../components/tecno-player/tecno-player';

@NgModule({
  declarations: [
    CancionesPage,
      TecnoPlayerComponent
  ],
  imports: [
    IonicPageModule.forChild(CancionesPage),
  ],
  exports: [
    CancionesPage
  ]
})
export class CancionesPageModule {}
