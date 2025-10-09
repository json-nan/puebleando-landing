import { useState, useEffect, useRef } from 'react'
import { MapPin, Mountain, Church, Route } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Volcán de Izalco',
    category: 'Montañas',
    description: 'El faro del Pacífico, una maravilla natural que te dejará sin aliento',
    icon: Mountain,
    image: '/images/Sticker.Izalco.png',
  },
  {
    id: 2,
    name: 'San Salvador',
    category: 'Ciudad',
    description: 'Capital vibrante llena de historia, cultura y gastronomía',
    icon: Church,
    image: '/images/Sticker.San.Salvador.png',
  },
  {
    id: 3,
    name: 'Ruta de las Flores',
    category: 'Rutas',
    description: 'Pueblos pintorescos, cafetales y artesanías tradicionales',
    icon: Route,
    image: '/images/Sticker.El.Talapo.png',
  },
  {
    id: 4,
    name: 'Pueblos Coloniales',
    category: 'Pueblos',
    description: 'Arquitectura colonial, tradiciones y la hospitalidad salvadoreña',
    icon: Church,
    image: '/images/Sticker.Que.chivo.png',
  },
]

export default function Gallery() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="destinos" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Sticker decorativo */}
      <img
        src="/images/Sticker.Alsuave.png"
        alt="Decoration"
        className="absolute top-10 right-5 w-24 opacity-10 animate-[float_8s_ease-in-out_infinite]"
      />

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
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative h-48 bg-gradient-to-br from-secondary to-primary flex items-center justify-center overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-primary">{dest.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Icon className="w-5 h-5 text-secondary mr-2" />
                    <h3 className="text-xl font-bold text-primary">{dest.name}</h3>
                  </div>
                  <p className="text-gray-600">{dest.description}</p>
                  <button className="mt-4 text-secondary font-semibold hover:text-primary transition-colors flex items-center group-hover:translate-x-2 transition-transform duration-300">
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
