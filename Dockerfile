FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.52.1

COPY ./build /usr/share/nginx/html
