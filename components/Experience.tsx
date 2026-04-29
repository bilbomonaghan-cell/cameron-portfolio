'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HIGHLIGHTS = [
  {
    icon: '🤖',
    title: 'Scout',
    sub: 'Full Stack Engineer',
    desc: 'Building AI agent infrastructure and tooling for the evolving agentic platform.',
    color: '#f4900c',
  },
  {
    icon: '📜',
    title: 'Jack Russell SIC',
    sub: 'Full Stack Web Developer',
    desc: 'Certification + production projects across industries. Division of Tabula Rasa HealthCare.',
    color: '#ffc933',
  },
  {
    icon: '🎓',
    title: 'College of Charleston',
    sub: 'B.S. Computing in the Arts',
    desc: 'Interdisciplinary degree bridging computer science and creative disciplines — digital media, interactive design, and computational thinking.',
    color: '#4ade80',
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 px-4 pixel-bg">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="font-pixel text-xs mb-3" style={{ color: '#9a7c5a' }}>
            ✦ RESUME ✦
          </div>
          <h2
            className="font-pixel text-xl sm:text-2xl section-title"
            style={{ color: '#ffc933' }}
          >
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Highlight cards */}
        <div className="space-y-4 mb-10">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
              className="pixel-window p-5 flex items-start gap-4"
              style={{ borderColor: item.color, boxShadow: `3px 3px 0 ${item.color}44` }}
            >
              <div
                className="text-2xl w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{
                  background: '#0a0602',
                  border: `2px solid ${item.color}55`,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div className="font-pixel text-xs mb-0.5" style={{ color: item.color, fontSize: '9px' }}>
                  {item.title}
                </div>
                <div className="font-pixel text-xs mb-2" style={{ color: '#fef3dc', fontSize: '8px' }}>
                  {item.sub}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#9a7c5a' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm mb-6" style={{ color: '#9a7c5a' }}>
            Full timeline, all roles, and recommendations on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/cameron-monaghan-569a16a3"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn"
          >
            VIEW FULL HISTORY ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
