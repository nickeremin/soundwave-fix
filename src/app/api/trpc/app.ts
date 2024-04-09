import { inferRouterOutputs } from "@trpc/server"

import { router } from "@/shared/trpc/trpc"

export const appRouter = router({})

export type AppRouter = typeof appRouter
export type AppRouterOutput = inferRouterOutputs<AppRouter>
