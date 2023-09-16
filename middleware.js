const jwt = require('jsonwebtoken');
const secretKey = 'satyamkumarsingh';

// Define the authenticateUser function
function authenticateUser(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed. Token not provided.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('Token Verification Error:', err);
      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
      } else if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Authentication failed. Token expired.' });
      } else {
        return res.status(500).json({ message: 'Internal server error.' });
      }
    }

    req.user = decoded;
    next();
  });
}


module.exports = { authenticateUser };
