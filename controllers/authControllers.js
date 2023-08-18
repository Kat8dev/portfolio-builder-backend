import bcrypt from 'bcrypt';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

// SIGNUP
const signup = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const isUser = await User.findOne({ email });
    if (isUser)
      return res.status(409).json({ message: 'User is already registred' });
    const hashPwd = await bcrypt.hash(password, 10);
    const userObject = { name, surname, email, password: hashPwd };
    const userIsSaved = await new User(userObject).save();
    if (userIsSaved) return res.status(201).json(userIsSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

const signin = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (!user)
      return res.status('401').json({
        error: 'User not found',
      });

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status('401').json({
        error: 'Password does not match!',
      });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    );
    const { password, ...rest } = user._doc;
    res.status(200).json({ ...rest, accessToken });
    
  } catch (err) {
    res.status(500).json(err);
  }
};

export default { signup, signin };
