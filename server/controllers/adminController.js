const Contact = require("../models/contactModel");
const Notice = require("../models/noticeModel");

exports.contact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "no contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteContactById=async(req,res,next)=>{
  try {
    const id=req.params.id
    await Contact.deleteOne({_id:id})
    return res.status(200).json({message:'contact deleted successfully'})
  } catch (error) {
    next(error);
  }
}
exports.createNotice = async (req, res) => {
  try {
    const { title, date } = req.body;
    const file = req.file;

    if (!title || !date || !file) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newNotice = new Notice({
      title,
      date,
      image: `/uploads/notices/${file.filename}`,  // <-- assign path here, not in schema
    });

    await newNotice.save();

    res.status(201).json({ message: "Notice created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

exports.deleteNoticeById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const notice = await Notice.findByIdAndDelete({_id:id});
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    return res.status(200).json({ message: "Notice deleted successfully" });
  } catch (error) {
    next(error);
  }
}