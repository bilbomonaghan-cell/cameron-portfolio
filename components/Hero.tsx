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

      {/* Pixel character — CSS slime blob */}
      <motion.div
        className="mb-8 relative"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative w-24 h-20 mx-auto">
          {/* Body */}
          <div
            className="absolute inset-0 rounded-t-full"
            style={{
              background: 'linear-gradient(180deg, #f4900c 0%, #d4700a 100%)',
              border: '3px solid #7c3a04',
              boxShadow: '3px 3px 0 #7c3a04, inset 0 -4px 0 rgba(0,0,0,0.2)',
            }}
          />
          {/* Eyes */}
          <div className="absolute top-5 left-5 w-3 h-3 bg-[#0a0602] rounded-sm" />
          <div className="absolute top-5 right-5 w-3 h-3 bg-[#0a0602] rounded-sm" />
          {/* Eye shine */}
          <div className="absolute top-4 left-6 w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-4 right-6 w-1 h-1 bg-white rounded-full" />
          {/* Smile */}
          <div
            className="absolute"
            style={{
              bottom: '22px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '8px',
              borderBottom: '2px solid #0a0602',
              borderLeft: '2px solid #0a0602',
              borderRight: '2px solid #0a0602',
              borderRadius: '0 0 8px 8px',
            }}
          />
          {/* Shadow */}
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full"
            style={{ background: 'rgba(0,0,0,0.4)', filter: 'blur(4px)' }}
          />
        </div>
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
