import { MapPin, Phone, Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setSubmitMessage('¡Gracias por contactarnos! Te responderemos pronto.')
      setIsSubmitting(false)
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })

      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 1500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden"
    >
      {/* Stickers decorativos */}
      <img
        src="/images/Sticker.San.Salvador.png"
        alt="Decoration"
        className="absolute top-20 left-10 w-32 opacity-10 animate-[float_8s_ease-in-out_infinite]"
      />
      <img
        src="/images/Sticker.Izalco.png"
        alt="Decoration"
        className="absolute bottom-20 right-10 w-32 opacity-10 animate-[float_9s_ease-in-out_infinite]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-accent max-w-2xl mx-auto font-semibold">
            ¿Listo para tu próxima aventura? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-accent mb-8">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Teléfono</p>
                    <p className="text-white/80">+503 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Ubicación</p>
                    <p className="text-white/80">San Salvador, El Salvador</p>
                    <p className="text-white/80">Centro América</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 mb-4">Horarios de atención:</p>
                <p className="text-white/80">
                  Lunes a Viernes: 8:00 AM - 6:00 PM
                </p>
                <p className="text-white/80">Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <div className="mb-6">
                <label
                  htmlFor="nombre"
                  className="block text-primary font-semibold mb-2"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="telefono"
                  className="block text-primary font-semibold mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                  placeholder="+503 1234-5678"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="mensaje"
                  className="block text-primary font-semibold mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-secondary focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu viaje ideal..."
                />
              </div>

              {submitMessage && (
                <div className="mb-4 p-4 bg-secondary/10 border-2 border-secondary rounded-lg">
                  <p className="text-secondary font-semibold">
                    {submitMessage}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Mensaje <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
