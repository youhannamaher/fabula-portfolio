import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Video, Share2, Palette, Zap, Target, MousePointer2, Camera, Layout } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Video Editing': Video,
  'Content Production': Zap,
  'Brand Storytelling': Target,
  'Social Media Content': Share2,
  'Instagram Visual Identity': Palette,
  'Campaign Concepts': Layout,
  'Creative Direction': Camera,
  'Multimedia Content Management': MousePointer2,
};

const Skills: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="section-title">Creative Focus & Skills</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          A combination of creative vision and technical proficiency to deliver high-impact digital content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profile.skills.map((skill, index) => {
          const Icon = iconMap[skill.title] || Zap;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{skill.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
