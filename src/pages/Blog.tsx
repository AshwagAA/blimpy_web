import { useParams, Link } from 'react-router-dom'
import TestimonialSlider from '../TestimonialSlider'
import BlogCardSlider from '../BlogCardSlider'
import { blogPosts } from '../data/blog'
import { bg, h2 } from '../lib/shared'
import NotFound from './NotFound'

export default function Blog() {
  return (
    <div style={bg}>
      <section style={{ padding: '180px 30px 85px 30px', overflow: 'hidden', display: 'flex', justifyContent: 'center', backgroundImage: 'url(https://framerusercontent.com/images/q3ZOzQEqBvgfXHqmReH3LdAw.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', flexDirection: 'column', gap: '180px', zIndex: 4 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', maxWidth: '900px' }}>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0 }}>Things</h2>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0, fontStyle: 'italic' }}>Clients are saying</h2>
              <h2 style={{ ...h2, fontSize: 'clamp(48px, 5vw, 114px)', letterSpacing: '-0.06em', margin: 0 }}>that make us blush</h2>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSlider />
      <BlogCardSlider />

      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1296px' }}>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(48px, 10vw, 134px)', lineHeight: '0.9', letterSpacing: '-0.04em', marginBottom: '20px' }}>Latest <em style={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>Blogs</em></h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '80px' }}>Stay informed and inspired with insights, tips, and trends from the digital world.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px 32px' }}>
            {blogPosts.map(({ title, date, slug }) => (
  <a key={slug} href={'/blog/' + slug} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="https://framerusercontent.com/images/ml9fEMwAsiQ3of9IQqPaQRzBG0E.png" alt="Blimpy" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <p style={{ margin: 0, fontSize: '14px', color: '#fff' }}>Blimpy</p>
          <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Storyteller</p>
        </div>
      </div>
      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>{date}</span>
    </div>
    <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="https://framerusercontent.com/images/ml9fEMwAsiQ3of9IQqPaQRzBG0E.png" alt="" style={{ width: '60px', height: '60px', objectFit: 'contain', opacity: 0.25 }} />
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

export function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return <NotFound />
  return (
    <div style={bg}>
      <section style={{ padding: 'clamp(100px, 15vw, 160px) clamp(16px, 3vw, 30px) 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '760px' }}>
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', textDecoration: 'none' }}>← Back to Blog</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '32px 0 16px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: '1.05', letterSpacing: '-0.03em', margin: '0 0 40px' }}>{post.title}</h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>Full article coming soon. Want the details now? <Link to="/contact" style={{ color: '#ff1f00' }}>Reach out</Link> and we'll send it over.</p>
        </div>
      </section>
    </div>
  )
}
