import express from 'express';
import createUser from '../controllers/userController.js';

const router = express.Router();

/* POST CREATE NEW users listing. */
router.post('/create-user', createUser)

export default router;
