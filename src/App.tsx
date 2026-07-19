import TestimonialSliderFramerComponent from './framer/testimonial-slider.jsx';
import BrandAreaFramerComponent from './framer/brand-area.jsx';
import '@fontsource/gasoek-one'
import './framer/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import AboutButtonFramerComponent from './framer/about-button'
import WorkCardFramerComponent from './framer/work-card'
import ServiceCardWrapperFramerComponent from './framer/service-card-wrapper'
import TeamCardTIckerFramerComponent from './framer/team-card-t-icker'
import TestimonialSlider from './TestimonialSlider'
import BlogCardSlider from './BlogCardSlider'
import BlogCardFramerComponent from './framer/blog-card'
import FaqDropdownFramerComponent from './framer/faq-dropdown'
import FooterFramerComponent from './framer/footer'

import ContactFormFramerComponent from './framer/contact-form'
import PricingCardFramerComponent from './framer/pricing-card'
import CareerCardFramerComponent from './framer/career-card'

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
function TextReveal({ text, style }: { text: string; style?: React.CSSProperties }) {
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
function ScrollHighlight({ text }: { text: string }) {
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

function Counter() {
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
function FadeInOnScroll({ children }: { children: React.ReactNode }) {
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
function FunnelCanvas() {
  return <iframe srcDoc={FUNNEL_HTML} style={{ width: '100%', height: '600px', border: 'none', display: 'block' }} />
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
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
          <a href="https://www.facebook.com/blimpyke/" target="_blank" rel="noreferrer" className="nav-link" style={linkStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/blimpykenya/" target="_blank" rel="noreferrer" className="nav-link" style={linkStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
        <div className="nav-logo" style={{ display: 'flex', justifyContent: 'center', flex: '1' }}>
          <a href="/"><img src="https://framerusercontent.com/images/ml9fEMwAsiQ3of9IQqPaQRzBG0E.png" style={{ height: '130px', display: 'block' }} /></a>
        </div>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: '1', justifyContent: 'flex-end' }}>
          {[['/', 'Home'], ['/about', 'About'], ['/service', 'Services'], ['/work', 'Work'], ['/blog', 'Blog'], ['/pricing', 'Pricing']].map(([href, label]) => (
            <a key={href} href={href} className="nav-link" style={linkStyle}>{label}</a>
          ))}
          <a href="/contact" className="nav-link nav-contact" style={{ ...linkStyle, border: '1px solid #fff', padding: '8px 16px', transition: 'background 0.2s, border-color 0.2s', whiteSpace: 'nowrap' }}>CONTACT US ↗</a>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} style={{ position: 'fixed', top: '80px', left: 0, right: 0, background: 'rgb(18,18,18)', zIndex: 999, flexDirection: 'column', padding: '24px 30px', gap: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {[['/', 'Home'], ['/about', 'About'], ['/service', 'Services'], ['/work', 'Work'], ['/blog', 'Blog'], ['/pricing', 'Pricing'], ['/contact', 'Contact Us']].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '20px', fontFamily: 'Funnel Display' }}>{label}</a>
        ))}
      </div>
    </>
  )
}

const bg: React.CSSProperties = { background: 'rgb(18,18,18)', color: '#fff', paddingTop: '80px', minHeight: '100vh' }
const h2: React.CSSProperties = { fontFamily: 'Funnel Display', fontSize: 'clamp(40px, 8vw, 114px)', lineHeight: '0.9', letterSpacing: '-0.04em' }

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ background: 'rgb(18,18,18)', padding: 'clamp(100px, 15vw, 200px) clamp(16px, 3vw, 30px) 27px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '1296px', display: 'flex', flexDirection: 'column', gap: '13px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
            <span style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 11vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.06em', color: '#fff' }}>We Are</span>
            <span style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(13px, 1.6vw, 16px)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em' }}>[ Est.2025 ]</span>
          </div>
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
            <span style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 11vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.06em', color: '#ff1f00' }}>Blimpy</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '11px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '27px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', color: 'rgba(255,255,255,0.5)', maxWidth: '190px', lineHeight: '1.4' }}>Blimpy bridges the gap between data science and creative strategy</span>
            <TextReveal text="/ Data & Creative Studio." style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: 'clamp(36px, 9vw, 114px)', lineHeight: '0.9', letterSpacing: '-0.06em', color: '#fff' }} />
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
            <img src="https://framerusercontent.com/images/QTbvCCjMMLsEwfjswiXPNd0I28.gif" style={{ width: '216px', height: '246px', objectFit: 'cover', display: 'block' }} />
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
function Home() {
  return (
    <div style={bg}>
      <Hero />
      <HomeAbout />
      <section style={{ padding: 'clamp(40px, 8vw, 90px) clamp(16px, 3vw, 30px) clamp(40px, 8vw, 100px)' }}>
  <div style={{ maxWidth: '1296px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '72px' }}>
    <div style={{ position: 'sticky', top: '100px', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
      <h2 style={{ ...h2, mixBlendMode: 'difference' }}>Featured Work</h2> 
    </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '10px 79px', position: 'relative', zIndex: 2 }}>
  {[[
    { num: '[ 01 ]', title: 'Pana+Care TeleHealth App', tags: ['Data integration', 'UI Design System', 'Marketing Strategy'], img: '/panacare.jpeg.avif', slug: 'echo-bank-identity' },
    { num: '[ 03 ]', title: 'VunaChain AgriTech System', tags: ['Data integration', 'Data Visualization', 'Data Analysis'], img: '/vunachain.jpeg.avif', slug: 'lustra-cosmetics-packaging' },
  ], [
    { num: '[ 02 ]', title: 'Local Restaurant SQL system', tags: ['Data Integration', 'Data Visualization', 'Social Campaign'], img: '/localrestuarant.jpeg.avif', slug: 'nova-apparel-rebrand' },
    { num: '[ 04 ]', title: 'Kenya Flying Labs', tags: ['Website Development', 'Content Marketing', 'Social Campaign'], img: '/kenyaflyinglabs.jpeg.avif', slug: 'synthai-visual-refresh' },
  ]].map((column, colIndex) => (
    <div key={colIndex} style={{ display: 'flex', flexDirection: 'column', gap: '68px' }}>
      {column.map(({ num, title, tags, img, slug }) => (
        <FadeInOnScroll key={num}>
          <a href={'https://blimpyanalytics.xyz/work/' + slug} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{num}</span>
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
              <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <h3 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '-0.02em', margin: 0, color: '#fff', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#ff1f00')} onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>{title}</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{tags.join(' • ')}</p>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0 }}>Explore</h2>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0, fontStyle: 'italic' }}>/ Services</h2>
            </div>
            <a href="/service" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px', cursor: 'pointer' }}>[ Explore More ]</a>
          </div>
          <ServiceCardWrapperFramerComponent.Responsive />
        </div>
      </section>
      <section style={{ padding: '20px 0px 0px 0px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '115px', alignItems: 'center' }}>
        <div style={{ width: '100%', padding: '0px 30px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0 }}>Super</h2>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0, fontStyle: 'italic' }}>/ Team</h2>
            </div>
            <a href="/about" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px', cursor: 'pointer' }}>[ ALL MEMBERS ]</a>
          </div>
        </div>
        <TeamCardTIckerFramerComponent.Responsive xBKqQSKfs={true} />
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
      margin: '0 0 64px 0'
    }}>
      Things / Clients are saying that make us blush
    </h2>
    <TestimonialSliderFramerComponent.Responsive />
    <div style={{ marginTop: '80px' }}>
      <BrandAreaFramerComponent.Responsive />
    </div>
  </div>
</section>
<section style={{ padding: '0 clamp(16px, 3vw, 30px) clamp(60px, 10vw, 100px)' }}>
        <div style={{ maxWidth: '1076px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <h2 style={{ ...h2, textAlign: 'center' }}>Quick <em>/ Answers</em></h2>
          <FaqDropdownFramerComponent.Responsive BOc7lhdZy="40px" />
        </div>
      </section>
    </div>
  )
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Our <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>/ Story</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>Have a project in mind or just want to chat? Reach out — we're here to bring your digital vision to life with smart strategy and bold design.</p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <img src="https://framerusercontent.com/images/4ivwcYUKgFi3Z8QSIx2ZL4aKLQ.png" style={{ flex: '1 1 300px', maxWidth: '44%', aspectRatio: '0.826', objectFit: 'cover', minWidth: '200px' }} />
            <img src="https://framerusercontent.com/images/JnW2Jat7gC9Hh4gj8H27U2kU40g.png" style={{ flex: '1 1 240px', maxWidth: '34%', aspectRatio: '0.83', objectFit: 'cover', minWidth: '160px' }} />
            <img src="https://framerusercontent.com/images/tg1bu8cFVraUNpY5xSKIj1AB4.png" style={{ flex: '1 1 180px', maxWidth: '25%', aspectRatio: '0.942', objectFit: 'cover', minWidth: '120px' }} />
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
          //<BrandAreaFramerComponent.Responsive />
        </div>
      </section>
      <section style={{ padding: '0 0 115px' }}>
        <div style={{ padding: '0 clamp(16px, 3vw, 30px)', display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <div style={{ width: '100%', maxWidth: '1296px' }}>
            <h2 style={h2}>All the <em>/ Geniuses</em></h2>
          </div>
        </div>
        <TeamCardTIckerFramerComponent.Responsive xBKqQSKfs={true} />
      </section>
      <section style={{ padding: 'clamp(80px, 15vw, 180px) clamp(16px, 3vw, 30px) clamp(40px, 8vw, 85px)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px', display: 'flex', flexDirection: 'column', gap: '115px' }}>
          <h2 style={h2}>Make a <em>/ Career</em></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <CareerCardFramerComponent.Responsive zFZoH0j0F="Marketing Specialist" A8FY0H4ac="Nairobi, Kenya" AlHdDw7ti="Remote" MsiDjIQY0="Listed on September 15, 2025" />
            <CareerCardFramerComponent.Responsive zFZoH0j0F="Visual UI Specialist" A8FY0H4ac="Nairobi, Kenya" AlHdDw7ti="Remote" MsiDjIQY0="Listed on September 15, 2025" />
            <CareerCardFramerComponent.Responsive zFZoH0j0F="Data Engineer" A8FY0H4ac="Nairobi, Kenya" AlHdDw7ti="Remote" MsiDjIQY0="Listed on September 15, 2025" />
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services() {
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Explore <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>/ Services</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>From creating a data environment to supporting with your creative strategy, Blimpy works on both the tech and creative to provide you with a 360 service.</p>
          <ServiceCardWrapperFramerComponent.Responsive />
        </div>
      </section>
      <section style={{ padding: 'clamp(80px, 15vw, 180px) clamp(16px, 3vw, 30px) clamp(40px, 8vw, 85px)', backgroundImage: 'url(https://framerusercontent.com/images/q3ZOzQEqBvgfXHqmReH3LdAw.png)', backgroundSize: 'cover' }}>
        <div style={{ maxWidth: '1296px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(60px, 15vw, 180px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            <h2 style={{ ...h2, maxWidth: '900px' }}>What Our <em>/ Clients</em> Are Saying</h2>
        </div>
        </div>
      </section>
      <section style={{ padding: 'clamp(40px, 8vw, 60px) clamp(16px, 3vw, 30px) clamp(60px, 10vw, 100px)' }}>
        <div style={{ maxWidth: '1076px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <h2 style={{ ...h2, textAlign: 'center' }}>Quick <em>/ Answers</em></h2>
          <FaqDropdownFramerComponent.Responsive BOc7lhdZy="40px" />
        </div>
      </section>
    </div>
  )
}

// ─── WORK ────────────────────────────────────────────────────────────────────
function Work() {
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Featured <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>/ Work</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>A selection of our favorite projects — crafted with creativity, strategy, and results in mind.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px 40px' }}>
            {[
  { num: '[ 01 ]', title: 'Pana+Care TeleHealth App', tags: ['Data integration', 'UI Design System', 'Marketing Strategy'], img: '/panacare.jpeg.avif', slug: 'echo-bank-identity' },
  { num: '[ 02 ]', title: 'Local Restaurant SQL system', tags: ['Data Integration', 'Data Visualization', 'Social Campaign'], img: '/localrestuarant.jpeg.avif', slug: 'nova-apparel-rebrand' },
  { num: '[ 03 ]', title: 'VunaChain AgriTech System', tags: ['Data integration', 'Data Visualization', 'Data Analysis'], img: '/vunachain.jpeg.avif', slug: 'lustra-cosmetics-packaging' },
  { num: '[ 04 ]', title: 'Kenya Flying Labs', tags: ['Website Development', 'Content Marketing', 'Social Campaign'], img: '/kenyaflyinglabs.jpeg.avif', slug: 'synthai-visual-refresh' },
].map(({ num, title, tags, img, slug }) => (
  <a key={num} href={'https://blimpyanalytics.xyz/work/' + slug} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{num}</span>
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
    </div>
  )
}

// ─── BLOG ────────────────────────────────────────────────────────────────────
function Blog() {
 const posts = [
  { title: 'The Myth of "Gut Feeling" Marketing: Why Numbers Are the Ultimate Creative Muse', date: 'Jun 19, 2025', slug: 'we-re-winner-soty-at-css-award-2025' },
  { title: "Stop Celebrating Empty Metrics: Why Online 'Likes' Don't Pay the Bills", date: 'Jun 19, 2025', slug: 'stop-celebrating-empty-metrics-why-online-likes-dont-pay-the-bills' },
  { title: 'The Modern Creative Team: Why Your Next Designer Needs to Understand Visual Analytics', date: 'Jun 19, 2025', slug: 'why-every-business-needs-a-digital-agency-in-2025' },
  { title: 'Surviving the Changing Digital Landscape: Why Owning Your Audience Information is Crucial', date: 'Jun 19, 2025', slug: 'how-great-design-impacts-your-brand-s-success' },
  { title: 'The End of the "End-of-Month" PDF: Why Real-Time Information Wins', date: 'Jun 19, 2025', slug: 'social-media-strategies-that-actually-work-in-2025' },
  { title: 'Fixing the Leaks: Why People Leave Your Website and How to Stop It', date: 'Jun 19, 2025', slug: 'is-your-website-costing-you-conversions' },
]
  return (
    <div style={bg}>
      <section style={{ padding: '180px 30px 85px 30px', overflow: 'hidden', display: 'flex', justifyContent: 'center', backgroundImage: 'url(https://framerusercontent.com/images/q3ZOzQEqBvgfXHqmReH3LdAw.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', flexDirection: 'column', gap: '180px', zIndex: 4 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', maxWidth: '900px' }}>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0 }}>Things</h2>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0, fontStyle: 'italic' }}>/ Clients are saying</h2>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0 }}>that make us blush</h2>
            </div>
            //<TestimonialSliderFramerComponent.Responsive />
          </div>
          //<BrandAreaFramerComponent.Responsive />
        </div>
      </section>
      <TestimonialSlider />
<BlogCardSlider />

      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Latest <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}> / Blogs</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>Stay informed and inspired with insights, tips, and trends from the digital world.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px 32px' }}>
            {posts.map(({ title, date, slug }) => (
  <a key={slug} href={'https://blimpyanalytics.xyz/blog/' + slug} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="https://framerusercontent.com/images/ml9fEMwAsiQ3of9IQqPaQRzBG0E.png" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <p style={{ margin: 0, fontSize: '14px', color: '#fff' }}>Blimpy</p>
          <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Storyteller</p>
        </div>
      </div>
      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{date}</span>
    </div>
    <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="https://framerusercontent.com/images/ml9fEMwAsiQ3of9IQqPaQRzBG0E.png" style={{ width: '60px', height: '60px', objectFit: 'contain', opacity: 0.25 }} />
    </div>
    <h3 className="blog-title" style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(18px, 2vw, 22px)', letterSpacing: '-0.02em', margin: 0, lineHeight: '1.3', color: '#fff', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#ff1f00')} onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>{title}</h3>
  </a>
))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Our <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>/ Pricing</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>Transparent pricing built around your growth stage. No surprises, just results.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <PricingCardFramerComponent.Responsive b5eyKaM99="The Data Blindness Cure" EfCYbB_OA="from 65,000 KES" sYAYXetgp="/ month" HpiC_WaC8="Best for Startups" EMqJvTei7="One Off Setup Fee: 65,000 (one-off)" vhWLKlxXi="Basic Maintenance & Basic Data Insight" bqjc8yctm="1 Automated Dashboard (Up to 5 KPIs)" QepAVp6IX="Quarterly Analysis Report" dVb1HSXj9={false} idGUHsI9M="40px" />
            <PricingCardFramerComponent.Responsive b5eyKaM99="The Cash Bleed Intervention" EfCYbB_OA="from 110,000 KES" sYAYXetgp="/ month" HpiC_WaC8="For Agencies & SME's" EMqJvTei7="One Off Integration Setup Fee: KES 110,000 (one-off)" vhWLKlxXi="Comprehensive Maintenance & Integrated Data Insight" bqjc8yctm="3 Interactive Dashboard (Up to 10 KPIs)" QepAVp6IX="Quarterly Analysis Report" LJZqx3XhD="Support with Link Tracking" BIXxMvMXC="Automated AI Google Sheets for Internal Reporting" dVb1HSXj9={true} idGUHsI9M="40px" />
            <PricingCardFramerComponent.Responsive b5eyKaM99="The Operations Precision System" EfCYbB_OA="from 220,000 KES" sYAYXetgp="/ month" HpiC_WaC8="For Large Teams" EMqJvTei7="One Off Integration Setup Fee: KES 220,000 (one-off)" vhWLKlxXi="Comprehensive Maintenance & Integrated Data Insight" bqjc8yctm="5 Interactive Automated Dashboard (Up to 5 KPIs)" QepAVp6IX="Monthly Analysis Report" LJZqx3XhD="Support with Link Tracking" BIXxMvMXC="Automated AI Google Sheets for Internal Reporting" dVb1HSXj9={true} idGUHsI9M="40px" />
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const inputStyle: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '16px 0', color: '#fff', fontSize: '16px', outline: 'none', width: '100%', fontFamily: 'Funnel Display, sans-serif', letterSpacing: '-0.01em' }
  const labelStyle: React.CSSProperties = { fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }
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
            <form name="contact" method="POST" data-netlify="true" action="/contact-success" style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <input type="hidden" name="form-name" value="contact" />
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
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>We'll get back to you within 24 hours.</span>
                <button type="submit" style={{ background: '#ff1f00', border: 'none', color: '#fff', padding: '18px 48px', fontSize: '14px', cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Funnel Display, sans-serif', fontWeight: 600 }}>SEND MESSAGE ↗</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterFramerComponent.Responsive />
    </BrowserRouter>
  )
}