import React from "react"

import Image from "next/image"
import Link from "next/link"

import Ellipse2 from "@/assets/decorations/Ellipse2.svg"
import Vector1 from "@/assets/decorations/Vector1.svg"
import Vector2 from "@/assets/decorations/Vector2.svg"
import Vector3 from "@/assets/decorations/Vector3.svg"
import Desy from "@/assets/images/Desy.jpg"
import yaman1 from "@/assets/images/yaman-1.jpg"
import yaman2 from "@/assets/images/yaman-2.jpg"

import Author from "@/components/custom/author"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="hero"
      className="container p-4"
    >
      <header className="flex items-start justify-between gap-4 md:items-center">
        <Link
          href="/"
          className="hidden font-syne text-sm font-semibold text-indigo-500 hover:text-indigo-400 md:block"
        >
          Batu Karang
        </Link>
        <nav className="flex flex-col font-medium *:font-open-sans *:text-sm *:tracking-tight *:text-zinc-400 hover:*:text-primary sm:flex-row sm:gap-4 md:items-center md:*:font-medium">
          <Link href="#dataset">Musik Yaman</Link>
          <Link href="#deep-learning">Deep Learning</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="font-syne text-xs text-zinc-400">made by</div>
          <Author
            img={Desy.src}
            fallback="DE"
            content="@simangunsongdessy"
            link="https://www.instagram.com/simangunsongdessy"
          />
          <Author
            img="https://media.licdn.com/dms/image/v2/D4E03AQFXx7TyMz0I4A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692578340795?e=1740009600&v=beta&t=ro6qEAVS7zYb7YbGKq1GUyJZqGK0exIsdmRtjXzESsU"
            fallback="MH"
            content="@hibatillahhabib"
            link="https://linkedin.com/in/hibatillahhabib"
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
        <h1 className="text-balance font-open-sans text-5xl/snug font-bold tracking-tighter text-zinc-800">
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
            href="#classification"
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

      <div className="grid grid-cols-1 gap-4 px-4 *:aspect-[4/3] *:rounded-xl md:grid-cols-2 md:*:aspect-square lg:gap-12 lg:px-20">
        <div className="bg-orange-100 p-5 lg:p-10">
          <Image src={yaman1} alt="yaman-1" className="size-full rounded-xl object-cover shadow-2xl" />
        </div>
        <div className="bg-green-100 p-5 lg:p-10">
          <Image src={yaman2} alt="yaman-2" className="size-full rounded-xl object-cover shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
