import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type ISignIn = z.infer<typeof SignInSchema>;

export const userSchema = z.object({
  register: z.string().min(3).max(10),
  name: z.string().min(5).max(80),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  lastConnection: z.date(),
  isBanned: z.boolean().default(false),
  canCreateTicket: z.boolean().default(true),
  canResolveTicket: z.boolean().default(true),
});

export type IUser = z.infer<typeof userSchema>;
