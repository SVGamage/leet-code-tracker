import z from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string().min(1).url(),
  KINDE_CLIENT_ID: z.string().min(1),
  KINDE_CLIENT_SECRET: z.string().min(1),
  KINDE_ISSUER_URL: z.string().min(1).url(),
  KINDE_SITE_URL: z.string().min(1).url(),
  KINDE_POST_LOGOUT_REDIRECT_URL: z.string().min(1).url(),
  KINDE_POST_LOGIN_REDIRECT_URL: z.string().min(1).url(),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
