import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "USERNAME_IS_REQUIRED",
  }),
  email: z
    .string({
      required_error: "EMAIL_IS_REQUIRED",
    })
    .email({
      message: "INVALID_EMAIL",
    }),
  password: z
    .string({
      required_error: "PASSWORD_IS_REQUIRED",
    })
    .min(6, {
      message: "PASSWORD MUST BE AT LEAST 6 CHARACTERS",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "EMAIL_IS_REQUIRED",
    })
    .email({
      message: "INVALID_EMAIL",
    }),
  password: z
    .string({
      required_error: "PASSWORD_IS_REQUIRED",
    })
    .min(6, {
      message: "PASSWORD MUST BE AT LEAST 6 CHARACTERS",
    }),
});
