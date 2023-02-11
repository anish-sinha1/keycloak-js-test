from keycloak import KeycloakOpenID

keycloak_openid = KeycloakOpenID(
    server_url="http://localhost:8080/auth/",
    client_id="sonar_api",
    realm_name="Sonar",
    client_secret_key="v3qORLallLIY8dP3by1Ks8tSF1a4VnK7",
)

config_well_known = keycloak_openid.well_know()

token = keycloak_openid.token("amy", "jakeperalta")
print(token)

token_info = keycloak_openid.introspect(token["access_token"])
print(token_info)

KEYCLOAK_PUBLIC_KEY = (
    "-----BEGIN PUBLIC KEY-----\n"
    + keycloak_openid.public_key()
    + "\n-----END PUBLIC KEY-----"
)
certs = keycloak_openid.certs()
options = {"verify_signature": True, "verify_aud": True, "verify_exp": True}
token_info = keycloak_openid.decode_token(
    token["access_token"], key=KEYCLOAK_PUBLIC_KEY, options=options
)

KEYCLOAK_PUBLIC_KEY = (
    "-----BEGIN PUBLIC KEY-----\n"
    + keycloak_openid.public_key()
    + "\n-----END PUBLIC KEY-----"
)
options = {"verify_signature": True, "verify_aud": True, "verify_exp": True}
token_info = keycloak_openid.decode_token(
    token["access_token"], key=KEYCLOAK_PUBLIC_KEY, options=options
)
