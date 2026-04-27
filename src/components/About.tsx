import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group max-w-sm mx-auto lg:mx-0"
      >
        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200">
          <img 
            src={profile.profileImage} 
            alt={profile.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Fabula+Ayman';
            }}
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10 group-hover:bg-accent/20 transition-colors" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          {profile.about}
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent-soft text-accent">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-gray-500">{profile.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent-soft text-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Education</h3>
              <p className="text-gray-500">Ain Shams University Egypt & University of Poitiers France</p>
              <p className="text-sm text-gray-400 italic">Bachelor in International Business Administration</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent-soft text-accent">
              <Languages size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <span key={lang.name} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-gray-600">
                    <span className="font-semibold text-primary">{lang.name}:</span> {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
