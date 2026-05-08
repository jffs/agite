interface ImpactTextProps {
  days: number
}

export function ImpactText({ days }: ImpactTextProps) {
  return (
    <div className="space-y-4">
      <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-black/80">
        Hace <span className="text-red-600 font-black">{days} días</span> el Congreso rechazó el veto presidencial a la Ley de Financiamiento Universitario. 
        El gobierno sigue sin cumplirla.
      </p>
      <p className="text-sm sm:text-base font-semibold text-black/60 uppercase tracking-wide">
        La educación pública no se negocia.
      </p>
    </div>
  )
}
