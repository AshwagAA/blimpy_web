'use client';

import React, { useState } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Before Blimpy, our marketing spend was a complete black box. They rebuilt our tracking architecture from the ground up, integrating all our platforms into one reliable system so we finally know exactly which campaigns are driving revenue',
    author: 'Mohammed A Alsayed',
    role: 'CEO, VunaChain',
    image: 'https://framerusercontent.com/images/testimonial-1.jpg',
  },
  {
    id: 2,
    quote: 'Their data analysis transformed how we approach campaign optimization. Blimpy gave us clarity we never had before.',
    author: 'Jane Smith',
    role: 'Marketing Director, TechCorp',
    image: 'https://framerusercontent.com/images/testimonial-2.jpg',
  },
  {
    id: 3,
    quote: 'Working with Blimpy was a game-changer for our business. Highly recommend their services.',
    author: 'Robert Johnson',
    role: 'Founder, Innovation Labs',
    image: 'https://framerusercontent.com/images/testimonial-3.jpg',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      style={{
        padding: '180px 30px 85px 30px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '180px',
        alignItems: 'center',
        backgroundImage: 'url(https://framerusercontent.com/images/q3ZOzQEqBvgfXHqmReH3LdAw.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 'clamp(48px,5vw,114px)', letterSpacing: '-0.06em', margin: 0, fontFamily: 'Funnel Display', fontWeight: 400, color: '#fff' }}>
            Things
          </h2>
          <h2
            style={{
              fontSize: 'clamp(48px,5vw,114px)',
              letterSpacing: '-0.06em',
              margin: 0,
              fontFamily: 'Playfair Display',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#fff',
            }}
          >
            / Clients are saying
          </h2>
        </div>
        <a href="/about" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px', cursor: 'pointer' }}>
          [ Contact Us ]
        </a>
      </div>

      <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', gap: '80px', alignItems: 'stretch' }}>
        {/* Left side: Avatars and Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'space-between', minWidth: '150px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === 0 ? '60px' : '50px',
                  height: index === 0 ? '60px' : '50px',
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: index === currentIndex ? '2px solid #fff' : 'none',
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={prevSlide}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ←
            </button>
            <span style={{ color: '#fff', fontSize: '14px', minWidth: '40px', textAlign: 'center' }}>
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Right side: Quote and Author */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px', justifyContent: 'space-between' }}>
          <p
            style={{
              fontSize: 'clamp(18px,2.5vw,28px)',
              lineHeight: '1.5em',
              color: '#fff',
              fontFamily: 'Funnel Display',
              fontWeight: 400,
              margin: 0,
            }}
          >
            {current.quote}
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <img
              src={current.image}
              alt={current.author}
              style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff', margin: 0 }}>{current.author}</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: '4px 0 0 0' }}>{current.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners section */}
      <div style={{ maxWidth: '1296px', width: '100%', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', margin: 0, textAlign: 'center' }}>Some Of Our Partners:</p>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Altech Autonomous</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Kenya Flying Labs</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>VunaChain</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Umbrella</span>
        </div>
      </div>
    </section>
  );
}