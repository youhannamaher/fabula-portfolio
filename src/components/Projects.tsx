import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ExternalLink, Layers, Wrench } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div>
      <div className="mb-16">
        <h2 className="section-title">Projects & Practice Book</h2>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Curated selection of professional projects and creative initiatives demonstrating brand storytelling and multimedia production.
        </p>
      </div>

      <div className="space-y-12">
        {profile.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group flex flex-col lg:flex-row gap-10 bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50"
          >
            <div className="lg:w-1/3">
              <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">{project.category}</span>
              <h3 className="text-3xl md:text-4xl mb-6 group-hover:text-accent transition-colors">{project.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                     <Layers size={16} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium">Role: {project.role}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                     <Wrench size={16} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium">Tools: {project.tools}</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:border-l lg:pl-10 border-gray-100">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                Objective & Creative Approach
              </h4>
              <p className="text-gray-500 leading-relaxed text-lg italic">
                "{project.objective}"
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-50 flex flex-wrap gap-4 no-print">
                {/* Details view removed for now */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
