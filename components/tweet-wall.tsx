"use client"

import { motion } from "framer-motion"

const HASHTAG = "#CumplíLaLey"

// Tweets de ejemplo - en produccion se usaria la API de Twitter/X
const mockTweets = [
  {
    id: "1",
    author: "Estudiante UBA",
    handle: "@estudianteuba",
    avatar: "E",
    content: `${HASHTAG} - Llevamos meses esperando que se cumpla la ley de financiamiento universitario. La educacion publica no puede esperar mas.`,
    time: "2h",
    likes: 234,
    retweets: 89
  },
  {
    id: "2",
    author: "Docentes Organizados",
    handle: "@docentesorg",
    avatar: "D",
    content: `Los docentes universitarios exigimos el cumplimiento inmediato de la ley. ${HASHTAG} No es un pedido, es un derecho.`,
    time: "3h",
    likes: 567,
    retweets: 201
  },
  {
    id: "3",
    author: "Centro de Estudiantes",
    handle: "@centroest",
    avatar: "C",
    content: `La universidad publica es un derecho, no un privilegio. ${HASHTAG} - Basta de ajuste a la educacion.`,
    time: "4h",
    likes: 892,
    retweets: 345
  },
  {
    id: "4",
    author: "Graduadxs UNLP",
    handle: "@graduadosunlp",
    avatar: "G",
    content: `Nos formamos en la universidad publica y queremos que las proximas generaciones tengan las mismas oportunidades. ${HASHTAG}`,
    time: "5h",
    likes: 156,
    retweets: 67
  },
  {
    id: "5",
    author: "Investigadores CONICET",
    handle: "@investigadores",
    avatar: "I",
    content: `Sin financiamiento no hay ciencia, sin ciencia no hay futuro. ${HASHTAG} - Argentina necesita sus universidades.`,
    time: "6h",
    likes: 1023,
    retweets: 412
  },
  {
    id: "6",
    author: "Nodocentes UNC",
    handle: "@nodocentes",
    avatar: "N",
    content: `El personal nodocente tambien somos parte de la universidad. ${HASHTAG} - Queremos trabajar en condiciones dignas.`,
    time: "7h",
    likes: 298,
    retweets: 98
  }
]

function TweetCard({ tweet, index }: { tweet: typeof mockTweets[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl p-4 hover:bg-card/80 transition-colors"
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-primary font-semibold text-sm sm:text-base">{tweet.avatar}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-semibold text-foreground text-sm truncate">{tweet.author}</span>
            <span className="text-muted-foreground text-sm truncate">{tweet.handle}</span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-muted-foreground text-sm">{tweet.time}</span>
          </div>
          
          <p className="mt-1 text-foreground text-sm sm:text-base leading-relaxed">
            {tweet.content.split(HASHTAG).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-primary font-medium">{HASHTAG}</span>
                )}
              </span>
            ))}
          </p>
          
          {/* Engagement */}
          <div className="flex items-center gap-6 mt-3 text-muted-foreground">
            <button className="flex items-center gap-1.5 text-xs sm:text-sm hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{tweet.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs sm:text-sm hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>{tweet.retweets}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TweetWall() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Voces en las redes
        </h2>
        <p className="mt-1 text-muted-foreground text-sm">
          Lo que se dice con{" "}
          <a 
            href={`https://twitter.com/search?q=${encodeURIComponent(HASHTAG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            {HASHTAG}
          </a>
        </p>
      </div>
      
      {/* Tweet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockTweets.map((tweet, index) => (
          <TweetCard key={tweet.id} tweet={tweet} index={index} />
        ))}
      </div>
      
      {/* Ver mas */}
      <div className="text-center mt-6">
        <a
          href={`https://twitter.com/search?q=${encodeURIComponent(HASHTAG)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
        >
          Ver mas en X
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
