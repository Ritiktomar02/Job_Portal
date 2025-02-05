const express = require("express");
const { register, login, logout, updateProfile } = require("../controllers/user.controller.js");
const  isAuthenticated  = require("../middlewares/isAuthenticated.js");
const  singleUpload  = require("../middlewares/fileupload.js");
 
const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

module.exports = router;

