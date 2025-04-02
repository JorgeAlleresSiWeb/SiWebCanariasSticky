// components/FormCall.js
import { useState } from "react";

function FirstFormCall() {
  const [formPhone, setFormPhone] = useState({
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      //TODO: Enviar formulario a la API
      console.log("Formulario 1 telefono enviado");
      console.log("Formulario: ", formPhone);
      
      // Simulación de envío exitoso
      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
        // Resetear después de 3 segundos
        setTimeout(() => {
          setIsSuccess(false);
          setFormPhone({ phone: "" });
        }, 3000);
      }, 1000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setIsSubmitting(false);
    }
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormPhone({ ...formPhone, phone: e.target.value });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Separador decorativo */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-20 h-1 bg-emerald-300"></div>
          <div className="mx-4 text-emerald-600 font-medium">CONTACTO RÁPIDO</div>
          <div className="w-20 h-1 bg-emerald-300"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-stretch">
          {/* Columna izquierda con el mensaje - ocupa 3/5 en desktop */}
          <div className="md:col-span-3 relative overflow-hidden rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 opacity-95"></div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-400 opacity-20 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-400 opacity-20 rounded-full translate-x-20 translate-y-20"></div>
            
            {/* Iconos decorativos */}
            <div className="absolute top-10 right-10 text-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            
            <div className="relative p-8 sm:p-10 md:p-12 text-white z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">Kit Digital Canarias</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                ¿Prefieres que te llamemos nosotros?
              </h2>
              <div className="w-16 h-1 bg-emerald-300 mb-6"></div>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Déjanos tu número y te contactamos <span className="font-bold text-white">gratis</span> para explicarte cómo aprovechar el Bono Digital sin IVA.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>Sin compromiso</div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>Asesoramiento personalizado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha con el formulario - ocupa 2/5 en desktop */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col justify-center transform transition-all hover:shadow-2xl duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Te llamamos sin coste
            </h3>
            
            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-emerald-700 mb-2">¡Perfecto!</h4>
                <p className="text-emerald-700">Te llamaremos lo antes posible</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    ¿A qué número te llamamos?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-500">+34</span>
                      <span className="text-gray-300 mx-2">|</span>
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="w-full pl-20 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-800 bg-gray-50"
                      placeholder="Número de teléfono"
                      value={formPhone.phone}
                      onChange={handleChangePhone}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-lg shadow-lg transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-wait' : 'hover:shadow-xl hover:translate-y-[-2px]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Te Llamamos Gratis</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstFormCall;
