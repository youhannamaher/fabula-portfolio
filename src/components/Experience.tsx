import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Calendar, Building2, Circle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="section-title">Professional Experience</h2>
      </div>

      <div className="relative border-l-2 border-gray-100 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
        {profile.experience.map((exp, index) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2rem+1px+24px)] md:-left-[calc(3rem+1px+24px)] top-0 w-12 h-12 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-accent shadow-sm">
               <Circle size={12} fill="currentColor" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  <Building2 size={16} />
                  <span className="font-medium text-gray-600">{exp.company}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium w-fit">
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
