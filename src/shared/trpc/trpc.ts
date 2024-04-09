import { initTRPC } from "@trpc/server"

import { transformer } from "./transformer"

// Initializing tRPC server instance
const t = initTRPC.create({
  transformer,
  errorFormatter({ shape }) {
    return shape
  },
})

// Base router and procedure helpers
export const router = t.router

// Public procedure
export const publicProcedure = t.procedure
