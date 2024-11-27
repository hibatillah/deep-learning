"use client"

import React from "react"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import { ArrowRightIcon, CpuIcon } from "lucide-react"

export default function Home() {
  const modelAccuracy = 92

  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(modelAccuracy), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-dvh">
      <section className="container flex flex-col items-center justify-between gap-10 p-4">
        <header className="flex w-full items-center justify-between gap-6">
          <div className="font-medium tracking-tight">Deep Learning</div>
          <ThemeToggle className="size-9" />
        </header>

        <div className="text-center mt-20">
          <h1 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-5xl/tight font-bold tracking-tight text-transparent md:text-6xl/snug">
            AI Sentiment Analysis
          </h1>
          <p className="mt-1 text-balance font-medium text-muted-foreground md:mt-0">
            <span>Analisis sentimen teks yang akurat dengan model</span>
            <span className="ms-1 text-teal-600 dark:text-teal-500">
              Deep Learning
            </span>
          </p>
          <Button className="group mt-6">
            <span>Cek Sentiment</span>
            <ArrowRightIcon className="size-4 transition-all duration-300 ease-out group-hover:rotate-90" />
          </Button>
        </div>

        <div className="relative grid h-80 w-full place-items-center">
          <div className="relative flex h-48 w-80 max-w-96 items-end rounded-md border bg-background p-6 shadow-[0_0_0_8px_rgba(var(--tw-shadow-color),0.1)] shadow-zinc-100 dark:shadow-zinc-900 md:h-52 md:w-96">
            <div className="flex-auto">
              <div className="mb-1.5 flex items-baseline justify-between">
                <div className="text-sm text-muted-foreground">
                  Dengan model akurasi tinggi
                </div>
                <div className="text-lg font-semibold">{`${modelAccuracy}%`}</div>
              </div>
              <Progress
                value={progress}
                className="h-2.5"
              />
            </div>
            <div className="absolute start-1/2 top-7 flex h-14 w-[95vw] -translate-x-1/2 items-center justify-center gap-2 rounded-xl border bg-background px-2 shadow-lg md:h-16 md:w-[450px] md:gap-4 md:px-4">
              <CpuIcon className="size-5 text-teal-500 dark:text-teal-600" />
              <span className="text-sm md:text-base">
                Membuat model optimal dengan dataset terbaik
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="h-dvh"></section>
    </div>
  )
}
