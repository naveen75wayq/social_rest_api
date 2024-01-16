import express, { Response, Request } from 'express';
import { deleteUser, getUser,  getUsers, /* patchUser, updateUser  */} from '../controllers/userController';

import { authenticateToken } from '../middleware/authMiddleware';
const router = express.Router();


// Route to get list of all users from DB
router.get('/users', getUsers);

// Route to get a single user from DB
router.get('/users/:userId', authenticateToken, getUser)

// Route to delete a user
router.delete('/users/:userId', authenticateToken, deleteUser);

/* // Route to update a user
router.put('/users/:userId', authenticateToken, updateUser);

// Route to patch a user
router.patch('/users/:userId', authenticateToken, patchUser); */
export default router

