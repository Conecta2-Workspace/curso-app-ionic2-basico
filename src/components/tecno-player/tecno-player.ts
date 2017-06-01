import { Component, Input, OnInit} from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the TecnoPlayerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tecno-player',
  templateUrl: 'tecno-player.html'
})
export class TecnoPlayerComponent implements OnInit {

    
  @Input() text: string;
  @Input() titulo:  string;
  @Input() artits:   string;
  @Input() album:  string;
  @Input() cover:   string;
  @Input() audioSrc:   string;
    
public audio: HTMLAudioElement;
public ready: boolean;
public playing: boolean;
public audioPos: number;
public audioDura: number;

  constructor(public events: Events) {
    this.ready = false;
      this.playing = false;
      this.audioPos = 0;
  }
   
   ngOnInit(){
       console.log('Hello TecnoPlayerComponent Component...'+this.titulo);
       this.audio = new Audio();
       this.audio.src = this.audioSrc;
       this.audio.load();
       
       
       this.audio.oncanplaythrough = () => {
           this.ready = true;
           this.audioDura = this.audio.duration;
       }
       
       
       this.audio.ontimeupdate =(event)=>{
           this.audioPos = this.audio.currentTime;
       }
       
       this.audio.onended = () =>{
           this.audioPos=0;
           this.playing=false;
       }
       
       this.events.subscribe('cambioVolumen',(volumen)=>{
           console.log('el valor de entrada'+volumen);
           
           this.audio.volume = volumen/100;
       })
   }


    togglePlay(){
       if(!this.playing){
           this.audio.play();
       } else{
           this.audio.pause();
       }
        
        this.playing = !this.playing;
        
    }
   
   ngOnDestroy(){
       this.events.unsubscribe('cambioVolumen');
   }


}