const bcrypt = require('bcryptjs');

const router = require('express').Router();

const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;

    const hashedPswd = bcrypt.hashSync(user.password, 8);
        user.password = hashedPswd;

    Users.add(user)
        .then(saved => {
            req.session.username = saved.username;
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json(error);
        });
});
    

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.username = user.username;
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            };
        })
        .catch(err => {
            console.log('Login Error', err)
            res.status(500).json(err)
        });
        
});

router.get("/logout", (req, res) => {
    if (req.session) {
      req.session.destroy(error => {
        if (error) {
          res
            .status(500)
            .json({
              message:
                "Please contact admin. You are unable to logout."
            });
        } else {
          res.status(200).json({ message: "logged out successfully" });
        }
      });
    } else {
      res.status(200).json({ message: "Good Bye" });
    }
  });

module.exports = router;