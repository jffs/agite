import localFont from "next/font/local"

/** Encódigo Rojo / Kuunari (archivos locales). Todas las variantes incluidas son itálicas. */
export const kuunari = localFont({
  src: [
    {
      path: "../fonts/kuunari/Kuunari-LightCompressedItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/kuunari/Kuunari-LightCondensedItalic.otf",
      weight: "350",
      style: "italic",
    },
    {
      path: "../fonts/kuunari/Kuunari-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/kuunari/Kuunari-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-kuunari",
  display: "swap",
})
