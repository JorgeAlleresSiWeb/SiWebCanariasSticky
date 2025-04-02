import { FaStar } from 'react-icons/fa'; // Necesitarás instalar react-icons

function Reviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      comment: "Han diseñado mi tienda online, en concreto Patricia. Y no puedo estar más satisfecha. Todo ha sido muy fluido, sencillo y profesional. Ha quedado mejor de lo que podía esperar. Tienen un trato cercano y resuelven todas tus dudas ayudándote en todo el proceso. Muchas gracias por todo!",
    },
    {
      id: 2,
      rating: 5,
      comment: "Trabajar con Liliana del equipo de Siweb ha sido un auténtico placer.  Ofrece un servicio y una asistencia de primera categoría. Se tomó el tiempo necesario para comprender nuestras necesidades  y desarrollaron una solución a medida que superó nuestras expectativas.  Una atención excepcional.",
    },
    {
      id: 3,
      rating: 5,
      comment: "Estoy encantada con la realización de mi página web ,gracias a Patricia Campelo que me guió muy bien y supo plasmar la idea qué yo tenía para la web de mi joyería, ha quedado elegante, práctica y duradera en el tiempo,Gracias Patricia‼️",
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Miles de opiniones satisfechas, ¿qué esperas para ser parte?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  {[...Array(review.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 ml-1" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 flex justify-end">
                  <img src="/google-reviews-logo.png" alt="Google" className='h-1/4 w-1/2'/>
                </span>
              </div>
              
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews; 