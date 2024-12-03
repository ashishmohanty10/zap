import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(4, { message: "Must be 4 or more characters long" }),
  email: z
    .string()
    .email()
    .min(5, { message: "Must be 5 or more characters long" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, { message: "Must be 5 or more characters long" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});
