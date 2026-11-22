import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import {
  site, waLink, benefits, demos, packages, steps, faqs,
} from './config'

// Load the 3D scene separately so the text appears instantly
const Hero3D = lazy(() => import('./components/Hero3D'))

/* ── Small helpers ─────────────────────────────────────────── */

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base text-white/60 md:text-lg">{text}</p>}
    </Reveal>
  )
}

function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  )
}

/* ── Sections ──────────────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-lg' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {site.name.split(' ')[0]}<span className="text-violet-400">.</span>3D
        </a>
        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#process" className="transition hover:text-white">Process</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </div>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Free preview
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* soft glow behind the blob */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[60vh] w-[60vh] rounded-full bg-violet-700/30 blur-[120px]" />

      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-16 md:justify-center md:px-8 md:pb-0">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
          {site.name} · {site.studio}
        </p>
        <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
          Websites your customers can <span className="text-violet-400">touch.</span>
        </h1>
        <p className="mt-6 max-w-lg text-base text-white/70 md:text-lg">
          Premium interactive 3D websites that make local businesses look like market
          leaders, and turn visitors into WhatsApp enquiries.
        </p>
        <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <WhatsAppIcon />
            Get a free preview
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            See pricing
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50">
          <span>✓ Free preview first</span>
          <span>✓ Live in 7 days</span>
          <span>✓ From ₹15,000</span>
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionTitle
        eyebrow="Why 3D"
        title="Your business deserves more than an Instagram page"
        text="Customers Google you before they call. Make that first impression unforgettable."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 120}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-violet-400/40 hover:bg-white/[0.05]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-xl text-violet-300">
                {b.icon}
              </div>
              <h3 className="mb-3 font-display text-xl font-bold">{b.title}</h3>
              <p className="text-white/60">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionTitle
        eyebrow="Work"
        title="Demo projects"
        text="Each one is built for a different kind of business. Open them on your phone."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {demos.map((d, i) => {
          const live = Boolean(d.url)
          const Card = live ? 'a' : 'div'
          return (
            <Reveal key={d.title} delay={i * 120}>
              <Card
                {...(live ? { href: d.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-violet-400/40"
              >
                <div className={`relative h-48 bg-gradient-to-br ${d.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-white/10 blur-xl transition duration-500 group-hover:scale-150" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    {d.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-display text-xl font-bold">{d.title}</h3>
                  <p className="mb-5 text-sm text-white/60">{d.text}</p>
                  <span className={`text-sm font-semibold ${live ? 'text-violet-300' : 'text-white/40'}`}>
                    {live ? 'View live demo →' : 'Live demo coming soon'}
                  </span>
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionTitle
        eyebrow="Pricing"
        title="Simple, one-time pricing"
        text="No monthly fees. Hosting included. You own your website."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                p.popular
                  ? 'border-violet-400/60 bg-violet-500/[0.08] shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/50">{p.for}</p>
              <p className="mt-6 font-display text-4xl font-bold">{p.price}</p>
              <p className="text-sm text-white/40">one-time</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-white/75">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="text-violet-300">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hi Jay, I'm interested in the ${p.name} package (${p.price})`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition hover:scale-[1.03] ${
                  p.popular ? 'bg-white text-black' : 'border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                Choose {p.name}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-white/40">
        50% advance to start · 50% when you approve the final site · Domain (≈₹500–1,000/year) bought in your name
      </p>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionTitle eyebrow="Process" title="See it before you pay a rupee" />
      <div className="grid gap-5 md:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="font-display text-3xl font-bold text-violet-400/80">{s.n}</p>
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-32">
      <SectionTitle eyebrow="FAQ" title="Questions business owners ask" />
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 open:border-violet-400/40"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
              {f.q}
              <span className="text-xl text-violet-300 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-white/60">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="px-5 pb-24 md:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-violet-400/30 bg-gradient-to-br from-violet-600/30 via-fuchsia-600/10 to-transparent px-8 py-16 text-center md:py-24">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
          Want to see your business in 3D?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">
          Send me your business name on WhatsApp. I'll make you a free preview within 48 hours.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
        >
          <WhatsAppIcon />
          Get my free preview
        </a>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-sm text-white/40 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>© {new Date().getFullYear()} {site.name} · {site.studio}</p>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white">
          <WhatsAppIcon className="h-4 w-4" />
          +91 {site.whatsapp.slice(2, 7)} {site.whatsapp.slice(7)}
        </a>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}

/* ── Page ──────────────────────────────────────────────────── */

export default function App() {
  return (
    <main className="font-sans">
      <Nav />
      <Hero />
      <Benefits />
      <Work />
      <Pricing />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
