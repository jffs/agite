"use client"

import { PTSHeader } from "@/components/pts-header"
import { FlipClock, useDaysSince } from "@/components/flip-clock"
import { ImpactText } from "@/components/impact-text"
import { NoiseButton } from "@/components/noise-button"

// Ley de Financiamiento Universitario - 2 octubre 2025
const START_DATE = new Date("2025-10-02T00:00:00")

export default function Home() {
  const days = useDaysSince(START_DATE)

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-red-600 selection:text-white">
      <main className="flex-1 flex flex-col items-center px-4">

        {/* TITULAR */}
        <section className="pt-8 sm:pt-12 pb-4 sm:pb-6 w-full max-w-4xl text-center space-y-4 sm:space-y-6">
          <div className="inline-block bg-red-600 text-white px-3 sm:px-4 py-1 text-sm sm:text-base font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            DENUNCIA PÚBLICA
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[0.85] tracking-tight uppercase italic">
            CRONÓMETRO DE LA <br />
            <span className="text-red-600 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] sm:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">IMPUNIDAD</span>
          </h1>

          <div className="max-w-2xl mx-auto border-y-2 sm:border-y-4 border-black py-3 sm:py-4">
            <p className="text-base sm:text-xl md:text-2xl font-black uppercase leading-tight italic">
              IMPLEMENTACIÓN YA DE LA LEY DE FINANCIAMIENTO UNIVERSITARIO
            </p>
          </div>
        </section>

        {/* RELOJ */}
        <section className="py-2 sm:py-4 w-full max-w-4xl">
          <FlipClock startDate={START_DATE} />
          </section>

        {/* BOTON CTA */}
        <section className="py-6 sm:py-8 w-full max-w-sm sm:max-w-md">
          <NoiseButton days={days} />
        </section>

        {/* TEXTO DE IMPACTO */}
        <section className="py-6 sm:py-8 pb-12 sm:pb-16 w-full max-w-xl">
          <div className="border-l-4 sm:border-l-8 border-red-600 pl-4 sm:pl-6">
            <ImpactText days={days} />
          </div>
        </section>

      </main>
    
    </div>
  )
}
