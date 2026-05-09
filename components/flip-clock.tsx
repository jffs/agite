"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeSince(startDate: Date): TimeLeft {
  const now = new Date()
  const diff = now.getTime() - startDate.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

// Componente de dígito individual estilo fichero
function FlipDigit({ value, size = "small" }: { value: string; size?: "large" | "small" }) {
  const [displayValue, setDisplayValue] = useState(value)
  const prevValueRef = useRef(value)

  useEffect(() => {
    if (value !== prevValueRef.current) {
      prevValueRef.current = value
      setDisplayValue(value)
    }
  }, [value])

  const isLarge = size === "large"

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-900",
        isLarge
          ? "h-24 w-16 rounded-lg sm:h-32 sm:w-20 md:h-40 md:w-28"
          : "h-12 w-8 rounded-md sm:h-14 sm:w-10 md:h-16 md:w-12"
      )}
    >
      {/* Linea central del fichero */}
      <div className="pointer-events-none absolute top-1/2 right-0 left-0 z-20 h-px bg-black/60" />

      {/* Sombra superior para efecto 3D */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2 bg-linear-to-b from-black/20 to-transparent" />

      {/* Brillo inferior para efecto 3D */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-linear-to-t from-black/10 to-transparent" />

      <AnimatePresence mode="popLayout">
        <motion.div
          key={displayValue}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            className={cn(
              "font-bold text-white tabular-nums",
              isLarge ? "text-6xl sm:text-7xl md:text-8xl" : "text-2xl sm:text-3xl md:text-4xl"
            )}
          >
            {displayValue}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Grupo de dígitos para un número
function DigitGroup({
  value,
  padLength = 2,
  size = "small",
}: {
  value: number
  padLength?: number
  size?: "large" | "small"
}) {
  const digits = value.toString().padStart(padLength, "0").split("")
  const isLarge = size === "large"

  return (
    <div className={cn("flex", isLarge ? "gap-1 sm:gap-2" : "gap-0.5 sm:gap-1")}>
      {digits.map((digit, index) => (
        <FlipDigit key={index} value={digit} size={size} />
      ))}
    </div>
  )
}

// Separador para horas:min:seg
function TimeSeparator() {
  return (
    <div className="flex flex-col justify-center gap-1.5 px-0.5 sm:gap-2 sm:px-1">
      <div className="size-1 rounded-full bg-neutral-500 sm:size-1.5" />
      <div className="size-1 rounded-full bg-neutral-500 sm:size-1.5" />
    </div>
  )
}

export function useDaysSince(startDate: Date): number {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const calculate = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
    }
    calculate()
    const interval = setInterval(calculate, 60000)
    return () => clearInterval(interval)
  }, [startDate])

  return days
}

export function FlipClock({ startDate }: { startDate: Date }) {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(calculateTimeSince(startDate))
    const interval = setInterval(() => setTime(calculateTimeSince(startDate)), 1000)
    return () => clearInterval(interval)
  }, [startDate])

  if (!mounted) return null

  return (
    <div className="flex flex-col items-center py-3 sm:py-4">
      {/* DÍAS - Prominente en el centro */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <DigitGroup value={time.days} padLength={3} size="large" />
        <span className="mt-2 text-sm font-semibold tracking-widest text-neutral-600 uppercase sm:mt-3 sm:text-base md:text-lg">
          Días sin cumplir con la ley
        </span>
      </motion.div>

      {/* Separador visual */}
      <div className="my-3 h-px w-16 bg-neutral-200 sm:my-4 sm:w-24" />

      {/* Horas : Minutos : Segundos - Más pequeño */}
      <motion.div
        className="flex items-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex flex-col items-center">
          <DigitGroup value={time.hours} size="small" />
          <span className="mt-1.5 text-[10px] font-medium tracking-wider text-neutral-500 uppercase sm:mt-2 sm:text-xs">
            Horas
          </span>
        </div>

        <TimeSeparator />

        <div className="flex flex-col items-center">
          <DigitGroup value={time.minutes} size="small" />
          <span className="mt-1.5 text-[10px] font-medium tracking-wider text-neutral-500 uppercase sm:mt-2 sm:text-xs">
            Min
          </span>
        </div>

        <TimeSeparator />

        <div className="flex flex-col items-center">
          <DigitGroup value={time.seconds} size="small" />
          <span className="mt-1.5 text-[10px] font-medium tracking-wider text-neutral-500 uppercase sm:mt-2 sm:text-xs">
            Seg
          </span>
        </div>
      </motion.div>
    </div>
  )
}
