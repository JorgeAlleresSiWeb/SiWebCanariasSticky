import { FaStar } from 'react-icons/fa'; // Necesitarás instalar react-icons

function Reviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      comment: "Deseñaron a miña tenda en liña, concretamente Patricia. E non podería estar máis satisfeito. Todo foi moi fluído, sinxelo e profesional. Resultou mellor do que podía esperar. Teñen un trato próximo e resolven todas as túas dúbidas, axudándote durante todo o proceso. Moitas grazas por todo!",
    },
    {
      id: 2,
      rating: 5,
      comment: "Traballar con Liliana do equipo de Siweb foi un auténtico pracer.  Ofrece un servizo e asistencia de primeiro nivel. Tomáronse o tempo para comprender as nosas necesidades e desenvolveron unha solución a medida que superou as nosas expectativas.  Atención excepcional.",
    },
    {
      id: 3,
      rating: 5,
      comment: "Estou encantada coa creación da miña web, grazas a Patricia Campelo que me guiou moi ben e soubo plasmar a idea que tiña para a miña web de xoias, resultou elegante, práctica e duradeira no tempo, Grazas Patricia!!",
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