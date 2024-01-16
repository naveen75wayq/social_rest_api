
import User,{UserDocument} from '../entities/user';

import Result from '../interfaces/resultInterfaces';
export const deleteUserById = async (userId: string) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId).exec();

        if (!deletedUser) {
            return { success: false, message: 'User not found' };
        }

        return { success: true, message: 'User deleted successfully', deletedUser };
    } catch (error) {
        console.error('Error deleting user:', error);
        return { success: false, message: 'Internal Server Error' };
    }
};
export const getAllUsers = async () => {
    try {
        const users = await User.find().exec();

        return { success: true, message: 'Users fetched successfully', users };
    } catch (error) {
        console.error('Error fetching users:', error);
        return { success: false, message: 'Internal Server Error' };
    }
};
export const getUserById = async (userId: string) => {
    try {
        const user = await User.findById(userId).exec();

        if (!user) {
            return { success: false, message: 'User not found' };
        }

        return { success: true, message: 'User fetched successfully', user };
    } catch (error) {
        console.error('Error fetching user:', error);
        return { success: false, message: 'Internal Server Error' };
    }
};

/* export const updateUserById = async (userID:string, userData:any):Promise<Result<UserDocument | null>>=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(userID, userData,{new: true}).exec();
        if(!updatedUser) {
            return {success: false, message:'User not found'}
        }
        return {success: true, message:'User updated successfully', data: updatedUser}
    }catch(error){
        console.error('Error updating user:', error);
        return { success: false, message: 'Internal Server Error' };
    }
}
export const patchUserById = async (userId: string, userData:any) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(userId, {$set: userData},{new: true}).exec();
        if(!updatedUser) {
            return {success: false, message:'User not found'}
        }
        return {success: true, message:'User updated successfully', data: updatedUser}
    }catch(error){
        console.error('Error updating user:', error);
        return { success: false, message: 'Internal Server Error' };
    }
}; */