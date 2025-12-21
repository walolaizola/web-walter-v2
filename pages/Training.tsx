import React from 'react';
import { BookOpen, Award, Download, CheckCircle2 } from 'lucide-react';
import Button from '../components/UI/Button';

const Training: React.FC = () => {
  const courses = [
    {
      title: "Estrategia Data & IA para Directivos",
      duration: "16 horas",
      desc: "Cómo convertir la IA en ventaja competitiva. Para CEOs, Directores y Managers no técnicos.",
      modules: ["Fundamentos de IA Generativa", "Identificación de casos de uso", "Ética y riesgos", "Plan de adopción"]
    },
    {
      title: "Gobierno del Dato: De la Teoría a la Práctica",
      duration: "20 horas",
      desc: "Frameworks aplicables desde el día 1. Nada de teoría abstracta del DAMA-DMBOK.",
      modules: ["Roles y responsabilidades", "Calidad del dato", "MDM táctico", "Herramientas de catálogo"]
    },
    {
      title: "Data Products: De Datos a Producto",
      duration: "16 horas",
      desc: "Gestiona los datos como un producto con ciclo de vida, clientes y ROI.",
      modules: ["Product Management for Data", "Design Thinking", "Medición de valor", "Arquitectura Data Mesh"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-brand-dark to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              Bonificable 100% FUNDAE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Formación Ejecutiva Data & IA</h1>
            <p className="text-xl text-slate-300 mb-8">
              Tus managers no necesitan aprender a programar en Python. 
              Necesitan entender cómo usar los datos para tomar mejores decisiones.
            </p>
            <Button to="/contact" variant="primary">Solicitar Plan Personalizado</Button>
          </div>
          <div className="md:w-5/12 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center"><Award className="text-brand-cyan mr-2" /> Metodología</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 shrink-0" />
                <span><strong>Learning by Doing:</strong> 60% práctica con casos reales de tu sector.</span>
              </li>
              <li className="flex items-start text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 shrink-0" />
                <span><strong>Entregables Reales:</strong> Los alumnos salen con templates y planes borradores.</span>
              </li>
              <li className="flex items-start text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 shrink-0" />
                <span><strong>Lenguaje de Negocio:</strong> Cero tecnicismos incomprensibles.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Catálogo de Programas</h2>
            <p className="text-slate-600">Formaciones In-Company adaptadas a la madurez de tu equipo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col">
                <div className="bg-brand-dark p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <div className="flex items-center text-brand-cyan text-sm">
                    <BookOpen className="w-4 h-4 mr-2" /> {course.duration}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-slate-600 mb-6 text-sm">{course.desc}</p>
                  <p className="font-bold text-brand-dark text-sm mb-3">Qué aprenderán:</p>
                  <ul className="space-y-2 mb-6">
                    {course.modules.map((mod, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-500">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-2"></span>
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Button to="/contact" variant="outline" fullWidth className="text-sm">Más Información</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Download className="w-12 h-12 text-brand-dark mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-brand-dark mb-4">¿Tienes crédito FUNDAE sin usar?</h2>
          <p className="text-slate-600 mb-8">
            Muchas empresas pierden su crédito formativo anual. 
            Ayudo a tu departamento de RRHH a gestionar la bonificación para que la formación tenga coste cero o reducido.
          </p>
          <Button to="/contact" variant="secondary">Consultar Disponibilidad</Button>
        </div>
      </section>
    </div>
  );
};

export default Training;