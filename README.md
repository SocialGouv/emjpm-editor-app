# eMJPM Editeurs

eMJPM editor example app,

* user sign in to editor application
* user click eMJPM authorization link
* if not logged in to eMJPM, user is invited to sign in with credentials
* user is redirected to editor application with token as url parameter

Authorization link is built with following parameters :

* `editor-id` : editor's ID
* `editor-secret`: editor's secret
* `redirect-url`: url to redirect after authorization is done

Example  :

`https://emjpm.num.social.gouv.fr/application/authorization?editor-id=1&editor-secret=c1uhbrbyr7d&redirect-url=http://localhost:3001`

## Usage

> Requires Node and Yarn

Install packages

```
yarn
```

Add `.env` with valid values, see `.env.sample`.

Start server

```
yarn start
```

## Test

Run all tests
```
yarn test
```
