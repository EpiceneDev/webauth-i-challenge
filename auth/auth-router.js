const router = require('express').Router();

const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;

    Users.add(user)
        .then(saved => {
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
            if (user) {
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            };
        })
        .catch(err => {
            res.status(500).json(err)
        });
        
});

module.exports = router;