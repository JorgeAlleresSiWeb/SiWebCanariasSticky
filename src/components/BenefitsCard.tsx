function BenefitsCard() {
  return (
    <div className="w-full bg-white mt-8 my-10">
      <div className="mx-auto p-8 shadow-sm pb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ¿Qué es el Bono Digital?
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        El Bono Digital es una subvención que te permite acceder a servicios esenciales para digitalizar tu negocio sin coste adicional y sin IVA. ¡Aprovecha la oportunidad y haz crecer tu negocio!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Beneficio 1 */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">Sin IVA</h3>
            <p className="text-gray-700">
            Todo lo que recibes es totalmente gratis gracias a la exención del IVA.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">Servicios incluidos</h3>
            <p className="text-gray-700">
            Creación de páginas web, equipos informáticos y gestión de redes sociales.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">Asesoria personalizada</h3>
            <p className="text-gray-700">
            Te ayudamos a gestionar todo el proceso para aprovechar al máximo el Bono Digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsCard 