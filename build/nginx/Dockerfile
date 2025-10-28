# FROM artifactory.stf.jus.br/corporativo/node AS builder

# WORKDIR /app
# COPY . /app

# ARG NODE_ENV
# ARG VUE_APP_BACKEND_DOMAIN
# ARG VUE_APP_KEYCLOAK_REALM
# ARG VUE_APP_KEYCLOAK_AUTH_SERVER_URL
# ARG VUE_APP_KEYCLOAK_RESOURCE

# ENV VUE_APP_BACKEND_PORT=443
# ENV VUE_APP_BACKEND_METHOD=https

# ENV NODE_OPTIONS=--openssl-legacy-provider

# RUN npm set strict-ssl false && \
#     npm install --force --legacy-peer-deps && \
#     npm install @popperjs/core --force --legacy-peer-deps && \
#     npm run build-$NODE_ENV



FROM artifactory.stf.jus.br/corporativo/nginx

ADD build/nginx/config/proxy.conf /etc/nginx/
ADD build/nginx/config/nginx.conf.template /
ADD build/nginx/error/404.html /usr/share/nginx/html/v2/
ADD build/nginx/config/docker-entrypoint.sh /

#COPY --from=builder ./app/dist /usr/share/nginx/html
COPY ./dist/supremofrota-frontend/browser /usr/share/nginx/html/v2

RUN chmod +x /docker-entrypoint.sh

# Entrypoint for nginx
ENTRYPOINT ["/docker-entrypoint.sh"]
