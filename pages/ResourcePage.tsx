import React from 'react';
import { useParams, Link } from 'react-router-dom';

// 1. DICCIONARIO DE RECURSOS: Aquí es donde añadirás tus nuevos links de Notion
const NOTION_PAGES: Record<string, string> = {
  'prompts-data-leaders': 'https://grove-lancer-801.notion.site/7-Prompts-para-Data-Leaders-Enero-2026-Post-Linkedin-2e6fa17bd8c6806a9db9e79605387142?source=copy_link', // Sustituye por tu URL real
  'estrategia-ia-2026': 'https://walter-olaizola.notion.site/Tu-Pagina-2...', // Sustituye por tu URL real
  'guia-n8n-consultores': 'https://walter-olaizola.notion.site/Tu-Pagina-3...', // Sustituye por tu URL real
};



const ResourcePage: React.FC = () => {
  // Extraemos el :id de la URL (ej. 'prompts-data-leaders')
  const { id } = useParams<{ id: string }>();

  // Buscamos la URL de Notion correspondiente al ID
  const notionUrl = id ? NOTION_PAGES[id] : null;

  // Si el ID no existe en nuestro diccionario, mostramos un mensaje de error elegante
  if (!notionUrl) {
    return (
      <div className="min-h-screen bg-[#050a18] text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Recurso no encontrado</h1>
        <p className="text-white/60 mb-8">El enlace que has seguido parece no estar disponible o ha expirado.</p>
        <Link to="/" className="px-6 py-2 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050a18] text-white flex flex-col">
      {/* Header minimalista */}
      <nav className="p-4 md:p-6 border-b border-white/10 flex justify-between items-center bg-[#050a18]">
        <div className="flex flex-col">
          <span className="font-bold tracking-tighter text-lg md:text-xl">WALTER OLAIZOLA</span>
          <span className="text-[10px] text-cyan-400 uppercase tracking-widest hidden md:block">Data & AI Strategy</span>
        </div>
        <Link to="/" className="text-xs md:text-sm text-white/40 hover:text-cyan-400 transition-colors">
          ← Volver a walolaizola.com
        </Link>
      </nav>

      {/* Contenedor del Iframe de Notion */}
      <div className="flex-grow w-full relative overflow-hidden bg-white">
        <iframe
          src={notionUrl}
          title="Recurso Estratégico Walter Olaizola"
          className="absolute inset-0 w-full h-full border-none"
          allow="autoplay; clipboard-write; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Footer corporativo sutil */}
      <footer className="p-3 bg-[#050a18] text-center">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
          Contenido exclusivo para líderes de datos • 2026
        </p>
      </footer>
    </div>
  );
};

export default ResourcePage;