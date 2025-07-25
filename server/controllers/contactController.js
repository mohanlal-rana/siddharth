const Contact = require("../models/contactModel");

exports.contact=async(req,res,next)=>{
    // Logic to handle contact form submission
    try {
        const { name, email, subject, message } = req.body;
        console.log(name,email,subject,message)
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }
      
         await Contact.create({ name, email, subject, message });
         
         res.status(201).json({ message: 'Contact form submitted successfully' });
        
    } catch (error) {
        console.error("Error handling contact form submission:", error);
      
        return res.status(500).json({ message: 'Internal server error' });
    }

}