import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class YoutubeService {

  private youtubeUrl:string = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUvnoM0R1sDKm-YCPifEso_g&key=AIzaSyA-lxG1PbupwVkYlCLjcsnoagtB87B5Swo";
/*   private key:string = "AIzaSyA-lxG1PbupwVkYlCLjcsnoagtB87B5Swo";
  private playList: string = "UUvnoM0R1sDKm-YCPifEso_g";  */
  private nextPageToken:string = "";
  
  constructor( public http:HttpClient ) {

  }


  getVideos(){

    let url:string = `${ this.youtubeUrl }`;

/*     let params = new HttpParams()

    params.set( 'part', 'snippet' );
    params.set( 'maxResults', '10' );
    params.set( 'playlistId', this.playList );
    params.set( 'key' , this.key ); */
    
    

    return this.http.get( url )
                .pipe( map( (res:any) =>{
                  console.log(res);
                  this.nextPageToken = res.nextPageToken;

                  let videos:any[] = [];
                  for (const video of res.items ) {
                    let snippet = video.snippet;
                    videos.push( snippet )
                  }

                  return videos; 
                }) )
  }

}
