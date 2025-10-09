import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Stickers flotantes */}
      <img
        src="/images/Sticker.El-Salvador.png"
        alt="El Salvador"
        className="absolute top-20 right-10 w-32 md:w-40 opacity-20 animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: '0s' }}
      />
      <img
        src="/images/Sticker.Alsuave.png"
        alt="Alsuave"
        className="absolute bottom-20 left-10 w-28 md:w-36 opacity-20 animate-[float_7s_ease-in-out_infinite]"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Descubre El Salvador
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-4 font-semibold drop-shadow-md">
            Puebleando por las Maravillas de Nuestro País
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow">
            Montañas, pueblos coloniales, rutas inolvidables y experiencias únicas
            te esperan en cada rincón de El Salvador
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
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-accent" />
        </div>
      </div>
    </section>
  )
}
