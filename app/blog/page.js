import Navbar from "@/components/navbar"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

export default function Blog() {
  const articulos = [
    {
      id: 1,
      titulo: "Cómo la IA está transformando la investigación académica",
      resumen:
        "Descubre cómo las herramientas de IA como KanIA están cambiando la forma en que los investigadores trabajan con documentos PDF.",
      fecha: "15 Mar 2024",
      autor: "María González",
      imagen: "/placeholder.svg?height=200&width=400",
      categoria: "Investigación",
    },
    {
      id: 2,
      titulo: "5 consejos para aprovechar al máximo tu PDF con IA",
      resumen:
        "Aprende a formular las preguntas correctas y obtener respuestas precisas de tus documentos PDF utilizando KanIA.",
      fecha: "28 Feb 2024",
      autor: "Carlos Rodríguez",
      imagen: "/placeholder.svg?height=200&width=400",
      categoria: "Tutoriales",
    },
    {
      id: 3,
      titulo: "El futuro de la lectura digital: PDFs interactivos",
      resumen:
        "Exploramos cómo la interacción con documentos PDF está evolucionando gracias a la inteligencia artificial conversacional.",
      fecha: "10 Feb 2024",
      autor: "Ana Martínez",
      imagen: "/placeholder.svg?height=200&width=400",
      categoria: "Tendencias",
    },
    {
      id: 4,
      titulo: "Casos de éxito: Cómo estudiantes utilizan KanIA para mejorar sus estudios",
      resumen:
        "Historias reales de estudiantes que han mejorado su rendimiento académico utilizando KanIA para analizar documentos complejos.",
      fecha: "5 Feb 2024",
      autor: "Pedro Sánchez",
      imagen: "/placeholder.svg?height=200&width=400",
      categoria: "Casos de éxito",
    },
    {
      id: 5,
      titulo: "Novedades en KanIA: Nuevas funcionalidades para análisis de documentos",
      resumen:
        "Descubre las últimas actualizaciones de nuestra plataforma y cómo pueden ayudarte a trabajar mejor con tus PDFs.",
      fecha: "20 Ene 2024",
      autor: "Equipo KanIA",
      imagen: "/placeholder.svg?height=200&width=400",
      categoria: "Actualizaciones",
    },
    {
      id: 6,
      titulo: "Privacidad y seguridad: Cómo protegemos tus documentos",
      resumen:
        "Explicamos las medidas que tomamos para garantizar que tus PDFs estén seguros mientras utilizas nuestra plataforma.",
      fecha: "5 Ene 2024",
      autor: "Laura Torres",
      imagen: "/placeholder.svg?height=200&width=400",
      categoria: "Seguridad",
    },
  ]

  const categorias = [
    "Todas",
    "Investigación",
    "Tutoriales",
    "Tendencias",
    "Casos de éxito",
    "Actualizaciones",
    "Seguridad",
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog de KanIA</h1>
          <p className="text-lg text-gray-600">Noticias, tutoriales y recursos para aprovechar al máximo tus PDFs</p>
        </div>

        <div className="mb-8 flex justify-center gap-4 flex-wrap">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`px-4 py-2 rounded-full text-sm ${
                categoria === "Todas" ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.map((articulo) => (
            <div key={articulo.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src={articulo.imagen || "/placeholder.svg"}
                alt={articulo.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                    {articulo.categoria}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{articulo.titulo}</h3>
                <p className="text-gray-600 mb-4">{articulo.resumen}</p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{articulo.fecha}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{articulo.autor}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${articulo.id}`}
                  className="mt-4 inline-block text-primary font-medium hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md">
            Cargar más artículos
          </button>
        </div>
      </div>
    </div>
  )
}

