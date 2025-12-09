import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// Importamos iconos de interfaz de Lucide
import { Briefcase, Code, Terminal, GraduationCap, CheckCircle2, FileText, TrendingUp, Target } from 'lucide-react';
// Importamos el icono de marca de React Icons (¡Esta es la línea que te falta!)
import { FaLinkedin } from "react-icons/fa"; 
import { TECH_STACK, VALUES } from '../constants';
import Button from '../components/UI/Button';


const About: React.FC = () => {
  const experience = [
    { year: "2023 - 2025", role: "Executive Manager Data & AI", company: "NTT DATA Europe & Latam", desc: "Liderazgo de estrategias DATA e IA, CDO Journeys, Modernización, IA." },
    { year: "2020 - 2023", role: "Data & AI Senior Service Manager", company: "Volkswagen Group España", desc: "Gestión CoE con 60+ personas. Reducción de costes con mejora de calidad, impacto y eficiencia." },
    { year: "2013 - 2020", role: "Data & Analytics Senior Manager", company: "SDG Group", desc: "Creación de PMO Data. Dirección iniciativas multi-industria." },
    { year: "2003 - 2013", role: "Data & Analytics Delivery Manager", company: "T-Systems / gedas", desc: "Liderazgo portfolio Data Grupo VW. Certificación CMMI ML3." }
  ];

  return (
    <div className="pt-20">

      {/* 1. HERO SECTION: BIO & TRANSICIÓN  */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Fondo decorativo sutil */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#0A2463]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Columna Texto (Izquierda) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-full">
                <span className="text-[#0A2463] font-bold text-sm tracking-wide uppercase">
                  Walter Olaizola
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2463] mb-6 leading-tight">
                  La visión de un <span className="text-[#00D4FF]">CDO Global</span>,<br />
                  la potencia de la <span className="text-[#FF6B35]">IA Aplicada</span>.
                </h1>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Durante más de 25 años, he liderado estrategias de datos e IA en gigantes como <strong>Volkswagen</strong>, <strong>SDG</strong>, <strong>NTT DATA</strong>,  y <strong>T-Systems</strong>. He vivido todas las olas: Big Data, Cloud y ahora la revolución de la <strong>Inteligencia Artificial Generativa y Agentes</strong>.
                  </p>
                  <p>
                    El problema sigue siendo el mismo: <strong>las estrategias fallan en la ejecución</strong>. Ya sea implantar un Gobierno de Datos o desplegar Agentes de IA, los PowerPoints no resuelven problemas.
                  </p>
                  <p className="font-medium text-[#0A2463]">
                    Ayudo a empresas a gobernar sus datos y escalar su IA con enfoque de negocio. Estrategia, Gobierno, Formación y Ejecución Interim. Sin humo.
                  </p>
                </div>

              {/* Stats Rápidos */}
              <div className="grid grid-cols-3 gap-4 mt-10 border-t border-gray-100 pt-8">
                <div>
                  <span className="block text-3xl font-bold text-[#0A2463]">+25</span>
                  <span className="text-sm text-gray-500">Años Experiencia</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-[#0A2463]">+100</span>
                  <span className="text-sm text-gray-500">Proyectos Enterprise</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-[#0A2463]">100%</span>
                  <span className="text-sm text-gray-500">Enfoque en Valor</span>
                </div>
              </div>

              {/* Botones Hero Ajustados */}
                <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                  
                  {/* Botón LinkedIn con React Icons */}
                  <a 
                    href="https://www.linkedin.com/in/walterolaizola/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006396] transition-colors shadow-md leading-none"
                  >
                    <FaLinkedin size={18} />
                    Validar en LinkedIn
                  </a>

                </div>  
            </div>

            {/* Columna Foto (Derecha) */}
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                {/* Asegúrate de que la ruta coincida con tu archivo real */}
                <img 
                  src="/foto-walter.png" 
                  alt="Walter Olaizola - Data & AI Strategy" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Elementos flotantes decorativos (Badge de experiencia) */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border-l-4 border-[#00D4FF] hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0A2463] p-2 rounded-full text-white">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Enfoque</p>
                    <p className="text-[#0A2463] font-bold">ROI & Negocio</p>
                  </div>
                </div>
              </div>

               <div className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-xl border-l-4 border-[#FF6B35] hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FF6B35] p-2 rounded-full text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Metodología</p>
                    <p className="text-[#0A2463] font-bold">Ágil & Práctica</p>
                  </div>
                </div>
              </div>

              {/* Patrón de puntos detrás */}
              <div className="absolute top-10 -right-10 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0"></div>
            </div>

          </div>
        </div>
      </section>
      {/* FIN 1. HERO SECTION: BIO & TRANSICIÓN  */}


      {/* 2. Consultoras - Clientes*/}           
      {/* --- INICIO SECCIÓN LOGOS (Con Estilos y Corrección de Nombres) --- */}
      
      {/* 1. Estilos CSS inyectados localmente para asegurar la animación */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 45s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 50s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
        /* Máscara para difuminar los bordes */
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      {/* 2. Lógica del componente */}
      {(() => {
        // LISTA 1: Top Tier / Estratégicos
        const logosTier1 = [
          { file: 'Volkswagen.png', alt: 'Volkswagen' },
          { file: 'SEAT.png', alt: 'SEAT' },
          { file: 'BancSabadell.png', alt: 'Banc Sabadell' },
          { file: 'Allianz.png', alt: 'Allianz' },
          { file: 'Zurich.png', alt: 'Zurich' },
          { file: 'Naturgy.png', alt: 'Naturgy' },
          { file: 'Ferrovial.png', alt: 'Ferrovial' },
          { file: 'Continental.png', alt: 'Continental' },
          { file: 'Sanofi.png', alt: 'Sanofi' },
          { file: 'Janssen.png', alt: 'Janssen' },
          { file: 'johnson-johnson.png', alt: 'Johnson & Johnson' },
          { file: 'Amgen.png', alt: 'Amgen' },
          { file: 'boehringer.webp', alt: 'Boehringer Ingelheim' },
        ];

        // LISTA 2: Pharma, Público y Otros
        // NOTA: He corregido mayúsculas/minúsculas según tu captura de pantalla
        const logosTier2 = [
          { file: 'ULMA.png', alt: 'ULMA' },
          { file: 'Navantia.png', alt: 'Navantia' },
          { file: 'Correos.png', alt: 'Correos' },
          { file: 'Ajuntament de Barcelona.png', alt: 'Ajuntament de Barcelona' },
          { file: 'Fira Barcelona.png', alt: 'Fira Barcelona' },
          { file: 'Grupo_Godo.png', alt: 'Grupo Godó' },
          { file: 'Anticipa.svg', alt: 'Anticipa' }, // Corregido .svg
          { file: 'AC-hoteles.webp', alt: 'AC Hoteles' },
          { file: 'Fresenius.png', alt: 'Fresenius' },
          { file: 'Leo-pharma.png', alt: 'Leo Pharma' },
          { file: 'Hipra.png', alt: 'Hipra' },
          { file: 'Ecuphar.png', alt: 'Ecuphar' },
          { file: 'Reig-jofre.png', alt: 'Reig Jofre' },
          { file: 'labiana.png', alt: 'Labiana' }, // Corregido minúscula
          { file: 'Lacer.png', alt: 'Lacer' },
          { file: 'caritas.png', alt: 'Cáritas' },
          { file: 'Ingecid.png', alt: 'Ingecid' },
        ];

        return (
          <section className="trusted-by py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              
              {/* --- PEDIGRÍ (Consultoras) --- */}
              <div className="mb-12 text-center">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">
                  Ex-Executive Manager en las mejores consultoras de Data & AI
                </p>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  {/* Asegúrate de que estos logos existan en assets/logos/Consultoras/ */}
                  <img src="assets/logos/Consultoras/NTT-DATA-Future-Blue-RGB.png" alt="NTT DATA" className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="assets/logos/Consultoras/SDG Group - Logo.png" alt="SDG Group" className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="assets/logos/Consultoras/T-Systems_Logo_2024.svg.png" alt="T-Systems" className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>
              </div>

              <hr className="border-t border-gray-200 my-10 w-2/3 mx-auto" />

              {/* --- CLIENTES (Carrusel Infinito) --- */}
              <div className="clients-marquee-section">
                <h3 className="text-xl font-bold text-center text-[#0A2463] mb-8">
                  Impacto real en líderes de industria
                </h3>

                {/* Fila 1: Izquierda */}
                <div className="w-full overflow-hidden relative py-4 mask-gradient">
                  <div className="flex items-center gap-12 whitespace-nowrap animate-scroll-left hover-pause">
                    {/* Renderizamos lista duplicada para efecto infinito */}
                    {[...logosTier1, ...logosTier1].map((logo, index) => (
                      <img
                        key={`row1-${index}`}
                        src={`assets/logos/Clientes/${logo.file}`} 
                        alt={logo.alt}
                        className="h-12 w-auto max-w-[140px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 mx-4"
                      />
                    ))}
                  </div>
                </div>

                {/* Fila 2: Derecha */}
                <div className="w-full overflow-hidden relative py-4 mt-2 mask-gradient">
                  <div className="flex items-center gap-12 whitespace-nowrap animate-scroll-right hover-pause">
                    {[...logosTier2, ...logosTier2].map((logo, index) => (
                      <img
                        key={`row2-${index}`}
                        src={`assets/logos/Clientes/${logo.file}`}
                        alt={logo.alt}
                        className="h-10 w-auto max-w-[120px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 mx-4"
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>
        );
      })()}
      {/* --- FIN SECCIÓN LOGOS --- */}

      {/* FIN 2. Consultoras - Clientes*/} 
                    
      {/* 3. Timeline - Trayectoria Profesional*/}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-16">Trayectoria Profesional</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 group-hover:bg-brand-cyan shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors">
                  <Briefcase className="w-4 h-4 text-slate-600 group-hover:text-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                    <h3 className="font-bold text-brand-dark">{exp.role}</h3>
                    <span className="text-sm font-semibold text-brand-cyan">{exp.year}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500 mb-2">{exp.company}</p>
                  <p className="text-slate-600 text-sm">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. FIN Timeline - Trayectoria Profesional*/}


      {/* 4. SECCIÓN TESTIMONIOS (Carrusel Manual Horizontal) */}     
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section className="testimonials py-20 bg-white border-b border-gray-100 relative group">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-4">
              Más de 25 años generando confianza
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              He recopilado más de 20 recomendaciones en LinkedIn. Aquí tienes una selección.
            </p>
          </div>
          
          {/* Lógica de Scroll */}
          {(() => {
            const scrollRef = React.useRef<HTMLDivElement>(null);

            // CÁLCULO EXACTO: Tarjeta (400px) + Gap (24px/1.5rem) = 424px
            const scrollAmount = 424; 

            const scroll = (direction: 'left' | 'right') => {
              if (scrollRef.current) {
                const { current } = scrollRef;
                const distance = direction === 'left' ? -scrollAmount : scrollAmount;
                current.scrollBy({ left: distance, behavior: 'smooth' });
              }
            };

            return (
              <div className="relative max-w-[1300px] mx-auto px-4 md:px-12"> {/* Padding lateral para las flechas */}
                
                {/* BOTÓN IZQUIERDA */}
                <button 
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-[#0A2463] hover:text-[#00D4FF] hover:bg-gray-50 transition-all hidden md:flex"
                  aria-label="Anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* BOTÓN DERECHA */}
                <button 
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-[#0A2463] hover:text-[#00D4FF] hover:bg-gray-50 transition-all hidden md:flex"
                  aria-label="Siguiente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* CONTENEDOR SCROLL */}
                {/* Cambio clave: 'snap-x' y 'snap-start' para alinear a la izquierda */}
                <div 
                  ref={scrollRef}
                  className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x snap-mandatory scroll-smooth"
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
                    //// --- AÑADE AQUÍ MÁS TESTIMONIOS (Copia y pega este bloque) ---
                    // {
                    //  name: "Nombre Cliente 5",
                    //  role: "Cargo @ Empresa",
                    //  text: "Aquí pones el texto de la recomendación número 5...",
                    //  initials: "NC"
                    //},
                  ].map((item, index) => (
                    // TARJETA INDIVIDUAL
                    // 'snap-start' es la clave: fuerza a que la tarjeta se alinee al inicio del contenedor
                    <div 
                      key={index} 
                      className="w-[85vw] md:w-[400px] flex-shrink-0 bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 snap-start select-none h-full"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#00D4FF]/10 text-[#00D4FF] rounded-full flex items-center justify-center font-bold text-lg border border-[#00D4FF]/20 shrink-0">
                          {item.initials}
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-[#0A2463] text-lg truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide truncate">{item.role}</p>
                        </div>
                      </div>
                      <div className="text-[#00D4FF] text-4xl leading-none font-serif mb-2">"</div>
                      <p className="text-gray-600 italic leading-relaxed text-sm whitespace-normal">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

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
      {/* FIN 4. SECCIÓN TESTIMONIOS (Validación Social) */}


      {/* 5. SECCIÓN CERTIFICACIONES Y FORMACIÓN */}
      <section className="credentials py-20 bg-[#0A2463] text-white">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Columna 1: Certificaciones */}
            <div>
              <h3 className="text-2xl font-bold mb-8 border-b border-[#00D4FF] inline-block pb-2">
                Certificaciones & Metodologías
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#00D4FF] font-semibold mb-3 text-sm uppercase tracking-wider">Dirección de proyectos de DATA & AI</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">PMP® Project Management</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">PRINCE2®</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">NEXUS Scaled Scrum</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">PSM (Scrum Master)</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">PSPO (Product Owner)</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">SPS (Scaled Professional Scrum)</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">Scrum Manager</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#00D4FF] font-semibold mb-3 text-sm uppercase tracking-wider">Tecnología & Cloud</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 font-bold text-white">Azure</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">AWS</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">Google Cloud Platform</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">Databricks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 2: Formación Académica (Con Iconos en vez de números) */}
            <div>
              <h3 className="text-2xl font-bold mb-8 border-b border-[#00D4FF] inline-block pb-2">
                Formación Académica
              </h3>
              
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-[#00D4FF] border border-white/10 group-hover:border-[#00D4FF] transition-colors">
                    {/* Icono de Birrete en lugar de "08" */}
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">Postgrado de Desarrollo Directivo</h4>
                    <p className="text-gray-300">Universidad Autónoma de Barcelona (UAB)</p>
                    <span className="text-sm text-[#00D4FF] font-mono">2008</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-[#00D4FF] border border-white/10 group-hover:border-[#00D4FF] transition-colors">
                    {/* Icono de Birrete en lugar de "00" */}
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">Ingeniería Informática Superior</h4>
                    <p className="text-gray-300">Universidad CAECE</p>
                    <span className="text-sm text-[#00D4FF] font-mono">2000</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* FIN 5. SECCIÓN CERTIFICACIONES Y FORMACIÓN */}


      {/* 6. SECCIÓN STACK TECNOLÓGICO */}
      <section className="tech-stack py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-4">
              Ecosistema Tecnológico
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No me caso con ningún vendor, pero he liderado iniciativas estratégicas con las herramientas que mueven el mercado. Mi enfoque es agnóstico y pragmático.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Cloud & Platforms */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#00D4FF]/10 rounded-lg text-[#00D4FF]">
                  <Terminal className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A2463]">Cloud & Platforms</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'AWS', 'Google Cloud', 'Databricks', 'Snowflake', 'Fabric'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{tech}</span>
                ))}
              </div>
            </div>

            {/* Data Governance */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#00D4FF]/10 rounded-lg text-[#00D4FF]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A2463]">Data & AI Governance</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MS Purview', 'Informatica', 'Unity Catalog', 'Collibra', 'Alation'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{tech}</span>
                ))}
              </div>
            </div>

            {/* AI & ML (EL HYPE - Diseño Refinado y Elegante) */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#00D4FF] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              {/* Etiqueta flotante opcional para darle más fuerza */}
              <div className="absolute top-0 right-0 bg-[#00D4FF] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                HOT SKILL
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#00D4FF] rounded-lg text-white shadow-md">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A2463] text-lg">AI & GenAI</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {/* Tags con fondo sutil azulado para diferenciar del resto */}
                {['Agentic AI', 'RAG', 'LLMs', 'Prompt Engineering', 'Azure ML', 'Vertex AI', 'SageMaker'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-[#00D4FF]/10 text-[#0A2463] rounded text-xs font-bold border border-[#00D4FF]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Arquitectura */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#00D4FF]/10 rounded-lg text-[#00D4FF]">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A2463]">Arquitectura</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Data Mesh', 'Lakehouse', 'Data Vault 2.0', 'Medallion', 'Event-Driven'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* FIN 6. SECCIÓN STACK TECNOLÓGICO */}

      {/* 7. CTA FINAL */}
      <section className="cta py-24 bg-gray-50 text-center relative overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00D4FF] to-[#0A2463]"></div>
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">
            ¿Necesitas resultados, no solo diagnósticos?
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Ya conoces mi trayectoria y cómo trabajo. Si buscas a alguien que se integre en tu equipo, entienda el negocio y ejecute soluciones de datos e IA reales, estoy listo.
          </p>
          
          <div className="flex justify-center">
            {/* USAMOS EL COMPONENTE LINK DE REACT ROUTER 
               - Ruta corregida a "/contact" (coincide con tu archivo Contact.tsx)
               - Texto más directo y menos intimidante
            */}
            <Link 
              to="/contact" 
              className="inline-block bg-[#FF6B35] text-white font-bold py-4 px-12 rounded-lg hover:bg-[#e55a2b] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
            >
              Hablemos de tus Retos
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-gray-400">
            Respuesta garantizada en menos de 24h
          </p>
        </div>
      </section>
      {/* FIN 7. CTA FINAL */}


      {/* 8. Values - Cómo Trabajo*/}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center mb-16">Cómo Trabajo</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {VALUES.map((val, i) => (
               <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-750 transition-colors">
                 <h3 className="font-bold text-brand-cyan mb-3">{val.title}</h3>
                 <p className="text-slate-300 text-sm leading-relaxed">{val.description}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
      {/* FIN 8. Values - Cómo Trabajo*/}

    </div>
  );
};

export default About;