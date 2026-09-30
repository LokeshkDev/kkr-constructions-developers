import React from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Phone, HardHat, ArrowRight, Building2, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: (serviceTitle?: string, mode?: 'quote' | 'inspection') => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | KKR Construction & Developers"
        description="The requested page could not be found on KKR Construction & Developers. Browse our civil engineering services, Mivan technology solutions, or contact our team."
        canonicalUrl="/404"
        noIndex={true}
      />

      <section className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-offWhite via-white to-brand-offWhite">
        <div className="max-w-3xl w-full text-center">
          
          {/* Construction Blueprint Graphic Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-brand-navy/5 text-brand-navy border-2 border-dashed border-brand-green/40 mb-8 relative shadow-inner"
          >
            <HardHat className="w-12 h-12 sm:w-14 sm:h-14 text-brand-gold animate-bounce" />
            <span className="absolute -top-3 -right-3 bg-brand-green text-white text-xs font-black px-2.5 py-1 rounded-full shadow-md">
              404
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight mb-4">
              Blueprint Not Found
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed mb-8">
              The page or structure you are looking for has been moved, demolished, or never existed on our site map. Let's redirect you back to solid ground.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
          >
            <button
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-navy text-white text-sm font-bold rounded-lg hover:bg-brand-navy/90 transition-all shadow-md active:scale-95"
            >
              <Home className="w-4 h-4 text-brand-gold" />
              <span>Back to Homepage</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal('General Consultation', 'quote')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-green text-white text-sm font-bold rounded-lg hover:bg-brand-green/90 transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Get Free Consultation</span>
            </button>
          </motion.div>

          {/* Quick Nav Directory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="border-t border-gray-200/80 pt-8"
          >
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Or Explore Popular Sections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {/* Services Card */}
              <div 
                onClick={() => onNavigate('services')}
                className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-lightGreen flex items-center justify-center text-brand-green">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-green transition-colors">
                  Our Services
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Residential, Commercial, Interior & Concrete works.
                </p>
              </div>

              {/* Mivan Card */}
              <div 
                onClick={() => onNavigate('mivan')}
                className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-brand-gold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                  Mivan Technology
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Monolithic aluminum formwork & 7-day floor cycles.
                </p>
              </div>

              {/* Projects Card */}
              <div 
                onClick={() => onNavigate('projects')}
                className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-navy">
                    <Compass className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-navy group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-navy transition-colors">
                  Project Gallery
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  View completed construction sites & portfolio.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
