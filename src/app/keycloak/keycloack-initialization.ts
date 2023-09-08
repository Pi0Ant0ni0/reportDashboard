import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(
    keycloak: KeycloakService
) {
    return () =>
        keycloak.init({
            config: {
                url: 'https://193.206.108.146:32410',
                realm: 'master',
                clientId: 'report-gui',

            },
            initOptions: {
                pkceMethod: 'S256',
                redirectUri: 'http://localhost:4200/*',
                checkLoginIframe: false
            }});
}