const { z } = require("zod");

const signupSchema = z.object({
  name: z.string().min(2, "Name minimum 2 character"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password minimum 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password required"),
});

module.exports = { signupSchema, loginSchema };
