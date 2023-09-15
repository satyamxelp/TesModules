const Users = require('../schema'); 
const { authenticationMiddleware } = require('../middleware'); 

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

const insertUser = async (req, res) => {
  try {
    const {
      user_name,
      user_email,
      user_password,
      total_orders,
      user_image
    } = req.body;

    const newUser = await Users.create({
      user_name,
      user_email,
      user_password,
      total_orders,
      user_image
    });

    res.json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

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

module.exports = {
  getUserDetails,
  updateUserDetails,
  getUserImage,
  insertUser,
  deleteUser,
};
