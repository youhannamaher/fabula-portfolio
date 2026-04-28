import React from 'react';
import { Mail, Link, FileText, Send, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

const Contact: React.FC = () => {
  return (
    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Let's create something together.</h2>
          <p className="text-white/60 text-lg mb-12 max-w-md">
            I'm currently looking for opportunities to collaborate on creative projects and brand management initiatives.
          </p>

          <div className="space-y-6">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Email</p>
                <p className="text-xl font-medium">{profile.email}</p>
              </div>
            </a>

            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#0077B5] transition-colors">
                <Link size={24} />
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold">LinkedIn</p>
                <p className="text-xl font-medium">Fabula Ayman</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Based In</p>
                <p className="text-xl font-medium">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 no-print">
          <h3 className="text-2xl font-semibold mb-8">Send a Quick Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Your Email</label>
              <input 
                type="email" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button className="w-full btn-primary !bg-accent !text-white flex items-center justify-center gap-2 group">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 no-print">
         <div className="flex items-center gap-6">
            <a 
              href={profile.cvPath} 
              download="FABULA_AYMAN_CV.pdf"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <FileText size={18} />
              <span>Download CV</span>
            </a>
         </div>
         <p className="text-white/40 text-sm">Design tailored for Master 1 Digital Creation application.</p>
      </div>
    </div>
  );
};

export default Contact;
