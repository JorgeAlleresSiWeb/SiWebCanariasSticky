import { useState } from "react";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    cif: "",
    location: "",
    contact: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    //TODO: Enviar formulario a la API
    e.preventDefault();
    console.log("Formulario contacto enviado");
    console.log("Formulario: ", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact-form" className="py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Columna de texto */}
          <div className="space-y-6 text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Quieres que solicitemos hoy tu Bono Digital?
            </h2>
            <p className="text-xl text-gray-600">
              Déjanos tus datos y te contactamos sin compromiso.
            </p>
          </div>

          {/* Columna del formulario */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-10 shadow-lg bg-gradient-to-br from-emerald-600 to-teal-500 w-full max-w-4xl">
            <form className="space-y-6 sm:space-y-8">
              {/* Fila 1: Nombre y CIF */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-xl text-white mb-2">
                    Nombre y Apellidos
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="name"
                    onChange={handleChange}
                    className="bg-white w-full px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-lg text-black placeholder:text-gray-400"
                    placeholder="Nombre y apellidos"
                  />
                </div>
                <div>
                  <label htmlFor="cif" className="block text-xl text-white mb-2">
                    CIF
                  </label>
                  <input
                    type="text"
                    id="cif"
                    name="cif"
                    onChange={handleChange}
                    className="bg-white w-full px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-lg text-black placeholder:text-gray-400"
                    placeholder="Introduce el CIF"
                  />
                </div>
              </div>

              {/* Fila 2: Localización y Persona de contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="localizacion" className="block text-xl text-white mb-2">
                    Localización
                  </label>
                  <select
                    id="localizacion"
                    name="location"
                    onChange={handleChange}
                    defaultValue={""}
                    className="bg-white w-full px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-lg text-black placeholder:text-gray-400"
                  >
                    <option 
                      value=""
                      disabled
                      className="text-gray-400">Selecciona una opción</option>
                    <option 
                      value="peninsula"
                      className="text-black">Península</option>
                    <option 
                      value="canarias"
                      className="text-black">Islas Canarias</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contacto" className="block text-xl text-white mb-2">
                    Persona de contacto
                  </label>
                  <input
                    type="text"
                    id="contacto"
                    name="contact"
                    onChange={handleChange}
                    className="bg-white w-full px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-lg text-black placeholder:text-gray-400"
                    placeholder="Introduce la persona de contacto"
                  />
                </div>
              </div>

              {/* Fila 3: Teléfono y Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block text-xl text-white mb-2">
                    Teléfono móvil
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 sm:pl-8 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-base sm:text-lg">+34</span>
                      <span className="text-gray-300 mx-2 sm:mx-3">|</span>
                    </div>
                    <input
                      type="tel"
                      id="telefono"
                      name="phone"
                      onChange={handleChange}
                      className="bg-white w-full pl-20 sm:pl-25 pr-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-base sm:text-lg text-black placeholder:text-gray-400"
                      placeholder="Introduce tu número de teléfono"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xl text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="bg-white w-full px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-lg text-black placeholder:text-gray-400"
                    placeholder="Introduce tu email"
                  />
                </div>
              </div>

              {/* Botón y nota */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-white text-emerald-700 py-3 sm:py-4 mt-4 px-6 rounded-lg hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-bold text-lg sm:text-xl"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm; 