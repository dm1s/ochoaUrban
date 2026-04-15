import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, Globe, Mail, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Impact', path: '/impact' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight text-primary font-headline">
          Ochoa Urban Collaborative
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-label text-xs font-semibold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/subscribe" className={`transition-colors hover:text-primary ${location.pathname === '/subscribe' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>
            Subscribe
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-sm font-label text-xs font-semibold tracking-widest hover:bg-primary-container transition-all">
            Schedule a Consultation
          </button>
          <button className="md:hidden text-on-surface">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-16">
          <div className="mb-8 md:mb-0">
            <div className="text-lg font-bold text-primary font-headline mb-2">Ochoa Urban Collaborative</div>
            <p className="text-slate-500 font-body text-xs uppercase tracking-widest">
              © 2024 Ochoa Urban Collaborative. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest text-slate-500">
            <Link to="/expertise" className="hover:text-primary transition-colors">Expertise</Link>
            <Link to="/impact" className="hover:text-primary transition-colors">Impact</Link>
            <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/subscribe" className="hover:text-primary transition-colors">Newsletter</Link>
          </div>
          
          <div className="flex space-x-6 mt-8 md:mt-0 text-slate-400">
            <Globe size={20} className="cursor-pointer hover:text-primary transition-colors" />
            <Building2 size={20} className="cursor-pointer hover:text-primary transition-colors" />
            <Mail size={20} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
