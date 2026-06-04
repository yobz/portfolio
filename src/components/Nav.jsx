import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Nav() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
    )

    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = ['work', 'about', 'contact']

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 sm:px-8 lg:px-12 py-5 sm:py-7 pt-[max(1.25rem,env(safe-area-inset-top))] transition-all duration-500 ${
          scrolled || menuOpen ? 'bg-bg/90 backdrop-blur-sm border-b border-border' : ''
        }`}
      >
        <span className="text-sm sm:text-base text-white tracking-widest font-normal">
          cm<span className="text-subtle">.</span>dev
        </span>

        <ul className="hidden md:flex gap-8 lg:gap-10 list-none">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="label text-sm text-secondary hover:text-primary transition-colors duration-200 relative group py-2"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-11 h-11 -mr-2"
        >
          <span className={`block h-px w-5 bg-primary transition-transform duration-300 ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-primary transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-primary transition-transform duration-300 ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-bg/95 backdrop-blur-sm pt-24 px-5 pb-8">
          <ul className="flex flex-col gap-2 list-none">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={closeMenu}
                  className="block label text-base text-secondary py-4 border-b border-border hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
