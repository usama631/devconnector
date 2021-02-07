const express = require('express');
const router =  express.Router();

//@route GET api/posts/test
//@description Tests post route
//@access public

router.get('/test', (req, res) => res.json(
  { message : "Posts Works!!"}
  )
  );
 
module.exports = router;