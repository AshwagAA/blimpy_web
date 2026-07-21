import { useParams, Link } from 'react-router-dom'
import { workItems } from '../data/work'
import { bg, h2 } from '../lib/shared'
import NotFound from './NotFound'

export default function Work() {
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Featured <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>Work</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>A selection of our favorite projects — crafted with creativity, strategy, and results in mind.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '60px 40px' }}>
            {workItems.map(({ num, title, tags, img, slug }) => (
  <a key={num} href={'/work/' + slug} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.05em' }}>{num}</span>
    <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
      <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
    <h3 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '-0.02em', margin: 0, color: '#fff', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#ff1f00')} onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>{title}</h3>
    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{tags.join(' • ')}</p>
  </a>
))}
          </div>
        </div>
      </section>
      <section style={{ padding: 'clamp(60px, 12vw, 140px) clamp(16px, 3vw, 30px) clamp(100px, 15vw, 180px)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '760px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
          <h2 style={h2}>Have a Project <em>In Mind</em>?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '480px', lineHeight: '1.6' }}>Let's talk about what we can build for you.</p>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#ff1f00', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', padding: '14px 28px' }}>[ Contact Us ]</Link>
        </div>
      </section>
    </div>
  )
}

export function WorkDetail() {
  const { slug } = useParams()
  const item = workItems.find(w => w.slug === slug)
  if (!item) return <NotFound />
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '900px' }}>
          <Link to="/work" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', textDecoration: 'none' }}>← Back to Work</Link>
          <span style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.05em', marginTop: '32px' }}>{item.num}</span>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(36px, 7vw, 80px)', lineHeight: '1', letterSpacing: '-0.03em', margin: '12px 0 24px' }}>{item.title}</h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '48px' }}>{item.tags.join(' • ')}</p>
          <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '48px' }}>
            <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', maxWidth: '640px' }}>Full case study write-up coming soon. In the meantime, get in touch and we'll walk you through what we built for this project.</p>
          <Link to="/contact" style={{ display: 'inline-block', marginTop: '32px', textDecoration: 'none', color: '#fff', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px' }}>[ Get in touch ]</Link>
        </div>
      </section>
    </div>
  )
}
