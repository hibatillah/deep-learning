import { BrainCircuitIcon } from "lucide-react"

const featured = [
  {
    title: "3",
    description: "label audio",
  },
  {
    title: "1000+",
    description: "data audio",
  },
  {
    title: "± 95%",
    description: "akurasi model",
  },
]

export default function DeepLearning() {
  return (
    <section
      id="deep-learning"
      className="container grid scroll-mt-24 grid-cols-1 items-center gap-4 px-4 py-10 lg:px-20 xl:grid-cols-2 xl:gap-12"
    >
      <div className="order-2 space-y-4 rounded-xl bg-indigo-100 p-12 xl:order-1 xl:aspect-[3/2]">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-full bg-indigo-500">
            <BrainCircuitIcon className="size-5 text-white" />
          </div>
          <h3 className="text-pretty font-open-sans text-2xl/snug font-bold tracking-tighter text-zinc-800">
            Deep Learning
          </h3>
        </div>
        <p className="text-pretty text-zinc-500">
          Deep learning adalah cabang kecerdasan buatan (AI) yang menggunakan
          jaringan saraf tiruan untuk mempelajari pola dari data besar.
          Teknologi ini memungkinkan komputer mengenali wajah, menerjemahkan
          bahasa, dan menganalisis sentimen dengan akurasi tinggi. Deep learning
          banyak diterapkan di bidang kesehatan, otomotif, dan layanan
          pelanggan.
        </p>
      </div>
      <div className="order-1 flex flex-col gap-3 py-1 xl:order-2 xl:aspect-[3/2]">
        <h2 className="text-pretty font-open-sans text-3xl/snug font-bold tracking-tighter text-zinc-800">
          Model Deep Learning dengan Dataset Terbaik
        </h2>
        <p className="text-pretty text-zinc-400">
          Solusi Deep Learning untuk klasifikasi audio dengan dataset
          berkualitas tinggi. Dapatkan prediksi yang presisi berkat model
          canggih yang didukung lebih dari 1.000 data audio dengan akurasi
          hingga 95%. Cocok untuk analisis audio musik yaman😍😍
        </p>
        <div className="mt-6 grid grid-cols-1 content-stretch gap-3 lg:mt-auto lg:grid-cols-3 lg:gap-6">
          {featured.map((item) => (
            <div className="flex items-center gap-4 rounded-lg border border-zinc-100 bg-zinc-50 p-5 lg:flex-col lg:justify-center lg:gap-1 xl:aspect-[4/3]">
              <h3 className="text-2xl font-bold text-zinc-800">{item.title}</h3>
              <p className="text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
