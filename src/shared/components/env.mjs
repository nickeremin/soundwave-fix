import { createEnv } from "@t3-oss/env-nextjs"
import * as z from "zod"

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DATABASE_CONNECTION_STRING: z.string(),
    CLERK_SECRET_KEY: z.string(),
    SPOTIFY_API_BASE_URL: z.string(),
    SPOTIFY_ACCESS_TOKEN_KEY: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_SERVER_URL: z.string(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    DATABASE_CONNECTION_STRING: process.env.DATABASE_CONNECTION_STRING,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SPOTIFY_API_BASE_URL: process.env.SPOTIFY_API_BASE_URL,
    SPOTIFY_ACCESS_TOKEN_KEY: process.env.SPOTIFY_ACCESS_TOKEN_KEY,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  },
})
