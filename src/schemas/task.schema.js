import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "TITLE_IS_REQUIRED",
  }),
  description: z.string({
    required_error: "DESCRIPTION_IS_REQUIRED",
  }),
  date: z.string().datetime().optional(),
});
