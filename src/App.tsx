import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
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
    </>
  )
}
