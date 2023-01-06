import Keycloak from "keycloak-js";

const _kc = new Keycloak("/keycloak.json");

export const initKeycloak = (onAuthenticatedCallback: any) => {
  _kc
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

export const login = _kc.login;
export const logout = _kc.logout;
export const authenticated = () => !!_kc.token;
export const updateToken = (successCallback: any) =>
  _kc.updateToken(5).then(successCallback).catch(login);
export const getUsername = () => _kc.tokenParsed?.preferred_username;
export const getAccessTokenSilently = () => _kc.token;
export const hasRealmRole = (roles: any) =>
  roles.some((role: any) => _kc.hasRealmRole(role));
export const hasResourceRole = (roles: any) =>
  roles.some((role: any) => _kc.hasResourceRole(role));
