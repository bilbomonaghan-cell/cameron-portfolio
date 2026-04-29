'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

// ─── Role definitions ────────────────────────────────────────────────────────

const ROLES = [
  {
    id: 'webdev',
    label: 'WEB DEV',
    icon: '🌐',
    class: 'Front-End Mage',
    tagline: 'From raw HTML to 3D canvas — the full front-to-back web stack.',
    color: '#f4900c',
    skills: [
      { name: 'HTML / CSS / SASS', level: 96, icon: '📄' },
      { name: 'JavaScript / TypeScript', level: 95, icon: '⚡' },
      { name: 'React / Next.js', level: 93, icon: '⚛' },
      { name: 'Node.js / REST APIs', level: 90, icon: '🔧' },
      { name: 'WebSockets / Realtime', level: 82, icon: '📡' },
      { name: 'Canvas / 3D (WebGL)', level: 72, icon: '🎮' },
    ],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'SASS', 'Vite', 'Framer Motion', 'Three.js', 'Socket.io', 'Express'],
  },
  {
    id: 'devops',
    label: 'DEV OPS',
    icon: '⚙',
    class: 'Infrastructure Ranger',
    tagline: 'High-signal pipelines, container orchestration, and keeping things alive at 3am.',
    color: '#4ade80',
    skills: [
      { name: 'Docker / Containers', level: 90, icon: '🐳' },
      { name: 'CI/CD Pipelines', level: 87, icon: '🔄' },
      { name: 'GCP / Cloud Run', level: 84, icon: '☁' },
      { name: 'Kubernetes (k8s)', level: 80, icon: '🎛' },
      { name: 'Datadog / Observability', level: 80, icon: '📊' },
      { name: 'Alerting & On-Call', level: 76, icon: '🔔' },
    ],
    tools: ['Docker', 'Kubernetes', 'GCP', 'Cloud Run', 'GitHub Actions', 'Datadog', 'Terraform', 'Linux'],
  },
  {
    id: 'architecture',
    label: 'SYSTEMS',
    icon: '🏰',
    class: 'Architect Lord',
    tagline: 'Microservices to monoliths — designing systems that scale without collapsing.',
    color: '#a78bfa',
    skills: [
      { name: 'Systems Architecture', level: 90, icon: '🏗' },
      { name: 'API Design', level: 88, icon: '🔌' },
      { name: 'Microservices / Monoliths', level: 86, icon: '🧩' },
      { name: 'Database Design', level: 84, icon: '🗄' },
      { name: 'Distributed Systems', level: 82, icon: '🌐' },
      { name: 'Security & Auth', level: 78, icon: '🛡' },
    ],
    tools: ['PostgreSQL', 'SQLite', 'Redis', 'REST', 'GraphQL', 'gRPC', 'Event-driven Arch', 'CQRS'],
  },
  {
    id: 'customer',
    label: 'SIGNAL',
    icon: '📡',
    class: 'Customer Whisperer',
    tagline: 'Translating messy real-world problems into things engineers can actually build.',
    color: '#f472b6',
    skills: [
      { name: 'Problem Solving', level: 96, icon: '🧩' },
      { name: 'Requirements Gathering', level: 92, icon: '📋' },
      { name: 'Customer Discovery', level: 90, icon: '🔍' },
      { name: 'Technical Communication', level: 90, icon: '💬' },
      { name: 'Team Lead / Mentor', level: 88, icon: '👑' },
      { name: 'Product Sense', level: 85, icon: '🎯' },
    ],
    tools: ['Stakeholder Interviews', 'User Stories', 'Roadmapping', 'Sprint Planning', 'Documentation', 'Code Review'],
  },
] as const;

type RoleId = (typeof ROLES)[number]['id'];

// ─── Skill bar ───────────────────────────────────────────────────────────────

function SkillBar({
  name,
  level,
  icon,
  delay,
  color,
}: {
  name: string;
  level: number;
  icon: string;
  delay: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });
  const [animated, setAnimated] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      transition={{ duration: 0.35, delay }}
      onAnimationComplete={() => setAnimated(true)}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-pixel text-xs" style={{ color: '#fef3dc', fontSize: '9px' }}>
          {icon} {name}
        </span>
        <span className="font-pixel text-xs" style={{ color, fontSize: '9px' }}>
          LVL {level}
        </span>
      </div>
      <div className="pixel-bar-track">
        <motion.div
          className="pixel-bar-fill"
          style={{
            background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} 12px, ${color}99 12px, ${color}99 16px)`,
            boxShadow: `0 0 8px ${color}88`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Skills() {
  const [activeRole, setActiveRole] = useState<RoleId>('webdev');
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const role = ROLES.find((r) => r.id === activeRole)!;

  return (
    <section id="skills" className="py-24 px-4 pixel-bg">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="font-pixel text-xs mb-3" style={{ color: '#9a7c5a' }}>
            ✦ CHARACTER ✦
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl section-title" style={{ color: '#ffc933' }}>
            SELECT YOUR CLASS
          </h2>
          <p className="mt-4 text-sm max-w-sm mx-auto" style={{ color: '#9a7c5a' }}>
            Pick a role to see the skill tree
          </p>
        </motion.div>

        {/* Role selector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {ROLES.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRole(r.id)}
              className="font-pixel transition-all"
              style={{
                fontSize: '9px',
                padding: '10px 16px',
                border: `2px solid ${activeRole === r.id ? r.color : '#3a2010'}`,
                background: activeRole === r.id ? `${r.color}22` : '#120901',
                color: activeRole === r.id ? r.color : '#9a7c5a',
                boxShadow: activeRole === r.id ? `3px 3px 0 ${r.color}55, 0 0 16px ${r.color}33` : '2px 2px 0 #1a0c02',
                transform: activeRole === r.id ? 'translate(-1px, -1px)' : 'none',
                cursor: 'pointer',
              }}
            >
              {r.icon} {r.label}
            </button>
          ))}
        </motion.div>

        {/* Role content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Character class card */}
            <div className="pixel-window mb-6 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ borderColor: role.color, boxShadow: `4px 4px 0 ${role.color}44` }}
            >
              <div
                className="text-4xl w-14 h-14 flex items-center justify-center flex-shrink-0"
                style={{
                  background: '#0a0602',
                  border: `2px solid ${role.color}55`,
                  boxShadow: `2px 2px 0 ${role.color}33`,
                }}
              >
                {role.icon}
              </div>
              <div>
                <div className="font-pixel text-xs mb-1" style={{ color: role.color, fontSize: '10px' }}>
                  CLASS: {role.class.toUpperCase()}
                </div>
                <p className="text-sm" style={{ color: '#fef3dc' }}>{role.tagline}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Skill bars */}
              <div className="pixel-window p-6" style={{ borderColor: `${role.color}88` }}>
                <div
                  className="font-pixel text-xs mb-6 pb-3"
                  style={{ color: role.color, borderBottom: '2px solid #1a0c02', fontSize: '9px' }}
                >
                  ⚔ SKILL TREE
                </div>
                {role.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={i * 0.08}
                    color={role.color}
                  />
                ))}
              </div>

              {/* Tools + stats */}
              <div className="pixel-window p-6" style={{ borderColor: `${role.color}88` }}>
                <div
                  className="font-pixel text-xs mb-6 pb-3"
                  style={{ color: role.color, borderBottom: '2px solid #1a0c02', fontSize: '9px' }}
                >
                  🛠 EQUIPPED ITEMS
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {role.tools.map((tool, i) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                      className="font-pixel"
                      style={{
                        fontSize: '8px',
                        padding: '4px 8px',
                        background: '#0a0602',
                        border: `1px solid ${role.color}44`,
                        color: role.color,
                      }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>

                {/* Player stats card */}
                <div
                  className="p-4 mt-2"
                  style={{ background: '#0a0602', border: '2px solid #1a0c02' }}
                >
                  <div className="font-pixel text-xs mb-3" style={{ color: '#9a7c5a', fontSize: '8px' }}>
                    PLAYER STATS
                  </div>
                  {[
                    ['CLASS', role.class],
                    ['GUILD', 'Scout Platform'],
                    ['REGION', 'Mount Pleasant, SC'],
                    ['SCHOOL', 'CofC — Computing in the Arts'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-xs py-0.5">
                      <span style={{ color: '#9a7c5a' }}>{label}</span>
                      <span style={{ color: '#fef3dc' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
