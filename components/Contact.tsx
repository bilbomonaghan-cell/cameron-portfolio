'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SOCIALS = [
  {
    icon: '✉',
    label: 'EMAIL',
    value: 'monaghancameron@gmail.com',
    href: 'mailto:monaghancameron@gmail.com',
    color: '#f4900c',
  },
  {
    icon: '🐙',
    label: 'GITHUB',
    value: '@monaghancj',
    href: 'https://github.com/monaghancj',
    color: '#ffc933',
  },
  {
    icon: '💼',
    label: 'LINKEDIN',
    value: 'cameron-monaghan',
    href: 'https://www.linkedin.com/in/cameron-monaghan-569a16a3',
    color: '#f4900c',
  },
  {
    icon: '📸',
    label: 'INSTAGRAM',
    value: '@papamonabrow',
    href: 'https://instagram.com/papa.monabrow',
    color: '#ffc933',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="py-24 px-4"
      style={{ background: '#080401' }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="font-pixel text-xs mb-3" style={{ color: '#9a7c5a' }}>
            ✦ GET IN TOUCH ✦
          </div>
          <h2
            className="font-pixel text-xl sm:text-2xl section-title"
            style={{ color: '#ffc933' }}
          >
            CONTACT
          </h2>
          <p className="mt-6 text-sm" style={{ color: '#9a7c5a' }}>
            Open to interesting conversations, collaborations, and builds.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.12 } }}
              className="pixel-window p-5 flex items-center gap-4 no-underline group"
              style={{ borderColor: s.color, boxShadow: `4px 4px 0 ${s.color}44` }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: '#0a0602',
                  border: `2px solid ${s.color}55`,
                  boxShadow: `2px 2px 0 ${s.color}33`,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div
                  className="font-pixel text-xs mb-1"
                  style={{ color: s.color, fontSize: '9px' }}
                >
                  {s.label}
                </div>
                <div className="text-sm" style={{ color: '#fef3dc' }}>
                  {s.value}
                </div>
              </div>
              <div
                className="ml-auto font-pixel text-xs opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ color: s.color }}
              >
                ↗
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8"
          style={{ borderTop: '2px solid #1a0c02' }}
        >
          <div
            className="font-pixel text-xs mb-2"
            style={{ color: '#9a7c5a', fontSize: '8px' }}
          >
            🍁 CAMERON MONAGHAN © {new Date().getFullYear()} 🍁
          </div>
          <div className="text-xs" style={{ color: '#4a3020' }}>
            Built with Next.js · Deployed on Vercel
          </div>
        </motion.div>
      </div>
    </section>
  );
}
