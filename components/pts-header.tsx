export function PTSHeader() {
  return (
    <header className="w-full py-6 px-4 border-b border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-primary font-bold text-xl tracking-tight">PTS</span>
          <span className="hidden sm:inline text-muted-foreground text-sm">
            Partido de los Trabajadores Socialistas
          </span>
        </div>
        <a 
          href="https://www.pts.org.ar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          pts.org.ar
        </a>
      </div>
    </header>
  )
}
