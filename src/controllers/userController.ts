// userController.ts
import User from '../entities/user'; // Update the path based on your actual file structure

 async function getAllUsers() {
  try {
    const users = await User.find().exec();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error("INTERNAL SEVER ERROR")
  }
}

async function getUserById(userid:any){
  try{
    const user = await User.findById(userid).exec();
    if(user){
      return user;
    }
    
  }catch(error){
    console.error('Error fetching user:', error);
    throw new Error("INTERNAL SEVER ERROR")
  }
}

 async function deleteUserById(userId:any) {
  try {
    // Check if userId is a valid ObjectId
    if (!isValidObjectId(userId)) {
      console.log('Invalid userId format')
    }

    const deletedUser = await User.findByIdAndDelete(userId).exec();

    if (!deletedUser) {
     console.log('User not found')
    }

   console.log(`User deleted successfully : ${deletedUser}`)
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

// Add this function to validate ObjectId format
function isValidObjectId(id: string): boolean {
  return /^[0-9a-fA-F]{24}$/.test(id);
}
export {getAllUsers, getUserById, deleteUserById}
