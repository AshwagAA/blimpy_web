import { Link } from 'react-router-dom'
import AboutButtonFramerComponent from '../framer/about-button.jsx'
import BrandAreaFramerComponent from '../framer/brand-area.jsx'
import FaqDropdownFramerComponent from '../framer/faq-dropdown.jsx'
import TestimonialSlider from '../TestimonialSlider'
import { workItems } from '../data/work'
import { bg, h2, TextReveal, ScrollHighlight, Counter, FadeInOnScroll, FunnelCanvas, TeamGrid, ServicesAccordion } from '../lib/shared'

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ background: 'rgb(18,18,18)', padding: 'clamp(100px, 15vw, 200px) clamp(16px, 3vw, 30px) 27px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '1296px', display: 'flex', flexDirection: 'column', gap: '13px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
            <span style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 11vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.06em', color: '#fff' }}>We Are</span>
            <span style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(14px, 1.8vw, 16px)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.02em' }}>[ Est.2025 ]</span>
          </div>
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
            <span style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 11vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.06em', color: '#ff1f00' }}>Blimpy</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '27px' }}>
            <TextReveal text="Data & Creative Studio." style={{ fontFamily: 'Funnel Display', fontStyle: 'italic', fontSize: 'clamp(36px, 9vw, 114px)', lineHeight: '0.9', letterSpacing: '-0.06em', color: '#fff' }} />
          </div>
        </div>
        <FunnelCanvas />
      </div>
    </section>
  )
}

// ─── HOME ABOUT ──────────────────────────────────────────────────────────────
function HomeAbout() {
  return (
    <section style={{ backgroundImage: 'url(https://framerusercontent.com/images/UTSzK1qcIjq6FzO6iAZmUzko5I.png)', backgroundSize: 'cover', backgroundPosition: 'center', padding: 'clamp(80px, 12vw, 153px) clamp(16px, 3vw, 30px) 95px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '1296px', display: 'flex', flexDirection: 'column', gap: '110px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap', overflow: 'hidden', width: '100%' }}>
  <div style={{ maxWidth: '170px', paddingTop: '6px', flexShrink: 0 }}>
    <span style={{ fontFamily: 'Funnel Display', fontSize: '18px', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.02em' }}>03 - About Us</span>
  </div>
  <ScrollHighlight text="Blimpy is the agency a business hires when they are tired of pretty ads that don't convert and messy spreadsheets they don't understand. Blimpy builds the tech to track the data, visualizes it so it makes sense, and consults on the creative strategy to ensure continuous business growth." />
</div>
        <div style={{ paddingLeft: 'clamp(0px, 14vw, 180px)', display: 'flex', gap: '44px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', minWidth: '216px' }}>
            <span style={{ fontFamily: 'Gasoek One, Funnel Display, sans-serif', fontSize: '48px', fontWeight: 400, lineHeight: '0.8', color: '#ff1f00', position: 'absolute', top: '-52px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>CEO</span>
            <img src="https://framerusercontent.com/images/QTbvCCjMMLsEwfjswiXPNd0I28.gif" alt="Blimpy CEO" style={{ width: '216px', height: '246px', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ maxWidth: '416px', display: 'flex', flexDirection: 'column', gap: '42px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#fff' }}>Blimpy's mission is to bridge the gap between data science and creative strategy by building precision data systems that eliminate marketing guesswork, stop wasted ad spend, and drive predictable revenue growth</p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#fff' }}>our vision is an ecosystem where marketing data and creative strategy no longer operate in silos</p>
            <AboutButtonFramerComponent.Responsive Lqi_k0oA9="[ MORE ABOUT US ]" wUmti0vkQ="/about" />
          </div>
        </div>
        <Counter />
      </div>
    </section>
  )
}

// ─── HOME ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={bg}>
      <Hero />
      <HomeAbout />
      <section style={{ padding: 'clamp(40px, 8vw, 90px) clamp(16px, 3vw, 30px) clamp(40px, 8vw, 100px)' }}>
  <div style={{ maxWidth: '1296px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '72px' }}>
    <div style={{ position: 'sticky', top: '100px', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
      <h2 style={{ ...h2, mixBlendMode: 'difference' }}>Featured Work</h2>
    </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '10px 79px', position: 'relative', zIndex: 2 }}>
  {[[workItems[0], workItems[2]], [workItems[1], workItems[3]]].map((column, colIndex) => (
    <div key={colIndex} style={{ display: 'flex', flexDirection: 'column', gap: '68px' }}>
      {column.map(({ num, title, tags, img, slug }) => (
        <FadeInOnScroll key={num}>
          <a href={'/work/' + slug} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.05em' }}>{num}</span>
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
              <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <h3 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '-0.02em', margin: 0, color: '#fff', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#ff1f00')} onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>{title}</h3>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{tags.join(' • ')}</p>
          </a>
        </FadeInOnScroll>
      ))}
    </div>
  ))}
</div>
</div>
 </section>
 <section style={{ padding: '80px 30px 160px 30px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', flexDirection: 'column', gap: '115px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0 }}>Explore</h2>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0, fontStyle: 'italic' }}>Services</h2>
            </div>
            <a href="/service" style={{ textDecoration: 'none', color: '#fff', fontSize: '16px', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px', cursor: 'pointer' }}>[ Explore More ]</a>
          </div>
          <ServicesAccordion />
        </div>
      </section>
      <section style={{ padding: '20px 0px 0px 0px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '115px', alignItems: 'center' }}>
        <div style={{ width: '100%', padding: '0px 30px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0 }}>Super</h2>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0, fontStyle: 'italic' }}>Team</h2>
            </div>
            <a href="/about" style={{ textDecoration: 'none', color: '#fff', fontSize: '16px', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px', cursor: 'pointer' }}>[ ALL MEMBERS ]</a>
          </div>
        </div>
        <div style={{ width: '100%', padding: '0px 30px', display: 'flex', justifyContent: 'center' }}>
          <TeamGrid />
        </div>
      </section>
      <section style={{ padding: '120px 0', backgroundColor: '#121212' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
    <h2 style={{
      fontFamily: '"Funnel Display", sans-serif',
      fontSize: 'clamp(36px, 5vw, 64px)',
      fontWeight: 400,
      color: '#ffffff',
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
      margin: '0 0 64px 0',
      textAlign: 'center'
    }}>
      Things our clients<br />are saying<br />that make us blush
    </h2>
    <TestimonialSlider />
    <div style={{ marginTop: '80px' }}>
      <BrandAreaFramerComponent.Responsive style={{ width: '100%' }} />
    </div>
  </div>
</section>
<section style={{ padding: '0 clamp(16px, 3vw, 30px) clamp(60px, 10vw, 100px)' }}>
        <div style={{ maxWidth: '1076px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <h2 style={{ ...h2, textAlign: 'center' }}>Quick <em>Answers</em></h2>
          <FaqDropdownFramerComponent.Responsive style={{ width: '100%' }} BOc7lhdZy="40px" />
        </div>
      </section>
      <section style={{ padding: 'clamp(60px, 12vw, 140px) clamp(16px, 3vw, 30px) clamp(100px, 15vw, 180px)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '760px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
          <h2 style={h2}>Ready to <em>Grow</em>?</h2>
          <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.6)', maxWidth: '480px', lineHeight: '1.6' }}>Stop guessing. Start tracking what actually works.</p>
          <Link to="/contact" className="ghost-cta" style={{ textDecoration: 'none', color: '#ff1f00', fontSize: '18px', border: '1px solid rgba(255,255,255,0.3)', padding: '16px 32px' }}>[ Contact Us ]</Link>
        </div>
      </section>
    </div>
  )
}
