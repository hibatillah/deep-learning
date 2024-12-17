import React from "react"

import Link from "next/link"

import Author from "@/components/custom/author"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Hero() {
  return (
    <section
      id="hero"
      className="container p-4"
    >
      <header className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-syne text-sm font-semibold text-indigo-500 hover:text-indigo-400"
        >
          Batu Karang
        </Link>
        <nav className="flex items-center gap-4 *:font-open-sans *:text-sm *:font-semibold *:tracking-tight *:text-zinc-400 data-[active=true]:*:text-zinc-800">
          <Link
            href="#dataset"
            data-active="true"
          >
            Musik Yaman
          </Link>
          <Separator
            orientation="vertical"
            className="h-4"
          />
          <Link
            href="#deep-learning"
            data-active="false"
          >
            Deep Learning
          </Link>
          <Separator
            orientation="vertical"
            className="h-4"
          />
          <Link
            href="#about"
            data-active="false"
          >
            Tentang
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="font-syne text-xs text-zinc-400">made by</div>
          <Author
            img="https://github.com/hibatillah.png"
            fallback="DE"
            content="@simangunsongdessy"
            link="https://www.instagram.com/simangunsongdessy"
          />
          <Author
            img="https://media.licdn.com/dms/image/v2/D4E03AQFXx7TyMz0I4A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692578340795?e=1740009600&v=beta&t=ro6qEAVS7zYb7YbGKq1GUyJZqGK0exIsdmRtjXzESsU"
            fallback="MH"
            content="@hibat.illah"
            link="https://instagram.com/hibat.illah"
            className="-ms-5 ring-2 ring-white"
          />
          <Avatar className="-ms-5 size-8 ring-2 ring-white">
            <AvatarFallback className="bg-indigo-500 text-xs tracking-wide text-white">
              SIC
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="mb-20 mt-32 flex flex-col items-center text-center">
        <h1 className="text-pretty font-open-sans text-5xl/snug font-bold tracking-tighter text-zinc-800">
          Lestarikan Harmoni Automasi Klasifikasi
        </h1>
        <p className="text-pretty text-lg font-medium text-zinc-400">
          Implementasi <span className="text-indigo-400">Deep Learning</span>{" "}
          untuk klasifikasi musik tradisional{" "}
          <span className="text-red-400/90">Yaman</span>
        </p>
        <div className="mb-6 mt-10 flex items-center gap-3 *:font-open-sans">
          <Link
            href="#dataset"
            className="rounded-full"
          >
            <Button className="rounded-full px-4">Dengar Musik Yaman</Button>
          </Link>
          <Link
            href="#deep-learning"
            className="rounded-full"
          >
            <Button
              variant="secondary"
              className="rounded-full px-4"
            >
              Prediksi Musik
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 px-20 *:aspect-square *:rounded-xl">
        <div className="bg-orange-100"></div>
        <div className="bg-green-100"></div>
      </div>
    </section>
  )
}
