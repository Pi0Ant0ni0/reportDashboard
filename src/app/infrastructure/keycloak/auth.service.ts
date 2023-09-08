import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _loggedUser!: Profile;

  constructor(private _keycloakService: KeycloakService) {
    let userDetails = this._keycloakService.getKeycloakInstance().idTokenParsed;
    if (userDetails) {
      let userRoles = this._keycloakService.getUserRoles();
      let role = '';
      if(userRoles.filter(r=>r=="presidente di tribunale").length>0){
        role = "court"
      }else{
        if(userRoles.filter(r=>r=="giudice").length>0){
          role = "judge"
        }else{
          if(userRoles.filter(r=>r=="presidente di sezione").length>0){
            role = "section"
          }
        }
      }

      this._loggedUser = new Profile(userDetails!["name"], role,userDetails!["sezione"],userDetails!["tribunale"]);
    }
  }



  public getLoggedUser=():Profile=>{
      return this._loggedUser;
  }


  logout() {
    this._keycloakService.logout();
  }
}

export class Profile{
  public fullName:string;
  public role:string;
  public sezione:string;
  public tribunale:string;

  constructor(fullName: string, role: string,sezione:string,tribunale:string) {
    this.fullName = fullName;
    this.role = role;
    this.sezione=sezione;
    this.tribunale=tribunale;
  }
}
