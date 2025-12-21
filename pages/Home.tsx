import React, { useRef, useState, useEffect } from 'react'; // useRef sustituye a useState/Effect para el scroll
import { Link } from 'react-router-dom'; // Vital para navegar sin recargar
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, // Para "El Problema"
  AlertCircle,
  TrendingUp,    // Para "Resultados/ROI"
  ShieldCheck,   // Para servicios (Gobierno)
  Users,         // Para servicios (Interim)
  GraduationCap, // Para servicios (Formación)
  BrainCircuit   // Para servicios (Estrategia)
} from 'lucide-react';
import Button from '../components/UI/Button';
import { FaLinkedin } from "react-icons/fa"; 
import { PROBLEMS, SERVICES, CASE_STUDIES } from '../constants';


/* //ESO ESTABA EN LA VERSIÓN ANTERIOR. ACABAR QUITANDO
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Quote } from 'lucide-react';
import Button from '../components/UI/Button';
import { PROBLEMS, SERVICES, CASE_STUDIES, TESTIMONIALS } from '../constants';
 */

const Home: React.FC = () => {


  /*  // LA PARTE DE TESTIMONIOS LA CAMBIÉ POR LO DEL ABOUT  const [activeTestimonial, setActiveTestimonial] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []); 
  */

  return (
    <div className="w-full overflow-hidden">


{/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[#0A2463] pt-24 pb-0 overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>

        {/* Degradado inferior para suavizar el corte */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0A2463] via-[#0A2463]/80 to-transparent z-0"></div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-start mt-10 lg:mt-0">
          
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 w-full">
            
            {/* Left Column: Copy & CTAs */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold text-sm tracking-wide uppercase">
                Executive Data & AI Strategy
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
                ¿Datos sin decisiones?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">
                  ¿IA sin impacto real?
                </span>
              </h1>

              <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                Más de 25 años ayudando a empresas a transformar datos e IA en resultados financieros.
                <span className="text-white font-semibold"> No hago diagnósticos bonitos. Me pongo tu camiseta y ejecuto.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center w-full sm:w-auto mb-12">
                <Button to="/contact" variant="accent" className="text-lg px-10 py-4 shadow-xl shadow-brand-orange/20">
                  Solicitar Sesión Estratégica
                </Button>

                {/* ENLACE SECUNDARIO */}
                <Link
                  to="/consultoria"
                  className="group flex items-center gap-2 text-slate-300 font-medium hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                >
                  Explorar Servicios
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Professional Photo & Stats */}
            {/* CAMBIO: Se añade 'lg:pt-20' para bajar todo este bloque y alinearlo con el Título (saltándose el badge) */}
            <div className="w-full lg:w-[35%] flex flex-col items-center flex-shrink-0 lg:pt-20">
               
               {/* Photo Container */}
               {/* CAMBIO: Se reduce el width a max-w-[340px] para que la foto sea menos alta y deje subir a las stats */}
               <div className="relative group w-full max-w-[340px]">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-brand-cyan/20 rounded-[30px] blur-2xl group-hover:bg-brand-cyan/30 transition-all duration-500"></div>

                  {/* Image Container with Border */}
                  <div className="relative rounded-[20px] border-[3px] border-brand-cyan overflow-hidden shadow-[0_0_30px_rgba(0,212,255,0.3)] bg-brand-dark">
                    <img
                      src="/foto-walter.png"
                      alt="Walter Olaizola"
                      className="w-full h-auto object-cover transform hover:scale-105 transition duration-700"
                    />
                    {/* Subtle overlay gradient at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent opacity-50"></div>
                  </div>
               </div>

               {/* Stats: Debajo de la foto y centradas */}
               {/* CAMBIO: Se reduce el margen superior (mt-6) para pegarlo a la foto y alinear con el botón de la izq */}
               <div className="mt-6 grid grid-cols-3 gap-4 md:gap-8 w-full max-w-[340px] text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white">25+</p>
                    <p className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mt-1">Años Exp.</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white">100+</p>
                    <p className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mt-1">Proyectos</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white">7+</p>
                    <p className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mt-1">Industrias</p>
                  </div>
                </div>

            </div>

          </div>
        </div>


        {/* Bloque de Logos con Aceleración GPU y Color Real al Hover */}
        <div className="w-full relative z-20 mt-16 pb-8">
            <p className="text-center text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-10">
              Impacto real en líderes de industria
            </p>

            <style>{`
              @keyframes scrollLeft { 
                0% { transform: translateX(0); } 
                100% { transform: translateX(-50%); } 
              }
              /* Duración adaptativa: 25s en móvil para fluidez, 60s en desktop para elegancia */
              .animate-scroll-left { 
                animation: scrollLeft 25s linear infinite; 
                will-change: transform; /* Fuerza el uso de GPU para evitar lag en móvil [cite: 16-12-2025] */
              }
              @media (min-width: 768px) {
                .animate-scroll-left { animation-duration: 60s; }
              }
              .hover-pause:hover { animation-play-state: paused; }
              .mask-gradient-premium { 
                mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); 
                -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); 
              }
            `}</style>

            <div className="w-full overflow-hidden relative py-4 mask-gradient-premium">
                <div className="flex items-center gap-12 md:gap-20 whitespace-nowrap animate-scroll-left hover-pause">
                    {/* Lógica de duplicación para bucle infinito perfecto */}
                    {[...Array(2)].map((_, i) => (
                      <React.Fragment key={i}>
                        {[
                          "Volkswagen.png", "SEAT.png", "BancSabadell.png", "Allianz.png", 
                          "Zurich.png", "Naturgy.png", "Ferrovial.png", "Continental.png", 
                          "Sanofi.png", "Janssen.png", "Anticipa.svg", "Correos.png", "Grupo_Godo.png", "ULMA.png"
                        ].map((logo, index) => (
                          <img
                            key={`${i}-${index}`}
                            src={`assets/logos/Clientes/${logo}`}
                            alt="Cliente de Walter Olaizola"
                            /* - brightness-0 invert: Convierte cualquier color en blanco puro (Uniformidad total) [cite: 16-12-2025]
                              - opacity-30: Los deja en un segundo plano elegante [cite: 16-12-2025]
                              - hover:filter-none: Elimina el filtro blanco y recupera el color real [cite: 16-12-2025]
                            */
                            className="h-10 md:h-12 w-auto max-w-[120px] md:max-w-[150px] object-contain brightness-0 invert opacity-30 transition-all duration-500 hover:filter-none hover:opacity-100"
                          />
                        ))}
                      </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
        {/* FIN Bloque de Logos */}

      </section>


      

      {/* 3. PROBLEM AGITATION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              ¿Te suena familiar?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              No estás solo. Estos son los desafíos críticos que escucho cada semana en despachos de CxOs y líderes de Data & AI:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROBLEMS.map((problem, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start">
                <AlertCircle className="w-8 h-8 text-red-500 mr-4 shrink-0" />
                <p className="text-slate-700 font-medium leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* 3. FIN PROBLEM AGITATION */}


      {/* 4. SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Así es como te ayudo
            </h2>
            <p className="text-slate-600">Soluciones diseñadas para generar impacto, no burocracia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-cyan hover:shadow-lg transition-all duration-300 relative flex flex-col h-full">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 text-brand-cyan shadow-sm group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <span className="text-brand-cyan font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform cursor-pointer">
                    Saber más <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
                <a href={service.link} className="absolute inset-0"></a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. FIN SERVICES PREVIEW */}



      {/* 5. CASE STUDIES & RESULTS */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resultados Reales</h2>
              <p className="text-slate-400 max-w-xl">
                Sin teorías. Ejemplos de situaciones críticas transformadas en casos de éxito medibles.
              </p>
            </div>
{/* 
            <Button to="/consultoria" variant="outline-light" className="mt-6 md:mt-0">
              Ver metodología
            </Button>
  */}           
              { /* ENLACE SECUNDARIO (Texto limpio, sin caja) */}
              <Link 
                to="/consultoria" 
                className="group flex items-center gap-2 text-slate-300 font-medium hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
              >
                Explorar Servicios
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>

          <div className="space-y-6">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-brand-cyan/50 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <div className="flex items-center space-x-3 mb-2">
                       <span className="bg-brand-cyan/20 text-brand-cyan text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                         {study.client}
                       </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <p className="text-slate-500 text-sm uppercase font-semibold mb-1">El Problema</p>
                        <p className="text-slate-300 text-sm">{study.situation}</p>
                      </div>
                      <div>
                        <p className="text-brand-cyan text-sm uppercase font-semibold mb-1">La Intervención</p>
                        <p className="text-slate-300 text-sm">{study.intervention}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {study.results.map((res, i) => (
                        <li key={i} className="flex items-center text-slate-200 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan mr-2" /> {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Stats Box */}
                  <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 justify-center">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="bg-slate-900 rounded-xl p-4 text-center border border-slate-800 flex-1">
                        <p className="text-3xl font-extrabold text-brand-cyan">{stat.value}</p>
                        <p className="text-slate-400 text-xs uppercase font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* 6. SECCIÓN TESTIMONIOS (Diseño Premium: Tarjetas Blancas sobre Fondo Gris) */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* CAMBIO 1: Fondo de sección gris (bg-gray-50) para dar profundidad */}
      <section className="testimonials py-24 bg-gray-50 border-t border-gray-200 relative group">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
              Más de 25 años generando confianza
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              He recopilado más de 20 recomendaciones en LinkedIn. Aquí tienes una selección.
            </p>
          </div>
          
          {/* Lógica de Scroll */}
          {(() => {
            const scrollRef = React.useRef<HTMLDivElement>(null);
            const scrollAmount = 424; 

            const scroll = (direction: 'left' | 'right') => {
              if (scrollRef.current) {
                const { current } = scrollRef;
                const distance = direction === 'left' ? -scrollAmount : scrollAmount;
                current.scrollBy({ left: distance, behavior: 'smooth' });
              }
            };

            return (
              <div className="relative max-w-[1300px] mx-auto px-4 md:px-12"> 
                
                {/* BOTÓN IZQUIERDA (Estilo mejorado) */}
                <button 
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-[#0A2463] hover:text-white hover:bg-[#00D4FF] transition-all hidden md:flex"
                  aria-label="Anterior"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>

                {/* BOTÓN DERECHA (Estilo mejorado) */}
                <button 
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-[#0A2463] hover:text-white hover:bg-[#00D4FF] transition-all hidden md:flex"
                  aria-label="Siguiente"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* CONTENEDOR SCROLL */}
                <div 
                  ref={scrollRef}
                  className="flex overflow-x-auto hide-scrollbar gap-6 pb-12 snap-x snap-mandatory scroll-smooth"
                >
                  {[
                    {
                      name: "Alfredo Fernández",
                      role: "Senior Product Manager @ Veeva Systems",
                      text: "Walter es una persona muy responsable y con una gran empatía hacia el cliente. Gracias a su ayuda pudimos implementar en LEO una herramienta de BI que explotaba información de Salesforce y ERPs. El resultado ha sido mucho más de lo esperado.",
                      initials: "AF"
                    },
                    {
                      name: "David Redaño Torres",
                      role: "Technical Architect @ Sage",
                      text: "Demostró ser un líder con las ideas claras sobre las necesidades del cliente. Sin duda, uno de los mejores profesionales con los que he tenido la suerte de trabajar y convivir en mi trayectoria.",
                      initials: "DR"
                    },
                    {
                      name: "Anthony Lamot",
                      role: "CEO @ DESelect",
                      text: "I collaborated with Walter on several Salesforce/Veeva deployments... Walter's advice and analyses were always accurate. I much enjoyed working together with him.",
                      initials: "AL"
                    },
                    {
                      name: "Berna Karahuseyin",
                      role: "Senior IT Product Analyst",
                      text: "Walter's advice and analyses were always accurate and he delivered great quality on time. When challenges arose, he took ownership and resolved them in an efficient way.",
                      initials: "BK"
                    },
                  ].map((item, index) => (
                    // CAMBIO 2: Tarjeta Blanca (bg-white) sobre fondo gris + Sombra suave
                    <div 
                      key={index} 
                      className="w-[85vw] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 snap-start select-none h-full hover:shadow-lg transition-all relative"
                    >
                      {/* CAMBIO 3: Comillas decorativas de fondo */}
                      <div className="absolute top-6 right-8 text-[#00D4FF]/10">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-[#00D4FF]/10 text-[#00D4FF] rounded-full flex items-center justify-center font-bold text-lg border border-[#00D4FF]/20 shrink-0">
                          {item.initials}
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-[#0A2463] text-lg truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wide truncate">{item.role}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 italic leading-relaxed text-sm whitespace-normal relative z-10">
                        "{item.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Enlace Final a LinkedIn con React Icons */}
          <div className="text-center mt-10">
            <a 
              href="https://www.linkedin.com/in/walterolaizola/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0A2463] font-semibold hover:text-[#00D4FF] transition-colors border-b-2 border-transparent hover:border-[#00D4FF]"
            >
              Ver las más de 20 recomendaciones en LinkedIn 
              <span>→</span>
            </a>
          </div>

        </div>
      </section>


{/* 7. CTA (Cierre Ejecutivo de Alto Impacto) */}
      <section className="py-24 bg-[#0A2463] relative overflow-hidden text-center">
        
        {/* 1. Fondo Mejorado: Degradado + Textura + Luces */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463] via-[#001b4d] to-[#0A2463]"></div>
        
        {/* Luces ambientales para profundidad */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          
          {/* 2. Copywriting Mejorado: Autoridad sin agresividad */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Pasa de la estrategia a la ejecución.<br />
            <span className="text-[#FF6B35]">Sin rodeos.</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            No necesitas más herramientas, necesitas resultados.
            <br className="hidden md:block" />
            Agenda 30 minutos conmigo y definamos la hoja de ruta para activar tus datos y acelerar resultados con IA.
          </p>
          
          {/* 3. Doble Botón: Acción Principal vs Exploración */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[#FF6B35] text-white text-lg font-bold px-10 py-4 rounded-lg shadow-2xl hover:bg-[#e55a2b] hover:scale-105 transition-all duration-300"
            >
              Solicitar Sesión Estratégica
            </Link>
            
            <Link 
              to="/consultoria" 
              className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white text-lg font-semibold px-10 py-4 rounded-lg hover:bg-white/10 transition-all"
            >
              Ver mis Servicios
            </Link>
          </div>

          {/* 4. Micro-copy de Confianza */}
          <p className="mt-8 text-sm text-slate-400 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
            Sin compromiso comercial • Directo al grano
          </p>

        </div>
      </section>
      {/* 7. FIN CTA FINAL */}

    </div>
  );
};

export default Home;