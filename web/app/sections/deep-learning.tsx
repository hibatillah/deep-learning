export default function DeepLearning() {
  return (
    <section
      id="deep-learning"
      className="container grid scroll-mt-12 grid-cols-2 items-center gap-12 p-20 *:aspect-[4/3]"
    >
      <div className="rounded-xl bg-indigo-100"></div>
      <div className="flex flex-col gap-3 py-2">
        <h2 className="text-pretty font-open-sans text-3xl/snug font-bold tracking-tighter text-zinc-800">
          Model Deep Learning dengan Dataset Terbaik
        </h2>
        <p className="text-pretty text-zinc-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sequi,
          aut adipisci facilis sed rerum illo voluptatibus, dolores nihil, nemo
          accusantium amet veritatis voluptas harum excepturi consequuntur
          aliquid? Ut, dolores.
        </p>
        <div className="mt-auto grid grid-cols-3 gap-4 *:flex *:aspect-[4/3] *:flex-col *:items-center *:justify-center *:gap-1 *:rounded-lg *:border *:border-zinc-100 *:bg-zinc-50 *:p-5 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-zinc-800 [&_p]:font-medium [&_p]:text-zinc-400">
          <div>
            <h3>3</h3>
            <p>label audio</p>
          </div>
          <div>
            <h3>1000+</h3>
            <p>data audio</p>
          </div>
          <div>
            <h3>± 70%</h3>
            <p>akurasi model</p>
          </div>
        </div>
      </div>
    </section>
  )
}
