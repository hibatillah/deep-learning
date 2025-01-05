import React from "react"

import AudioClassification from "./_components/audio-classification"
import Dataset from "./sections/dataset"
import DeepLearning from "./sections/deep-learning"
import Hero from "./sections/hero"
import Classification from "./sections/classification"

export default function Home() {
  return (
    <div className="min-h-dvh w-full space-y-20 overflow-hidden">
      <Hero />
      <Dataset />
      <DeepLearning />
      <Classification />
    </div>
  )
}
