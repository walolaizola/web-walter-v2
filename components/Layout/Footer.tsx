import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              WALTER<span className="text-brand-cyan">OLAIZOLA</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transformación organizacional basada en datos e Inteligencia Artificial. 
              Ejecución real para resultados medibles.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/in/walterolaizola/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-brand-cyan hover:text-brand-dark transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@walolaizola.com" className="bg-slate-800 p-2 rounded-full hover:bg-brand-cyan hover:text-brand-dark transition-all">
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
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-cyan transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Estrategia Data & AI</li>
              <li className="text-slate-400">Gobierno del Dato</li>
              <li className="text-slate-400">Interim CDO Management</li>
              <li className="text-slate-400">Formación Executive</li>
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
                <Linkedin className="w-5 h-5 text-brand-cyan mr-3 mt-1 shrink-0" />
                <span className="text-slate-400">/in/walterolaizola</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-cyan mr-3 mt-1 shrink-0" />
                <span className="text-slate-400">Barcelona, España<br/>(Remoto & Global)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
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