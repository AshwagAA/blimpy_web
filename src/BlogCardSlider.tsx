'use client';

import { useState } from 'react';
import { blogPosts as allPosts } from './data/blog';

const blogPosts = allPosts.slice(0, 3);

export default function BlogCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const getVisiblePosts = () => {
    return [
      blogPosts[currentIndex],
      blogPosts[(currentIndex + 1) % blogPosts.length],
      blogPosts[(currentIndex + 2) % blogPosts.length],
    ];
  };

  return (
    <section style={{ padding: '96px 30px 180px 30px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(48px,5vw,114px)', letterSpacing: '-0.06em', margin: 0, fontFamily: 'Funnel Display', fontWeight: 400, color: '#fff' }}>
              Latest
            </h2>
            <h2 style={{ fontSize: 'clamp(48px,5vw,114px)', letterSpacing: '-0.06em', margin: 0, fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 400, color: '#fff' }}>
              / Blogs
            </h2>
          </div>
          <a href="/blog" style={{ textDecoration: 'none', color: '#ff1f00', fontSize: '14px', fontWeight: 600 }}>
            [ ALL ARTICLES ]
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {getVisiblePosts().map((post) => (
            <a key={post.slug} href={'/blog/' + post.slug} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'pointer', transition: 'opacity 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
              <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://framerusercontent.com/images/ml9fEMwAsiQ3of9IQqPaQRzBG0E.png" alt="" style={{ width: '60px', height: '60px', objectFit: 'contain', opacity: 0.25 }} />
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <h3 style={{ fontSize: '16px', fontWeight: 400, color: '#fff', margin: 0, lineHeight: '1.4em' }}>
                {post.title}
              </h3>
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={prevSlide} aria-label="Previous articles" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: '40px', height: '40px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ‹
          </button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {blogPosts.map((post, index) => (
              <button key={post.slug} onClick={() => setCurrentIndex(index)} aria-label={`Show articles starting from ${post.title}`} style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', backgroundColor: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
          </div>

          <button onClick={nextSlide} aria-label="Next articles" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: '40px', height: '40px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}