import { Menu, Mountain, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#destinos', label: 'Destinos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    setIsOpen(false)

    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center space-x-2 text-white hover:text-accent transition-colors"
            >
              <Mountain className="w-8 h-8" />
              <span className="text-2xl font-bold">Puebleando SV</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white hover:text-accent transition-colors font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-white hover:text-accent transition-colors"
              aria-label="Abrir menú"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-primary shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="flex items-center space-x-2 text-white">
            <Mountain className="w-6 h-6" />
            <span className="text-xl font-bold">Puebleando SV</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:text-accent transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-3 px-4 text-white hover:bg-white/10 hover:text-accent rounded-lg transition-all mb-2 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20">
          <p className="text-white/60 text-sm text-center">
            Hecho con amor en El Salvador 🇸🇻
          </p>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
