import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/main-bg.PNG"
          alt="El Salvador"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>

      {/* Stickers decorativos en el fondo */}
      <img
        src="/images/Sticker.El-Salvador.png"
        alt="El Salvador"
        className="absolute top-16 right-16 w-40 opacity-70 z-10 transform rotate-12"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.4))' }}
      />
      <img
        src="/images/Sticker.Alsuave.png"
        alt="Alsuave"
        className="absolute bottom-16 left-16 w-36 opacity-65 z-10 transform -rotate-8"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.4))' }}
      />
      <img
        src="/images/Sticker.Que.chivo.png"
        alt="Que Chivo"
        className="absolute top-1/3 left-1/4 w-32 opacity-60 z-10 transform rotate-15"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.4))' }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            <span>Bienvenidos a </span>
            <br />
            <span>La Bandita </span>
            <span>Puebleadora</span>
          </h1>
          <p className="text-lg font-bold md:text-xl text-accent max-w-2xl mx-auto mb-8 drop-shadow-2xl">
            Comunidad de aventureros y trepacerros de corazón.
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow">
            Montañas, pueblos coloniales, rutas inolvidables y experiencias
            únicas te esperan en cada rincón de El Salvador
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#destinos"
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explorar Destinos
            </a>
            <a
              href="#contacto"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              Contáctanos
            </a>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-accent" />
        </div>
      </div>
    </section>
  )
}
