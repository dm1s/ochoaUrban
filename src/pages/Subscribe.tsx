import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building, Activity, Users } from 'lucide-react';

export default function Subscribe() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden blueprint-grid">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none -z-10">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200" 
          alt="Blueprint" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-y-12">
        {/* Hero Content */}
        <div className="col-span-12 lg:col-span-7 xl:col-start-2">
          <div className="mb-6 inline-block">
            <span className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1">Newsletter</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] mb-8 tracking-tight"
          >
            Stay Ahead of the <br/>
            <span className="text-primary italic">Urban Policy Curve</span>
          </motion.h1>
          
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12">
            Get strategic insights on CDBG-DR, economic revitalization, and community policy delivered to your inbox.
          </p>

          {/* Subscription Form */}
          <div className="max-w-md">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <label className="block font-label text-xs font-medium text-outline-variant uppercase tracking-wider mb-2" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="name@agency.gov"
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-lg font-body transition-colors placeholder:text-outline-variant outline-none"
                />
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <button className="bg-primary text-on-primary font-label uppercase tracking-widest text-sm font-bold px-10 py-4 rounded-sm hover:bg-primary-container transition-all active:scale-95 flex items-center group shadow-lg">
                  Join the Collaborative
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
              
              <p className="text-xs text-outline-variant font-label leading-normal">
                By joining, you agree to our privacy policy and terms. We promise architectural precision, never spam.
              </p>
            </form>
          </div>
        </div>

        {/* Side Feature */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-surface-container-low p-12 space-y-10 relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 -z-10"></div>
            
            <div>
              <h3 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-4">Inside the Dispatch</h3>
              <ul className="space-y-6">
                {[
                  { icon: <Building size={20} />, title: 'Policy Blueprints', desc: 'In-depth analysis of zoning reform and transit-oriented development.' },
                  { icon: <Activity size={20} />, title: 'Economic Trends', desc: 'Data-driven reports on urban investment and neighborhood revitalization.' },
                  { icon: <Users size={20} />, title: 'Community Voices', desc: 'Interviews with local leaders and urban innovators globally.' }
                ].map((item) => (
                  <li key={item.title} className="flex items-start space-x-4">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-outline-variant/30">
              <blockquote className="font-headline italic text-lg text-on-surface-variant leading-snug">
                "The Ochoa Dispatch is the only newsletter that treats urban planning like the craft it truly is."
              </blockquote>
              <cite className="block mt-4 font-label text-[10px] uppercase tracking-widest text-outline-variant">— Director of Planning, Metro West</cite>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Builders */}
      <section className="bg-white/50 backdrop-blur-sm py-24 mt-32 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h2 className="font-headline text-2xl mb-4">Curated Insights</h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                We skip the fluff. Every edition is curated by our principal consultants to ensure you only get information that impacts your practice.
              </p>
            </div>
            <div>
              <h2 className="font-headline text-2xl mb-4">Global Network</h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Join over 15,000 planners, developers, and civic leaders who rely on Ochoa for their weekly briefing on urban excellence.
              </p>
            </div>
            <div>
              <h2 className="font-headline text-2xl mb-4">Zero Distraction</h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                A minimalist, high-readability layout designed for busy professionals. No ads, just architectural clarity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
