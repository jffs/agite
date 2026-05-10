"use client"

import { PTSHeader } from "@/components/pts-header"
import { FlipClock, useDaysSince } from "@/components/flip-clock"
import { ImpactText } from "@/components/impact-text"
import { NoiseButton } from "@/components/noise-button"
import { FormButton } from "@/components/form-button"
import { SloganText } from "@/components/slogan-text"

// Ley de Financiamiento Universitario - 2 octubre 2025
const START_DATE = new Date("2025-10-21T00:00:00")

export default function Home() {
  const days = useDaysSince(START_DATE)

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-red-600 selection:text-white">
      <main className="flex-1 flex flex-col items-center px-4">
        <PTSHeader />
        {/* TITULAR */}
        <section className="pt-4 sm:pt-6 pb-2 sm:pb-3 w-full max-w-4xl text-center space-y-2 sm:space-y-3">
          <div className="inline-block bg-red-600 text-white px-3 sm:px-4 py-1 text-sm sm:text-base font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            DENUNCIA PÚBLICA
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[0.85] tracking-tight uppercase italic">
            CRONÓMETRO DE LA <br />
            <span className="text-red-600 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] sm:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">IMPUNIDAD</span>
          </h1>

          <div className="max-w-2xl mx-auto border-y-2 sm:border-y-4 border-black py-2 sm:py-3">
            <p className="text-base sm:text-xl md:text-2xl font-black uppercase leading-tight italic">
              IMPLEMENTACIÓN YA DE LA LEY DE FINANCIAMIENTO UNIVERSITARIO
            </p>
          </div>
        </section>

        <section 
  className="w-full py-16 px-4 bg-white border-y-4 border-black"
  style={{
    backgroundImage: `url('/fondo-pub.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'multiply', // Sutiliza el fondo contra el blanco
    backgroundColor: 'rgba(255,255,255,0.9)', // Lo hace casi marca de agua
  }}
>
  <div className="max-w-4xl mx-auto flex flex-col items-center">
  <FlipClock startDate={START_DATE} />
  </div>
</section>
       
        {/* BOTON CTA */}
        <section className="py-8 px-4 w-full max-w-3xl flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex-1 max-w-md">
            <NoiseButton days={days} />
          </div>
          <div className="flex-1 max-w-md">
            <FormButton />
          </div>
        </section>
        {/* TEXTO DE IMPACTO */}
        <section className="py-3 sm:py-4 pb-6 sm:pb-8 w-full max-w-xl">
          <SloganText />
        </section>
      
        <section id="registro-seccion" className="py-20 px-4 bg-black w-full flex flex-col items-center">
          <div className="w-full max-w-xl">
            {/* Encabezado: Lo hacemos más grande para que mande sobre el iframe */}
            <div className="bg-red-600 text-white p-6 mb-[-4px] border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] relative z-10">
              <h2 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tighter">
                SUMATE A MOVILIZAR CON NOSOTROS
              </h2>
              <p className="text-lg font-bold uppercase mt-2">Secretaría de Coordinación - FULP</p>
            </div>
            <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc0HJ87fZjmNhf_gvguYvNpIygJP5GnbA0LW9DfJcaZi91LLg/viewform?embedded=true"
                width="100%"
                height="1000" // Aumentado para evitar scroll interno molesto
                className="w-full border-none"
              >
                Cargando…
              </iframe>
            </div>  
                      
          </div>
          <div className="w-full max-w-[300px] sm:max-w-[400px] py-20 transition-transform hover:scale-105 duration-500">
      <img 
        src="/secretaria.png" 
        alt="Secretaria de coordinacion - FULP" 
        className="w-full h-auto"
      />
    </div>
        </section>
      </main>
    
    </div>
  )
}
