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
export {getAllUsers, getUserById}
