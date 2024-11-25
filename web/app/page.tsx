"use client"

import React from "react"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AudioClassification from "./_components/audio-classification"
import TextSentiment from "./_components/text-sentiment"

export default function Home() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-5">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-primary">Deep Learning</h1>
          <p className="text-muted-foreground">
            Text Sentiment Analysis and Audio Classifications.
          </p>
        </div>
        <Tabs
          defaultValue="text"
          className="flex w-full flex-col gap-4 md:w-96"
        >
          <div className="flex items-center gap-2">
            <TabsList className="flex h-10 flex-auto *:flex-auto">
              <TabsTrigger value="text">Text Sentiment</TabsTrigger>
              <TabsTrigger value="audio">Audio Classification</TabsTrigger>
            </TabsList>
            <ThemeToggle />
          </div>
          <Separator />
          <TabsContent value="text">
            <TextSentiment />
          </TabsContent>
          <TabsContent value="audio">
            <AudioClassification />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
