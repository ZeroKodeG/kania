import React from 'react';

function Blog() {
  const posts = [
    {
      title: "Cómo la IA está transformando el análisis de documentos",
      excerpt: "Descubre cómo la inteligencia artificial está revolucionando la forma en que procesamos y analizamos documentos PDF.",
      date: "2024-02-15",
      readTime: "5 min"
    },
    {
      title: "Mejores prácticas para el procesamiento de PDFs",
      excerpt: "Guía completa sobre cómo optimizar tus PDFs para obtener los mejores resultados con KanIA.",
      date: "2024-02-10",
      readTime: "7 min"
    },
    {
      title: "Novedades en KanIA: Características 2024",
      excerpt: "Explora las últimas actualizaciones y mejoras en nuestra plataforma de procesamiento de PDFs.",
      date: "2024-02-05",
      readTime: "4 min"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <div className="flex text-gray-600 text-sm mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime} de lectura</span>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="text-primary hover:text-secondary font-medium">
                Leer más →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;