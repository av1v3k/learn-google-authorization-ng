import { AuthConfig } from "angular-oauth2-oidc";

export const oauthconfig: AuthConfig = {
  // Authorization Server Issuer URL
  issuer: 'https://accounts.google.com',

  // After login, the Authorization Server will redirect to this location
  redirectUri: window.location.origin,

  // Registered ClientID in the Authorization Server. No Client Secret Required
  clientId: '24405187013-fuoqe2bjcbdvn60heiufc0njq2ht11f8.apps.googleusercontent.com',

  // Logout URL is not in Discovery document. So, we need to include it for GOOGLE
  strictDiscoveryDocumentValidation: false,
  logoutUrl: 'https://www.google.com/accounts/Logout',

  // Default IMPLICIT. responseType will automatically use token and id_token.
  // responseType: 'code',

  // set the scope for the permissions the client should request
  scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',

  showDebugInformation: true
};

export const googlePhotosAPIConfig = {
  getAlbums: `https://photoslibrary.googleapis.com/v1/albums`,
  getPhotosofAlbums: `https://photoslibrary.googleapis.com/v1/mediaItems:search`
}