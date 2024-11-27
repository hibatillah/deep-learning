"use client"

import * as React from "react"

import { useTheme } from "next-themes"

import { Button, buttonVariants } from "@/components/ui/button"

import { Moon, Sun } from "lucide-react"

type Size = NonNullable<Parameters<typeof buttonVariants>[0]>["size"]

export function ThemeToggle({
  size,
  className,
}: {
  size?: Size
  className?: string
}) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      size={size}
      variant="secondary"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className={className}
    >
      {theme === "dark" ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
