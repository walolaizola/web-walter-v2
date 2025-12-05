import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle, Send } from 'lucide-react';
import Button from '../components/UI/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Form submitted:', formData);
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col">
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Hablemos de Resultados</h1>
          <p className="text-xl text-slate-300">
            Sin compromisos. Agenda 30 minutos para explorar cómo podemos desbloquear el valor de tus datos.
          </p>
        </div>
      </section>

      <section className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-brand-dark mb-6">Información Directa</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-brand-orange mt-1 mr-4 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-700">Email</p>
                      <a href="mailto:info@walolaizola.com" className="text-brand-cyan hover:underline">info@walolaizola.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-brand-orange mt-1 mr-4 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-700">Ubicación</p>
                      <p className="text-slate-600">Barcelona, España</p>
                      <p className="text-slate-500 text-sm">(Disponible Remoto & Global)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-sm text-slate-500 mb-2">Respuesta promedio:</p>
                  <p className="font-bold text-brand-dark">&lt; 24 horas laborables</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">¡Mensaje Recibido!</h3>
                    <p className="text-slate-600 mb-8">
                      Gracias por contactar. Revisaré tu caso y te responderé personalmente en menos de 24 horas.
                    </p>
                    <Button onClick={() => setStatus('idle')} variant="outline">Enviar otro mensaje</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Profesional</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                          placeholder="nombre@empresa.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Empresa</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-bold text-slate-700 mb-2">Cargo</label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                          placeholder="Ej: CDO, CEO, Director..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">¿Cuál es tu principal desafío actual?</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                        placeholder="Ej: Tenemos muchos datos pero no tomamos decisiones basadas en ellos..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" variant="accent" fullWidth disabled={status === 'loading'} className="text-lg py-4">
                        {status === 'loading' ? (
                          <span className="flex items-center justify-center">
                            <Loader2 className="animate-spin mr-2" /> Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Solicitar Sesión <Send className="ml-2 w-5 h-5" />
                          </span>
                        )}
                      </Button>
                      <p className="text-xs text-center text-slate-500 mt-4">
                        Tus datos están protegidos. No envío spam, solo soluciones.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;