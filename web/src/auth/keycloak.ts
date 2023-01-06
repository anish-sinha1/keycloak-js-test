import Keycloak from "keycloak-js";

const _kc = new Keycloak("/keycloak.json");

export const init = async (onAuthenticatedCallback: any) => {
  const authenticated = await _kc.init({
    onLoad: "check-sso",
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
    pkceMethod: "S256",
  });
  if (!authenticated) {
    console.error("unauthorized");
  }
  onAuthenticatedCallback();
};

export const login = _kc.login;
export const logout = _kc.logout;
export const register = _kc.register;
export const authenticated = () => !!_kc.token;
export const updateToken = (successCallback: any) =>
  _kc.updateToken(5).then(successCallback).catch(login);
export const getUsername = () => _kc.tokenParsed?.preferred_username;
export const getAccessTokenSilently = () => _kc.token;
export const hasRealmRole = (roles: any) =>
  roles.some((role: any) => _kc.hasRealmRole(role));
export const hasResourceRole = (roles: any) =>
  roles.some((role: any) => _kc.hasResourceRole(role));
