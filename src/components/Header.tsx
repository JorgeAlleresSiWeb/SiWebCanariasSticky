function Header() {
  const handleClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <header className="bg-gradient-to-br from-emerald-600 to-teal-500 shadow-lg mt-0 mb-6">
      <div className="max-w-8xl mx-auto px-5 py-5 text-center shadow-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 p-2">
          ¡Transforma tu Negocio con el Bono Digital SIN IVA!
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 p-2">
          Todo Gratis para ti
        </h1>
        <p className="text-white/90 text-base mb-4 max-w-2xl mx-auto p-1">
          Gestionamos tu subvención del Kit Digital en Canarias. Cubrimos servicios clave como creación de página web, tienda online, redes sociales y un ordenador.
        </p>
        <button
          onClick={handleClick}
          className="bg-white text-emerald-700 py-2 px-5 rounded-lg hover:bg-emerald-50 transform hover:scale-105 duration-300 ease-in-out font-medium mb-2"
        >
          Alta Kit Digital
        </button>
      </div>
    </header>
  );
}

export default Header;