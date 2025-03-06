import Navbar from "@/components/navbar"
import { Check } from "lucide-react"

export default function Precios() {
  const planes = [
    {
      nombre: "Gratis",
      precio: "€0",
      periodo: "para siempre",
      descripcion: "Perfecto para probar KanIA",
      caracteristicas: [
        "Hasta 3 PDFs",
        "Máximo 10MB por PDF",
        "Hasta 50 preguntas por día",
        "Acceso a funciones básicas",
      ],
      boton: "Comenzar gratis",
      destacado: false,
    },
    {
      nombre: "Pro",
      precio: "€9",
      periodo: "por mes",
      descripcion: "Para uso personal avanzado",
      caracteristicas: [
        "PDFs ilimitados",
        "Máximo 50MB por PDF",
        "Preguntas ilimitadas",
        "Acceso a todas las funciones",
        "Modo sin conexión",
        "Exportación de chats",
      ],
      boton: "Obtener Pro",
      destacado: true,
    },
    {
      nombre: "Empresas",
      precio: "Personalizado",
      periodo: "",
      descripcion: "Para equipos y organizaciones",
      caracteristicas: [
        "Todo lo de Pro",
        "Usuarios ilimitados",
        "Máximo 100MB por PDF",
        "Administración de equipo",
        "Seguridad avanzada",
        "API personalizada",
        "Soporte prioritario",
      ],
      boton: "Contactar ventas",
      destacado: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Planes y precios</h1>
          <p className="text-lg text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`rounded-lg p-8 ${
                plan.destacado ? "border-2 border-primary shadow-lg relative" : "border border-gray-200"
              }`}
            >
              {plan.destacado && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Más popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.nombre}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.precio}</span>
                {plan.periodo && <span className="text-gray-500"> {plan.periodo}</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.descripcion}</p>

              <button
                className={`w-full py-2 px-4 rounded-md mb-6 ${
                  plan.destacado ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {plan.boton}
              </button>

              <div className="space-y-3">
                {plan.caracteristicas.map((caracteristica) => (
                  <div key={caracteristica} className="flex items-start gap-2">
                    <Check size={18} className="text-green-500 mt-0.5" />
                    <span>{caracteristica}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Tienes preguntas?</h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está disponible para ayudarte a elegir el plan adecuado para ti
          </p>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md">
            Contactar soporte
          </button>
        </div>
      </div>
    </div>
  )
}

