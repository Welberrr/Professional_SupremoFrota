declare const require: any;

export const environment = {
    appVersion: require('../../package.json').version,
    production: true,
    urlSistema: '${APP_URL}/api',
    keycloakUrl: '${KEYCLOAK_URL}',
    keycloakRealm: '${KEYCLOAK_REALM}',
    keycloakClientId: 'supremofrota-client'
};