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
    <div style={{ width: '100%', display: 'flex', gap: '80px', alignItems: 'stretch', flexWrap: 'wrap' }}>
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
            <span style={{ color: '#fff', fontSize: '16px', minWidth: '40px', textAlign: 'center' }}>
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

      <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '40px', justifyContent: 'space-between' }}>
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
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#fff', margin: 0 }}>{current.author}</p>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', margin: '4px 0 0 0' }}>{current.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
