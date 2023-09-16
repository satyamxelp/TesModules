const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../schema');

const RegisterUser = async (req, res) => {
  try {
    const { user_email, user_name, user_password } = req.body;

    const existingUser = await Users.findOne({ where: { user_email } });

    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = await Users.create({
      user_email,
      user_password: hashedPassword,
      user_name,
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const insertUser = async (req, res) => {
  try {
    const {
      user_name,
      user_email,
      user_password,
      total_orders,
      user_image
    } = req.body;

    const existingUser = await Users.findOne({ where: { user_name } });

    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const newUser = await Users.create({
      user_name,
      user_email,
      user_password,
      total_orders,
      user_image
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await Users.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const {
      user_name,
      user_email,
      user_password,
      total_orders,
      user_image
    } = req.body;

    const user_id = req.params.user_id;

    const user = await Users.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.update({
      user_name,
      user_email,
      user_password,
      total_orders,
      user_image
    });

    res.json({ message: 'User updated successfully', user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getUserImage = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await Users.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const user_image = user.user_image;
    res.set('Content-Type', 'image/jpeg');
    return res.send(user_image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await Users.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


const loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;

    const user = await Users.findOne({ where: { user_email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(user_password, user.user_password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ user_id: user.id }, 'satyamkumarsingh', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

function authenticateUser(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed. Token not provided.' });
  }

  jwt.verify(token, "satyamkumarsingh", (err, decoded) => {
    if (err) {
      console.error('Token Verification Error:', err);
      return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
    }
    req.user = decoded;

    next();
  });
}

module.exports = {
  RegisterUser,
  getUserDetails,
  updateUserDetails,
  getUserImage,
  insertUser,
  deleteUser,
  loginUser,
  authenticateUser
};
