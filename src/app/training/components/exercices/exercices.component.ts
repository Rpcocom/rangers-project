import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {
  options: any;
  videos: any[] = [
    "https://www.youtube.com/embed/eTn_hgP85k4",
    "https://www.youtube.com/embed/6yUeQeOZkAE",
    "https://www.youtube.com/embed/BzUHsTv4B_A",
    "https://www.youtube.com/embed/r5kNsFGakOw"
  ]

  constructor( private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

    
  }

  getVideoIframe(url: string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);   
}

  

}
