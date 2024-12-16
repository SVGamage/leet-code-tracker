import z from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string().min(1).url(),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
