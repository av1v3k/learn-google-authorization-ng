import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

import { googlePhotosAPIConfig } from "./google-photos.model";


@Injectable({
  providedIn: 'root'
})
export class GooglePhotosService {

  constructor(private http: HttpClient, private oauthservice: OAuthService) {

  }


  retreiveAlbumsPromise(): Promise<any> {
    let token = this.oauthservice.getAccessToken();
    let hds = new HttpHeaders();
    hds = hds.append('Authorization', `Bearer ${token}`);

    return this.http.
      get(googlePhotosAPIConfig.getAlbums, { headers: hds })
      .toPromise();
  }

  retreivePhotosPromise(albumId: string): Promise<any> {
    let token = this.oauthservice.getAccessToken();
    let hds =
    {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': `application/json`
      })
    }

    let body = { "albumId": albumId };

    return this.http.
      post(googlePhotosAPIConfig.getPhotosofAlbums, body, hds)
      .toPromise();
  }


}
