import { useState, type FormEvent } from 'react'
import './App.css'

const services = [
  { icon: '✦', title: 'Graphic Design', desc: 'Posters, flyers, social media graphics, menus and promotional materials.' },
  { icon: '◈', title: 'Brand Identity', desc: 'Distinctive logos, business cards, brand guidelines and corporate stationery.' },
  { icon: '⌘', title: 'Web Design & Hosting', desc: 'Responsive websites, landing pages and professional digital experiences.' },
  { icon: '▣', title: 'Video Production', desc: 'Video editing, motion graphics, promotional videos and visual storytelling.' },
  { icon: '◎', title: 'Print & Packaging', desc: 'Banners, labels, stickers, brochures, packaging and branded products.' },
  { icon: '↗', title: 'Digital Content', desc: 'Thumbnails, digital campaigns, presentation designs and online advertising.' },
]

const projects = [
  { number: '01', type: 'BRAND IDENTITY', title: 'Branding that stands out', style: 'brand', symbol: 'RV', detail: 'IDENTITY / VISUAL SYSTEMS' },
  { number: '02', type: 'POSTER DESIGN', title: 'Visuals that make an impact', style: 'poster', symbol: 'CREATE.', detail: 'POSTERS / CAMPAIGNS' },
  { number: '03', type: 'WEB EXPERIENCES', title: 'A stronger digital presence', style: 'website', symbol: '</>', detail: 'DESIGN / DEVELOPMENT' },
  { number: '04', type: 'MOTION & VIDEO', title: 'Stories brought to life', style: 'motion', symbol: '▶', detail: 'VIDEO / MOTION GRAPHICS' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', service: 'Graphic Design', details: '' })

  function requestQuote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const message = `Hello Refined Visual Productions!%0A%0AName: ${encodeURIComponent(form.name)}%0AService: ${encodeURIComponent(form.service)}%0AProject: ${encodeURIComponent(form.details)}`
    window.open(`https://wa.me/27722564576?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site">
      <div className="announcement"><span className="live-dot" /> NOW ACCEPTING NEW CREATIVE PROJECTS <span className="announcement-star">✳</span> LET'S CREATE SOMETHING REMARKABLE</div>

      <header className="header">
        <a className="brand" href="#home" aria-label="Refined Visual Productions home">
          <span className="brand-mark">R<span>V</span><i>.</i></span>
          <span className="brand-name">REFINED VISUAL<br /><strong>PRODUCTIONS</strong></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {['Home', 'Services', 'Work', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="nav-mobile-cta" href="#quote" onClick={() => setMenuOpen(false)}>Start a project ↗</a>
        </nav>
        <a className="header-cta" href="#quote">LET'S TALK <span>↗</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-line" /> CREATIVE STUDIO · DIGITAL EXPERIENCES · VISUAL PRODUCTION</div>
            <h1>WE DON'T JUST<br /><span className="outlined">DESIGN.</span><br /><span className="gradient-text">WE DEFINE.</span></h1>
            <p>Bold ideas. Refined execution. We transform imagination into powerful visuals, memorable brands and digital experiences that leave a lasting impression.</p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">EXPLORE OUR WORK <span>↗</span></a>
              <a href="#quote" className="btn btn-outline">START YOUR PROJECT <span>↗</span></a>
            </div>
            <div className="hero-meta"><span>✳ MADE TO STAND OUT</span><span>✳ BUILT WITH PURPOSE</span><span>✳ CREATED WITH PASSION</span></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-center"><span>RV</span><small>CREATIVE UNIVERSE</small></div>
            <span className="floating-label label-one">DESIGN / 001</span>
            <span className="floating-label label-two">BEYOND ORDINARY ↗</span>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE ↓</span><span>INDEPENDENT CREATIVE STUDIO / SOUTH AFRICA</span></div>
        </section>

        <div className="ticker" aria-label="Our creative specialties">
          <div className="ticker-track">{Array.from({ length: 2 }, (_, i) => <span key={i}>GRAPHIC DESIGN <b>✳</b> BRAND IDENTITY <b>✳</b> WEB DEVELOPMENT <b>✳</b> VIDEO EDITING <b>✳</b> CREATIVE PRODUCTION <b>✳</b> </span>)}</div>
        </div>

        <section className="section services-section" id="services">
          <div className="section-top"><span className="section-index">01 / WHAT WE DO</span><span className="section-aside">THE CREATIVE TOOLKIT ↗</span></div>
          <div className="section-heading"><h2>IDEAS INTO <span className="gradient-text">IMPACT.</span></h2><p>Everything your brand needs to look exceptional, connect with people and grow with confidence.</p></div>
          <div className="services-grid">
            {services.map((s, i) => <article className="service-card" key={s.title}>
              <div className="service-top"><span className="service-icon">{s.icon}</span><span className="service-number">0{i + 1} / 06</span></div>
              <h3>{s.title}</h3><p>{s.desc}</p><a href="#quote" aria-label={`Enquire about ${s.title}`}>EXPLORE SERVICE <span>↗</span></a>
            </article>)}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-top"><span className="section-index">02 / SELECTED WORK</span><span className="section-aside">OUR CREATIVE WORLD ↗</span></div>
          <div className="section-heading"><h2>MADE TO BE <span className="gradient-text">SEEN.</span></h2><p>Explore the creative directions we bring to life. These are sample concepts; real client projects can be added later.</p></div>
          <div className="projects-grid">
            {projects.map(p => <article className={`project-card ${p.style}`} key={p.number}>
              <div className="project-preview"><div className="project-decoration" /><span className="project-symbol">{p.symbol}</span><span className="project-detail">{p.detail}</span></div>
              <div className="project-info"><div><span>{p.number} / {p.type}</span><h3>{p.title}</h3></div><a href="#quote" aria-label={`Enquire about ${p.title}`}>↗</a></div>
            </article>)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-visual"><div className="about-rings"><div className="about-monogram">RV<span>.</span></div></div><span className="about-corner">INNOVATE / CREATE / REFINE</span></div>
          <div className="about-copy"><span className="section-index">03 / WHO WE ARE</span><h2>CREATIVITY<br />WITHOUT <span className="gradient-text">LIMITS.</span></h2><p>Refined Visual Productions is a multimedia and creative design brand passionate about turning ordinary ideas into extraordinary experiences.</p><p>From the first sketch to the final detail, we approach every project with imagination, precision and a commitment to quality.</p><div className="about-values"><span>✳ ORIGINAL THINKING</span><span>✳ ATTENTION TO DETAIL</span><span>✳ PURPOSEFUL DESIGN</span></div><a className="btn btn-outline" href="#contact">GET TO KNOW US <span>↗</span></a></div>
        </section>

        <section className="section process-section">
          <div className="section-top"><span className="section-index">04 / THE PROCESS</span><span className="section-aside">HOW WE MAKE IT HAPPEN</span></div>
          <h2>FROM IDEA TO <span className="gradient-text">ICONIC.</span></h2>
          <div className="process-grid">
            {[['01', 'DISCOVER', 'We listen to your vision, goals and creative requirements.'], ['02', 'CREATE', 'We develop a distinctive visual direction for your project.'], ['03', 'REFINE', 'We polish the details and bring the final concept together.'], ['04', 'DELIVER', 'Your finished creative work is prepared for its intended use.']].map(step => <div className="process-step" key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></div>)}
          </div>
        </section>

        <section className="quote-section" id="quote">
          <div className="quote-intro"><span className="section-index">05 / START SOMETHING GREAT</span><h2>HAVE AN IDEA?<br /><span className="gradient-text">LET'S MAKE IT REAL.</span></h2><p>Tell us about your project. Complete the form and your enquiry will open directly in WhatsApp, ready to send.</p><div className="quote-spark">✳</div></div>
          <form className="quote-form" onSubmit={requestQuote}>
            <label htmlFor="name">YOUR NAME</label><input id="name" required placeholder="What should we call you?" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <label htmlFor="service">WHAT DO YOU NEED?</label><select id="service" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>{services.map(s => <option key={s.title}>{s.title}</option>)}</select>
            <label htmlFor="details">TELL US ABOUT YOUR PROJECT</label><textarea id="details" required rows={5} placeholder="Share your idea, timeline and any important details..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} />
            <button className="btn btn-primary" type="submit">SEND ENQUIRY ON WHATSAPP <span>↗</span></button>
            <small>Submitting opens WhatsApp. No information is stored on this website.</small>
          </form>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-top"><div><div className="footer-logo">RV<span>.</span></div><p>CREATIVE THINKING.<br />REFINED EXECUTION.</p></div><div className="footer-links"><div><h4>EXPLORE</h4><a href="#home">Home</a><a href="#services">Services</a><a href="#work">Our Work</a><a href="#about">About Us</a></div><div><h4>CONNECT</h4><a href="https://wa.me/27722564576" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="mailto:mushumi.office@gmail.com">Email ↗</a><a href="#quote">Request a Quote ↗</a></div></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} REFINED VISUAL PRODUCTIONS. ALL RIGHTS RESERVED.</span><span>DESIGNED TO BE DIFFERENT ✳</span></div>
      </footer>
      <a className="whatsapp-float" href="https://wa.me/27722564576" target="_blank" rel="noreferrer" aria-label="Contact RV on WhatsApp">✆</a>
    </div>
  )
}

export default App
