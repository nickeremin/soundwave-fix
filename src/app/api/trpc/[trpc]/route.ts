import { NextRequest } from "next/server"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

import { appRouter } from "@/app/api/trpc/app"

function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
    onError({ error }) {
      if (error.code === "INTERNAL_SERVER_ERROR") {
        console.error("Caught TRPC error:", error)
      }
    },
  })
}
export { handler as GET, handler as POST }
