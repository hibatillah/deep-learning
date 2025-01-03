import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

import { Status } from "./text-sentiment"

import { CircleAlertIcon, LoaderCircleIcon } from "lucide-react"

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

export type ImagePrediction = {
  classes: string
  accuracy: string
}

export type ImageFile = {
  name: string
  file: string
}

export default function ImageClassification() {
  const [isPending, startTransition] = React.useTransition()
  const [prediction, setPrediction] = React.useState<ImagePrediction>()
  const [imageFile, setImageFile] = React.useState<File | null>(null)
  const [status, setStatus] = React.useState<Status>("idle")

  const predict = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!imageFile) {
      console.error("No image file selected");
      setStatus("failed");
      return;
    }

    const formData = new FormData()
    formData.append("image", imageFile as Blob)

    const fetchPrediction = async () => {
      try {
        const response = await fetch("http://localhost:8000/predict/image", {
          method: "POST",
          body: formData,
        })
        const result = await response.json()
        setStatus("success")
        setPrediction({
          classes: result.prediction,
          accuracy: result.accuracy,
        })
      } catch (error) {
        setStatus("failed")
        console.error("Error:", error)
      }
    }

    startTransition(() => {
      fetchPrediction()
    })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0])
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={predict}
        className="flex w-full flex-col gap-3"
      >
        <div className="block space-y-1">
          <Label className="text-muted-foreground">Prediction</Label>
          <p className="text-pretty text-sm text-primary">
            Image classification of forest, glacier, mountain and sea landscapes
          </p>
        </div>
        <div className="block space-y-1">
          <Label
            htmlFor="audio"
            className="text-muted-foreground"
          >
            <span>Select image file</span>
            <span className="ms-1 rounded bg-secondary px-1 text-xs text-zinc-600 dark:text-zinc-400">
              {".jpg"}
            </span>
            <span className="ms-1 rounded bg-secondary px-1 text-xs text-zinc-600 dark:text-zinc-400">
              {".png"}
            </span>
          </Label>
          <Input
            type="file"
            id="image"
            name="image"
            accept=".jpg, .png, .jpeg"
            onChange={handleFileChange}
            className="p-1 file:me-3 file:h-full file:cursor-pointer file:rounded file:bg-secondary file:px-2"
            required
          />
        </div>
        <Button type="submit">
          {isPending ? (
            <div className="flex items-center gap-2">
              <LoaderCircleIcon className="animate-spin" />
              <span>Predicting...</span>
            </div>
          ) : (
            "Predict Image"
          )}
        </Button>
      </form>
      {status !== "idle" && (
        <>
          <Separator />
          <div className="flex w-full items-center gap-4 overflow-hidden rounded-lg border border-border p-4">
            {isPending ? (
              <LoadingCard />
            ) : !prediction?.classes || status === "failed" ? (
              <div className="flex items-center gap-3">
                <CircleAlertIcon className="size-4 text-muted-foreground" />
                <span className="text-sm text-primary">Failed to predict</span>
              </div>
            ) : (
              <div className="flex flex-col leading-tight">
                <p className="text-xs text-muted-foreground">
                  Predicted as
                  <span className="ms-1 capitalize text-primary">
                    {prediction.classes}
                  </span>
                </p>
                <p>{prediction.accuracy}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
