import { z } from "zod";

export const UserTableSchema = z.object({
  id: z.string(),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  register: z.string().min(3).max(10),
  name: z.string().min(5).max(80),
  role: z.string(),
  sector: z.string(),
  lastConnection: z.date().nullish(),
  isBanned: z.boolean().default(false),
  canCreateTicket: z.boolean().default(true),
  canResolveTicket: z.boolean().default(true),
  hash: z.string(),
  salt: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
});

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

export const UserSchema = z.object({
  register: z.string().min(3).max(10),
  name: z.string().min(5).max(80),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  lastConnection: z.date().nullish(),
  isBanned: z.boolean().default(false),
  canCreateTicket: z.boolean().default(true),
  canResolveTicket: z.boolean().default(true),
  role: z.string(),
  sector: z.string(),
});

export const RegisterUserSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  register: z.string().min(3).max(10),
  name: z.string().min(5).max(80),
  password: z.string().min(8),
  role: z.string(),
  sector: z.string(),
});

export const CreateUserSchema = z.union([RegisterUserSchema, UserSchema]);

export type IRegisterUser = z.infer<typeof RegisterUserSchema>;

export type IUser = z.infer<typeof UserSchema>;

export type ISignIn = z.infer<typeof SignInSchema>;

export type ICreateUser = z.infer<typeof CreateUserSchema>;

export type IUserTable = z.infer<typeof UserTableSchema>;
