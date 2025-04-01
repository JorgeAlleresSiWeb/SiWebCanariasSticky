function News() {
  const news = [
    {
      id: 1,
      title: "Premio Capital 2024 al Mejor Proyecto de transformación digital",
      link: "https://capital.es/premios-capital-2024/siweb-premio-capital-2024-a-mejor-proyecto-de-transformacion-digital/102563/",
      image: "/PremioCapital.png",
      alt: "Premio Capital 2024 Siweb"
    },
    {
      id: 2,
      title: "Siweb, nuevo patrocinador oficial del RC Celta",
      link: "https://rccelta.es/club/actualidad/siweb-planificacion-integral-web-nuevo-patrocinador-oficial-del-rc-celta/",
      image: "/PatrocinadorCelta.png",
      alt: "Patrocinio RC Celta"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Novedades en Siweb
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((notice) => (
            <div 
              key={notice.id}
              className="group cursor-pointer"
              onClick={() => window.open(notice.link, '_blank')}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                {/* Imagen */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={notice.image}
                    alt={notice.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay con título */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <h3 className="text-white text-xl md:text-2xl font-semibold p-6">
                    {notice.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News; 