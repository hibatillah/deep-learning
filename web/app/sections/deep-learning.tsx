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
      className="container grid scroll-mt-12 grid-cols-1 items-center gap-4 px-4 py-10 lg:px-20 xl:grid-cols-2 xl:gap-12"
    >
      <div className="order-2 aspect-[4/3] rounded-xl bg-indigo-100 xl:order-1"></div>
      <div className="order-1 flex flex-col gap-3 py-3 xl:order-2 xl:aspect-[4/3]">
        <h2 className="text-pretty font-open-sans text-3xl/snug font-bold tracking-tighter text-zinc-800">
          Model Deep Learning dengan Dataset Terbaik
        </h2>
        <p className="text-pretty text-zinc-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sequi,
          aut adipisci facilis sed rerum illo voluptatibus, dolores nihil, nemo
          accusantium amet veritatis voluptas harum excepturi consequuntur
          aliquid? Ut, dolores.
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
