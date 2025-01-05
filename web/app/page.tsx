"use client"

import React from "react"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AudioClassification from "./_components/audio-classification"
import ImageClassification from "./_components/image-classification"
import TextSentiment from "./_components/text-sentiment"

export default function Home() {
  return (
    <div className="flex h-dvh flex-col items-center p-4">
      <div className="mt-[20dvh] flex w-full max-w-[500px] flex-col gap-5 lg:w-1/3 xl:w-[30%] 2xl:w-1/4">
        <div className="text-pretty">
          <h1 className="text-xl font-semibold text-primary">Deep Learning</h1>
          <p className="text-muted-foreground">
            Sentiment Analysis and Classifications
          </p>
          <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-300">
            Deep Learning api isn't hosted yet, run locally
          </p>
        </div>
        <Tabs
          defaultValue="text"
          className="flex w-full flex-col gap-3"
        >
          <div className="flex items-center gap-2">
            <TabsList className="flex h-10 flex-auto *:flex-1">
              <TabsTrigger value="text">Sentiment</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
              <TabsTrigger value="image">Image</TabsTrigger>
            </TabsList>
            <ThemeToggle />
          </div>
          <Separator />
          <TabsContent
            value="text"
            tabIndex={-1}
          >
            <TextSentiment />
          </TabsContent>
          <TabsContent
            value="audio"
            tabIndex={-1}
          >
            <AudioClassification />
          </TabsContent>
          <TabsContent
            value="image"
            tabIndex={-1}
          >
            <ImageClassification />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
