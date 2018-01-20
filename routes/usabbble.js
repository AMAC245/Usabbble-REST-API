const express = require('express');
const usabbbleRouter = new express.Router();
const controllers = require('../controllers/usabbble');

const BASE_PATH = '/';
const SHOT_ID_PATH = '/:shotId';


usabbbleRouter.get(BASE_PATH, controllers.getUsabbbleShots)
usabbbleRouter.get(BASE_PATH + SHOT_ID_PATH, controllers.getUsabbbleShot)
usabbbleRouter.post(BASE_PATH, controllers.uploadUsabbbleShot)

module.exports = usabbbleRouter