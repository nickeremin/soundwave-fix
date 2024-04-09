import React from "react"
import { Nunito_Sans } from "next/font/google"

import "./globals.css"

import { cn } from "@/shared/lib/utils"

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
      <body
        className={cn(
          font.className,
          "relative min-h-screen max-w-[100vw] antialiased"
        )}
      >
        {children}
      </body>
    </html>
  )
}
