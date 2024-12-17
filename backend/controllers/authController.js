import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Write Logic Here

    if(!name || !email || !password) {
      res.status(400).send({
        message: "Please fill the required column"
      })
    }

    const existedUser = await User.findOne({
      email
    })

    if(existedUser) {
      res.status(406).send({
        message: "User already registered"
      })
    }

    // Email validation can be improved here

    const newUser = new User({ 
      name,
      email,
      password: hashedPassword 
    });

    await newUser.save();

    console.log("User registered Successfully", newUser);
    
    res.status(201).send('User registered successfully.');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Login a user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).send('User not found.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid credentials.');

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("User logged In", user);
    console.log("Token::", token);

    res.json({ token });

  } catch (error) {
    res.status(500).send(error.message);
  }
};
