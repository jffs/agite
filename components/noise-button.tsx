"use client"

import { Button } from "@/components/ui/button"

interface NoiseButtonProps {
  days: number
}

/** Textura de grano para overlay tipo “botón de ruido” (SVG inline, sin petición de red). */
const NOISE_DATA_URI = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`
)}`

export function NoiseButton({ days }: NoiseButtonProps) {
  const handleClick = () => {
    const tweetText = encodeURIComponent(
      [
        `Llevamos ${days} días sin cumplimiento de la Ley de Financiamiento Universitario.`,
        "",
        "@JMilei @madorni El Congreso rechazó el veto: cumplan la ley y financien ya la universidad pública.",
        "",
        "Entrá acá y sumate al reclamo:",
        "https://milei-cumpli-la-ley.vercel.app/",
        "",
        "#NoAlAjusteUniversitario",
      ].join("\n")
    )
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`
    window.open(twitterUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      onClick={handleClick}
      className="group relative isolate w-full overflow-hidden border-2 border-black bg-red-600 px-6 py-4 font-black tracking-wide uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:bg-red-700 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:py-5"
    >
      {/* Capa de ruido */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage: `url(${NOISE_DATA_URI})`,
          backgroundSize: "120px 120px",
        }}
      />
      {/* Brillo duro arriba (refuerzo “monitor / glitch”) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-white/15 to-transparent opacity-40"
      />

      <span className="relative z-10 flex items-center justify-center gap-2 text-sm text-white sm:text-base">
       
        Hacer ruido en  <svg
          className="size-4 shrink-0 sm:size-5"
          fill="currentColor"
          viewBox="0 0 28 24"
          aria-hidden
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </span>
    </Button>
  )
}
