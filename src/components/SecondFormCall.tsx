import { useState } from "react";

function SecondFormCall() {
  const [formPhone, setFormPhone] = useState({
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario 2 telefono enviado");
    console.log("Formulario: ", formPhone);
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormPhone({ ...formPhone, phone: e.target.value });
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Sección de título y urgencia */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ¡Los fondos son limitados!
              <span className="block mt-2">
                Solicita tu bono digital ahora y asegura tu subvención.
              </span>
            </h2>
            
            <p className="text-xl text-black/90">
              ¿Quieres más información sobre nuestros servicios? Déjanos tu número y te llamamos gratis.
            </p>
          </div>

          {/* Formulario */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg bg-gradient-to-br from-emerald-600 to-teal-500">
            <form className="space-y-4">
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-xl text-white mb-2"
                >
                  Número de teléfono
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-lg">+34</span>
                    <span className="text-gray-300 mx-3">|</span>
                  </div>
                  <input
                    id="phone"
                    type="number"
                    value={formPhone.phone}
                    onChange={handleChangePhone}
                    name="phone"
                    className="bg-white w-full pl-25 pr-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-lg text-black placeholder:text-gray-400"
                    placeholder="Número de teléfono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-emerald-700 py-4 px-6 rounded-lg hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-bold text-lg"
                onClick={handleSubmit}
              >
                Enviar Consulta
              </button>
            </form>

            {/* Nota importante */}
            <p className="mt-6 text-sm text-white/80 italic">
              Un asesor te llamará para ayudarte a entender cómo aprovechar el Bono Digital y los servicios gratuitos disponibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondFormCall; 