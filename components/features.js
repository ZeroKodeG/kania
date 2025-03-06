import React from 'react';
import { FaBrain, FaSearch, FaLock } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaBrain className="text-4xl text-primary" />,
      title: "IA Avanzada",
      description: "Utiliza tecnología de IA de última generación para entender y responder preguntas sobre tus documentos."
    },
    {
      icon: <FaSearch className="text-4xl text-primary" />,
      title: "Búsqueda Precisa",
      description: "Encuentra exactamente lo que necesitas con búsquedas precisas y citaciones de fuentes."
    },
    {
      icon: <FaLock className="text-4xl text-primary" />,
      title: "100% Privado",
      description: "Tus documentos se eliminan automáticamente después de procesar. Tu privacidad es nuestra prioridad."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;