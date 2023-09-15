const jwt = require('jsonwebtoken');
const { secretKey } = require('./config'); 

const authenticationMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);

    req.user = decoded.user;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token is invalid' });
  }
};

module.exports = {
  authenticationMiddleware,
};
