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
