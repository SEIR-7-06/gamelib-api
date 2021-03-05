const bcrypt = require('bcryptjs');
const db = require('../models');

async function create(req, res) {
  const { name, email, password } = req.body;

  // Validate create user form inputs
  if (!name || !email || !password) {
    return res.json({status: 400, message: 'All Fields Are Required'});
  }

  // Verify User Does Not Exist
  // Callback Version
  // db.User.findOne({email: email}, (err, foundUser) => {
  //   if (err) return console.log(err);

  //   if (foundUser) {
  //     console.log('User account already exists: ', foundUser);
  //     return res.json({status: 400, error: 'User already exists. Please login'});
  //   }

  // });

  // Asyc/Await Version
  try {
    const foundUser = await db.User.findOne({ email });
    
    if (foundUser) {
      console.log('User account already exists: ', foundUser);
      return res.json({status: 400, error: 'User already exists. Please login'});
    }

    // Create Salt for password hash
    const salt = await bcrypt.genSalt(10);

    // Hash user plain text password
    const hash = await bcrypt.hash(password, salt);

    // Create the new user with hashed password
    // const userData = {
    //   name,
    //   email,
    //   password: hash
    // };

    const newUser = await db.User.create({...req.body, password: hash});

    // Respond back to client
    res.json(newUser);
  } catch (err) {
    return res.json({status: 500, error: 'Something went wrong. Please try again'});
  }
}

module.exports = {
  create,
};
