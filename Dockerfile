FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.54.2

COPY ./build /usr/share/nginx/html
