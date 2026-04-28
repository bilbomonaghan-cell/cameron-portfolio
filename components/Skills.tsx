'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const TECH_SKILLS = [
  { name: 'JavaScript / TypeScript', level: 95, icon: '⚡' },
  { name: 'Full Stack Dev', level: 92, icon: '🗡' },
  { name: 'Web Development', level: 90, icon: '🌐' },
  { name: 'AI / Agent Systems', level: 88, icon: '🤖' },
  { name: 'Systems Architecture', level: 85, icon: '🏰' },
  { name: 'Python', level: 80, icon: '🐍' },
];

const SOFT_SKILLS = [
  { name: 'Problem Solving', level: 96, icon: '🧩' },
  { name: 'Team Lead & Mentor', level: 90, icon: '👑' },
  { name: 'Requirements Gathering', level: 88, icon: '📜' },
  { name: 'Customer Relations', level: 86, icon: '🤝' },
];

function SkillBar({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(level), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [inView, level, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: delay * 0.8 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-pixel text-xs" style={{ color: '#fef3dc' }}>
          {icon} {name}
        </span>
        <span
          className="font-pixel text-xs"
          style={{ color: '#ffc933' }}
        >
          LVL {level}
        </span>
      </div>
      <div className="pixel-bar-track">
        <div
          className="pixel-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-4 pixel-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-pixel text-xs mb-3" style={{ color: '#9a7c5a' }}>
            ✦ CHARACTER ✦
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl section-title" style={{ color: '#ffc933' }}>
            SKILL TREE
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tech skills */}
          <div className="pixel-window p-6">
            <div
              className="font-pixel text-xs mb-6 pb-3"
              style={{
                color: '#ffc933',
                borderBottom: '2px solid #7c3a04',
                textShadow: '2px 2px 0 #7c3a04',
              }}
            >
              ⚔ COMBAT SKILLS
            </div>
            {TECH_SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
            ))}
          </div>

          {/* Soft skills */}
          <div className="pixel-window p-6">
            <div
              className="font-pixel text-xs mb-6 pb-3"
              style={{
                color: '#ffc933',
                borderBottom: '2px solid #7c3a04',
                textShadow: '2px 2px 0 #7c3a04',
              }}
            >
              ✨ PASSIVE SKILLS
            </div>
            {SOFT_SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
            ))}

            {/* XP card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-6 p-4"
              style={{
                background: '#0a0602',
                border: '2px solid #7c3a04',
                borderRadius: 0,
              }}
            >
              <div className="font-pixel text-xs mb-3" style={{ color: '#9a7c5a' }}>
                PLAYER STATS
              </div>
              <div className="space-y-1">
                {[
                  ['CLASS', 'Full Stack Dev'],
                  ['GUILD', 'Scout Platform'],
                  ['REGION', 'Mount Pleasant, SC'],
                  ['CERT', 'Full Stack Web Dev'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span style={{ color: '#9a7c5a' }}>{label}</span>
                    <span style={{ color: '#fef3dc' }}>{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
