import { Link } from 'react-router-dom'
import { bg } from '../lib/shared'

export default function NotFound() {
  return (
    <div style={{ ...bg, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px' }}>
      <div>
        <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 100px)', letterSpacing: '-0.04em', margin: '0 0 16px' }}>404</h1>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', margin: '0 0 32px' }}>That page doesn't exist.</p>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '16px', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px' }}>[ Back to Home ]</Link>
      </div>
    </div>
  )
}
