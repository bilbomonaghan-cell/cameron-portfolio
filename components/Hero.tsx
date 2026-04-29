'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TAGLINES = [
  'Full Stack Developer',
  'AI Systems Tinkerer',
  'Builder of Things',
  'Team Lead & Mentor',
];

const SPARKLE_POSITIONS = [
  { top: '15%', left: '8%', delay: 0 },
  { top: '25%', left: '88%', delay: 0.8 },
  { top: '65%', left: '5%', delay: 1.6 },
  { top: '70%', left: '92%', delay: 0.4 },
  { top: '40%', left: '95%', delay: 1.2 },
  { top: '85%', left: '12%', delay: 2.0 },
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = TAGLINES[taglineIndex];
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      const interval = setInterval(() => {
        setDisplayed(current.slice(0, i + 1));
        i++;
        if (i === current.length) {
          clearInterval(interval);
          timeout = setTimeout(() => setTyping(false), 2000);
        }
      }, 60);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    } else {
      // erase
      let j = current.length;
      const interval = setInterval(() => {
        setDisplayed(current.slice(0, j - 1));
        j--;
        if (j === 0) {
          clearInterval(interval);
          setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
          setTyping(true);
        }
      }, 35);
      return () => clearInterval(interval);
    }
  }, [taglineIndex, typing]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pixel-bg overflow-hidden">
      {/* Maple leaf sparkles */}
      {SPARKLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-xl pointer-events-none select-none"
          style={{ top: pos.top, left: pos.left }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: pos.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🍁
        </motion.div>
      ))}

      {/* Astronaut avatar */}
      <motion.div
        className="mb-8 relative"
        animate={{ y: [0, -14, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="160"
          height="180"
          viewBox="0 0 160 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="helmetGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f4900c" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f4900c" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="visorGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffc933" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c05000" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Ambient helmet glow */}
          <circle cx="80" cy="64" r="52" fill="url(#helmetGlow)" />

          {/* Helmet shell */}
          <circle cx="80" cy="64" r="42" fill="#fef3dc" stroke="#d4c4a0" strokeWidth="2" />

          {/* Visor */}
          <ellipse cx="80" cy="68" rx="27" ry="23" fill="#1a0a00" />
          <ellipse cx="80" cy="68" rx="27" ry="23" fill="url(#visorGrad)" />

          {/* Visor shine */}
          <ellipse
            cx="67"
            cy="57"
            rx="9"
            ry="5"
            fill="white"
            opacity="0.35"
            transform="rotate(-25 67 57)"
          />
          <ellipse cx="90" cy="73" rx="4" ry="3" fill="white" opacity="0.15" />

          {/* Visor frame */}
          <ellipse
            cx="80"
            cy="68"
            rx="27"
            ry="23"
            fill="none"
            stroke="#f4900c"
            strokeWidth="2.5"
          />

          {/* Collar ring */}
          <rect x="52" y="99" width="56" height="13" rx="6.5" fill="#d4c4a0" />
          <rect x="55" y="102" width="50" height="7" rx="3.5" fill="#fef3dc" />

          {/* Body suit */}
          <rect x="45" y="108" width="70" height="52" rx="18" fill="#fef3dc" stroke="#d4c4a0" strokeWidth="1.5" />

          {/* Left arm */}
          <rect
            x="20"
            y="112"
            width="27"
            height="22"
            rx="11"
            fill="#fef3dc"
            stroke="#d4c4a0"
            strokeWidth="1.5"
          />
          {/* Left glove */}
          <circle cx="24" cy="136" r="9" fill="#f4900c" stroke="#7c3a04" strokeWidth="1.5" />

          {/* Right arm */}
          <rect
            x="113"
            y="112"
            width="27"
            height="22"
            rx="11"
            fill="#fef3dc"
            stroke="#d4c4a0"
            strokeWidth="1.5"
          />
          {/* Right glove */}
          <circle cx="136" cy="136" r="9" fill="#f4900c" stroke="#7c3a04" strokeWidth="1.5" />

          {/* Chest control panel */}
          <rect x="56" y="118" width="48" height="30" rx="7" fill="#f4900c" stroke="#7c3a04" strokeWidth="1.5" />

          {/* Panel buttons */}
          <circle cx="68" cy="128" r="4.5" fill="#ffc933" filter="url(#glow)" />
          <circle cx="80" cy="128" r="4.5" fill="#4ade80" filter="url(#glow)" />
          <circle cx="92" cy="128" r="4.5" fill="#f87171" filter="url(#glow)" />

          {/* Panel mini-screen */}
          <rect x="60" y="137" width="40" height="7" rx="2" fill="#0a0602" />
          {/* Blinking green bar */}
          <rect x="62" y="138.5" width="20" height="4" rx="1" fill="#4ade80" opacity="0.85">
            <animate attributeName="width" values="20;28;20" dur="2s" repeatCount="indefinite" />
          </rect>

          {/* Boots */}
          <rect x="53" y="153" width="24" height="26" rx="9" fill="#fef3dc" stroke="#d4c4a0" strokeWidth="1.5" />
          <rect x="83" y="153" width="24" height="26" rx="9" fill="#fef3dc" stroke="#d4c4a0" strokeWidth="1.5" />
          <rect x="50" y="169" width="30" height="10" rx="5" fill="#f4900c" stroke="#7c3a04" strokeWidth="1.5" />
          <rect x="80" y="169" width="30" height="10" rx="5" fill="#f4900c" stroke="#7c3a04" strokeWidth="1.5" />
        </svg>

        {/* Floating shadow */}
        <motion.div
          className="mx-auto rounded-full"
          style={{
            width: 80,
            height: 12,
            background: 'rgba(0,0,0,0.35)',
            filter: 'blur(6px)',
            marginTop: -8,
          }}
          animate={{ scaleX: [1, 0.75, 1], opacity: [0.35, 0.2, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center px-4"
      >
        <h1
          className="font-pixel text-2xl sm:text-3xl md:text-4xl mb-2 leading-loose"
          style={{
            color: '#ffc933',
            textShadow: '3px 3px 0 #7c3a04, 0 0 30px rgba(255,201,51,0.4)',
          }}
        >
          CAMERON
        </h1>
        <h1
          className="font-pixel text-2xl sm:text-3xl md:text-4xl mb-6 leading-loose"
          style={{
            color: '#f4900c',
            textShadow: '3px 3px 0 #7c3a04, 0 0 30px rgba(244,144,12,0.4)',
          }}
        >
          MONAGHAN
        </h1>

        {/* Typing tagline */}
        <div
          className="font-pixel text-xs sm:text-sm h-8 flex items-center justify-center"
          style={{ color: '#fef3dc' }}
        >
          <span>{displayed}</span>
          <span
            className="ml-1 inline-block w-2 h-4 bg-maple-amber animate-blink"
            style={{ background: '#ffc933' }}
          />
        </div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-sm"
          style={{ color: '#9a7c5a' }}
        >
          📍 Mount Pleasant, SC
        </motion.p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-wrap gap-4 justify-center mt-10 px-4"
      >
        <a href="#projects" className="pixel-btn">
          ⚔ VIEW PROJECTS
        </a>
        <a href="#contact" className="pixel-btn" style={{ background: '#120901', color: '#f4900c', border: '2px solid #f4900c' }}>
          ✉ CONTACT ME
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-pixel text-xs"
        style={{ color: '#9a7c5a' }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ▼ SCROLL
      </motion.div>

      {/* Bottom border decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #f4900c, #ffc933, #f4900c, transparent)' }}
      />
    </section>
  );
}
