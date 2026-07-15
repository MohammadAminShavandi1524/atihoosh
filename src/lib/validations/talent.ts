import { z } from "zod";

export const applySchema = (t: (key: string) => string) =>
  z.object({
    full_name: z.string().min(3, t("fullNameMin")),

    phone: z.string().regex(/^\+989\d{9}$/, t("phoneInvalid")),

    email: z.string().email(t("emailInvalid")),
  });

export type ApplySchema = z.infer<ReturnType<typeof applySchema>>;
