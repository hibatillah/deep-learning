import type { Metadata } from "next"

import { TooltipProvider } from "@/components/ui/tooltip"

import fonts from "@/app/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "Deep Learning",
  description: "Deep learning project",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${fonts.inter} ${fonts.openSans} ${fonts.robotoMono} ${fonts.syne} font-inter antialiased selection:bg-indigo-100 selection:text-indigo-800`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
