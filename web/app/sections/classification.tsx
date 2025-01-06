import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import AudioClassification from "../_components/audio-classification"

const items = [
  {
    id: "1",
    title: "Pengiriman Data",
    content:
      "Pengguna mengunggah file melalui antarmuka frontend, seperti gambar, audio, atau teks. File tersebut kemudian dikirim ke backend menggunakan API melalui metode HTTP, biasanya dengan metode POST. Backend memeriksa integritas file untuk memastikan data dapat diproses lebih lanjut.",
  },
  {
    id: "2",
    title: "Pra-Pemrosesan",
    content:
      "Backend menerima file yang dikirim, kemudian melakukan pra-pemrosesan seperti validasi format, normalisasi, atau ekstraksi fitur. Data yang telah diproses akan disesuaikan dengan format yang dibutuhkan oleh model deep learning agar dapat diprediksi dengan optimal.",
  },
  {
    id: "3",
    title: "Prediksi Model",
    content:
      "Model deep learning memproses data yang telah dipersiapkan, menganalisis pola, dan menghasilkan hasil prediksi berdasarkan pelatihan sebelumnya. Proses ini melibatkan inferensi model untuk mendapatkan output yang sesuai dengan tujuan, seperti klasifikasi atau deteksi. Hasil ini kemudian diubah menjadi format yang mudah dipahami oleh frontend.",
  },
  {
    id: "4",
    title: "Pengiriman Hasil",
    content:
      "Hasil prediksi yang dihasilkan oleh model dikirim kembali ke backend. Backend memformat hasil prediksi agar mudah dipahami, seperti menambahkan deskripsi atau tingkat kepercayaan hasil prediksi. Data yang sudah diformat dikirim kembali ke frontend melalui API untuk ditampilkan kepada pengguna",
  },
]

function Tutorial() {
  return (
    <div className="space-y-4">
      <h3 className="text-pretty font-open-sans text-xl/snug font-bold tracking-tighter text-zinc-800">
        Proses Klasifikasi
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="rounded-lg border bg-background px-4 py-1"
          >
            <AccordionTrigger className="py-2 text-[15px] leading-6 text-indigo-500 hover:no-underline">
              <span className="text-primary">{item.title}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default function Classification() {
  return (
    <section
      id="classification"
      className="container grid grid-cols-1 gap-4 gap-y-12 px-4 pb-32 lg:grid-cols-2 lg:gap-12 lg:px-20"
    >
      <AudioClassification />
      <Tutorial />
    </section>
  )
}
