import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, ShieldCheck, Zap} from 'lucide-react';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
  onOpenQuoteModal?: (service?: string, mode?: 'quote' | 'inspection') => void;
}

const TYPING_PHRASES = [
  "7–10 Days Per Floor.",
  "30–40% Faster Completion.",
  "Monolithic Casting with Zero Plaster.",
  "Laser-Aligned Aluminum Formwork.",
  "Earthquake-Resistant RCC Shear Walls."
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Fast snappy typing effect (40ms typing, 25ms deleting)
  useEffect(() => {
    const fullText = TYPING_PHRASES[phraseIdx];
    const typingSpeed = isDeleting ? 25 : 45;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Pause when word is fully typed
          const pauseTimer = setTimeout(() => setIsDeleting(true), 1800);
          return () => clearTimeout(pauseTimer);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIdx]);

  const handleCtaClick = () => {
    if (onNavigate) {
      onNavigate('mivan');
    } else {
      const el = document.querySelector('#mivan');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 lg:pt-32 pb-6 bg-brand-charcoal text-white overflow-hidden">
      
      {/* 1. Single Static Banner with Clear Original Background Image (NO Color Overlays) */}
      <div className="relative flex items-center py-6 sm:py-10 lg:py-14">
        
        {/* Background Image - 100% Original without any Color Overlay - Optimized for LCP */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/homepage-banner-kkr-construction-developers.png" 
            alt="KKR Construction Mivan Formwork Site"
            loading="eager"
            // @ts-ignore
            fetchpriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-center scale-100"
          />
        </div>

        {/* Slide Content with Text Animation - Compact Banner Height Ending Below Single Button */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl space-y-4 sm:space-y-5"
          >

            {/* Main Title with Fast Typing Dynamic Highlight & Ultra-Crisp Contrast Shadow */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]"
            >
              Rapid Project Completion. <br />
              <span className="text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_10px_rgba(0,0,0,1)] inline-flex items-center min-h-[1.2em]">
                {currentText}
                <span className="inline-block w-1 sm:w-1.5 h-7 sm:h-11 bg-amber-400 ml-1 animate-pulse align-middle rounded-xs"></span>
              </span>
            </motion.h1>

            {/* Subheading with Text Shadow for pure image visibility */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-white text-xs sm:text-base lg:text-lg max-w-2xl leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_8px_rgba(0,0,0,1)]"
            >
              Utilizing lightweight reusable aluminum formwork for 30–40% faster execution, smooth monolithic concrete finishes, and high seismic resistance.
            </motion.p>

            {/* Animated Interactive CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3"
            >
              {/* Primary Action Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCtaClick}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-2xl hover:shadow-brand-green/50 flex items-center justify-center gap-2.5 border border-emerald-400/40 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Discover Mivan Tech</span>
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-white/20 to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              </motion.button>

            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* 2. SINGLE HORIZONTAL ROW of 3 Fact Cards right below the banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Roots */}
          <div className="p-5 sm:p-6 rounded-[4px] bg-brand-darkSlate/95 backdrop-blur-md border border-white/15 hover:border-brand-green/70 transition-all shadow-2xl group flex flex-col justify-between hover:-translate-y-1">
            <div className="space-y-3">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-[4px] bg-brand-green/20 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-white">Roots ~2024</div>
                  <div className="text-xs font-semibold text-gray-400 mt-0.5">Established in Thiruvallur</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Founded by Mr. Mohan Ram with a commitment to professional civil engineering standards.
              </p>
            </div>
          </div>

          {/* Card 2: Leadership Experience */}
          <div className="p-5 sm:p-6 rounded-[4px] bg-brand-darkSlate/95 backdrop-blur-md border border-white/15 hover:border-brand-gold/70 transition-all shadow-2xl group flex flex-col justify-between hover:-translate-y-1">
            <div className="space-y-3">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-[4px] bg-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-colors shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-white">13+ &amp; 8+ Years</div>
                  <div className="text-xs font-semibold text-gray-400 mt-0.5">Civil Engineering Leadership</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Managed by Mr. Thangavel (13 yrs) &amp; Mr. Pradeep (8 yrs) alongside founder Mr. Mohan Ram (8+ yrs).
              </p>
            </div>
          </div>

          {/* Card 3: Mivan Cycle */}
          <div className="p-5 sm:p-6 rounded-[4px] bg-brand-darkSlate/95 backdrop-blur-md border border-white/15 hover:border-brand-green/70 transition-all shadow-2xl group flex flex-col justify-between hover:-translate-y-1">
            <div className="space-y-3">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-[4px] bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold font-display text-white">7–10 Days</span>
                    <span className="text-[10px] sm:text-xs text-emerald-400 font-extrabold uppercase tracking-wider">MIVAN CYCLE</span>
                  </div>
                  <div className="text-xs font-semibold text-gray-400 mt-0.5">Aluminum Formwork System</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Company-profile claim: 30–40% faster than traditional brickwork with high structural strength.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
