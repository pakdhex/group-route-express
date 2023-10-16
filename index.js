import express from 'express';

module.exports = {
    routePrefix: express.Router(),
    group: (callback) => {
        const router = express.Router()
        callback(router)
        return router;
    }
};