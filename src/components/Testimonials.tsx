import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María González',
    location: 'San Salvador',
    rating: 5,
    text: '¡Una experiencia inolvidable! El tour por la Ruta de las Flores superó todas mis expectativas. Los guías son muy profesionales.',
  },
  {
    name: 'Carlos Martínez',
    location: 'Santa Ana',
    rating: 5,
    text: 'Excelente servicio. Conocí lugares que no sabía que existían en nuestro país. Totalmente recomendado para toda la familia.',
  },
  {
    name: 'Ana Ramírez',
    location: 'La Libertad',
    rating: 5,
    text: 'La aventura en el Volcán de Izalco fue increíble. Paisajes hermosos y una organización impecable. ¡Volveré pronto!',
  },
]

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState<Array<number>>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de viajeros que han explorado El Salvador con
            nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : index % 2 === 0
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
