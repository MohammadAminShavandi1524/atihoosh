import { z } from "zod";

export const projectStartSchema = z.object({
  full_name: z.string().min(3, "نام و نام خانوادگی را وارد کنید"),

  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

  email: z.string().email("ایمیل معتبر نیست").or(z.literal("")).optional(),

  services: z.array(z.number()).min(1, "حداقل یک سرویس انتخاب کنید"),

  description: z
    .string()
    .max(1000, "توضیحات نباید بیشتر از 1000 کاراکتر باشد")
    .or(z.literal(""))
    .optional(),
});

export type ProjectStartForm = z.infer<typeof projectStartSchema>;
