import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  PhoneCall, 
  X, 
  Headphones, 
  Calendar, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingSupportProps {
  onOpenQuoteModal: (service?: string, mode?: 'quote' | 'inspection') => void;
}

export const FloatingSupport: React.FC<FloatingSupportProps> = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when tapping outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const phoneClean = COMPANY_INFO.phones[0].replace(/\s+/g, '');
  const whatsappUrl = `https://wa.me/919940176461?text=${encodeURIComponent(
    'Hello KKR Construction, I would like to consult with your civil engineers regarding a construction project.'
  )}`;

  return (
    <div 
      ref={containerRef} 
      className="lg:hidden fixed bottom-5 right-5 z-40 select-none print:hidden"
    >
      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 15 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[88vw] max-w-xs bg-white rounded-[4px] shadow-2xl border border-gray-200 overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="bg-[#0A1118] text-white p-3.5 flex items-center justify-between border-b border-brand-green/30">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-7 h-7 rounded-[4px] bg-brand-green text-white flex items-center justify-center">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#0A1118] animate-pulse"></span>
                </div>
                <div>
                  <div className="text-xs font-bold font-display text-white">KKR Civil Support</div>
                  <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    <span>Online &amp; Available</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-[4px] bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close support menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Support Actions */}
            <div className="p-3 space-y-2 bg-gray-50/50">
              {/* WhatsApp Quick Chat */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-[4px] bg-emerald-500 hover:bg-emerald-600 text-white transition-all flex items-center justify-between shadow-xs group active:scale-98"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[4px] bg-white/20 flex items-center justify-center text-white">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold">Chat on WhatsApp</div>
                    <div className="text-[10px] text-emerald-100">Drawings &amp; Quick Q&amp;A</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Direct Call to Mr. Mohan Ram */}
              <a
                href={`tel:${phoneClean}`}
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-[4px] bg-white hover:bg-brand-lightGreen text-brand-charcoal hover:text-brand-green border border-gray-200 transition-all flex items-center justify-between shadow-xs group active:scale-98"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[4px] bg-brand-lightGreen text-brand-green flex items-center justify-center">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold">Call Mr. Mohan Ram</div>
                    <div className="text-[10px] text-gray-500 font-mono">{COMPANY_INFO.phones[0]}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Book On-Site Inspection Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuoteModal('Residential Construction (Villas / G+3)', 'inspection');
                }}
                className="w-full p-2.5 rounded-[4px] bg-white hover:bg-amber-50 text-brand-charcoal hover:text-brand-gold border border-gray-200 transition-all flex items-center justify-between shadow-xs group active:scale-98"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[4px] bg-amber-100 text-brand-gold flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold">Book Site Inspection</div>
                    <div className="text-[10px] text-gray-500">24–48 hr Site Visit</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Request Free Quote Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuoteModal('General Turnkey Build', 'quote');
                }}
                className="w-full p-2.5 rounded-[4px] bg-white hover:bg-brand-lightGreen text-brand-charcoal hover:text-brand-green border border-gray-200 transition-all flex items-center justify-between shadow-xs group active:scale-98"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[4px] bg-brand-lightGreen text-brand-green flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold">Request Free Quote</div>
                    <div className="text-[10px] text-gray-500">Instant Estimation</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-green text-white shadow-2xl flex items-center justify-center relative border-2 border-white focus:outline-none transition-colors hover:bg-brand-darkGreen"
        aria-label="Open support and contact options"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            {/* Pulsing indicator badge */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-gold rounded-full ring-2 ring-white animate-pulse"></span>
          </>
        )}
      </motion.button>
    </div>
  );
};

