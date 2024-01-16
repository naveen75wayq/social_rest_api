import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../entities/user'; // Update the path based on your actual file structure
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../loadEnvironment';
export async function signIn(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Validate user input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Successfully signed in
      const token = jwt.sign({ id: user._id, username: user.username }, JWT_KEY as string);
      res.status(200).json({ message: 'Sign-in successful', user, token });
    } else {
      // Authentication failed
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


  export async function signUp(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      // Validate user input
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
      }

      // Check if the email is already in use
    const existingUsername = await User.findOne({email}).exec();
    console.log(existingUsername);
       if(existingUsername) {
        return res.status(409).json({ error: 'Email is already in use' });
      } 

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error during sign-up:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

