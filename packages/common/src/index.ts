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

export const zapCreateSchema = z.object({
  availableTriggerId: z.string(),
  triggerMetadata: z.any().optional(),
  actions: z.array(
    z.object({
      availableActionId: z.string(),
      actionMetaData: z.any().optional(),
    })
  ),
});

export const updateProfileSchema = z.object({
  name: z.string().min(4, { message: "Must be 4 or more characters long" }),
  email: z
    .string()
    .email()
    .min(5, { message: "Must be 5 or more characters long" }),
});

export type updateProfileSchemaType = z.infer<typeof updateProfileSchema>;

export type loginSchemaType = z.infer<typeof loginSchema>;

export type signupSchemaType = z.infer<typeof signupSchema>;

export type zapCreateSchemaType = z.infer<typeof zapCreateSchema>;
