import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _keycloakService: KeycloakService) { }


  public getLoggedUser=()=>{
    let userDetails = this._keycloakService.getKeycloakInstance().idTokenParsed;
    let userRoles = this._keycloakService.getUserRoles();
    console.log(userDetails);
  }
}
