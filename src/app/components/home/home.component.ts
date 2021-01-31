import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";

declare  var $:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  videos:any[] = [];
  videoSel:any;

  constructor( public _yts: YoutubeService ) {
    this._yts.getVideos().subscribe( (videos:any) =>{
      console.log( videos );
      this.videos = videos;
    });
  }

  ngOnInit(): void {
  }

  verVideo( video:any ){
    this.videoSel = video;
    $('#myModal').modal()
    console.log(video);
  }

  cerrarModal(){
    this.videoSel = null;
    $('#myModal').modal('hide')
  }
  



}
