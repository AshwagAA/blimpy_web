import CareerCardFramerComponent from '../framer/career-card.jsx'
import { bg, h2, Counter, TeamGrid, solidCtaStyle } from '../lib/shared'

export default function About() {
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Our <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>Story</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>Have a project in mind or just want to chat? Reach out — we're here to bring your digital vision to life with smart strategy and bold design.</p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <img src="https://framerusercontent.com/images/4ivwcYUKgFi3Z8QSIx2ZL4aKLQ.png" alt="Blimpy team member reviewing a live data dashboard on a phone" style={{ flex: '1 1 300px', maxWidth: '44%', aspectRatio: '0.826', objectFit: 'cover', minWidth: '200px' }} />
            <img src="https://framerusercontent.com/images/JnW2Jat7gC9Hh4gj8H27U2kU40g.png" alt="Blimpy team member presenting a digital ad campaign" style={{ flex: '1 1 240px', maxWidth: '34%', aspectRatio: '0.83', objectFit: 'cover', minWidth: '160px' }} />
            <img src="https://framerusercontent.com/images/tg1bu8cFVraUNpY5xSKIj1AB4.png" alt="Blimpy team member reviewing analytics charts" style={{ flex: '1 1 180px', maxWidth: '25%', aspectRatio: '0.942', objectFit: 'cover', minWidth: '120px' }} />
          </div>
        </div>
      </section>
      <section style={{ padding: '70px clamp(16px, 3vw, 30px) 0', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <Counter />
        </div>
      </section>
      <section style={{ padding: 'clamp(80px, 15vw, 180px) clamp(16px, 3vw, 30px)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px', display: 'flex', flexDirection: 'column', gap: 'clamp(60px, 15vw, 180px)' }}>
          <div style={{ maxWidth: '1076px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Our Philosophy</span>
            <p style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(24px, 3.5vw, 48px)', lineHeight: '1.2', letterSpacing: '-0.04em', color: '#fff' }}>
              "Blimpy believes that marketing data and creative strategy should never operate in silos. Your philosophy rejects "subjective opinions" and "vanity metrics". Instead, we champion a "Data-First Creative Ecosystem."
            </p>
          </div>
        </div>
      </section>
      <section style={{ padding: '0 0 115px' }}>
        <div style={{ padding: '0 clamp(16px, 3vw, 30px)', display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <div style={{ width: '100%', maxWidth: '1296px' }}>
            <h2 style={h2}>All the <em>Geniuses</em></h2>
          </div>
        </div>
        <div style={{ padding: '0 clamp(16px, 3vw, 30px)', display: 'flex', justifyContent: 'center' }}>
          <TeamGrid />
        </div>
      </section>
      <section style={{ padding: 'clamp(80px, 15vw, 180px) clamp(16px, 3vw, 30px) clamp(40px, 8vw, 85px)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px', display: 'flex', flexDirection: 'column', gap: '115px' }}>
          <h2 style={h2}>Make a <em>Career</em></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <CareerCardFramerComponent.Responsive
              style={{ width: '100%' }} zFZoH0j0F="Marketing Specialist" A8FY0H4ac="Nairobi, Kenya" AlHdDw7ti="Remote" MsiDjIQY0="Listed on September 15, 2025" />
            <CareerCardFramerComponent.Responsive
              style={{ width: '100%' }} zFZoH0j0F="Visual UI Specialist" A8FY0H4ac="Nairobi, Kenya" AlHdDw7ti="Remote" MsiDjIQY0="Listed on September 15, 2025" />
            <CareerCardFramerComponent.Responsive
              style={{ width: '100%' }} zFZoH0j0F="Data Engineer" A8FY0H4ac="Nairobi, Kenya" AlHdDw7ti="Remote" MsiDjIQY0="Listed on September 15, 2025" />
          </div>
        </div>
      </section>
      <section style={{ padding: 'clamp(60px, 12vw, 140px) clamp(16px, 3vw, 30px) clamp(100px, 15vw, 180px)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '760px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
          <h2 style={h2}>Think You'd <em>Fit In</em>?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '480px', lineHeight: '1.6' }}>We're a small team that cares about data as much as design. If that sounds like you, take a look at the roles above and send us your application.</p>
          <a href="mailto:ashwag@blimpyanalytics.xyz?subject=Job%20Application" style={solidCtaStyle}>Apply Now</a>
        </div>
      </section>
    </div>
  )
}
