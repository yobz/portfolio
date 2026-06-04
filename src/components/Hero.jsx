import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const eyebrowRef = useRef(null)
  const h1Ref = useRef(null)
  const taglineRef = useRef(null)
  const ctaRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    tl.fromTo(eyebrowRef.current,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
      .fromTo(h1Ref.current.children,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.12 },
        '-=0.3'
      )
      .fromTo(taglineRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(ctaRef.current.children,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1 },
        '-=0.3'
      )

    // Cursor blink
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'steps(1)',
    })
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div ref={eyebrowRef} className="flex items-start sm:items-center gap-3 mb-8 opacity-0">
        <span className="label text-sm sm:text-base text-secondary leading-relaxed">
          Frontend Developer &amp; WordPress Specialist
        </span>
      </div>

      <h1 ref={h1Ref} className="overflow-hidden">
        <div className="text-[clamp(40px,6vw,80px)] font-light leading-[1.05] tracking-tight text-primary opacity-0">
          Clive Miasco
        </div>
        <div className="text-[clamp(40px,6vw,80px)] font-medium leading-[1.05] tracking-tight text-white opacity-0">
          builds things
        </div>
        <div className="text-[clamp(40px,6vw,80px)] font-light leading-[1.05] tracking-tight text-secondary opacity-0 flex flex-wrap items-center gap-x-3 gap-y-1">
          that feel right.
          <span
            ref={cursorRef}
            className="inline-block w-[3px] bg-primary shrink-0"
            style={{ height: 'clamp(36px, 5.5vw, 92px)' }}
          />
        </div>
      </h1>

      <p ref={taglineRef} className="mt-8 mb-14 text-base sm:text-body-lg text-secondary font-light leading-relaxed max-w-[480px] opacity-0">
        10+ years turning Figma files into responsive, performant websites.
        WordPress, React, GSAP — and everything in between.
      </p>

      <div ref={ctaRef} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <a
          href="#work"
          className="text-sm sm:text-base tracking-wide bg-primary text-bg px-7 py-4 text-center hover:bg-white transition-colors duration-200 opacity-0 min-h-[48px] flex items-center justify-center"
        >
          View work
        </a>
        <a
          href="#contact"
          className="text-sm sm:text-base tracking-wide text-secondary border border-border px-7 py-4 text-center hover:border-subtle hover:text-primary transition-all duration-200 opacity-0 min-h-[48px] flex items-center justify-center"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
