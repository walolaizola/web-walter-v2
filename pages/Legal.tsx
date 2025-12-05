import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-8">Aviso Legal</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Datos Identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se exponen los siguientes datos:
          </p>
          <p className="mt-4">
            <strong>Titular:</strong> Walter Olaizola<br/>
            <strong>Actividad:</strong> Consultoría Estratégica en Datos e Inteligencia Artificial.<br/>
            <strong>Email:</strong> info@walolaizola.com<br/>
            <strong>Domicilio Profesional:</strong> Barcelona, España.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente) constituyen una obra cuya propiedad pertenece a Walter Olaizola, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Condiciones de Uso</h2>
          <p>
            El usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la Ley, el presente Aviso Legal, las buenas costumbres y el orden público. Del mismo modo, el usuario se obliga a no utilizar el sitio web o los servicios que se presten a través de él con fines o efectos ilícitos o contrarios al contenido del presente Aviso Legal.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            El titular del sitio web no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;