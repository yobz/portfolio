export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 lg:px-12 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <span className="mono text-[12px] text-white tracking-widest">
        cm<span className="text-subtle">.</span>dev
      </span>
      <span className="mono text-[10px] text-subtle">
        © {new Date().getFullYear()} Clive Miasco
      </span>
    </footer>
  )
}
