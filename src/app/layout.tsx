import React from "react"
import { Nunito_Sans } from "next/font/google"
import { enUS } from "@clerk/localizations"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import "./globals.css"

import BoundStoreHydrationProvider from "@/providers/bound-store-hydration-provider"
import { BoundStoreProvider } from "@/providers/bound-store-provider"
import { ClerkProvider } from "@clerk/nextjs"

import { Toaster } from "@/shared/components/ui/sonner"
import { TooltipProvider } from "@/shared/components/ui/tooltip"
import { cn } from "@/shared/lib/utils"
import TRPCReactQueryProvider from "@/shared/trpc/trpc-react-query-provider"
import { PlayerContextProvider } from "@/providers/player-context-provider"

const font = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "latin"],
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider localization={enUS}>
        <body
          className={cn(
            font.className,
            "relative min-h-screen max-w-[100vw] antialiased"
          )}
          suppressHydrationWarning
        >
          <TRPCReactQueryProvider>
            <BoundStoreProvider>
              <BoundStoreHydrationProvider>
                <PlayerContextProvider>
                  <TooltipProvider delayDuration={300}>
                    {children}
                  </TooltipProvider>
                  <Toaster />
                  <ReactQueryDevtools
                    buttonPosition="bottom-left"
                    position="bottom"
                    initialIsOpen={false}
                  />
                </PlayerContextProvider>
              </BoundStoreHydrationProvider>
            </BoundStoreProvider>
          </TRPCReactQueryProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
