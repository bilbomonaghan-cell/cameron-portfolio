'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 px-4 pixel-bg">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pixel-window p-10 mt-12"
          >
            {/* Trophy icon */}
            <div className="text-5xl mb-6">🏆</div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: '#fef3dc' }}
            >
              Full work history — roles, companies, timelines, and achievements —
              all documented on LinkedIn.
            </p>

            <p className="text-sm mb-8" style={{ color: '#9a7c5a' }}>
              Highlights include current work building AI agent infrastructure at{' '}
              <span style={{ color: '#f4900c' }}>Scout</span>, full-stack
              development across industries, and a{' '}
              <span style={{ color: '#ffc933' }}>Full Stack Web Developer</span>{' '}
              certification from Jack Russell Software Innovation Center.
            </p>

            <a
              href="https://www.linkedin.com/in/cameron-monaghan-569a16a3"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn"
            >
              VIEW ON LINKEDIN ↗
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
