import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private oauthservice: OAuthService) { }

  ngOnInit(): void {
  }

  get validaccessToken() {
    return this.oauthservice.hasValidAccessToken();
  }

  private extract(property: string): String {
    let claims = this.oauthservice.getIdentityClaims();
    if (!claims) return null;
    console.log('claims:', claims);
    return claims[property];

  }

  get name() {
    return this.extract('name');
  }

  get email() {
    return this.extract('email');
  }

  showAlbums() {
    this.router.navigate(['/albums']);
  }

}
