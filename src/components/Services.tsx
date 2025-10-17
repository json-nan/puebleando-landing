import { Camera, Map, Mountain, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: Mountain,
    title: 'Aventuras en Montañas',
    description:
      'Senderismo, escalada y tours guiados por los volcanes y montañas más impresionantes',
  },
  {
    icon: Map,
    title: 'Rutas Culturales',
    description:
      'Recorridos por pueblos coloniales, museos y sitios históricos',
  },
  {
    icon: Users,
    title: 'Tours Grupales',
    description:
      'Experiencias compartidas con grupos pequeños y guías expertos',
  },
  {
    icon: Camera,
    title: 'Tours Fotográficos',
    description:
      'Captura los mejores momentos en los lugares más pintorescos del país',
  },
]

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<Array<number>>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 150)
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
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios Personalizados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiencias diseñadas para que descubras lo mejor de El Salvador
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative ${
                  visibleItems.includes(index)
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
              >
                {/* Stickers pegados a las esquinas de las tarjetas */}
                {index === 0 && (
                  <img
                    src="/images/Sticker.El-Salvador.png"
                    alt="El Salvador"
                    className="absolute top-2 right-2 w-24 opacity-85 transform rotate-12 z-30"
                    style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
                  />
                )}
                {index === 1 && (
                  <img
                    src="/images/Sticker.Alsuave.png"
                    alt="Alsuave"
                    className="absolute top-2 left-2 w-24 opacity-80 transform -rotate-8 z-30"
                    style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
                  />
                )}
                {index === 2 && (
                  <img
                    src="/images/Sticker.El.Talapo.png"
                    alt="El Talapo"
                    className="absolute bottom-2 right-2 w-24 opacity-85 transform rotate-6 z-30"
                    style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
                  />
                )}
                {index === 3 && (
                  <img
                    src="/images/Sticker.Que.chivo.png"
                    alt="Que Chivo"
                    className="absolute bottom-2 left-2 w-24 opacity-80 transform -rotate-6 z-30"
                    style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
                  />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
