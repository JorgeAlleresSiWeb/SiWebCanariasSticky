import './App.css'
import Transition from './components/Transition'
import Nav from './components/Nav'
import Header from './components/Header'
import FirstFormCall from './components/FirstFormCall'
import BenefitsCard from './components/BenefitsCard'
import ServicesGrid from './components/ServicesGrid'
import SecondFormCall from './components/SecondFormCall'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import News from './components/News'
import Footer from './components/Footer'
import ExitPopup from './components/ExitPopup'

function App() {

  return (
    <div>
      <Nav />
      <div className="pt-16">
        <Header />
        <main>
          <Transition type="fade-up" duration={1000} delay={50}>
            <FirstFormCall />
          </Transition>
          <Transition type="fade-in" duration={1100} delay={100}>
            <BenefitsCard />
          </Transition>
          <Transition type="zoom-in" duration={1000} delay={150}>
            <ServicesGrid />
          </Transition>
          <Transition type="slide-in" duration={1100} delay={200}>
            <SecondFormCall />
          </Transition>
          <Transition type="fade-up" duration={1000} delay={250}>
            <Reviews />
          </Transition>
          <Transition type="zoom-in" duration={1100} delay={300}>
            <ContactForm />
          </Transition>
          <Transition type="fade-in" duration={1200} delay={350}>
            <News />
          </Transition>
          <Footer />
        </main>
      </div>
      <ExitPopup />
    </div>
  )
}

export default App
