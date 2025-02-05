const multer = require("multer");

const storage = multer.memoryStorage();

const singleUpload = multer({ storage }).single("file");

module.exports =  singleUpload ;  // ✅ Ensure it's properly exported
