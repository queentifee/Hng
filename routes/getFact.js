const express = require("express");
const { getFact } = require ('../controllers/getFact')
const router = express.Router();

router.get ('/me', getFact)


module.exports = router;