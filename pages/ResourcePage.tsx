import React from 'react';
import { useParams, Link } from 'react-router-dom';

const NOTION_PAGES: Record<string, string> = {
  'prompts-data-leaders': 'https://grove-lancer-801.notion.site/7-Prompts-para-Data-Leaders-Enero-2026-Post-Linkedin-2e6fa17bd8c6806a9db9e79605387142', //ANADIR 1 LINEA POR CADA ENTRADA
  'TITULO URL': 'https://grove-lancer-801.notion.site/INDICAR EL ENLACE COMPLETO', //COPIAR ESTA LÍNEA POR CADA ENTRADA Y PERSONALIZARLA
};

const ResourcePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const notionUrl = id ? NOTION_PAGES[id] : null;

  if (!notionUrl) {
    return (
      <div className="min-h-screen bg-[#050a18] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Recurso no encontrado</h1>
        <Link to="/" className="text-cyan-400 hover:underline">Volver a walolaizola.com</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050a18] text-white flex flex-col items-center justify-center p-6">
      {/* Tarjeta Central de Acceso */}
      <div className="max-w-2xl w-full bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl text-center shadow-2xl">
        <div className="mb-6 inline-block p-4 bg-cyan-500/10 rounded-2xl">
          <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Recurso Estratégico</h1>
        <p className="text-white/60 text-lg mb-10 leading-relaxed">
          Estás a un paso de acceder a la biblioteca de <span className="text-white font-semibold">Prompts para Data Leaders</span>.
          Haz clic abajo para abrir el documento completo en Notion.
        </p>

        <a 
          href={notionUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto px-10 py-5 bg-cyan-500 text-black font-extrabold rounded-2xl hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 uppercase tracking-wider"
        >
          Acceder al Recurso en Notion →
        </a>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link to="/" className="text-sm text-white/40 hover:text-white transition-colors">
            ← Volver a walolaizola.com
          </Link>
        </div>
      </div>
      
      <p className="mt-8 text-[10px] text-white/20 uppercase tracking-[0.4em]">
        Propiedad de Walter Olaizola • Data & AI Strategy
      </p>
    </div>
  );
};

export default ResourcePage;