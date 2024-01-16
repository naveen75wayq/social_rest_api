import express, { Request,Response } from 'express';
import { signIn, signUp } from '../controllers/auth'; // Update the path based on your actual file structure

const router = express.Router();

// Authentication routes
router.post('/signin', signIn);
router.post('/signup', signUp);

export default router;
