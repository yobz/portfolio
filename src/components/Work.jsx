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
    desc: 'Personal brand site for a Fortune 500 advisor and author. LiveCanvas build with a custom interactive quiz, video integration, and a polished professional layout targeting executive audiences.',
    tags: ['WordPress', 'LiveCanvas', 'Interactive UI', 'Figma → Code'],
    animation: false,
  },
  {
    num: '04',
    title: 'Sculpt by J',
    url: 'https://sculptbyj.com/',
    type: 'Aesthetics & Wellness · UAE',
    desc: 'International launch for Australia\'s Sculpt by J — 50,000+ treatments of brand equity, now in Dubai. A LiveCanvas build shaped for luxury wellness: deep treatment menus, before-and-after storytelling, founder-led narratives, membership flows, and a content-rich blog — all structured so the clinic team can evolve pages without breaking the experience.',
    tags: ['WordPress', 'LiveCanvas', 'Treatment UX', 'Before/After', 'Booking Flows', 'UAE Launch'],
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
      <div className="label text-sm text-subtle mb-16 section-label opacity-0">
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
              <span className="text-sm text-subtle font-normal">{p.num}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="min-w-0">
                  <span className="label text-sm text-secondary block mb-2">{p.type}</span>
                  <h3 className="text-xl sm:text-2xl font-light text-primary group-hover:text-white transition-colors duration-200">
                    {p.title}
                  </h3>
                </div>
                <span className="text-sm text-subtle mt-1 flex-shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                  visit ↗
                </span>
              </div>

              <p className="text-base text-secondary font-light leading-relaxed mb-5 max-w-xl">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-sm border px-3 py-2 font-normal tracking-normal ${tag === 'GSAP' || tag === 'LiveCanvas'
                        ? 'text-secondary border-secondary/50'
                        : 'text-subtle border-border'
                      }`}
                  >
                    {tag}
                  </span>
                ))}
                {p.animation && (
                  <span className="text-sm text-subtle border border-border px-3 py-2 font-normal tracking-normal flex items-center gap-1.5">
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
