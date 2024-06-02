import { Router, Request, Response } from 'express';

import * as pageControllers from '../controllers/page.controller'
import * as SearchControllers from '../controllers/search.controllers'

const router = Router();

router.get('/', pageControllers.home)

router.get('/dogs', pageControllers.dogs)
router.get('/cats', pageControllers.cats)
router.get('/fishes', pageControllers.fishes)

router.get('/search', SearchControllers.search)

export default router