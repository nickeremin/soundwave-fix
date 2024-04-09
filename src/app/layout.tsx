import React from "react"
import { Nunito_Sans } from "next/font/google"
import { enUS } from "@clerk/localizations"

import "./globals.css"

import BoundStoreHydrationProvider from "@/providers/bound-store-hydration-provider"
import { BoundStoreProvider } from "@/providers/bound-store-provider"
import { ClerkProvider } from "@clerk/nextjs"

import { cn } from "@/shared/lib/utils"
import TRPCReactQueryProvider from "@/shared/trpc/trpc-react-query-provider"

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
        >
          <TRPCReactQueryProvider>
            <BoundStoreProvider>
              <BoundStoreHydrationProvider>
                {children}
              </BoundStoreHydrationProvider>
            </BoundStoreProvider>
          </TRPCReactQueryProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
