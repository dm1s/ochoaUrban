import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, Building2, ShieldAlert, Home as HomeIcon, Users } from 'lucide-react';
import { ARTICLES } from '../constants';

export default function Insights() {
  const mainArticle = ARTICLES[0];
  const otherArticles = ARTICLES.slice(1);

  return (
    <main className="pt-24 pb-20">
      {/* Editorial Header */}
      <header className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-label text-xs font-bold tracking-widest text-primary uppercase">{mainArticle.category}</span>
            <span className="w-12 h-px bg-outline-variant"></span>
            <span className="font-label text-xs text-on-surface-variant uppercase">{mainArticle.readTime}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] mb-8 tracking-tight"
          >
            {mainArticle.title}
          </motion.h1>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-label text-xs uppercase tracking-tighter text-on-surface-variant">Authored by</span>
              <span className="font-body font-semibold text-on-surface">{mainArticle.author}</span>
              <span className="font-label text-[10px] text-on-surface-variant leading-none">{mainArticle.authorTitle}</span>
            </div>
            <div className="w-px h-10 bg-outline-variant"></div>
            <div className="flex flex-col">
              <span className="font-label text-xs uppercase tracking-tighter text-on-surface-variant">Published</span>
              <span className="font-body text-on-surface">{mainArticle.date}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Full Bleed Hero */}
      <section className="w-full mb-20">
        <div className="max-w-[1400px] mx-auto h-[600px] overflow-hidden bg-surface-container">
          <img 
            src={mainArticle.image} 
            alt={mainArticle.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-12">
            <div className="space-y-4">
              <h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary">In this article</h4>
              <ul className="space-y-3 font-label text-sm text-on-surface-variant">
                <li className="hover:text-primary transition-colors cursor-pointer">Post-Pandemic Resilience</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Equitable Zoning</li>
                <li className="hover:text-primary transition-colors cursor-pointer">The People-First Paradigm</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Future Frameworks</li>
              </ul>
            </div>
            
            <div className="space-y-4 pt-8 border-t border-outline-variant">
              <h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary">Related Expertise</h4>
              <ul className="space-y-4 font-body text-sm font-medium">
                <li><a className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors" href="#"><Building2 size={16} /> Economic Development</a></li>
                <li><a className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors" href="#"><ShieldAlert size={16} /> Disaster Recovery</a></li>
                <li><a className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors" href="#"><HomeIcon size={16} /> Affordable Housing</a></li>
                <li><a className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors" href="#"><Users size={16} /> Community Engagement</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Text Column */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          <p className="font-body text-xl leading-relaxed text-on-surface-variant font-medium first-letter:text-7xl first-letter:font-bold first-letter:font-headline first-letter:mr-3 first-letter:float-left first-letter:text-primary">
            The landscape of urban economic development is undergoing a seismic shift. No longer can cities rely on the traditional hubs of centralized commerce and industrial monolithic zones. The new urban blueprint demands a more nuanced, architectural approach to how we build fiscal and social resilience within our city centers.
          </p>
          
          <p className="font-body text-lg leading-[1.8] text-on-surface-variant">
            As we navigate the complexities of a post-pandemic world, the intersection of technology and physical space has never been more critical. We are seeing a move toward hyper-local economic ecosystems where micro-retail, shared creative workspaces, and adaptive reuse projects form the backbone of urban vitality.
          </p>

          <blockquote className="py-12 border-l-4 border-primary pl-8 my-16">
            <p className="font-headline text-3xl md:text-4xl italic text-on-surface leading-snug">
              "Urban design is about people first; economic value is merely the shadow cast by vibrant human interaction."
            </p>
            <cite className="block mt-6 font-label text-sm uppercase tracking-widest text-primary">— Principle of the Urban Collaborative</cite>
          </blockquote>

          <h2 className="font-headline text-3xl font-bold text-on-surface pt-6">The Shift Toward Equitable Zoning</h2>
          
          <p className="font-body text-lg leading-[1.8] text-on-surface-variant">
            Equitable zoning frameworks are the silent architects of the modern city. By reimagining how we designate land use, we can catalyze development that serves both the legacy residents and the incoming workforce. This means moving beyond the rigid "work-live-play" silos and creating integrated zones that foster spontaneous collaboration.
          </p>

          <figure className="my-16">
            <div className="bg-surface-container aspect-video overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1518005020250-675f0f0fd174?auto=format&fit=crop&q=80&w=1200" 
                alt="Data Visualization" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="mt-4 font-label text-xs text-center text-outline-variant italic">Data visualization showing human transit patterns in the downtown core.</figcaption>
          </figure>

          <div className="pt-16 mt-16 border-t border-outline-variant">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                  alt={mainArticle.author} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-2">{mainArticle.author}</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Manuel Ochoa is a nationally recognized expert in urban planning, affordable housing, and community development. With over 25 years of experience in federal policy and local implementation, he leads the Ochoa Urban Collaborative.
                </p>
                <a href="#" className="inline-block mt-4 font-label text-xs font-bold text-primary uppercase tracking-widest hover:underline">View Expertise Profile</a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Insights */}
      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="flex justify-between items-end mb-12">
          <h3 className="font-headline text-3xl font-bold text-on-surface">Related Insights</h3>
          <button className="font-label text-sm font-bold text-primary hover:underline uppercase tracking-widest">View All Articles</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-label text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{article.category}</span>
              <h4 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{article.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
