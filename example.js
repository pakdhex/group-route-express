import { prefixRoute, group } from 'group-route-express'

prefixRoute.use('/post', group((router) => {
    router.get('/', function (req, res) {
        res.send("Hallo World");
    });
    // router.get('test', yourControllerAndFunction)
}))