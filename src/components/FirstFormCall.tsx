// components/FormCall.js
import { useState } from "react";

function FirstFormCall() {
  const [formPhone, setFormPhone] = useState({
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    //TODO: Enviar formulario a la API
    e.preventDefault();
    console.log("Formulario 1 telefono enviado");
    console.log("Formulario: ", formPhone);
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormPhone({ ...formPhone, phone: e.target.value });
  };

  return (
    <div className="bg-white shadow-sm mt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Columna izquierda con el mensaje */}
          <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-500 text-white rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Prefieres que te llamemos?
            </h2>
            <p className="text-lg md:text-xl">
            ¿Prefieres que te llamemos? Déjanos tu número y te contactamos gratis para explicarte cómo aprovechar el Bono Digital.
            </p>
          </div>

          {/* Columna derecha con el formulario */}
          <div className="p-8">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xl font-medium text-gray-700 mb-2"
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
                    name="phone"
                    className="w-full pl-25 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                    placeholder="Número de teléfono"
                    value={formPhone.phone}
                    onChange={handleChangePhone}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-br from-emerald-600 to-teal-500 text-white py-3 px-6 rounded-md hover:opacity-95 transform hover:scale-105 duration-300 ease-in-out text-xl font-medium"
                onClick={handleSubmit}
              >
                Te Llamamos Gratis
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstFormCall;
