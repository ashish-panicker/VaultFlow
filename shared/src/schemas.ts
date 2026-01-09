import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(12, "Security requirement: Password must be 12+ characters"),
});

export const TransferSchema = z.object({
  recipientEmail: z.string().email(),
  amount: z.number().positive().max(10000, "Daily transfer limit exceeded"),
  currency: z.enum(["USD", "EUR", "GBP"]),
  note: z.string().max(100).optional(),
});
