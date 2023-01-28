import { Component, OnInit } from '@angular/core';
import { GooglePhotosService } from '../google-photos.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  data: any;

  constructor(private googphotoservice: GooglePhotosService) { }

  ngOnInit(): void {

    this.googphotoservice.retreiveAlbumsPromise().then(
      (resp: any) => {
        console.log(resp);
        this.data = resp ? resp.albums : [];
        // this.data = resp;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }



}
