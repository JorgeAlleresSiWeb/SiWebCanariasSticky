import { useState, useEffect, useRef } from 'react';

function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState('');
  const hasAttemptedExit = useRef(false);

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

  // Función para cerrar el popup
  const closePopup = () => {
    setShowPopup(false);
    setShowForm(false);
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
    <div className="fixed bottom-0 right-0 z-50 w-full sm:bottom-4 sm:right-4 sm:w-auto sm:max-w-md">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-t-lg sm:rounded-lg p-4 sm:p-6 shadow-xl text-white relative w-full sm:w-96">
        <button 
          onClick={closePopup}
          className="absolute top-2 right-2 text-white hover:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {!showForm ? (
          <>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pr-6">¿Te gustaría recibir más información sobre el Bono Digital?</h2>
            <p className="mb-2 sm:mb-3 text-white/90 text-sm sm:text-base">
              Te ayudamos a conseguir tu Bono Digital SIN IVA, con servicios totalmente gratuitos para tu negocio.
            </p>
            <p className="mb-4 sm:mb-6 text-white/90 text-sm sm:text-base">
              Si quieres más información, podemos llamarte e informarte sin compromiso.
            </p>
            
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <button 
                onClick={showCallForm}
                className="bg-white text-emerald-700 hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-medium py-2 px-4 rounded"
              >
                ¡Te llamamos Gratis!
              </button>
              <button 
                onClick={closePopup}
                className="bg-transparent border border-white hover:bg-white/20 transform hover:-translate-y-1 duration-300 ease-in-out text-white font-medium py-2 px-4 rounded"
              >
                No, gracias
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pr-6">Introduce tu teléfono</h2>
            <p className="mb-3 sm:mb-4 text-white/90 text-sm sm:text-base">Te llamaremos lo antes posible sin compromiso</p>
            
            <div className="mb-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Tu número de teléfono"
                className="w-full p-2 border border-white/30 bg-white/20 text-white rounded focus:outline-none focus:ring-2 focus:ring-white placeholder-white/50"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-emerald-700 hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-medium py-2 px-4 rounded"
            >
              Te Llamamos Gratis
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ExitPopup;
