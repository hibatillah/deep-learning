"use client"

import React from "react"

import Link from "next/link"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import {
  ArrowRightIcon,
  BrainCircuitIcon,
  CpuIcon,
  FileTextIcon,
  TargetIcon,
} from "lucide-react"

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
          <a href="/" className="font-medium tracking-tight">Deep Learning</a>
          <ThemeToggle
            variant="ghost"
            className="size-9"
          />
        </header>

        <div className="mt-20 text-center">
          <h1 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-5xl/tight font-bold tracking-tight text-transparent md:text-6xl/snug">
            AI Sentiment Analysis
          </h1>
          <p className="mt-1 text-balance font-medium text-muted-foreground md:mt-0">
            <span>Analisis sentimen teks yang akurat dengan model</span>
            <span className="ms-1 text-teal-600 dark:text-teal-500">
              Deep Learning
            </span>
          </p>
          <Link href="#predict">
            <Button className="group mt-6">
              <span>Cek Sentiment</span>
              <ArrowRightIcon className="size-4 transition-all duration-300 ease-out group-hover:rotate-90" />
            </Button>
          </Link>
        </div>

        <div className="flex h-80 w-full items-center *:relative [&_[data-decoration]]:h-full [&_[data-decoration]]:flex-auto">
          <div
            className="invisible *:absolute lg:visible [&_[data-label]]:flex [&_[data-label]]:items-center [&_[data-label]]:gap-1.5 [&_[data-label]]:rounded-full [&_[data-label]]:border [&_[data-label]]:bg-background [&_[data-label]]:px-3 [&_[data-label]]:py-1 [&_[data-label]]:text-xs [&_[data-label]]:shadow-sm [&_[data-line]]:-z-10 [&_[data-line]]:h-0.5 [&_[data-line]]:bg-muted-foreground [&_[data-line]]:dark:bg-muted"
            data-decoration
          >
            <div
              className="end-24 top-[55%] grid size-11 -translate-x-2 -translate-y-1/2 !p-0 text-foreground"
              data-label
            >
              <FileTextIcon className="m-auto size-5 text-foreground" />
            </div>
            <div
              className="end-48 top-[33%] -translate-y-1/2 text-foreground"
              data-label
            >
              <span className="size-1.5 rounded-full bg-teal-600 dark:bg-teal-500" />
              <span>Description</span>
            </div>
            <div
              className="end-60 top-[55%] -translate-y-1/2 text-foreground"
              data-label
            >
              <span className="size-1.5 rounded-full bg-teal-600 dark:bg-teal-500" />
              <span>Review</span>
            </div>
            <div
              className="end-48 top-[78%] -translate-y-1/2 text-foreground"
              data-label
            >
              <span className="size-1.5 rounded-full bg-red-600 dark:bg-red-500" />
              <span>Review</span>
            </div>
            <div
              className="end-0 top-[55%] w-28"
              data-line
            />
            <div
              className="end-32 top-[55%] w-24 origin-right rotate-45"
              data-line
            />
            <div
              className="end-32 top-[55%] w-24 origin-right -rotate-45"
              data-line
            />
            <div
              className="end-32 top-[55%] w-28"
              data-line
            />
          </div>

          <div className="flex h-48 w-80 max-w-96 flex-none items-end rounded-md border bg-background p-6 shadow-[0_0_0_8px_rgba(var(--tw-shadow-color),0.1)] shadow-zinc-100 dark:shadow-zinc-900 md:w-96">
            <div className="flex-auto">
              <div className="mb-1.5 flex items-baseline justify-between">
                <div className="text-sm text-muted-foreground">
                  Model dengan akurasi tinggi
                </div>
                <div className="text-lg font-semibold">{`${modelAccuracy}%`}</div>
              </div>
              <Progress
                value={progress}
                className="h-2.5"
              />
            </div>
            <div className="absolute start-1/2 top-5 flex h-14 w-[95vw] -translate-x-1/2 items-center justify-center gap-2 rounded-xl border bg-background px-2 shadow-lg sm:w-[450px] md:h-16 md:gap-4 md:px-4">
              <BrainCircuitIcon className="size-5 text-teal-500 dark:text-teal-600" />
              <span className="text-sm md:text-base">
                Membuat model optimal dengan dataset terbaik
              </span>
            </div>
          </div>

          <div
            className="invisible *:absolute lg:visible [&_[data-label]]:flex [&_[data-label]]:items-center [&_[data-label]]:gap-1.5 [&_[data-label]]:rounded-full [&_[data-label]]:border [&_[data-label]]:bg-background [&_[data-label]]:px-3 [&_[data-label]]:py-1 [&_[data-label]]:text-xs [&_[data-label]]:shadow-sm [&_[data-line]]:-z-10 [&_[data-line]]:h-0.5 [&_[data-line]]:bg-muted-foreground [&_[data-line]]:dark:bg-muted"
            data-decoration
          >
            <div
              className="start-28 top-[55%] grid size-11 -translate-x-2 -translate-y-1/2 !p-0 text-foreground"
              data-label
            >
              <CpuIcon className="m-auto size-5 text-foreground" />
            </div>
            <div
              className="start-48 top-[42%] -translate-y-1/2 text-teal-600"
              data-label
            >
              Positif
            </div>
            <div
              className="start-48 top-[68%] -translate-y-1/2 text-red-600"
              data-label
            >
              Negatif
            </div>
            <div
              className="start-0 top-[55%] w-28"
              data-line
            />
            <div
              className="start-32 top-[55%] w-24 origin-left rotate-[30deg]"
              data-line
            />
            <div
              className="start-32 top-[55%] w-24 origin-left -rotate-[30deg]"
              data-line
            />
          </div>
        </div>
      </section>

      <section className="container mt-20 grid place-items-center p-4">
        <div className="w-3/4 space-y-5 [&_h2]:text-lg [&_h2]:font-medium [&_p]:text-sm/normal [&_p]:text-muted-foreground">
          <div className="flex items-center gap-5 *:space-y-4 *:rounded-xl *:border *:border-zinc-100 *:bg-zinc-50 *:p-8 dark:*:border-zinc-900 dark:*:bg-zinc-900/50">
            <div className="h-80 flex-[1_1_60%]">
              <div className="space-y-1">
                <h2>Artifical Intelligence</h2>
                <p>
                  Teknologi yang memungkinkan komputer memiliki kemampuan untuk
                  berpikir, memahami dan menerjemahkan bahasa lisan serta
                  tertulis, menganalisis data, membuat rekomendasi, dan lainnya.
                </p>
              </div>
            </div>
            <div className="size-80 flex-[1_1_40%]">
              <BrainCircuitIcon className="size-6 text-teal-600 dark:text-teal-500" />
              <div className="space-y-1">
                <h2>Deep Learning</h2>
                <p>
                  Deep learning adalah jenis machine learning yang menggunakan
                  jaringan neural buatan untuk belajar dari data.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 *:h-80 *:space-y-4 *:rounded-xl *:border *:border-zinc-100 *:bg-zinc-50 *:p-8 dark:*:border-zinc-900 dark:*:bg-zinc-900/50">
            <div>
              <CpuIcon className="size-6 text-teal-600 dark:text-teal-500" />
              <div className="space-y-1">
                <h2>Training Data</h2>
                <p>
                  Algoritma deep learning dilatih pada set data besar yang
                  berisi data berlabel. Algoritma akan mempelajari cara
                  mengaitkan fitur dalam data dengan label yang benar.
                </p>
              </div>
            </div>
            <div>
              <TargetIcon className="size-6 text-teal-600 dark:text-teal-500" />
              <div className="space-y-1">
                <h2>Prediksi Data</h2>
                <p>
                  Setelah dilatih, algoritma deep learning dapat digunakan untuk
                  membuat prediksi pada data baru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="predict"
        className="h-96"
      ></section>

      <footer className="h-96"></footer>

      <div className="absolute inset-0 -z-20 h-full -translate-y-8 w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:44px_44px]" />
    </div>
  )
}
