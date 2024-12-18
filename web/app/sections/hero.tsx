import React from "react"

import Image from "next/image"
import Link from "next/link"

import Ellipse2 from "@/assets/decorations/Ellipse2.svg"
import Vector1 from "@/assets/decorations/vector1.svg"
import Vector2 from "@/assets/decorations/vector2.svg"
import Vector3 from "@/assets/decorations/vector3.svg"

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
          className="hidden font-syne text-sm font-semibold text-indigo-500 hover:text-indigo-400 md:block"
        >
          Batu Karang
        </Link>
        <nav className="flex items-center gap-2 font-medium *:font-open-sans *:text-sm *:tracking-tight *:text-zinc-400 data-[active=true]:*:text-zinc-800 md:gap-4 md:*:font-semibold">
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

      <div className="relative mx-auto mb-20 mt-32 flex max-w-max flex-col items-center text-center">
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

        <Image
          src={Vector1}
          alt=""
          className="absolute -end-10 bottom-16 w-32 origin-bottom-left -rotate-12 lg:end-8"
          aria-hidden="true"
        />
        <Image
          src={Ellipse2}
          alt=""
          className="absolute bottom-10 start-0 w-10 origin-bottom-left -rotate-12 lg:start-28"
          aria-hidden="true"
        />
        <Image
          src={Vector3}
          alt=""
          className="absolute -start-20 bottom-24 w-10 origin-bottom-left -rotate-12"
          aria-hidden="true"
        />
        <Image
          src={Vector2}
          alt=""
          className="absolute -top-10 end-64 w-10 origin-bottom-left -rotate-45"
          aria-hidden="true"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 *:aspect-[4/3] *:rounded-xl md:grid-cols-2 lg:gap-12 lg:px-20 md:*:aspect-square">
        <div className="bg-orange-100"></div>
        <div className="bg-green-100"></div>
      </div>
    </section>
  )
}
