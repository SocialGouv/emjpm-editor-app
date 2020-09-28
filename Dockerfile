FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.57.1

COPY ./build /usr/share/nginx/html
