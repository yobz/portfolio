import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { label: 'WordPress', active: true },
  { label: 'Elementor', active: true },
  { label: 'GSAP', active: true },
  { label: 'React', active: true },
  { label: 'Figma → Code', active: true },
  { label: 'SASS / CSS', active: true },
  { label: 'JavaScript', active: true },
  { label: 'PHP', active: false },
  { label: 'Tailwind', active: false },
  { label: 'Git / CI-CD', active: false },
  { label: 'Claude / AI', active: false },
  { label: 'Divi', active: false },
  { label: 'Breakdance', active: false },
  { label: 'Shopify', active: false },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.reveal')
    els.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      )
    })
  }, [])

  return (
    <section id="about" ref={sectionRef} className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-border">
      <div className="mono text-[10px] text-subtle uppercase tracking-widest2 mb-16 reveal opacity-0">
        // about
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="text-[15px] text-secondary font-light leading-relaxed mb-6 reveal opacity-0">
            Based in Bacolod, Philippines. 10+ years building responsive, performant websites
            for digital agencies and global clients — with a focus on faithful design execution
            and front-end craft.
          </p>
          <p className="text-[15px] text-secondary font-light leading-relaxed mb-6 reveal opacity-0">
            I specialise in translating Figma mockups into pixel-precise Elementor and custom
            WordPress builds. My workflow integrates GSAP for animations that feel intentional —
            not decorative.
          </p>
          <p className="text-[15px] text-secondary font-light leading-relaxed reveal opacity-0">
            I've worked directly with Australian founders and agencies, and I bring AI-assisted
            tooling into my daily workflow to ship faster without cutting corners.
          </p>
        </div>

        <div>
          <div className="mono text-[10px] text-subtle uppercase tracking-widest2 mb-6 reveal opacity-0">
            // core stack
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s.label}
                className={`reveal mono text-[12px] border px-3 py-1.5 tracking-wide opacity-0 ${
                  s.active
                    ? 'text-primary border-border'
                    : 'text-subtle border-border/50'
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
