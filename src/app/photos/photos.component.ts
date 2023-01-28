import { Component, OnInit } from '@angular/core';
import { GooglePhotosService } from '../google-photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  data: any;
  constructor(private activatedRoute: ActivatedRoute, private googphotoservice: GooglePhotosService) { }

  ngOnInit(): void {

    let albumID = this.activatedRoute.snapshot.paramMap.get('id');
    this.googphotoservice.retreivePhotosPromise(albumID).then(
      (resp: any) => {
        console.log(resp);
        this.data = resp ? resp.mediaItems : [];
        // this.data = resp;
      },
      (err: any) => {
        console.log(err);
      }
    )

  }

}
