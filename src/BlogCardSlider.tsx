'use client';

import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Celebrating Empty Metrics: Online 'Likes' Don't Pay the Bills",
    image: 'https://framerusercontent.com/images/blog-1.jpg',
    date: 'Jun 19, 2025',
    author: 'Blimpy',
    slug: 'stop-celebrating-empty-metrics-why-online-likes-dont-pay-the-bills',
  },
  {
    id: 2,
    title: "The Myth of Gut Feeling Marketing: Why Numbers Are the Ultimate Creative Muse",
    image: 'https://framerusercontent.com/images/blog-2.jpg',
    date: 'Jun 15, 2025',
    author: 'Blimpy',
    slug: 'why-every-business-needs-a-digital-agency-in-2025',
  },
  {
    id: 3,
    title: "The Modern Creative Team: Why Your Next Designer Needs to Understand Visual Analytics",
    image: 'https://framerusercontent.com/images/blog-3.jpg',
    date: 'Jun 12, 2025',
    author: 'Blimpy',
    slug: 'how-great-design-impacts-your-brand-s-success',
  },
];

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
            <a key={post.id} href={'/blog/' + post.slug} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'pointer', transition: 'opacity 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
              <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '4px' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
          <button onClick={prevSlide} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: '40px', height: '40px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ‹
          </button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {blogPosts.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', backgroundColor: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
          </div>

          <button onClick={nextSlide} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: '40px', height: '40px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}