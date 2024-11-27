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

export type AudioPrediction = {
  classes: string
  accuracy: string
}

export type AudioFile = {
  name: string
  file: string
}

export default function AudioClassification() {
  const [isPending, startTransition] = React.useTransition()
  const [prediction, setPrediction] = React.useState<AudioPrediction>()
  const [audioSrc, setAudioSrc] = React.useState<AudioFile>()
  const [audioFile, setAudioFile] = React.useState<File | null>(null)
  const [isPlay, setIsPlay] = React.useState<boolean>(false)
  const [status, setStatus] = React.useState<Status>("idle")
  const previousAudioSrc = React.useRef<string | null>(null)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  const predict = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const audio = form.get("audio") as File

    const formData = new FormData()
    formData.append("audio", audioFile as Blob)

    startTransition(async () => {
      try {
        const response = await fetch("http://localhost:8000/predict/audio", {
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

      addAudioToPlayer(audio)
    })
  }

  const addAudioToPlayer = (file: File) => {
    if (file && file.type === "audio/wav") {
      if (previousAudioSrc.current)
        URL.revokeObjectURL(previousAudioSrc.current)

      const audioURL = URL.createObjectURL(file)
      setAudioSrc({
        name: file.name,
        file: audioURL,
      })
      previousAudioSrc.current = audioURL
    }

    startTransition(() => {
      if (audioRef.current) {
        audioRef.current.load()
      }
    })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAudioFile(event.target.files[0])
    }
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setIsPlay(true)
      } else {
        audioRef.current.pause()
        setIsPlay(false)
      }
    }
  }

  React.useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      const handleAudioEnd = () => setIsPlay(false)
      audio.addEventListener("ended", handleAudioEnd)

      return () => {
        audio.removeEventListener("ended", handleAudioEnd)
      }
    }
  }, [audioRef.current])

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={predict}
        className="flex w-full flex-col gap-3"
      >
        <div className="block space-y-1">
          <Label className="text-muted-foreground">Prediction</Label>
          <p className="text-sm text-primary">
            Audio classification of AK12, M16, and M249 weapons.
          </p>
        </div>
        <div className="block space-y-1">
          <Label
            htmlFor="audio"
            className="text-muted-foreground"
          >
            <span>Select audio file</span>
            <span className="ms-1 rounded bg-secondary px-1 text-xs text-zinc-600 dark:text-zinc-400">
              {".wav"}
            </span>
          </Label>
          <Input
            type="file"
            id="audio"
            name="audio"
            accept="audio/wav"
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
            "Predict Audio"
          )}
        </Button>
      </form>
      {status !== "idle" && (
        <>
          <Separator />
          <div className="flex w-full items-center gap-4 overflow-hidden rounded-lg border border-border p-4">
            {isPending ? (
              <LoadingCard />
            ) : (
              <>
                {!prediction?.classes || status === "failed" ? (
                  <div className="flex items-center gap-3">
                    <CircleAlertIcon className="size-4 text-muted-foreground" />
                    <span className="text-sm text-primary">
                      Failed to predict
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col leading-tight">
                    <p className="text-xs text-muted-foreground">
                      Diprediksi sebagai suara
                      <span className="ms-1 text-primary">
                        {prediction.classes}
                      </span>
                    </p>
                  </div>
                )}
                {audioSrc && (
                  <>
                    <audio
                      ref={audioRef}
                      src={audioSrc.file}
                    ></audio>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={togglePlayPause}
                      className="ms-auto h-8 rounded-full text-xs text-primary"
                    >
                      {isPlay ? "Playing..." : "Play audio"}
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
