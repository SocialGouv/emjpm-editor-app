FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.55.0

COPY ./build /usr/share/nginx/html
