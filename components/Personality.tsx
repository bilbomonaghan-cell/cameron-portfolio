'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TRAITS = [
  {
    icon: '🤝',
    label: 'Collaborative by Default',
    desc: "I think better in rooms with other people in them. Cross-functional ownership, shared context, and actually talking to each other — that's when the best work happens.",
    color: '#f4900c',
  },
  {
    icon: '🎩',
    label: 'Many Hats, No Complaints',
    desc: "When I wear hats across the business — product, ops, customer, code — my technical decisions get sharper. I'm not a specialist who ignores the context around them.",
    color: '#ffc933',
  },
  {
    icon: '🦷',
    label: 'Needs Something to Sink Into',
    desc: "I need a problem with real stakes. Something hard enough that I'm still chewing on it after work. Shallow wins don't really do it for me.",
    color: '#4ade80',
  },
  {
    icon: '🔥',
    label: 'Finds the People Who Care',
    desc: "The credential doesn't matter — the give-a-damn does. I gravitate toward people who actually care if the thing ships well and who raise the bar without being asked.",
    color: '#a78bfa',
  },
  {
    icon: '⛵',
    label: 'Has a Backup Plan',
    desc: "If none of the above is available? I've done the math. A blue-water capable sailboat, a few months of provisions, and a heading toward the Caribbean is genuinely on the table.",
    color: '#38bdf8',
  },
];

export default function Personality() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="font-pixel text-xs mb-3" style={{ color: '#9a7c5a' }}>
            ✦ PLAYER TRAITS ✦
          </div>
          <h2
            className="font-pixel text-xl sm:text-2xl section-title"
            style={{ color: '#ffc933' }}
          >
            WHERE I THRIVE
          </h2>
          <p className="mt-4 text-sm" style={{ color: '#9a7c5a' }}>
            What a good fit actually looks like.
          </p>
        </motion.div>

        <div className="space-y-4">
          {TRAITS.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.09 }}
              className="pixel-window p-5 flex items-start gap-4"
              style={{
                borderColor: trait.color,
                boxShadow: `3px 3px 0 ${trait.color}44`,
              }}
            >
              <div
                className="text-2xl w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{
                  background: '#0a0602',
                  border: `2px solid ${trait.color}55`,
                }}
              >
                {trait.icon}
              </div>
              <div>
                <div
                  className="font-pixel mb-2"
                  style={{ color: trait.color, fontSize: '9px' }}
                >
                  {trait.label}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#9a7c5a' }}>
                  {trait.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
