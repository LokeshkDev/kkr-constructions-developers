import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ChevronUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { getPageUrl } from '../App';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    } else {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-brand-charcoal text-white border-t border-brand-green/30 pt-16 pb-12 relative overflow-hidden architectural-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Official Logo & Brand Name */}
          <div className="lg:col-span-4 space-y-4">
            <a 
              href="/"
              onClick={(e) => handleNav(e, 'home')}
              className="inline-flex items-center gap-3.5 group text-left"
            >
              <img 
                src="/logo.png" 
                alt="KKR Construction & Developers Logo" 
                className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-md bg-white/95 p-2 rounded-[4px] border border-white/20 shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="font-display font-extrabold text-base sm:text-lg text-white group-hover:text-brand-green transition-colors leading-tight tracking-tight uppercase">
                  KKR Constructions
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-brand-green tracking-widest uppercase">
                  &amp; Developers
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm pt-1">
              {COMPANY_INFO.subheading} Roots tracing back to around 2024, delivering residential, commercial, and Mivan formwork concrete solutions.
            </p>

            <div className="pt-2 text-[11px] text-gray-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Civil Engineering Professional Execution</span>
            </div>
          </div>

          {/* Quick Navigation Links with SEO Clean URLs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
              Main Menu
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
               <li>
                <a href={getPageUrl('about')} onClick={(e) => handleNav(e, 'about')} className="hover:text-brand-green transition-colors text-left block">
                  About KKR &amp; Leadership
                </a>
              </li>
              <li>
                <a href={getPageUrl('services')} onClick={(e) => handleNav(e, 'services')} className="hover:text-brand-green transition-colors text-left block">
                  All Services
                </a>
              </li>
              <li>
                <a href={getPageUrl('mivan')} onClick={(e) => handleNav(e, 'mivan')} className="hover:text-brand-green transition-colors text-left block">
                  Mivan Formwork
                </a>
              </li>
              <li>
                <a href={getPageUrl('projects')} onClick={(e) => handleNav(e, 'projects')} className="hover:text-brand-green transition-colors text-left block">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href={getPageUrl('contact')} onClick={(e) => handleNav(e, 'contact')} className="hover:text-brand-green transition-colors text-left block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Core Services Column with Direct SEO Clean Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a 
                  href={getPageUrl('service-residential')} 
                  onClick={(e) => handleNav(e, 'service-residential')} 
                  className="hover:text-brand-green transition-colors text-left block"
                >
                  Residential Construction
                </a>
              </li>
              <li>
                <a 
                  href={getPageUrl('service-commercial')} 
                  onClick={(e) => handleNav(e, 'service-commercial')} 
                  className="hover:text-brand-green transition-colors text-left block"
                >
                  Commercial Construction
                </a>
              </li>
              <li>
                <a 
                  href={getPageUrl('service-interior')} 
                  onClick={(e) => handleNav(e, 'service-interior')} 
                  className="hover:text-brand-green transition-colors text-left block"
                >
                  Interior Design &amp; Space Planning
                </a>
              </li>
              <li>
                <a 
                  href={getPageUrl('service-concrete')} 
                  onClick={(e) => handleNav(e, 'service-concrete')} 
                  className="hover:text-brand-green transition-colors text-left block"
                >
                  Concrete &amp; Structural Works
                </a>
              </li>
              <li>
                <a 
                  href={getPageUrl('mivan')} 
                  onClick={(e) => handleNav(e, 'mivan')} 
                  className="hover:text-brand-green transition-colors text-left block"
                >
                  Mivan Formwork System
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
              Registered Contact Info
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-green break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5 text-gray-300">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-amber-300 font-mono">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} KKR Construction &amp; Developers. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/10 hover:bg-brand-green text-white text-xs font-semibold transition-colors border border-white/15"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
