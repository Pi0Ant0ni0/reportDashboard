import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn:'root'
    }
)
export  class AuthGuard extends KeycloakAuthGuard{

  constructor(router: Router, keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  override async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.keycloakAngular.login({
        redirectUri: window.location.origin + state.url
      });
    }

    return this.authenticated;
  }
}


