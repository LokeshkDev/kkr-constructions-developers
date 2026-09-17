import React from 'react';
import { Phone, Mail, MapPin, HardHat, ShieldCheck, ChevronUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal text-white border-t border-brand-green/30 pt-16 pb-12 relative overflow-hidden architectural-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-brand-green flex items-center justify-center text-white font-bold text-xl border border-white/10">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white tracking-tight">
                  KKR <span className="text-brand-green">CONSTRUCTION</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                  &amp; Developers
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.subheading} Roots tracing back to around 2024, delivering residential, commercial, and Mivan formwork concrete solutions.
            </p>

            <div className="pt-2 text-[11px] text-gray-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Civil Engineering Professional Execution</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#hero" className="hover:text-brand-green transition-colors">Homepage Top</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-green transition-colors">About KKR &amp; Leadership</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-green transition-colors">Core Construction Services</a>
              </li>
              <li>
                <a href="#mivan" className="hover:text-brand-green transition-colors">Mivan Formwork Technology</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-green transition-colors">Project Showcase &amp; Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
              Registered Contact Info
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-green">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <span key={idx}>{phone}</span>
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
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 hover:bg-brand-green text-white text-xs font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

