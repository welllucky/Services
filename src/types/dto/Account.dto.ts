import { z } from "zod";

export const CreateAccountSchema = z.object({
  register: z.string({
    message: "Invalid register",
    required_error: "Register is required",
  }),
  name: z.string({
    message: "Invalid name",
    required_error: "Name is required",
  }),
  sector: z
    .string({
      message: "Invalid sector",
      required_error: "Sector is required",
    })
    .min(1, {
      message: "Sector is required",
    }),
  position: z
    .string({
      message: "Invalid position",
      required_error: "Position is required",
    })
    .min(1, {
      message: "Position is required",
    }),
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z
    .string({
      message: "Invalid password",
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters",
    }),
});

export type CreateAccountDto = z.infer<typeof CreateAccountSchema>;
