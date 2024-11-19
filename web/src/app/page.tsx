"use client"

import React from "react"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AudioClassification from "./_components/audio-classification"
import TextSentiment from "./_components/text-sentiment"

export default function Home() {
  return (
    <div className="flex h-dvh flex-col items-center p-4">
      <Tabs
        defaultValue="text"
        className="flex w-full flex-col gap-4 md:mt-40 md:w-96"
      >
        <TabsList className="flex *:flex-auto">
          <TabsTrigger value="text">Text Sentiment</TabsTrigger>
          <TabsTrigger value="audio">Audio Classification</TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent value="text">
          <TextSentiment />
        </TabsContent>
        <TabsContent value="audio">
          <AudioClassification />
        </TabsContent>
      </Tabs>
    </div>
  )
}
