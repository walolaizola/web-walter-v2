import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react'; // Quitamos Linkedin de aquí
import { FaLinkedin } from "react-icons/fa"; // Añadimos esta línea


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2463] text-white pt-16 pb-8 relative overflow-hidden border-t border-white/10">
    {/* Textura de fondo para fusión con CTA */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_1.2fr_0.8fr] gap-8 mb-8"> 
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              WALTER<span className="text-brand-cyan">OLAIZOLA</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transformación organizacional basada en Datos e IA. 
              Conectaremos capacidad tecnológica con ventaja competitiva real.
            </p>

            {/* Brand Column - Iconos con efecto de elevación y diseño squircle */}
            <div className="flex gap-4 pt-2">
              {/* LinkedIn - Estilo Premium Squircle */}
              <a 
                href="https://www.linkedin.com/in/walterolaizola/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-brand-dark hover:bg-brand-cyan hover:border-brand-cyan transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/20"
              >
                <FaLinkedin size={20} />
              </a>

              {/* Email - Estilo Premium Squircle */}
              <a 
                href="mailto:info@walolaizola.com" 
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-brand-dark hover:bg-brand-cyan hover:border-brand-cyan transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/20"
              >
                <Mail size={20} />
              </a>
            </div>


          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Menú</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-brand-cyan transition-colors">Inicio</Link></li>
              <li><Link to="/consultoria" className="text-slate-400 hover:text-brand-cyan transition-colors">Consultoría</Link></li>
              <li><Link to="/formacion" className="text-slate-400 hover:text-brand-cyan transition-colors">Formación</Link></li>
              <li><Link to="/sobre-mi" className="text-slate-400 hover:text-brand-cyan transition-colors">Sobre Mí</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Estrategia Data & AI</li>
              <li className="text-slate-400">Gobierno del Dato</li>
              <li className="text-slate-400">Interim CDO / CAIO Management</li>
              <li className="text-slate-400">Formación Data, IA & Productividad</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-brand-cyan mr-3 mt-1 shrink-0" />
                <span className="text-slate-400">info@walolaizola.com</span>
              </li>
              <li className="flex items-start">
                  <div className="text-[#00D4FF] mr-3 mt-1 shrink-0">
                    <FaLinkedin size={20} />
                  </div>
                  <span className="text-slate-400">/in/walterolaizola</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-cyan mr-3 mt-1 shrink-0" />
                <span className="text-slate-400">Barcelona, España<br/>(Remoto & Global)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-1 mt-1 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Walter Olaizola. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacidad" className="cursor-pointer hover:text-brand-cyan">Política de Privacidad</Link>
            <Link to="/legal" className="cursor-pointer hover:text-brand-cyan">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;