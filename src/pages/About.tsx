import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Verified, Leaf, Landmark, BarChart3 } from 'lucide-react';
import { TEAM } from '../constants';
import { Newsletter } from '../components/Newsletter';

export default function About() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-start-4 md:col-span-8">
            <span className="font-label text-xs tracking-[0.2em] text-primary font-semibold uppercase mb-4 block">Our Identity</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-5xl md:text-7xl text-on-surface leading-tight mb-8"
            >
              Urban Planning Leadership & Expertise | Ochoa Urban Collaborative
            </motion.h1>
          </div>
          <div className="col-span-12 md:col-start-4 md:col-span-6">
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              Planning, community and economic development firm that provides strategy, policy, and implementation expertise to transform modern landscapes into thriving, equitable environments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Image */}
      <section className="w-full mb-32 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="h-[600px] w-full bg-surface-container relative overflow-hidden rounded-lg shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              alt="Urban masterplan" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-40">
        <div className="mb-20">
          <h2 className="font-headline text-3xl text-on-surface mb-2">The Leadership</h2>
          <div className="h-1 w-20 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-12">
          {TEAM.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-label text-xs tracking-widest text-outline-variant uppercase font-bold">{member.role}</span>
              <h3 className="font-headline text-2xl text-on-surface mt-2">{member.name}</h3>
              <p className="font-body text-sm text-on-surface-variant mt-4 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Engagements */}
      <section className="max-w-7xl mx-auto px-8 mb-40 border-t border-outline-variant/30 pt-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <h2 className="font-headline text-3xl text-on-surface mb-8">Certifications & Industry Credentials</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Verified />, label: 'AICP', sub: 'Certified Planners' },
                { icon: <Leaf />, label: 'LEED AP', sub: 'Sust. Design' },
                { icon: <Landmark />, label: 'CNU-A', sub: 'New Urbanism' },
                { icon: <BarChart3 />, label: 'CEP', sub: 'Env. Planner' }
              ].map((cert) => (
                <div key={cert.label} className="bg-surface-container-low p-6 rounded-sm flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    {cert.icon}
                  </div>
                  <span className="font-label text-sm font-bold text-on-surface">{cert.label}</span>
                  <span className="font-body text-[10px] text-outline-variant uppercase tracking-wider mt-1">{cert.sub}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <h2 className="font-headline text-3xl text-on-surface mb-8">Speaking Engagements & Publications</h2>
            <div className="space-y-8">
              {[
                { year: '2024', title: 'Keynote: The Future of Transit-Oriented Development', venue: 'Global Urban Planning Summit, Singapore' },
                { year: '2023', title: '"Equity in the Modern Landscape"', venue: 'Urban Strategy Review Quarterly, Vol. 14' },
                { year: '2023', title: 'Panelist: Circular Economic Models for Resilient Cities', venue: 'APA National Conference' },
                { year: '2022', title: 'Lecture Series: Biophilic Integration in High-Density Housing', venue: 'Harvard Graduate School of Design' }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 group cursor-default">
                  <div className="text-primary font-label font-bold text-lg">{item.year}</div>
                  <div>
                    <h4 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="font-body text-sm text-on-surface-variant mt-2 italic">{item.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <h2 className="font-headline text-4xl text-on-surface leading-snug mb-8">Our Commitment to Global Communities</h2>
              <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                We believe that urban planning is a fundamental tool for social equity. Our commitment transcends blueprints; we focus on the lived experience of every resident in the districts we design.
              </p>
              <ul className="space-y-4">
                {['Data-driven social impact assessment', 'Inclusive stakeholder engagement protocols', 'Climate-resilient infrastructure standards'].map((text) => (
                  <li key={text} className="flex items-start space-x-4">
                    <CheckCircle className="text-primary mt-1" size={20} />
                    <span className="font-body text-on-surface">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-start-7 md:col-span-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-container/20 rounded-sm -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200" 
                  alt="Community engagement" 
                  className="w-full h-[400px] object-cover rounded-sm shadow-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-outline-variant/30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
