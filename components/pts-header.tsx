export function PTSHeader() {
  return (
    <header className="w-full py-4 px-4 border-b border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
        <img 
          src="/JuvPTS.svg" 
          alt="Logo Juventud PTS" 
          className="h-10 sm:h-12 w-auto object-contain" 
        />          
        </div>
        <img 
          src="/EnCodigoRojo-icono1.svg" 
          alt="Logo En Código Rojo" 
          className="h-10 sm:h-12 w-auto object-contain" 
        />              
      </div>
    </header>
  )
}
