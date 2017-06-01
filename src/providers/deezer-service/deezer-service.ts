import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the DeezerServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DeezerServiceProvider {
  //public deezerAPI = "https://api.deezer.com/";
public deezerAPI : string;
    
  constructor(public http: Http) {
    console.log('Hello DeezerServiceProvider Provider');
      
      //this.deezerAPI="/deezerAPI/";
      this.deezerAPI = "https://api.deezer.com/";
      
  }
    
   
    
     getUser(){
        return this.http.get('https://api.myjson.com/bins/1gp5n1')
        .map( res=>res.json() )
        
         
         
         
        
        /*
        .subscribe(users => {
            console.log(users);
            
            users.map( userID => {
                this.getUserDetail(userID);
            });
            
        });*/
    }
    
    
    
    getUserDetail(userID){
        
        return this.http.get(this.deezerAPI+'user/'+userID)
        .map(res=>res.json())
        
        /*
        .subscribe(data => {
            console.log(data);
        });*/
        
        
        
    }
    
    
    
    getUserPlaylists(userID){
        return this.http.get(this.deezerAPI+'user/'+userID+'/playlists')
        .map(res=>res.json())
    }
    
    
    getPlayListSongs(playlistID){
        return this.http.get(this.deezerAPI+'playlist/'+playlistID+'/tracks')
        .map(res=>res.json())
    }

}
