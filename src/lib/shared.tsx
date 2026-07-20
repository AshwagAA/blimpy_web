import { useEffect, useRef, useState } from 'react'

const FUNNEL_HTML = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<style>*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;background:#121212;overflow:hidden}canvas{display:block;width:100%;height:100%}</style>
</head><body><canvas id="c"></canvas><script>
const canvas=document.getElementById('c'),ctx=canvas.getContext('2d');
let W,H,particles=[],raf;
const COLORS=['#ff1f00','#ff4422','#ff6644','#cc1900','#ff8855','#ffffff'];
function resize(){W=canvas.width=document.body.offsetWidth;H=canvas.height=document.body.offsetHeight;init()}
function init(){particles=[];for(let i=0;i<Math.floor(W/4.5);i++)spawn(true)}
function spawn(init){particles.push({p:init?Math.random():0,sp:0.00035+Math.random()*0.00055,col:COLORS[Math.floor(Math.random()*COLORS.length)],sz:1.2+Math.random()*2,ox:(Math.random()-0.5)*0.72,op:0.45+Math.random()*0.55,alive:true})}
function getStages(){const sw=W*0.45,cx=W*0.38;return{cx,stages:[{y:H*0.08,w:sw},{y:H*0.35,w:sw*0.62},{y:H*0.60,w:sw*0.36},{y:H*0.82,w:sw*0.16}]}}
function getPos(p,pr){const{cx,stages:st}=getStages(),n=st.length,seg=pr*(n-1),si=Math.min(Math.floor(seg),n-2),fr=seg-si,w=st[si].w+(st[si+1].w-st[si].w)*fr,y=st[si].y+(st[si+1].y-st[si].y)*fr;return{x:cx+p.ox*w,y}}
function drawFunnel(){
  const{cx,stages:st}=getStages();
  ctx.beginPath();ctx.moveTo(cx-st[0].w/2,st[0].y);
  st.forEach(s=>ctx.lineTo(cx-s.w/2,s.y));
  for(let i=st.length-1;i>=0;i--)ctx.lineTo(cx+st[i].w/2,st[i].y);
  ctx.closePath();ctx.fillStyle='rgba(255,31,0,0.045)';ctx.fill();
  ctx.lineWidth=0.75;ctx.strokeStyle='rgba(255,31,0,0.38)';
  ctx.beginPath();ctx.moveTo(cx-st[0].w/2,st[0].y);st.forEach(s=>ctx.lineTo(cx-s.w/2,s.y));ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx+st[0].w/2,st[0].y);st.forEach(s=>ctx.lineTo(cx+s.w/2,s.y));ctx.stroke();
  const labels=['Awareness','Consideration','Intent','Conversion'];
  const drops=['12,400 sessions','-68% dropped','-74% dropped','-81% dropped'];
  const fs=Math.max(11,Math.round(W*0.013));
  const pad=W*0.018;
  st.forEach((s,i)=>{
    const lx=cx+s.w/2+pad;
    ctx.textAlign='left';
    ctx.font='500 '+fs+'px -apple-system,sans-serif';
    ctx.fillStyle='rgba(255,255,255,0.50)';
    ctx.fillText(labels[i],lx,s.y+4);
    ctx.font=Math.round(fs*0.85)+'px -apple-system,sans-serif';
    ctx.fillStyle=i===0?'rgba(255,255,255,0.28)':'#ff1f00';
    ctx.fillText(drops[i],lx,s.y+4+fs+5);
  });
  const by=st[3].y+H*0.09;
  ctx.textAlign='center';
  ctx.font='500 '+Math.round(W*0.018)+'px -apple-system,sans-serif';
  ctx.fillStyle='#ebe1d6';
  ctx.fillText('196 leads',cx,by);
  ctx.font=Math.round(W*0.013)+'px -apple-system,sans-serif';
  ctx.fillStyle='#666666';
  ctx.fillText('converted this month',cx,by+Math.round(W*0.018)+5);
  ctx.font='500 '+Math.round(W*0.032)+'px -apple-system,sans-serif';
  ctx.fillStyle='rgba(255,255,255,0.04)';
  ctx.fillText('12,400',W*0.76,H*0.28);
  ctx.font='500 '+Math.round(W*0.024)+'px -apple-system,sans-serif';
  ctx.fillStyle='rgba(255,31,0,0.15)';
  ctx.fillText('$57,976',W*0.76,H*0.55);
  ctx.font=Math.round(W*0.012)+'px -apple-system,sans-serif';
  ctx.fillStyle='rgba(255,31,0,0.30)';
  ctx.fillText('leaking / mo',W*0.76,H*0.55+Math.round(W*0.024)+6);
}
function draw(){
  ctx.fillStyle='#121212';ctx.fillRect(0,0,W,H);
  drawFunnel();
  particles.forEach(p=>{if(!p.alive)return;p.p+=p.sp;if(p.p>1){p.alive=false;spawn(false);return}
  const{x,y}=getPos(p,p.p),fade=p.p<0.06?p.p/0.06:p.p>0.91?(1-p.p)/0.09:1;
  const alpha=Math.round(p.op*fade*(p.col==='#ffffff'?0.55:1)*255).toString(16).padStart(2,'0');
  ctx.beginPath();ctx.arc(x,y,p.sz,0,Math.PI*2);ctx.fillStyle=p.col+alpha;ctx.fill()});
  raf=requestAnimationFrame(draw)}
window.addEventListener('resize',()=>{cancelAnimationFrame(raf);resize();draw()});
resize();draw();
<\/script></body></html>`;

// ─── ANIMATED TEXT REVEAL ────────────────────────────────────────────────────
export function TextReveal({ text, style }: { text: string; style?: React.CSSProperties }) {
  const [revealed, setRevealed] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setRevealed(r => {
          if (r >= text.length) { clearInterval(interval); return r }
          return r + 1
        })
      }, 40)
      return () => clearInterval(interval)
    }, 600)
    return () => clearTimeout(timer)
  }, [text])
  return (
    <span style={style}>
      {text.split('').map((char, i) => (
        <span key={i} style={{ opacity: i < revealed ? 1 : 0, transition: 'opacity 0.1s' }}>{char}</span>
      ))}
    </span>
  )
}

// ─── SCROLL HIGHLIGHT TEXT ────────────────────────────────────────────────────
export function ScrollHighlight({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowH = window.innerHeight
      const start = windowH * 0.85
      const end = windowH * 0.25
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
      setProgress(p)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const words = text.split(' ')
  const highlightedCount = Math.floor(progress * words.length)
  return (
    <p ref={ref} style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(28px, 4.5vw, 60px)', lineHeight: '1.05', letterSpacing: '-0.02em', width: '100%', maxWidth: '1030px', overflow: 'hidden', wordBreak: 'break-word', whiteSpace: 'normal', margin: 0 }}>
      {words.map((word, i) => (
        <span key={i} style={{ color: i < highlightedCount ? '#ffffff' : 'rgba(255,255,255,0.2)', transition: 'color 0.3s', marginRight: '0.25em' }}>{word}</span>
      ))}
    </p>
  )
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        const duration = 1500
        const startTime = performance.now()
        const animate = (now: number) => {
          const elapsed = now - startTime
          const progress = Math.min(1, elapsed / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(animate)
          else setValue(target)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, started])
  return <span ref={ref}>{value}{suffix}</span>
}

export function Counter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '48px', width: '100%', flexWrap: 'wrap', gap: '32px' }}>
      {[
        { target: 100, suffix: 'K+', label: 'Reaction & Traffic' },
        { target: 99, suffix: '%', label: 'Clients Rating' },
        { target: 5, suffix: '+', label: 'Businesses' },
      ].map(({ target, suffix, label }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: '1', minWidth: '160px' }}>
          <span style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: '0.9', letterSpacing: '-0.04em', color: '#fff' }}>
            <CountUp target={target} suffix={suffix} />
          </span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{label}</span>
        </div>
      ))}
    </div>
  )
}

export function FadeInOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}>
      {children}
    </div>
  )
}

export function FunnelCanvas() {
  return <iframe srcDoc={FUNNEL_HTML} style={{ width: '100%', height: '600px', border: 'none', display: 'block' }} />
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const linkStyle: React.CSSProperties = { color: '#fff', textDecoration: 'none', fontSize: '16px', fontFamily: 'Funnel Display', transition: 'color 0.2s' }
  return (
    <>
      <style>{`
        .nav-link:hover { color: #ff1f00 !important; }
        .nav-contact:hover { background: #ff1f00 !important; border-color: #ff1f00 !important; }
        .mobile-menu { display: none; }
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .mobile-menu.open { display: flex !important; }
          .nav-logo img { height: 80px !important; }
        }
      `}</style>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgb(18,18,18)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px', height: '80px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1' }}>
          <a href="https://www.facebook.com/blimpyke/" target="_blank" rel="noreferrer" aria-label="Blimpy on Facebook" className="nav-link" style={linkStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/blimpykenya/" target="_blank" rel="noreferrer" aria-label="Blimpy on Instagram" className="nav-link" style={linkStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
        <div className="nav-logo" style={{ display: 'flex', justifyContent: 'center', flex: '1' }}>
          <a href="/"><img src="https://framerusercontent.com/images/ml9fEMwAsiQ3of9IQqPaQRzBG0E.png" alt="Blimpy" style={{ height: '130px', display: 'block' }} /></a>
        </div>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: '1', justifyContent: 'flex-end' }}>
          {[['/', 'Home'], ['/about', 'About'], ['/service', 'Services'], ['/work', 'Work'], ['/pricing', 'Pricing']].map(([href, label]) => (
            <a key={href} href={href} className="nav-link" style={linkStyle}>{label}</a>
          ))}
          <a href="/contact" className="nav-link nav-contact" style={{ ...linkStyle, border: '1px solid #fff', padding: '8px 16px', transition: 'background 0.2s, border-color 0.2s', whiteSpace: 'nowrap' }}>CONTACT US ↗</a>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} style={{ position: 'fixed', top: '80px', left: 0, right: 0, background: 'rgb(18,18,18)', zIndex: 999, flexDirection: 'column', padding: '24px 30px', gap: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {[['/', 'Home'], ['/about', 'About'], ['/service', 'Services'], ['/work', 'Work'], ['/pricing', 'Pricing'], ['/contact', 'Contact Us']].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '20px', fontFamily: 'Funnel Display' }}>{label}</a>
        ))}
      </div>
    </>
  )
}

export const bg: React.CSSProperties = { background: 'rgb(18,18,18)', color: '#fff', paddingTop: '80px', minHeight: '100vh' }
export const h2: React.CSSProperties = { fontFamily: 'Funnel Display', fontSize: 'clamp(40px, 8vw, 114px)', lineHeight: '0.9', letterSpacing: '-0.04em' }

// ─── TEAM GRID (static, replaces the old auto-scrolling ticker) ─────────────
const TEAM = [
  { name: 'Ashwag Alsayed', img: 'https://framerusercontent.com/images/EOypU6a3NEsdREefJi2bUJPmxI.jpg?width=1024&height=1024' },
  { name: 'Catherine Muya', img: 'https://framerusercontent.com/images/mhmcqKSQyK6CfUjDR2xBsWWKXkM.jpg?width=947&height=947' },
  { name: 'Mustafa Akasha', img: 'https://framerusercontent.com/images/q69wQc9sVJQZl7aUzQb1s4xcfw.jpg?width=687&height=852' },
]

export function TeamGrid() {
  return (
    <div style={{ width: '100%', maxWidth: '1296px', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      {TEAM.map(({ name, img }) => (
        <div key={name} style={{ flex: '1 1 280px', minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ width: '100%', aspectRatio: '0.85', overflow: 'hidden' }}>
            <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)', display: 'block' }} />
          </div>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.02em' }}>[ {name} ]</span>
        </div>
      ))}
    </div>
  )
}
