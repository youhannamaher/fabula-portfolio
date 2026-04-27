import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Mail, Video, User, Briefcase, Award } from 'lucide-react';
import { profile } from '../data/profile';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Skills', href: '#skills', icon: <Award size={18} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <Video size={18} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
      scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3 text-xl font-serif font-bold tracking-tight text-primary">
          <img src="images/logo.png" alt="FA Logo" className="w-10 h-10 rounded-full object-cover border border-gray-100" />
          <span>{profile.name.split(' ')[0]}<span className="text-accent">.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300 flex items-center gap-2"
          >
            <FileText size={16} />
            CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 text-lg font-medium text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-xl text-center font-medium flex items-center justify-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={20} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
