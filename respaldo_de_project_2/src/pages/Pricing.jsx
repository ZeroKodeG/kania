import React from 'react';
import { FaCheck } from 'react-icons/fa';

function Pricing() {
  const plans = [
    {
      name: "Gratuito",
      price: "0€",
      features: [
        "Hasta 3 PDFs por mes",
        "Máximo 5MB por archivo",
        "Acceso a IA básica",
        "Soporte por email"
      ]
    },
    {
      name: "Pro",
      price: "19€/mes",
      features: [
        "PDFs ilimitados",
        "Máximo 25MB por archivo",
        "IA avanzada",
        "Soporte prioritario",
        "Sin marca de agua",
        "Exportación de chats"
      ]
    },
    {
      name: "Empresa",
      price: "Personalizado",
      features: [
        "Todo lo de Pro",
        "Archivos de cualquier tamaño",
        "API acceso",
        "Soporte dedicado 24/7",
        "Implementación personalizada",
        "Cumplimiento empresarial"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Planes y Precios</h1>
          <p className="text-xl text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
                Comenzar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;