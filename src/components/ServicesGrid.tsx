function ServicesGrid() {
  const scrollToForm = () => {
    // Función para scroll al formulario
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    //TODO: Cambiar los botones para que esten alineados
    <div className="w-full bg-white shadow-sm mt-8">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Servicios gratuitos que puedes obtener con tu Bono Digital
          </h2>
          
          <p className="text-xl text-gray-600">
          Con tu Bono Digital podrás disfrutar de los siguientes servicios completamente gratis para tu negocio:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Servicio 1 - Web */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">Creación de Páginas Web</h3>
                <div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center ml-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <p className="text-white/90 mb-6 flex-grow">Desarrollamos una página web profesional para tu negocio, sin pagar IVA.</p>
              <button
                onClick={scrollToForm}
                className="w-full bg-white text-emerald-700 py-3 px-4 rounded-lg hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-medium mt-auto"
              >
                Solicita tu Página Web Ahora
              </button>
            </div>
          </div>

          {/* Servicio 2 - Tienda Online */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">Creación de Tiendas online</h3>
                <div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center ml-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <p className="text-white/90 mb-6 flex-grow">Tu tienda online profesional para vender en toda España, sin pagar IVA.</p>
              <button
                onClick={scrollToForm}
                className="w-full bg-white text-emerald-700 py-3 px-4 rounded-lg hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-medium mt-auto"
              >
                Solicita tu Pagina Tienda Online
              </button>
            </div>
          </div>

          {/* Servicio 3 - Redes Sociales */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">Gestión de Redes Sociales</h3>
                <div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center ml-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
              </div>
              <p className="text-white/90 mb-6 flex-grow">Conecta con tu público. Gestionamos tus redes sociales de manera profesional.</p>
              <button
                onClick={scrollToForm}
                className="w-full bg-white text-emerald-700 py-6 px-4 rounded-lg hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-medium mt-auto"
              >
                Empieza con Redes Sociales
              </button>
            </div>
          </div>

          {/* Servicio 4 - Equipos */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">Equipos Informáticos</h3>
                <div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center ml-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-white/90 mb-6 flex-grow">Renueva tus equipos informáticos sin coste adicional.</p>
              <button
                onClick={scrollToForm}
                className="w-full bg-white text-emerald-700 py-3 px-4 rounded-lg hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-medium mt-auto"
              >
                Solicita Equipamiento Informático
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesGrid 