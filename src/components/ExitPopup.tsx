import { useState, useEffect, useRef } from 'react';

function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState('');
  const hasAttemptedExit = useRef(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Función para mostrar el popup después de cierto tiempo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 segundos de retraso antes de mostrar el popup

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, []);

  // Detectar intento de salida de la página
  useEffect(() => {
    // Rastrea la posición del mouse
    const handleMouseMove = (e: MouseEvent) => {
      // Si el cursor está cerca del borde superior (a 5px o menos)
      if (e.clientY <= 5 && !hasAttemptedExit.current) {
        hasAttemptedExit.current = true;
        setShowPopup(true);
      }
    };

    // Detectar cuando el mouse sale completamente
    const handleMouseLeave = (e: MouseEvent) => {
      // Comprobar si realmente ha salido por la parte superior
      if (e.clientY < 0 && e.relatedTarget === null) {
        setShowPopup(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Efecto para animar la entrada del popup
  useEffect(() => {
    if (showPopup && popupRef.current) {
      popupRef.current.style.opacity = '0';
      popupRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        if (popupRef.current) {
          popupRef.current.style.opacity = '1';
          popupRef.current.style.transform = 'translateY(0)';
        }
      }, 50);
    }
  }, [showPopup]);

  // Función para cerrar el popup
  const closePopup = () => {
    console.log("Cerrando popup"); // Log para depuración
    
    try {
      if (popupRef.current) {
        popupRef.current.style.opacity = '0';
        popupRef.current.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          setShowPopup(false);
          setShowForm(false);
        }, 300);
      } else {
        // Si no hay referencia, cerramos directamente
        setShowPopup(false);
        setShowForm(false);
      }
    } catch (error) {
      console.error("Error al cerrar el popup:", error);
      // En caso de error, forzamos el cierre
      setShowPopup(false);
      setShowForm(false);
    }
  };

  // Manejador específico para el botón X
  const handleCloseButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir que el click se propague
    closePopup();
  };

  // Función para mostrar el formulario
  const showCallForm = () => {
    setShowForm(true);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Teléfono para llamar:', phone);
    // Aquí iría la lógica para procesar el número de teléfono
    closePopup();
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 m-4 sm:m-6 w-full max-w-md sm:max-w-lg">
      <div 
        ref={popupRef}
        className="relative w-full overflow-hidden backdrop-blur-sm bg-white/10 rounded-2xl shadow-2xl" 
        style={{ 
          transition: 'all 0.3s ease-in-out',
          backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(236, 253, 245, 0.15) 10%, transparent 20%), radial-gradient(circle at 10% 90%, rgba(236, 253, 245, 0.1) 5%, transparent 15%)',
          backgroundSize: '50px 50px, 60px 60px'
        }}
      >
        {/* Borde decorativo superior */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600"></div>
        
        {/* Decoración en las esquinas */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-transparent rounded-br-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-teal-500 to-transparent rounded-tl-3xl opacity-20"></div>
        
        <div className="bg-gradient-to-br from-emerald-600/90 to-teal-700/90 p-5 sm:p-8 text-white">
          {/* Botón de cierre mejorado */}
          <button 
            onClick={handleCloseButtonClick}
            className="absolute top-3 right-3 z-30 text-white hover:text-white transform hover:rotate-90 transition-all duration-300 p-2 rounded-full hover:bg-black/20"
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {!showForm ? (
            <>
              {/* Icono decorativo - con pointer-events-none para evitar interferencias */}
              <div className="absolute -right-6 -top-6 opacity-10 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="mb-6 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-2">Ayuda Bono Kit Digital</span>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pr-6">¿Te gustaría recibir más información?</h2>
                <div className="w-16 h-1 bg-emerald-300 mb-4"></div>
                <p className="mb-2 sm:mb-3 text-white/90 text-sm sm:text-base">
                  Te ayudamos a conseguir tu Bono Digital <span className="font-bold text-emerald-300">SIN IVA</span>, con servicios totalmente gratuitos para tu negocio.
                </p>
                <p className="mb-5 sm:mb-7 text-white/90 text-sm sm:text-base">
                  Podemos llamarte e informarte sin compromiso.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <button 
                  onClick={showCallForm}
                  className="flex-1 bg-white group text-emerald-700 font-medium py-3 px-4 rounded-lg shadow-lg flex items-center justify-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>¡Te llamamos Gratis!</span>
                </button>
                <button 
                  onClick={closePopup}
                  className="flex-1 bg-transparent border border-white/30 text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  No, gracias
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pr-6">¿A qué número te llamamos?</h2>
              <div className="w-16 h-1 bg-emerald-300 mb-4"></div>
              <p className="mb-5 text-white/90 text-sm sm:text-base">Te llamaremos lo antes posible sin compromiso</p>
              
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Tu número de teléfono"
                  className="w-full pl-10 p-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent placeholder-white/50 transition-all duration-300"
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-emerald-700 font-medium py-3 px-4 rounded-lg shadow-lg flex items-center justify-center transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
              >
                Te Llamamos Gratis
              </button>
              
              <button 
                type="button"
                onClick={() => setShowForm(false)}
                className="mt-3 w-full text-center text-white/70 hover:text-white text-sm transition-colors duration-300"
              >
                ← Volver atrás
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
