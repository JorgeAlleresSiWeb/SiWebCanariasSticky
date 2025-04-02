import { useEffect, useRef } from 'react';

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollY = window.scrollY;
        // Efecto parallax sutil en el fondo
        headerRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <header 
      ref={headerRef}
      className="relative bg-gradient-to-br from-emerald-800 to-teal-700 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 150%, rgba(236, 253, 245, 0.15) 30%, transparent 60%)`,
        backgroundSize: '100% 100%'
      }}
    >
      {/* Overlay para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* Formas decorativas */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500 opacity-20 rounded-full"></div>
        <div className="absolute top-40 -right-20 w-60 h-60 bg-teal-400 opacity-20 rounded-full"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-emerald-400 opacity-10 rounded-full"></div>
        
        {/* Elementos gráficos que representan dispositivos/servicios digitales */}
        <div className="absolute top-16 right-[10%] opacity-10 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute bottom-16 left-[10%] opacity-10 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/30 text-white shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 mr-2"></span>
              Kit Digital Canarias 2024
            </span>
          </div>
          
          {/* Título con highlight */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
            ¡Transforma tu Negocio con el <br className="hidden md:block" />
            <span className="relative">
              <span className="inline-block">
                Bono Digital
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-emerald-300"></span>
              </span>
            </span>
            <br className="block md:hidden" />
            <span className="bg-white/30 px-3 py-1 rounded-md inline-block mt-2 md:ml-2 md:mt-0 shadow-sm whitespace-nowrap">SIN IVA!</span>
          </h1>
          
          {/* Subtítulo con diseño destacado */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 drop-shadow-md">
            Todo <span className="text-emerald-300 drop-shadow-md">Gratis</span> para tu negocio
          </h2>
          
          {/* Descripción con mejor formato */}
          <p className="text-white text-lg max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-sm font-medium">
            Gestionamos tu subvención del Kit Digital en Canarias. Cubrimos servicios clave como 
            <span className="text-emerald-300 font-semibold ml-1 drop-shadow-sm">creación de página web, tienda online, redes sociales</span> y un ordenador.
          </p>
          
          {/* Contenedor de botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleClick}
              className="group bg-white text-emerald-700 py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 font-semibold text-lg flex items-center justify-center"
            >
              <span>Alta Kit Digital</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;