
import { NextFunction,Request,Response } from 'express';

import { deleteUserById, getAllUsers, getUserById, /* patchUserById, updateUserById */ } from '../services/userServices';
import User, { UserDocument } from '../entities/user';
import Result from '../interfaces/resultInterfaces';
import bcrypt from 'bcrypt';

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const result = await deleteUserById(userId);

    if (!result.success) {
      return res.status(404).json({ error: 'User not found', message: result.message });
    }

    res.status(200).json({ message: result.message, deletedUser: result.deletedUser });
    next();
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong while deleting the user' });
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await getAllUsers();

    if (!result.success) {
      return res.status(500).json({ error: 'Internal Server Error', message: 'Error fetching users' });
    }

    res.status(200).json({ message: result.message, users: result.users });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong while fetching users' });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await getUserById(userId);

    if (!result.success) {
      return res.status(404).json({ error: 'User not found', message: result.message });
    }

    res.status(200).json({ message: result.message, user: result.user });
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong while fetching the user' });
  }
};
/* export const updateUser = async(req:Request, res:Response, next:NextFunction) => {
  try{
    const {userId} = req.params;
    const userdata = req.body;
    const hashedPassword = await bcrypt.hash(userdata.password, 10);
    console.log(userdata);
    const newUser = await User.create({
      ...userdata,
      password: hashedPassword,
    })
    console.log(newUser);
    const result: Result<UserDocument | null> = await updateUserById(userId, userdata);
    
    if(!result.success){
      res.status(404).json({error:'User not found',message: result.message});
    }
    res.status(200).json({message: result.message, data: result.data});
  }catch(error){
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong while updating the user' });
  }
};
export const patchUser = async(req:Request, res:Response, next:NextFunction) => {
  try{
    const {userId} = req.params;
    const userdata = req.body;
    const result = await patchUserById(userId, userdata);
    if(!result.success){
      res.status(404).json({error:'User not found',message: result.message});
    }
    res.status(200).json({message: result.message, data: result.data});
  }catch(error){
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong while updating the user' });
  }
};
 */
