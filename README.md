# group-route-express
ini adalah group route untuk expressJS

#Quick start
```
npm i group-route-express
```

#How to use
For prefixing all routes with a certain path, you use the group method added to the express router, as the following example:

```js
import {prefixRoute, group} from 'group-route-express'

prefixRoute.use('/post', group((router) => {
    router.get('/', function (req, res) {
        res.send("Hallo World");
    });
}))

```

#Adding Controllers
```js
import {prefixRoute, group} from 'group-route-express'

prefixRoute.use('/post', group((router) => {
    router.get('/', function (req, res) {
        res.send("Hallo World");
    });
    router.get('v1', yourController)
}))

```

#Adding middlewares

```js
import {prefixRoute, group} from 'group-route-express'

prefixRoute.use('/post', group((router) => {
    router.get('/v2', [middleware], postController.list);
}))

```