const express = require('express');
const router =  express.Router();

//@route GET api/profile/test
//@description Tests profile route
//@access public
router.get('/test', (req, res) =>res.json({ message : "Profile Works!!"}));
module.exports = router; 