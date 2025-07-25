const Event = require("../models/eventModel"); //

exports.addEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const file = req.file;

    if (!title || !date || !description || !file) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newEvent = await Event.create({
      title,
      date,
      description,
      image: `/uploads/events/${file.filename}`,
    });

    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error: " + error.message });
  }
};


exports.getEvent = async (req, res) => {
  try {
    const events = await Event.find();
    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found" });
    }
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

exports.deleteEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByIdAndDelete({_id:id});
        if (!event) {
        return res.status(404).json({ message: "Event not found" });
        }
        return res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
