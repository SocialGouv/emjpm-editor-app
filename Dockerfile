FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.49.0

COPY ./build /usr/share/nginx/html
