const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Dynamic destination based on request path
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "uploads/notices"; // default

    if (req.baseUrl.includes("event")) {
      folder = "uploads/events";
    }

    const uploadPath = path.join(__dirname, "..", folder);

    // Ensure folder exists
    fs.mkdirSync(uploadPath, { recursive: true });

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

module.exports = upload;
