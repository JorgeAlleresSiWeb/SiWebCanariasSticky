import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-600 to-teal-500 text-white">
      {/* Sección principal */}
      <div className="max-w-8xl mx-auto px-4 pt-8">
        <p className="text-2xl md:text-3xl font-bold text-center mb-2">
          ¡No pierdas la oportunidad de transformar tu negocio!
        </p>
        <p className="text-xl text-center mb-4">
          Solicita tu Bono Digital hoy mismo y empieza a crecer.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white/20"></div>

      {/* Información de contacto y redes */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contacto */}
          <div className="flex flex-col md:flex-row items-center md:gap-6">
            <a href="mailto:info@siweb.es" className="text-white hover:text-white/80 transition-colors">
              info@siweb.es
            </a>
            <a href="tel:+34828670848" className="text-white hover:text-white/80 transition-colors">
              828 670 848
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/siweb.es/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="group">
              <FaFacebook size={24} className="text-white transition-all duration-300 group-hover:text-white/80 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
            </a>
            <a href="https://x.com/getsiweb" target="_blank" rel="noopener noreferrer" className="group">
              <FaXTwitter size={24} className="text-white transition-all duration-300 group-hover:text-white/80 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
            </a>
            <a href="https://www.instagram.com/siweb.es/?hl=es" target="_blank" rel="noopener noreferrer" className="group">
              <FaInstagram size={24} className="text-white transition-all duration-300 group-hover:text-white/80 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
            </a>
            <a href="https://es.linkedin.com/company/siweb-planificaci%C3%B3n-integral-web?trk=public_profile_topcard-current-company" target="_blank" rel="noopener noreferrer" className="group">
              <FaLinkedin size={24} className="text-white transition-all duration-300 group-hover:text-white/80 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 