import { Award, Heart, Map, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAnimating) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(start + (end - start) * easeOutQuart)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isAnimating, end, duration, start])

  const startAnimation = () => {
    setIsAnimating(true)
  }

  return { count, startAnimation }
}

const stats = [
  {
    icon: Users,
    number: 300,
    label: 'Viajeros Felices',
    trailing: '+',
  },
  {
    icon: Map,
    number: 30,
    label: 'Destinos Explorados',
    trailing: '+',
  },
  {
    icon: Award,
    number: 5,
    label: 'Años de Experiencia',
    trailing: '+',
  },
  {
    icon: Heart,
    number: 100,
    label: 'Satisfacción',
    trailing: '%',
  },
]

// Component for individual animated stat
const AnimatedStat = ({ stat, index, isVisible }: { 
  stat: { icon: any, number: number, label: string, trailing: string }, 
  index: number, 
  isVisible: boolean 
}) => {
  const { count, startAnimation } = useCountUp(stat.number, 2000)
  const statRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible) {
      // Delay the animation start for each stat
      const timer = setTimeout(() => {
        startAnimation()
      }, 400 + index * 200) // Stagger the animations
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, startAnimation, index])

  const Icon = stat.icon
  return (
    <div
      ref={statRef}
      className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${400 + index * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <p className="text-3xl font-bold text-primary mb-2">
        <span>{count}</span>
        {stat.trailing}
      </p>
      <p className="text-sm text-gray-600 font-semibold">
        {stat.label}
      </p>
    </div>
  )
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
      id="sobre-nosotros"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative "
    >
      <img
        src="/images/Sticker.Que.chivo.png"
        alt="Que Chivo"
        className="absolute -top-24 left-20 size-60 opacity-90 z-10 transform rotate-12"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.4))' }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre Nosotros
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          {/* Contenido principal */}
          <div
            className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-secondary/10 rounded-full p-4">
                <Heart className="w-12 h-12 text-secondary" />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center md:text-left">
              <span className="font-bold text-primary">Puebleando SV</span>{' '}
              nació del amor profundo por El Salvador y el deseo de compartir
              sus tesoros escondidos con el mundo. Somos una agencia de viajes
              salvadoreña dedicada a crear experiencias turísticas auténticas
              que conectan a los viajeros con la verdadera esencia de nuestro
              país.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center md:text-left">
              Desde majestuosos volcanes hasta pintorescos pueblos coloniales,
              desde rutas culturales hasta aventuras en la naturaleza, nos
              especializamos en mostrar la diversidad y belleza de El Salvador
              de una manera única y memorable.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
              Nuestro equipo está compuesto por guías expertos, apasionados por
              la historia, la cultura y las tradiciones salvadoreñas. Nos
              comprometemos a ofrecer tours personalizados, seguros y de alta
              calidad que no solo muestren los destinos, sino que cuenten las
              historias que los hacen especiales.
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedStat 
                key={index} 
                stat={stat} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>

          {/* Misión */}
          <div
            className={`mt-12 text-center transition-all duration-700 delay-700 relative ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-10 shadow-xl">
              {/* Sticker hexagonal amarillo en la esquina inferior izquierda */}
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                Nuestra Misión
              </h3>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                Promover el turismo sostenible en El Salvador, creando
                experiencias inolvidables que generen un impacto positivo en las
                comunidades locales y preserven nuestro patrimonio natural y
                cultural para las futuras generaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
