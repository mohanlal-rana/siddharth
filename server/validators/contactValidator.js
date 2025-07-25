const { z } = require("zod");

const contactSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least of 3 chars." })
    .max(255, { message: "name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(7, { message: "email must be at least of 3 chars." })
    .max(255, { message: "email must not be more than 255 characters" }),
  subject: z
    .string({ required_error: "subject is required" })
    .trim()
    .min(3, { message: "subject must be more then 3 char" })
    .max(100, { message: "message must not be more than 100 characters" }),
  message: z
    .string({ required_error: "subject is required" })
    .trim()
    .min(3, { message: "subject must be more then 3 char" })
    .max(255, { message: "message must not be more than 255 characters" }),
});

module.exports = { contactSchema };
