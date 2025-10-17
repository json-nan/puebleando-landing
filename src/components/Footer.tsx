import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Puebleando SV
            </h3>
            <p className="text-white/80 mb-4">
              Tu agencia de viajes de confianza para explorar las maravillas de
              El Salvador. Descubre montañas, pueblos coloniales, rutas
              culturales y experiencias únicas.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@puebleandosv.com"
                className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre-nosotros"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#destinos"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Destinos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                +503 1234-5678
              </li>
              <li className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                puebleandotripssv@gmail.com
              </li>
              <li className="flex items-start text-white/80">
                <MapPin className="w-4 h-4 mr-2 text-accent mt-1" />
                San Salvador, El Salvador
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Puebleando SV. Todos los derechos
            reservados.
          </p>
          <p className="text-white/60 mt-2">Hecho con amor en El Salvador 🇸🇻</p>
        </div>
      </div>
    </footer>
  )
}
