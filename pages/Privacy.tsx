import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">Última actualización: 10 de Marzo de 2025</p>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Responsable del Tratamiento</h2>
          <p>
            Walter Olaizola ("nosotros", "nuestro").<br/>
            Email de contacto: info@walolaizola.com<br/>
            Ubicación: Barcelona, España.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Qué datos recopilamos</h2>
          <p>
            Recopilamos información personal que usted nos proporciona voluntariamente al completar formularios en nuestro sitio web, como:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Nombre y Apellidos.</li>
            <li>Dirección de correo electrónico profesional.</li>
            <li>Empresa y Cargo.</li>
            <li>Información sobre sus desafíos de negocio (mensaje).</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Finalidad del tratamiento</h2>
          <p>Utilizamos sus datos para:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Responder a sus consultas y solicitudes de propuestas.</li>
            <li>Agendar sesiones estratégicas solicitadas por usted.</li>
            <li>Enviarle información relevante sobre nuestros servicios (si ha dado su consentimiento explícito).</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Legitimación</h2>
          <p>
            La base legal para el tratamiento de sus datos es su consentimiento explícito al enviar el formulario de contacto o, en su caso, la ejecución de medidas precontractuales a petición suya.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">5. Destinatarios</h2>
          <p>
            Sus datos no se cederán a terceros, salvo obligación legal. Trabajamos con proveedores de servicios tecnológicos (hosting, email) que cumplen con la normativa GDPR.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">6. Sus Derechos</h2>
          <p>
            Usted tiene derecho a acceder, rectificar y suprimir sus datos, así como a limitar u oponerse a su tratamiento. Puede ejercer estos derechos enviando un email a info@walolaizola.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;