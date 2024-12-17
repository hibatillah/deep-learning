import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Author({
  img,
  fallback,
  content,
  link,
  className,
}: {
  img: string
  fallback: string
  content: string
  link?: string
  className?: string
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className={cn("size-8", className)}>
            <AvatarImage src={img} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          {link ? (
            <Link
              href={link}
              target="_blank"
            >
              {content}
            </Link>
          ) : (
            <span>{content}</span>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
