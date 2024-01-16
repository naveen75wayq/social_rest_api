import express, { Response, Request } from 'express';
import { getAllUsers, getUserById } from '../controllers/userController';
import User from '../entities/user';
const router = express.Router();


// Route to get list of all users from DB
router.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).json({ users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error });
    }
});

router.get('/users/:userId', async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const user = await getUserById(userId);
        if (user) {
            res.status(200).json({ user })
        }
        
    }catch(error){
        console.error('Error fetching user:', error);
        res.status(500).json({ error });
    }

})
export default router

