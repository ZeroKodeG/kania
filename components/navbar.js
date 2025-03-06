import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center p-6">
      <div className="flex gap-6">
        <Link href="/" className="text-gray-700 hover:text-primary">
          Inicio
        </Link>
        <Link href="/precios" className="text-gray-700 hover:text-primary">
          Precios
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-primary">
          Blog
        </Link>
        <Link href="/login" className="text-gray-700 hover:text-primary">
          Iniciar sesión
        </Link>
        <Link href="/registro" className="text-gray-700 hover:text-primary">
          Comenzar gratis
        </Link>
      </div>
    </nav>
  )
}

