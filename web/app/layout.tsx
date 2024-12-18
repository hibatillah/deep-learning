import type { Metadata } from "next"

import { TooltipProvider } from "@/components/ui/tooltip"

import fonts from "@/app/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "Deep Learning - Team 1",
  description: "Deep learning project by Team 1 4SIC",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${fonts.inter} ${fonts.openSans} ${fonts.syne} font-inter antialiased selection:bg-indigo-100 selection:text-indigo-800`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
