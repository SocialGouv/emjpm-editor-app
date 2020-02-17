# eMJPM Editeurs

eMJPM editor example app,

* user sign in to editor application
* user click eMJPM authorization link
* if not logged in to eMJPM, user is invited to sign in with credentials
* user is redirected to editor application with token as url parameter

Authorization link is built with following parameters :

* `editor_id` : editor's ID
* `editor_secret`: editor's secret
* `redirect_url`: url to redirect after authorization is done

Example  :

`https://emjpm.num.social.gouv.fr/application/authorization?editor_id=1&editor_secret=c1uhbrbyr7d&redirect_url=http://localhost:3001`

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
