// Project: Group rounting
// Profile: Saiful Amin <https://github.com/pakdhex>
//          Instagram @saifulcode
//          Website pakdhe.id
/* =================== USAGE ===================

    import {prefixRoute, group} from 'group-route-express'

    prefixRoute.use('/post', group((router) => {
        router.get('/', function (req, res) {
            res.send("Hallo World");
        });
        // router.get('/', yourController)
    }))

 =============================================== */
 import express from 'express';

 
 export const prefixRoute = express.Router();
 
 export const group = (callback) => {
     const router = express.Router()
     callback(router)
     return router;
 };