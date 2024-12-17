import { Bricolage_Grotesque, Hanken_Grotesk, Inter, Open_Sans, Roboto_Mono, Syne } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
})

const fonts = {
  inter: inter.variable,
  openSans: openSans.variable,
  robotoMono: robotoMono.variable,
  syne: syne.variable,
}

export default fonts
