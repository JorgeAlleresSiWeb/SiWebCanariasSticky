function Nav() {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Nombre de la empresa - centrado en móvil, alineado a la izquierda en desktop */}
          <div className="flex items-center justify-center w-full md:justify-start md:pl-16">
            <span className="text-2xl font-bold text-emerald-600">
              <img src="/Logo.png" alt="logo" className="h-8 sm:h-10" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;