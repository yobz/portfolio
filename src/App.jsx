import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('resize', refresh)
    return () => window.removeEventListener('resize', refresh)
  }, [])

  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main className="max-w-[1200px] mx-auto">
        <Hero />
        <Stats />
        <Work />
        <About />
        <Contact />
      </main>
      <div className="max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </div>
  )
}
