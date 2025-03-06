import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

function Hero() {
  return (
    <div className="pt-24 pb-16 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Chatea con cualquier PDF
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Sube tu PDF y comienza a hacer preguntas al instante. Obtén respuestas precisas con citaciones de fuentes.
      </p>
      <div className="max-w-xl mx-auto px-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
          <FaCloudUploadAlt className="mx-auto text-5xl text-gray-400 mb-4" />
          <p className="text-lg text-gray-600">
            Arrastra y suelta tu archivo PDF aquí o
            <button className="text-primary font-medium ml-1">
              selecciona un archivo
            </button>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Tamaño máximo: 10MB
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;