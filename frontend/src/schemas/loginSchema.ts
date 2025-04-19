import { z } from "zod";

// Zod schema for login form
export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// TypeScript type inferred from schema
export type LoginFormData = z.infer<typeof loginSchema>;
