import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: '01',
    title: 'Bounce Creative Agency',
    url: 'https://www.bounce.com.au',
    type: 'Creative Agency',
    desc: 'Full Elementor build for an Australian creative agency. GSAP-powered scroll animations, video hero, and a project showcase grid — pixel-precise from Figma to launch.',
    tags: ['WordPress', 'Elementor', 'GSAP', 'Figma → Code'],
    animation: true,
  },
  {
    num: '02',
    title: 'Communal Group',
    url: 'https://cmnl.com.au',
    type: 'Multi-Brand Platform',
    desc: 'Community and multi-venue platform for an Australian group. Complex multi-section architecture with GSAP transitions, custom theme development, and brand-consistent UI across six sub-brands.',
    tags: ['WordPress', 'Custom Theme', 'GSAP', 'Multi-brand'],
    animation: true,
  },
  {
    num: '03',
    title: 'Bill Leider',
    url: 'https://billleider.com',
    type: 'Author & Consultant',
    desc: 'Personal brand site for a Fortune 500 advisor and author. Elementor build with a custom interactive quiz, video integration, and a polished professional layout targeting executive audiences.',
    tags: ['WordPress', 'Elementor', 'Interactive UI', 'Figma → Code'],
    animation: false,
  },
]

export default function Work() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelector('.section-label'),
      { y: 16, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.5,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    )

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          delay: i * 0.12,
          scrollTrigger: { trigger: card, start: 'top 85%' },
        }
      )
    })
  }, [])

  return (
    <section id="work" ref={sectionRef} className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="mono text-[10px] text-subtle uppercase tracking-widest2 mb-16 section-label opacity-0">
        // selected work
      </div>

      <div className="flex flex-col gap-0">
        {projects.map((p, i) => (
          <a
            key={p.num}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (cardsRef.current[i] = el)}
            className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-6 py-8 sm:py-10 border-t border-border hover:border-secondary transition-colors duration-300 opacity-0"
          >
            <div className="flex-shrink-0 w-20">
              <span className="mono text-[12px] text-subtle">{p.num}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="min-w-0">
                  <span className="mono text-[10px] text-secondary uppercase tracking-widest2 block mb-2">{p.type}</span>
                  <h3 className="text-[20px] sm:text-[22px] font-light text-primary group-hover:text-white transition-colors duration-200">
                    {p.title}
                  </h3>
                </div>
                <span className="mono text-[12px] text-subtle mt-1 flex-shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                  visit ↗
                </span>
              </div>

              <p className="text-[14px] text-secondary font-light leading-relaxed mb-5 max-w-xl">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`mono text-[10px] border px-3 py-1.5 tracking-wide ${
                      tag === 'GSAP'
                        ? 'text-secondary border-secondary/50'
                        : 'text-subtle border-border'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
                {p.animation && (
                  <span className="mono text-[10px] text-subtle border border-border px-3 py-1.5 tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                    animated
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}

        <div className="border-t border-border" />
      </div>
    </section>
  )
}
