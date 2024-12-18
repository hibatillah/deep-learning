import React from "react"

import Dataset from "./sections/dataset"
import DeepLearning from "./sections/deep-learning"
import Hero from "./sections/hero"

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
