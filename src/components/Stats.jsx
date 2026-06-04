const stats = [
  { value: '10+', label: 'Years experience' },
  { value: '50+', label: 'Sites shipped' },
  { value: '3', label: 'Featured projects' },
]

export default function Stats() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-16 border-y border-border">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-[clamp(32px,4vw,48px)] font-light text-white tracking-tight">
              {stat.value}
            </p>
            <p className="mono text-[12px] text-subtle uppercase tracking-widest2 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
