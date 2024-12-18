import React from "react"

import Hero from "./sections/hero"
import DeepLearning from "./sections/deep-learning"
import Dataset from "./sections/dataset"

export default function Home() {
  return (
    <div className="min-h-dvh w-full space-y-20 overflow-hidden">
      <Hero />
      <Dataset />
      <DeepLearning />
      <div className="h-dvh"></div>
    </div>
  )
}
