import React from 'react';
import { motion } from 'motion/react';

export function Newsletter() {
  return (
    <section className="max-w-5xl mx-auto px-8 my-40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary-container p-12 md:p-20 text-center rounded-sm text-on-primary-container"
      >
        <span className="font-label text-xs tracking-[0.3em] opacity-80 uppercase block mb-6">Stay Informed</span>
        <h2 className="font-headline text-3xl md:text-5xl mb-10">Join our urban policy newsletter</h2>
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Email address"
            className="flex-grow bg-white/10 border-b border-on-primary-container/30 border-t-0 border-x-0 text-on-primary-container placeholder:text-on-primary-container/50 focus:ring-0 focus:border-on-primary-container transition-all px-0 py-3 font-body outline-none"
          />
          <button className="bg-white text-primary px-8 py-3 rounded-sm font-label font-bold uppercase tracking-wider hover:bg-surface transition-colors">
            Join
          </button>
        </div>
      </motion.div>
    </section>
  );
}
