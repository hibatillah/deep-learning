import Image from "next/image"

import Ellipse1 from "@/assets/decorations/Ellipse1.svg"
import Vector3 from "@/assets/decorations/Vector3.svg"

import { Button } from "@/components/ui/button"

import { PlayIcon } from "lucide-react"

type Example = {
  name: string
  description: string
  audio?: string | File
}

const example: Example[] = [
  {
    name: "Adeni",
    description:
      "Musik yang berasal dari wilayah Aden dengan nuansa modern. Gaya musik ini dipengaruhi oleh musik internasional dan menggunakan instrumen modern dengan ritme yang lebih variatif dan dinamis.",
  },
  {
    name: "Hadrami",
    description:
      "Musik khas wilayah Hadhramaut yang memiliki karakter ritme tenang dan melodis. Sering kali digunakan dalam lagu-lagu pujian dan musik religi dengan instrumen tradisional khas Yaman.",
  },
  {
    name: "Lahji",
    description:
      "Musik tradisional dari wilayah Lahj dengan gaya pedesaan. Ciri khasnya terletak pada penggunaan instrumen tradisional dan pola ritme sederhana yang merefleksikan budaya lokal.",
  },
]

export default function Dataset() {
  return (
    <section
      id="dataset"
      className="container scroll-mt-32 space-y-14 p-6"
    >
      <div className="relative mx-auto max-w-max space-y-2 text-center">
        <h2 className="text-pretty text-center font-open-sans text-3xl/snug font-bold tracking-tighter text-zinc-800">
          Kenali Musik Tradisional Yaman
        </h2>
        <p className="text-balance text-zinc-400">
          Setiap jenis musik memiliki ciri khas unik yang mencerminkan
          keanekaragaman budaya musik Yaman
        </p>

        <Image
          src={Ellipse1}
          alt=""
          className="absolute -top-14 end-4 w-12 rotate-[60deg] md:end-24 lg:end-24"
          aria-hidden="true"
        />
        <Image
          src={Vector3}
          alt=""
          className="absolute -start-12 top-10 w-12 md:start-12 lg:-start-16 lg:-top-8 lg:end-8"
          aria-hidden="true"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-3 xl:px-14">
        {example.map((item, index) => {
          return (
            <div className="rounded-xl border border-zinc-200 p-6">
              <div className="mb-4 flex items-center gap-4">
                <div
                  data-index={index}
                  className="grid size-9 place-items-center rounded-md font-open-sans font-semibold data-[index=0]:bg-red-100 data-[index=1]:bg-green-100 data-[index=2]:bg-indigo-100 data-[index=0]:text-red-600 data-[index=1]:text-green-600 data-[index=2]:text-indigo-600"
                >
                  {index + 1}
                </div>
                <h3 className="font-open-sans text-xl/tight font-semibold tracking-tight text-zinc-800">
                  {item.name}
                </h3>
              </div>
              <p className="text-pretty text-sm/normal text-zinc-500">
                {item.description}
              </p>
              <Button
                size="sm"
                variant="outline"
                className="mt-5 rounded-full px-4 font-normal text-zinc-700"
              >
                <PlayIcon className="size-5" />
                Dengar {item.name}
              </Button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
