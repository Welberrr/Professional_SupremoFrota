declare const require: any;

export const environment = {
    appVersion: require('../../package.json').version,
    production: false,
    urlSistema: 'http://localhost:8080/api',
    keycloakUrl: 'https://keycloak-hm.stf.jus.br',
    keycloakRealm: 'desenvolvimento',
    keycloakClientId: 'supremofrota-client',
    authorizationString: ''
};
