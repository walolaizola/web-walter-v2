import React from 'react';
import { ArrowRight, Check, Target, Rocket, BarChart3, Users } from 'lucide-react';
import Button from '../components/UI/Button';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicios de Consultoría</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Metodologías probadas en multinacionales, adaptadas a tu realidad. 
            Sin humo, sin tecnicismos innecesarios, solo resultados de negocio.
          </p>
        </div>
      </section>

      {/* Service 1 */}
      <section id="strategy" className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-brand-cyan/10 rounded-xl text-brand-cyan mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Estrategia Data & IA</h2>
              <p className="text-lg text-slate-600 mb-6">
                Muchas empresas fallan porque invierten en tecnología sin tener los casos de uso claros. 
                Diseño un roadmap estratégico que alinea la inversión tecnológica con el retorno financiero.
              </p>
              
              <h3 className="font-bold text-brand-dark mb-3">Qué incluye:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Assessment de madurez (DAMA, AI Maturity)</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Roadmap con Quick Wins (3 meses) y visión estructural</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Business Cases con proyección de ROI real</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Definición de Target Operating Model</li>
              </ul>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="font-bold text-brand-dark mb-1">Duración típica:</p>
                <p className="text-slate-600">6-12 semanas (Híbrido)</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-6">Resultado Esperado</h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold shrink-0">Antes</div>
                <p className="text-slate-600 text-sm">Iniciativas dispersas, "PoCs" que mueren, frustración en negocio.</p>
              </div>
              <div className="flex justify-center mb-6">
                <ArrowRight className="text-slate-300 rotate-90" />
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0">Ahora</div>
                <p className="text-slate-800 font-medium">Plan estratégico claro, validado por C-level, con presupuesto aprobado y KPIs de éxito.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                 <Button to="/contact" variant="accent" fullWidth>Solicitar Propuesta</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 */}
      <section id="governance" className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-6">Resultado Esperado</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-slate-50 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-brand-cyan mr-3 shrink-0" />
                  <div>
                    <p className="font-bold text-brand-dark">Confianza Total</p>
                    <p className="text-sm text-slate-600">El CEO deja de preguntar "¿De dónde sale este número?" en las reuniones.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-slate-50 rounded-lg">
                  <Rocket className="w-6 h-6 text-brand-cyan mr-3 shrink-0" />
                  <div>
                    <p className="font-bold text-brand-dark">Velocidad</p>
                    <p className="text-sm text-slate-600">Reducción del 80% en tiempo de preparación de datos para reportes.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                 <Button to="/contact" variant="primary" fullWidth>Arreglar mis Datos</Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center p-3 bg-brand-dark rounded-xl text-white mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Gobierno del Dato</h2>
              <p className="text-lg text-slate-600 mb-6">
                Sin datos de calidad, la IA es inútil (Garbage In, Garbage Out). 
                Implemento estructuras de gobierno pragmáticas, no burocracia documental que nadie lee.
              </p>
              
              <h3 className="font-bold text-brand-dark mb-3">Qué incluye:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><Check className="w-5 h-5 text-brand-cyan mr-3 shrink-0" /> Diseño de Data Governance Office</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-brand-cyan mr-3 shrink-0" /> Data Quality Management & Remediación</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-brand-cyan mr-3 shrink-0" /> Master Data Management (Cliente único, Producto único)</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-brand-cyan mr-3 shrink-0" /> Catálogo de datos y Diccionario de Negocio</li>
              </ul>
              
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <p className="font-bold text-brand-dark mb-1">Enfoque:</p>
                <p className="text-slate-600">Hands-on con tu equipo. Dejo funcionando los procesos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">¿No estás seguro de qué necesitas?</h2>
          <Button to="/contact" variant="accent">Agenda una llamada de diagnóstico gratuita</Button>
        </div>
      </section>
    </div>
  );
};

export default Services;