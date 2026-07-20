'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

// Only real, verified client testimonials belong here — no placeholder/demo entries.
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Before Blimpy, our marketing spend was a complete black box. They rebuilt our tracking architecture from the ground up, integrating all our platforms into one reliable system so we finally know exactly which campaigns are driving revenue',
    author: 'Mohammed A Alsayed',
    role: 'CEO, VunaChain',
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({ name, size }: { name: string; size: number }) {
  return (
    <div
      role="img"
      aria-label={name}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'rgba(255,31,0,0.15)',
        border: '1px solid rgba(255,31,0,0.4)',
        color: '#ff8a70',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.36,
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      {initials(name)}
    </div>
  );
}

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = testimonials.length > 1;

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
        {hasMultiple && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'space-between', minWidth: '150px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {testimonials.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show testimonial from ${t.author}`}
                  style={{
                    width: index === currentIndex ? '60px' : '50px',
                    height: index === currentIndex ? '60px' : '50px',
                    borderRadius: '50%',
                    background: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    outline: index === currentIndex ? '2px solid #fff' : 'none',
                    outlineOffset: '2px',
                  }}
                >
                  <Avatar name={t.author} size={index === currentIndex ? 60 : 50} />
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
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
                aria-label="Next testimonial"
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
        )}

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
            <Avatar name={current.author} size={50} />
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
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>Altech Autonomous</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>Kenya Flying Labs</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>VunaChain</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>Umbrella</span>
        </div>
      </div>
    </section>
  );
}
