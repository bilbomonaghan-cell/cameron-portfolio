'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PROJECTS = [
  {
    icon: '🤖',
    title: 'Scout Platform',
    subtitle: 'AI Agent Tools',
    description:
      'Full-time contributor building the ever-evolving Scout agent platform — tools and infrastructure for the modern AI agent space. Systems architecture, product development, and pushing the frontier of what agents can do.',
    tags: ['TypeScript', 'AI Agents', 'Systems Arch', 'Product'],
    color: '#f4900c',
    link: 'https://scoutos.com',
    linkLabel: 'VISIT SCOUT',
  },
  {
    icon: '🧙',
    title: 'Bilbo / Nanoclaw',
    subtitle: 'Personal AI Assistant',
    description:
      'A forked and heavily customized personal AI assistant running in Docker containers. Memory, scheduling, multi-channel messaging, and a growing suite of tools. Always evolving, always helpful.',
    tags: ['TypeScript', 'Docker', 'Node.js', 'Claude SDK'],
    color: '#ffc933',
    link: 'https://github.com/monaghancj',
    linkLabel: 'VIEW GITHUB',
  },
  {
    icon: '🚐',
    title: 'Sprinter Van Build',
    subtitle: '2022 Mercedes Sprinter 250',
    description:
      'Converting a 170" wheelbase Sprinter into a fully off-grid adventure rig. Custom wood structures, 12V electrical system with LiFePO4 batteries, solar, inverter, and a Raspberry Pi for system management.',
    tags: ['Electrical', 'Raspberry Pi', '12V Systems', 'Fabrication'],
    color: '#4ade80',
    link: null,
    linkLabel: null,
  },
  {
    icon: '🏠',
    title: 'Home Renovation',
    subtitle: 'New Bathroom Addition',
    description:
      'Full bathroom addition from the ground up — framing, plumbing rough-in, electrical, tile, and finish work. Designing and building spaces that work as well as they look.',
    tags: ['Construction', 'Design', 'Plumbing', 'Electrical'],
    color: '#f4900c',
    link: null,
    linkLabel: null,
  },
  {
    icon: '⚓',
    title: 'Boston Whaler Remodel',
    subtitle: '22ft Edgewater 2022',
    description:
      'Marine electrical and wiring overhaul on a 22-foot Edgewater. Clean 12V runs, custom rigging, and getting every system dialed in for time on the water.',
    tags: ['Marine Electrical', '12V', 'Fabrication'],
    color: '#ffc933',
    link: null,
    linkLabel: null,
  },
  {
    icon: '🍓',
    title: 'Raspberry Pi Projects',
    subtitle: 'Hardware Tinkering',
    description:
      'Ongoing experiments with Raspberry Pi — home automation, Venus OS for van energy monitoring, custom sensors, and whatever interesting problem needs a tiny Linux box.',
    tags: ['Python', 'Linux', 'IoT', 'Automation'],
    color: '#4ade80',
    link: null,
    linkLabel: null,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.15 } }}
      className="pixel-window p-6 flex flex-col group cursor-default"
      style={{
        borderColor: project.color,
        boxShadow: `4px 4px 0 ${project.color}55`,
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center"
          style={{
            background: '#0a0602',
            border: `2px solid ${project.color}66`,
            boxShadow: `2px 2px 0 ${project.color}33`,
          }}
        >
          {project.icon}
        </div>
        <div>
          <h3
            className="font-pixel text-xs leading-relaxed"
            style={{ color: project.color, textShadow: `2px 2px 0 rgba(0,0,0,0.5)` }}
          >
            {project.title}
          </h3>
          <p className="text-xs mt-1" style={{ color: '#9a7c5a' }}>
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#fef3dc' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-pixel text-xs px-2 py-1"
            style={{
              background: '#0a0602',
              border: `1px solid ${project.color}55`,
              color: project.color,
              fontSize: '8px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn self-start"
          style={{
            background: project.color,
            borderColor: '#ffc933',
            fontSize: '8px',
            padding: '8px 14px',
          }}
        >
          {project.linkLabel} ↗
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-4" style={{ background: '#080401' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-pixel text-xs mb-3" style={{ color: '#9a7c5a' }}>
            ✦ QUEST LOG ✦
          </div>
          <h2
            className="font-pixel text-xl sm:text-2xl section-title"
            style={{ color: '#ffc933' }}
          >
            PROJECTS
          </h2>
          <p className="mt-6 text-sm max-w-xl mx-auto" style={{ color: '#9a7c5a' }}>
            Active quests — from AI platforms to van builds. Always building something.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
