export function PTSHeader() {
  return (
    <header className="w-full py-4 px-4 border-b border-border bg-white">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      
      {/* IZQUIERDA: Juventud PTS */}
      <div className="flex-1 flex justify-start">
        <img 
          src="/JuvPTS.svg" 
          alt="Logo Juventud PTS" 
          className="h-10 sm:h-14 w-auto object-contain" 
        />          
      </div>
  
      {/* CENTRO: En Código Rojo */}
      <div className="flex-1 flex justify-center">
        <img 
          src="/EnCodigoRojo-icono1.svg" 
          alt="Logo En Código Rojo" 
          className="h-10 sm:h-14 w-auto object-contain" 
        />              
      </div>
  
      {/* DERECHA: FULP */}
      <div className="flex-1 flex justify-end">
        <img 
          src="/secretaria_coordinacion_fulp.svg" 
          alt="Logo FULP" 
          className="h-10 sm:h-14 w-auto object-contain" 
        />          
      </div>
  
    </div>
  </header>
  )
}
