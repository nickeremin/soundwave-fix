
import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns"
import { FastAverageColor } from "fast-average-color"

import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAlbumType(type: string) {
  return type[0]?.toUpperCase() + type.slice(1).toLowerCase()
}

export function formatTimeDuration(ms: number | undefined) {
  return format(new Date(ms ?? 0), "m:ss")
}

export function formatReleaseDate(releaseDate: string) {
  return format(new Date(releaseDate ?? 0), "yyyy")
}

export function formatTrackDuration(duration: number) {
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  const sDisplay =
    seconds > 0 ? (seconds < 10 ? `0${seconds}` : `${seconds}`) : ""
  const mDisplay = minutes > 0 ? `${minutes}:` : ""
  const hDisplay = hours > 0 ? `${hours}:` : ""

  return `${hDisplay}${mDisplay}${sDisplay}`
}

export function formatAlbumDuration(duration: number) {
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  if (hours > 0) {
    return `about ${hours} h ${minutes} min`
  } else if (minutes > 0) {
    return `${minutes} min ${seconds} sec`
  } else {
    return `${seconds} sec`
  }
}

export function getAverageColor(image: HTMLImageElement) {
  const fac = new FastAverageColor()
  const color = fac.getColor(image)
  return color
}





