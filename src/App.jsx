import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Reality from './components/Reality.jsx'
import Rights from './components/Rights.jsx'
import Empowerment from './components/Empowerment.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-indigo px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Reality />
        <Rights />
        <Empowerment />
      </main>
      <Footer />
    </>
  )
}
