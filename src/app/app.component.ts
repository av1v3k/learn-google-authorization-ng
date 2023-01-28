import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

import { oauthconfig } from "./google-photos.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private oauthservice: OAuthService) { }

  ngOnInit(): void {
    console.log('calling ng init() method.');

    this.oauthservice.configure(oauthconfig);
    this.oauthservice.loadDiscoveryDocumentAndLogin();
  }

  logout() {
    console.log('calling logout');

    this.oauthservice.revokeTokenAndLogout().then(
      (res: any) => {
        console.log('Logout Success');
      }
    ).catch(
      (error: any) => {
        console.log(error);
      }
    )
  }

}
