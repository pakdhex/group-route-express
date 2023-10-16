import express from 'express';

export const apiRouter = express.Router();

export const group = (callback) => {
    const router = express.Router()
    callback(router)
    return router;
};