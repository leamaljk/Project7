const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
// router.get("/:id", auth, userCtrl.findOne);
router.delete("/:id", auth, userCtrl.deleteUser);


module.exports = router;