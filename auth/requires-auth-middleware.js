const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ you: 'can not enter' });
  };
  //BELOW IS FOR AUTH, ABOVE IS FOR COOKIES/SESSIONS
  //AND YOU SHOULD CHNGE NAME OF FILE TO restricted-middleware
  // const { username, password } = req.headers; // not from body so it works on GET

  // if (username && password) {
  //   Users.findBy({ username })
  //     .first()
  //     .then(user => {
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next(); // this is different from the login code
  //       } else {
  //         res.status(401).json({ message: 'Invalid Credentials' });
  //       }
  //     })
  //     .catch(error => {
  //       console.log('login error', error);
  //       res
  //         .status(500)
  //         .json({ message: 'ran into an error, please try later' });
  //     });
  // } else {
  //   res.status(400).json({ message: 'please provide credentials' });
  // }
};
