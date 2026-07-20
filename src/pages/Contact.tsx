import { useState } from 'react'
import { bg } from '../lib/shared'

function encodeForm(data: FormData) {
  return Array.from(data.entries())
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&')
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const inputStyle: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '16px 0', color: '#fff', fontSize: '16px', outline: 'none', width: '100%', fontFamily: 'Funnel Display, sans-serif', letterSpacing: '-0.01em' }
  const labelStyle: React.CSSProperties = { fontSize: '12px', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em' }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(new FormData(form)),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 120px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em' }}>
              Let's <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: '#ff1f00' }}>/ Talk</em>
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '340px', lineHeight: '1.6', textAlign: 'right' }}>Have a project in mind? Reach out and let's build something great together.</p>
          </div>
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', minWidth: '220px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '32px' }}>
                <span style={labelStyle}>Email</span>
                <a href="mailto:ashwag@blimpyanalytics.xyz" style={{ color: '#fff', fontSize: '16px', textDecoration: 'none' }}>ashwag@blimpyanalytics.xyz</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '32px' }}>
                <span style={labelStyle}>Location</span>
                <p style={{ color: '#fff', fontSize: '16px', margin: 0 }}>Nairobi, Kenya</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={labelStyle}>Social</span>
                <a href="https://www.instagram.com/blimpykenya/" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '16px', textDecoration: 'none' }}>Instagram ↗</a>
                <a href="https://www.facebook.com/blimpyke/" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '16px', textDecoration: 'none' }}>Facebook ↗</a>
              </div>
            </div>
            {status === 'success' ? (
              <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '2px solid #ff1f00', paddingLeft: '24px' }}>
                <h2 style={{ fontFamily: 'Funnel Display', fontSize: '28px', margin: 0 }}>Message sent ↗</h2>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', margin: 0, maxWidth: '380px' }}>Thanks for reaching out — we'll get back to you within 24 hours.</p>
                <button type="button" onClick={() => setStatus('idle')} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '12px 24px', fontSize: '13px', cursor: 'pointer', alignSelf: 'flex-start', marginTop: '8px' }}>Send another message</button>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label>Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={labelStyle}>First Name</label>
                    <input name="firstName" type="text" required placeholder="Ashwag" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={labelStyle}>Last Name</label>
                    <input name="lastName" type="text" required placeholder="Elsayed" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" required placeholder="you@company.com" style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>Company</label>
                  <input name="company" type="text" placeholder="Your company name" style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your project..." style={{ ...inputStyle, resize: 'none' }} />
                </div>
                {status === 'error' && (
                  <p style={{ color: '#ff6b5c', fontSize: '14px', margin: 0 }}>Something went wrong sending your message. Please try again, or email us directly.</p>
                )}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>We'll get back to you within 24 hours.</span>
                  <button type="submit" disabled={status === 'sending'} style={{ background: '#ff1f00', border: 'none', color: '#fff', padding: '18px 48px', fontSize: '14px', cursor: status === 'sending' ? 'default' : 'pointer', opacity: status === 'sending' ? 0.6 : 1, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Funnel Display, sans-serif', fontWeight: 600 }}>{status === 'sending' ? 'SENDING…' : 'SEND MESSAGE ↗'}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
