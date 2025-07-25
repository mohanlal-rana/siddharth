const Notice = require("../models/noticeModel");

exports.notice = async (req, res) => {
  try {
    const notices = await Notice.find();
    if (!notices || notices.length === 0) {
      return res.status(404).json({ message: "No notices found" });
    }
    return res.status(200).json(notices);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}