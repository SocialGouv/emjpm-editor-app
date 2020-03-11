# Exemple d'utilisation de l'API eMJPM

Exemple d'authentification et d'utilisation de l'API [eMJPM](https://github.com/SocialGouv/emjpm) à destination des logiciels métiers.

La documentation complète de l'API est disponible sur https://socialgouv.github.io/emjpm-api-doc/#introduction .

L'application implémente les actions suivantes :
* configuration de l'authentification
* demande d'accès à l'API
* connexion de l'utilisateur sur eMJPM avec le token d'accès
* redirection sur l'application avec le token utilisateur
* exemples d'utilisation de l'api mesures avec le token utilisateur

## Install

> Requires Node and Yarn

Install packages

```
yarn
```

Add `.env` with valid values, see `.env.sample`.

## Run

Start server

```
yarn start
```

## Test

Run all tests
```
yarn test
```
