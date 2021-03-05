const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');

async function login(req, res) {
  const { email, password } = req.body;
  // Return error if no form data
  if (!email || !password) {
    return res.status(400).json({status: 400, error: 'All fields are required'});
  }

  
  try {
    // Find user by email
    const user = await db.User.findOne({ email });
    // console.log(user);
    if (!user) {
      res.status(400).json({status: 400, error: 'Invalid credentials. Please try again'});
    }

    // Verify supplied password matches found user password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Login passwords do not match');
      return res.status(400).json({status: 400, error: 'Invalid credentials. Please try again'})
    }

    // Create a jwt with userId
    const payload = { userId: user._id };
    const secret = process.env.JWT_SECRET;
    console.log(secret);
    const expiration = {expiresIn: '30d'};

    // Sign the jwt
    const token = await jwt.sign(payload, secret, expiration);

    res.json({status: 200, token});
  } catch (err) {
    console.log(err);
    return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
  }

  console.log(user);
}



module.exports = {
  login,
};
