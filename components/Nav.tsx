'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const NAV_LINKS = [
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'QUESTS' },
  { href: '#experience', label: 'RESUME' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(10,6,2,0)', 'rgba(10,6,2,0.97)'],
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      style={{ backgroundColor: bg }}
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(244,144,12,0.15)' }}
      >
        <a
          href="#"
          className="font-pixel text-xs"
          style={{
            color: '#ffc933',
            textShadow: '2px 2px 0 #7c3a04',
            fontSize: '9px',
          }}
        >
          🍁 CM
        </a>
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-pixel transition-colors hover:text-amber-300"
              style={{ color: '#9a7c5a', fontSize: '8px' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
