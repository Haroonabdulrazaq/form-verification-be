import express from 'express';
import {createUser, getUser} from '../controllers/userController.js';

const router = express.Router();

/* POST CREATE NEW users listing. */
router.post('/user', createUser);
router.get('/user', getUser);

export default router;
