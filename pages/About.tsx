import React from 'react';
import { Briefcase, Code, Terminal } from 'lucide-react';
import { TECH_STACK, VALUES } from '../constants';
import Button from '../components/UI/Button';

const About: React.FC = () => {
  const experience = [
    { year: "2023 - Presente", role: "Executive Manager Data Strategy", company: "NTT DATA Europe & Latam", desc: "Liderazgo de programas globales, CDO Journeys y LVM." },
    { year: "2020 - 2023", role: "Data Senior Service Manager", company: "Volkswagen Group España", desc: "Gestión CoE con 60+ personas. Reducción de costes y mejora de eficiencia." },
    { year: "2013 - 2020", role: "Data & Analytics Senior Manager", company: "SDG (Grupo Minsait)", desc: "Creación de PMO Data. Dirección iniciativas multi-industria." },
    { year: "2003 - 2013", role: "Delivery Manager", company: "T-Systems / gedas", desc: "Liderazgo portfolio Data Grupo VW. Certificación CMMI ML3." }
  ];

  return (
    <div className="pt-20">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-brand-dark mb-6">No soy un consultor teórico. <br/><span className="text-brand-cyan">Soy un ejecutor.</span></h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Durante más de 25 años, he estado en las trincheras de la transformación de datos. He visto modas ir y venir (Big Data, Blockchain, ahora GenAI), pero los fundamentos del éxito siguen siendo los mismos: 
                <span className="font-bold text-brand-dark"> estrategia clara, gobierno pragmático y ejecución impecable.</span>
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Mi diferenciador es simple: no te entrego un PowerPoint de diagnóstico y me voy. Me quedo, me pongo la camiseta de tu empresa y trabajo codo a codo con tu equipo hasta que los resultados son tangibles.
              </p>
              <div className="flex space-x-4">
                <Button to="/contact" variant="primary">Trabajemos Juntos</Button>
                <a href="https://www.linkedin.com/in/walterolaizola/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-lg hover:border-brand-cyan hover:text-brand-cyan transition-colors">
                  Ver LinkedIn
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-slate-900 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center"><Terminal className="mr-2 text-brand-cyan" /> Stack Tecnológico</h3>
                <div className="space-y-6">
                  {TECH_STACK.map((cat, i) => (
                    <div key={i}>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-2">{cat.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.tools.map((tool, j) => (
                          <span key={j} className="text-sm bg-slate-800 border border-slate-700 px-2 py-1 rounded hover:border-brand-cyan hover:text-brand-cyan transition-colors cursor-default">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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

      {/* Values */}
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
    </div>
  );
};

export default About;