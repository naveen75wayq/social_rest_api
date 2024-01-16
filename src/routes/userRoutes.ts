import express, { Response, Request } from 'express';
import { deleteUserById, getAllUsers, getUserById } from '../controllers/userController';
import User from '../entities/user';
import { authenticateToken } from '../middleware/authMiddleware';
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

router.get('/users/:userId', authenticateToken ,async (req: Request, res: Response) => {
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

router.delete('/users/:userId',authenticateToken,async (req:Request, res:Response) => {
    try{
        const { userId } = req.params
        const deletedUser = await deleteUserById(userId)
        if (!deleteUserById) {
            res.status(500).json({ message: 'User with userId does not exist'})
        }
        else{
            
        }
    }catch(err){
        
    }
})
export default router

