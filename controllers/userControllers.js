import User from '../models/user.js';
import bcrypt from 'bcrypt';

const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  try {
    const updtUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updtUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user;
    res.status(200).json(rest._doc);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER STATS
const usersStatistics = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  usersStatistics,
};

/* const getAllUsers = async(req, res) => {
    try {
       const getUsers = await User.find();
       return res.status(200).json(getUsers);
    } catch(err) {
        console.log(err);
        
         // return res.status(400).json({
          //    error: errorHandler.getErrorMessage(err)
        //  })
         
    }
}

const updateUser = (req, res) => {
    res.send("all users")
}

const createNewUser = async(req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const isUser = await User.findOne({ email });
        if(isUser) return res.status(409).json({message: "User is already registred"});
        const hashPwd = await bcrypt.hash(password, 10);
        const userObject = { name, surname, email, "password": hashPwd };
        const isCreated = User.create(userObject);
        if(isCreated) {
            res.status(201).json({ message: "User was created" });
        } else {
            res.status(400).json({ message: "Invalid user data!" });
        }
    } catch(err) {
        console.log(err);
    }
}


const deleteUser = (req, res) => {
    res.send("all users")
}

const userController = {
    getAllUsers,
    createNewUser,
    updateUser,    
    deleteUser
}

export default userController; */
