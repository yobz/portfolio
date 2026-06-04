import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.reveal')
    els.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      )
    })
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-border">
      <div className="label text-sm text-subtle mb-16 reveal opacity-0">
        // contact
      </div>

      <div className="max-w-xl">
        <h2 className="text-[clamp(28px,7vw,36px)] font-light text-primary leading-tight mb-4 reveal opacity-0">
          Let's build something<br />
          <span className="text-subtle">worth visiting.</span>
        </h2>

        <p className="text-base text-secondary font-light leading-relaxed mb-12 reveal opacity-0">
          Open to full-time opportunities and select freelance projects.
          Based in Bacolod — available for in-person work at WrkPod.
        </p>

        <div className="flex flex-col gap-4 reveal opacity-0">
          <a
            href="mailto:cs.miasco@gmail.com"
            className="group flex items-center justify-between gap-4 border border-border px-5 sm:px-6 py-4 min-h-[64px] hover:border-secondary transition-colors duration-200"
          >
            <div className="min-w-0">
              <div className="label text-sm text-subtle mb-1">Email</div>
              <div className="text-base text-primary font-light break-all">cs.miasco@gmail.com</div>
            </div>
            <span className="text-sm text-subtle shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
              ↗
            </span>
          </a>

          <a
            href="https://linkedin.com/in/clivemiasco"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border border-border px-5 sm:px-6 py-4 min-h-[64px] hover:border-secondary transition-colors duration-200"
          >
            <div className="min-w-0">
              <div className="label text-sm text-subtle mb-1">LinkedIn</div>
              <div className="text-base text-primary font-light break-all">linkedin.com/in/clivemiasco</div>
            </div>
            <span className="text-sm text-subtle shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
