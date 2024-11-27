import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme/theme-provider"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

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
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} antialiased selection:bg-teal-100 selection:text-teal-800 dark:selection:bg-teal-700 dark:selection:text-teal-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
