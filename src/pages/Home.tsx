import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { Newsletter } from '../components/Newsletter';

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[800px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000" 
            alt="Urban Landscape" 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/90 via-on-surface/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-9 lg:col-span-8"
          >
            <span className="font-label text-primary-fixed-dim tracking-[0.2em] uppercase text-xs mb-6 block text-primary-container">
              Expert Urban Planning Firm
            </span>
            <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight mb-8">
              Strategic Urban Planning for Resilient Communities.
            </h1>
            <p className="text-white/80 text-xl font-light leading-relaxed mb-10 max-w-2xl">
              Specialized in CDBG-DR, economic revitalization, and community policy implementation for local governments and non-profits.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 font-medium flex items-center gap-2 hover:bg-primary-container transition-all">
                Schedule a Consultation <Calendar size={16} />
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 font-medium transition-all">
                View Our Projects
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 blueprint-grid pointer-events-none opacity-20"></div>
      </section>

      {/* Process Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block font-semibold">
              E-E-A-T Certified Methodology
            </span>
            <h2 className="font-headline text-4xl text-on-surface">Our Community Policy Development Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 -z-0"></div>
            
            {[
              { id: '01', title: 'Assessment & Data Analysis', desc: 'Rigorous quantitative and qualitative audits to establish a baseline for resilient growth.' },
              { id: '02', title: 'Strategic Policy Development', desc: 'Crafting actionable frameworks focused on economic revitalization, equity, and sustainability.' },
              { id: '03', title: 'Implementation & Compliance', desc: 'Navigating complex CDBG-DR requirements to ensure successful project execution.' }
            ].map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center mb-8 border-4 border-primary/10">
                  <span className="font-headline text-3xl text-primary">{step.id}</span>
                </div>
                <h3 className="font-headline text-xl mb-4">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-outline-variant/30 pb-6">
          <div>
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-2 block font-semibold">Proven Results</span>
            <h2 className="font-headline text-4xl">Economic Revitalization & Impact</h2>
          </div>
          <button className="text-primary font-bold text-sm uppercase tracking-widest hover:underline mt-4 md:mt-0">
            View All Case Studies
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  {study.category}
                </div>
              </div>
              <h3 className="font-headline text-2xl mb-3 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-on-surface-variant mb-6">{study.description}</p>
              <span className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Project Details <ArrowRight size={16} />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
