"use client"

import React from "react"

import Chart from "@/components/custom/chart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

import { LoaderCircleIcon } from "lucide-react"

function LoadingCard() {
  return (
    <>
      <Skeleton className="size-28 flex-none rounded-full" />
      <div className="space-y-4">
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-4 w-52" />
          <Skeleton className="h-4 w-36" />
        </div>
      </div>
    </>
  )
}

type Prediction = {
  review: string
  sentiment: string
  score: number
}

export default function Home() {
  const [isPending, startTransition] = React.useTransition()
  const [prediction, setPrediction] = React.useState<Prediction>()

  const predict = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const data = {
      review: formData.get("review"),
    }

    startTransition(async () => {
      try {
        const response = await fetch("http://localhost:8000/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        const result = await response.json()

        setPrediction({
          review: result.review,
          sentiment: result.prediction,
          score: result.score * 100,
        })
      } catch (error) {
        console.error("Error:", error)
      }
    })
  }

  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <div className="flex w-full flex-col gap-8 md:w-96">
        <form
          onSubmit={predict}
          className="flex w-full flex-col gap-3"
        >
          <div className="block space-y-1">
            <Label
              htmlFor="review"
              className="text-zinc-800"
            >
              Review
            </Label>
            <Input
              type="text"
              id="review"
              name="review"
              placeholder="Enter your review"
            />
          </div>
          <Button type="submit">
            {isPending ? (
              <div className="flex items-center gap-2">
                <LoaderCircleIcon className="animate-spin" />
                <span>Predicting...</span>
              </div>
            ) : (
              "Check Sentiment"
            )}
          </Button>
        </form>
        {prediction && (
          <div className="space-y-8">
            <Separator />
            <div className="flex w-full items-start gap-4 rounded-lg border border-border p-4">
              {isPending ? (
                <LoadingCard />
              ) : (
                <>
                  <div className="relative h-28 w-32 flex-none">
                    <Chart
                      score={prediction.score}
                      className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="space-y-2 [&_label]:text-xs [&_label]:text-zinc-400 [&_p]:font-medium [&_p]:text-zinc-700">
                    <div className="flex flex-col leading-tight">
                      <label>Sentiment</label>
                      <p>{prediction.sentiment}</p>
                    </div>
                    <div className="flex flex-col leading-tight">
                      <label>Review</label>
                      <p>{prediction.review}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
