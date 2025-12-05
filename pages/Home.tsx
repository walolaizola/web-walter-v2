import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Quote } from 'lucide-react';
import Button from '../components/UI/Button';
import { PROBLEMS, SERVICES, CASE_STUDIES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-brand-dark pt-24 pb-12 overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column: Copy & CTAs */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold text-sm tracking-wide uppercase">
                Executive Data & AI Strategy
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
                ¿Tus datos no generan decisiones?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">
                  ¿Tu IA no llega a producción?
                </span>
              </h1>
              
              <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                25 años ayudando a empresas como Volkswagen y NTT DATA a transformar datos en resultados financieros. 
                <span className="text-white font-semibold"> No hago diagnósticos bonitos. Me pongo tu camiseta y ejecuto.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
                <Button to="/contact" variant="accent" className="text-lg px-10 py-4 shadow-xl shadow-brand-orange/20">
                  Hablemos de tu situación
                </Button>
                <Button to="/consultoria" variant="outline-light" className="text-lg px-10 py-4">
                  Ver cómo trabajo
                </Button>
              </div>

              {/* Stats - Left aligned on desktop */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-8 md:gap-16 w-full lg:w-auto">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white">25+</p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">Años Exp.</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white">150+</p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">Proyectos</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">Sectores</p>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Photo */}
            <div className="w-full max-w-md lg:w-[35%] flex-shrink-0 relative group">
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

          </div>
        </div>
      </section>

      {/* 2. PROBLEM AGITATION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              ¿Te suena familiar?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              No estás solo. Estos son los problemas que escucho cada semana en despachos de CEOs y CDOs:
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

      {/* 3. SERVICES PREVIEW */}
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

      {/* 4. CASE STUDIES & RESULTS */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resultados Reales</h2>
              <p className="text-slate-400 max-w-xl">
                Sin teorías. Aquí hay ejemplos de situaciones críticas transformadas en casos de éxito medibles.
              </p>
            </div>
            <Button to="/consultoria" variant="outline-light" className="mt-6 md:mt-0">
              Ver metodología
            </Button>
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

      {/* 5. TESTIMONIALS CAROUSEL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">Lo que dicen mis clientes</h2>
          
          <div className="relative min-h-[250px] flex items-center justify-center">
            {TESTIMONIALS.map((test, index) => (
              <div 
                key={test.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center ${index === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <Quote className="w-12 h-12 text-brand-cyan/20 mb-6" />
                <p className="text-2xl md:text-3xl font-medium text-brand-dark mb-8 leading-snug">
                  "{test.quote}"
                </p>
                <div>
                  <p className="font-bold text-slate-900">{test.name}</p>
                  <p className="text-brand-cyan">{test.role}, {test.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === activeTestimonial ? 'bg-brand-dark' : 'bg-slate-300'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-cyan to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            ¿Listo para transformar tu organización?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Agenda 30 minutos sin compromiso. Hablemos de tus desafíos y veamos si soy la persona adecuada para ayudarte.
          </p>
          <Button to="/contact" variant="white" className="text-lg px-12 py-5 shadow-2xl border-none">
            Agendar Sesión Estratégica
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;