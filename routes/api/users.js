const express = require('express');
const router =  express.Router();

//@route GET api/users/test
//@description Tests users route
//@access public
router.get('/test', (req, res) =>res.json({ message : "User Works!!"}));
module.exports = router;