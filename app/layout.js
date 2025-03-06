import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KanIA - Chatea con cualquier PDF",
  description: "Chatea con tus documentos PDF utilizando inteligencia artificial",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

import './globals.css'