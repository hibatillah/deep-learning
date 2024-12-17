export default function Dataset() {
  return (
    <section
      id="dataset"
      className="container scroll-mt-32 space-y-10 p-6"
    >
      <div className="mx-auto w-max space-y-2 text-center">
        <h2 className="text-pretty text-center font-open-sans text-3xl/snug font-bold tracking-tighter text-zinc-800">
          Kenali Musik Tradisional Yaman
        </h2>
        <p className="text-balance text-zinc-400">
          Setiap jenis musik memiliki ciri khas unik yang mencerminkan
          keanekaragaman budaya musik Yaman
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 px-14 *:aspect-[4/3] *:rounded-xl *:border *:border-zinc-200">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </section>
  )
}
