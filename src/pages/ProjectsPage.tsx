import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../data/companyData';
import { SEO } from '../components/SEO';
import { PROJECTS_PAGE_SCHEMAS, BASE_BUSINESS_SCHEMA } from '../data/seoSchemas';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal?: (serviceTitle?: string, mode?: 'quote' | 'inspection') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const currentProject = selectedProjectIdx !== null ? filteredProjects[selectedProjectIdx] : null;

  return (
    <div className="pt-20 sm:pt-24 pb-10 bg-brand-offWhite min-h-screen text-brand-charcoal w-full max-w-full overflow-x-hidden">
      <SEO 
        title="Project Gallery & Site Execution Portfolio | KKR Construction & Developers"
        description="View authentic site execution photos of our residential villas, commercial complexes, Mivan formwork staging, and heavy raft foundations across Tamil Nadu."
        canonicalUrl="/project-gallery"
        keywords="KKR Construction Projects, Construction Gallery Thiruvallur, Mivan Site Photos, Residential Project Portfolio, Concrete Works Execution"
        ogType="website"
        ogImage="/images/mivan/mivan-technology-beam-build-kkr-constructions-and-developers.png"
        schemaData={[BASE_BUSINESS_SCHEMA, ...PROJECTS_PAGE_SCHEMAS]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Project Gallery', url: '/project-gallery' }
        ]}
      />
      
      {/* 1. Header with Inline Breadcrumb + Title */}
      <section className="py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-brand-green transition-colors font-medium"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-brand-green font-bold">Project Gallery</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Project Gallery
          </h1>
        </div>

        {/* 2. Category Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedProjectIdx(null);
              }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-[4px] text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-green text-white shadow-md shadow-brand-green/30 scale-102 border border-emerald-400/30'
                  : 'bg-white text-gray-700 hover:bg-brand-lightGreen hover:text-brand-green border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Project Cards 2-Grid System */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProjectIdx(idx)}
                className="bg-white rounded-[4px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-green/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Project Image Container */}
                <div className="relative h-36 sm:h-52 lg:h-60 overflow-hidden bg-slate-900">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-[4px] bg-brand-charcoal/85 backdrop-blur-md border border-white/20 text-brand-gold text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* View Details Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-charcoal/40 backdrop-blur-xs">
                    <div className="p-2 sm:p-3 rounded-[4px] bg-brand-green text-white shadow-xl flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Click to View</span>
                    </div>
                  </div>

                  {/* Title Bar inside overlay */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-3 sm:left-4 sm:right-4">
                    <h3 className="text-xs sm:text-base font-bold font-display text-white group-hover:text-amber-300 transition-colors line-clamp-1 sm:line-clamp-none">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Details - Title and Action Only (No description) */}
                <div className="p-3 sm:p-4 bg-white border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-brand-green">
                  <span className="text-brand-charcoal font-display truncate pr-2 text-xs sm:text-sm font-bold group-hover:text-brand-green transition-colors">
                    {project.title}
                  </span>
                  <span className="shrink-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. Interactive Lightbox Modal with Full Navigation */}
      <AnimatePresence>
        {currentProject && selectedProjectIdx !== null && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto min-h-screen"
            onClick={() => setSelectedProjectIdx(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[4px] max-w-4xl w-full overflow-hidden shadow-2xl border border-gray-200 relative max-h-[92vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectIdx(null)}
                className="absolute top-3.5 right-3.5 z-30 p-2.5 rounded-[4px] bg-brand-charcoal/80 hover:bg-brand-charcoal text-white transition-colors backdrop-blur-md active:scale-95"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Navigation Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProjectIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1));
                }}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-[4px] bg-brand-charcoal/80 hover:bg-brand-green text-white transition-colors backdrop-blur-md active:scale-95 shadow-xl"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProjectIdx((prev) => (prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-[4px] bg-brand-charcoal/80 hover:bg-brand-green text-white transition-colors backdrop-blur-md active:scale-95 shadow-xl"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Modal Image Box */}
              <div className="relative w-full max-h-[78vh] overflow-hidden shrink-0 bg-slate-950 flex items-center justify-center">
                <img 
                  src={currentProject.imageUrl} 
                  alt={currentProject.title} 
                  decoding="async"
                  className="w-full max-h-[78vh] object-contain"
                />
              </div>

              {/* Modal Title Bar */}
              <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold font-display text-brand-charcoal truncate">
                  {currentProject.title}
                </h3>
                <span className="text-xs font-semibold text-gray-500 shrink-0 ml-3">
                  {selectedProjectIdx + 1} / {filteredProjects.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. Bottom Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 pb-4">
        <div className="rounded-[4px] bg-brand-charcoal text-white p-6 sm:p-8 relative overflow-hidden architectural-grid-dark shadow-2xl border border-brand-green/30">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Start Your Construction</span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display">
                Looking for Structural or Mivan Technology Construction?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                Get in touch with our civil engineering partners for site inspections, blueprints, and accurate cost estimates.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal('General Construction', 'quote') : onNavigate('contact')}
              className="px-6 py-3 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-xl hover:shadow-brand-green/40 flex items-center gap-2 active:scale-95 shrink-0 border border-emerald-400/30"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
