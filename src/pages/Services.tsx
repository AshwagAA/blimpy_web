import ServiceCardWrapperFramerComponent from '../framer/service-card-wrapper.jsx'
import FaqDropdownFramerComponent from '../framer/faq-dropdown.jsx'
import { bg, h2 } from '../lib/shared'

export default function Services() {
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Explore <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>Services</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>From creating a data environment to supporting with your creative strategy, Blimpy works on both the tech and creative to provide you with a 360 service.</p>
          <ServiceCardWrapperFramerComponent.Responsive style={{ width: '100%' }} />
        </div>
      </section>
      <section style={{ padding: 'clamp(40px, 8vw, 60px) clamp(16px, 3vw, 30px) clamp(60px, 10vw, 100px)' }}>
        <div style={{ maxWidth: '1076px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <h2 style={{ ...h2, textAlign: 'center' }}>Quick <em>Answers</em></h2>
          <FaqDropdownFramerComponent.Responsive style={{ width: '100%' }} BOc7lhdZy="40px" />
        </div>
      </section>
    </div>
  )
}
