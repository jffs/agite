"use client"

import { Button } from "@/components/ui/button"

const NOISE_DATA_URI = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`
)}`

export function FormButton() {
  const handleClick = () => {
    document.getElementById('registro-seccion')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Button    
      onClick={handleClick}
      className="group relative isolate w-full overflow-hidden border-2 border-black bg-black px-6 py-4 font-black tracking-wide uppercase shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] transition-all duration-150 hover:bg-zinc-900 hover:shadow-[2px_2px_0px_0px_rgba(220,38,38,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none sm:py-5"
    >
      {/* Capa de ruido - la mantenemos porque le da esa textura "analógica" */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.15] mix-blend-screen"
        style={{
          backgroundImage: `url(${NOISE_DATA_URI})`,
          backgroundSize: "120px 120px",
        }}
      />
      
      {/* Refuerzo de luz en el borde superior */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"
      />

      <span className="relative z-10 flex flex-col items-center justify-center gap-0 text-white">               
        <span className="text-lg sm:text-xl italic font-black">¡SUMATE A MOVILIZAR CON NOSOTROS!</span>
      </span>
    </Button>
  )
}