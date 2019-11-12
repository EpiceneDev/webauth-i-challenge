const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/requires-auth-middleware.js');
// changed from requiresAuth to restricted
router.get('/', restricted, (req, res) => {

    Users
        .find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});




module.exports = router;