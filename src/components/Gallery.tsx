import { Church, MapPin, Mountain, Route } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const destinations = [
  {
    id: 1,
    name: 'Volcanes & cerros',

    description:
      'El faro del Pacífico, una maravilla natural que te dejará sin aliento',
    icon: Mountain,
    image: '/images/gallery-comasagua.jpg',
  },
  {
    id: 2,
    name: 'Playas & lagos',
    description: 'Capital vibrante llena de historia, cultura y gastronomía',
    icon: Church,
    image: '/images/gallery-beaches.jpg',
  },
  {
    id: 3,
    name: 'Ruta de las Flores',

    description: 'Pueblos pintorescos, cafetales y artesanías tradicionales',
    icon: Route,
    image: '/images/gallery-routes.jpg',
  },
  {
    id: 4,
    name: 'Pueblos Vivos',

    description:
      'Arquitectura colonial, tradiciones y la hospitalidad salvadoreña',
    icon: Church,
    image: '/images/gallery-towns.jpg',
  },
]

export default function Gallery() {
  const [visibleCards, setVisibleCards] = useState<Array<number>>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            destinations.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="destinos"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Destinos Turísticos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora los lugares más hermosos y emblemáticos de El Salvador
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => {
            const Icon = dest.icon
            return (
              <div
                key={dest.id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer relative ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative h-48 bg-gradient-to-br from-secondary to-primary flex items-center justify-center overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="object-fill group-hover:scale-110 transition-transform duration-500 w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Icon className="w-5 h-5 text-secondary mr-2" />
                    <h3 className="text-xl font-bold text-primary">
                      {dest.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{dest.description}</p>
                  <button className="mt-4 text-secondary font-semibold hover:text-primary flex items-center group-hover:translate-x-2 transition-all duration-300">
                    Ver más <MapPin className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
