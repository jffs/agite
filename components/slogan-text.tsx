export function SloganText() {
  return (
    /* Eliminamos pl-4 y usamos un flex col con items-center para mobile */
    <div className="flex flex-col items-center sm:items-start gap-6 w-full max-w-2xl mx-auto overflow-hidden sm:overflow-visible p-2">
      
      {/* Bloque SIEMPRE: Centrado en mobile, rotación leve */}
      <div className="bg-black text-white p-4 sm:p-6 transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] w-full sm:w-auto">
        <h2 className="text-3xl sm:text-6xl font-black uppercase leading-none tracking-tighter">
          <span className="text-red-600 italic">SIEMPRE</span> CON DOCENTES <br />
          Y NODOCENTES
        </h2>
      </div>

      {/* Bloque NUNCA: Centrado en mobile, self-end solo en desktop para el efecto visual */}
      <div className="bg-white text-black p-4 sm:p-6 border-4 border-black transform rotate-1 sm:self-end shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full sm:w-auto max-w-xl">
        <h2 className="text-2xl sm:text-5xl font-black uppercase leading-none tracking-tighter">
          <span className="text-red-600 italic text-3xl sm:text-6xl">NUNCA</span> CON LAS AUTORIDADES <br />
          QUE PACTAN CON MILEI
        </h2>
      </div>
    </div>
  )
}