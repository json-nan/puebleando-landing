import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div id="inicio">
      <Hero />
      <About />
      <Gallery />
      <div id="servicios">
        <Services />
      </div>
      <div id="testimonios">
        <Testimonials />
      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}
