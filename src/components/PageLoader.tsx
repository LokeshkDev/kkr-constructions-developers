import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Hammer } from 'lucide-react';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulated smooth progress counter for construction site initialization
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 10;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#F6F9F7] flex items-center justify-center p-4 overflow-hidden architectural-grid"
        >
          {/* Ambient Blueprint Scanning Motion Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,138,60,0.06)_0,transparent_70%)]"></div>

          <div className="relative max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200 text-center space-y-6">
            
            {/* Logo Container with Construction Scanning Beam */}
            <div className="relative inline-block py-2">
              
              {/* Construction Blueprint Laser Scan Line */}
              <motion.div
                initial={{ top: '0%' }}
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-green to-transparent z-20 shadow-[0_0_8px_#008A3C]"
              />

              {/* Pulsing Official KKR Logo */}
              <motion.img
                src="/logo.png"
                alt="KKR Construction & Developers"
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: [0.95, 1.02, 0.95], opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-16 sm:h-20 w-auto object-contain mx-auto filter drop-shadow-md"
              />
            </div>

            {/* Construction Motion Indicator */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest">
                <span>Initializing Project Blueprint</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Engineering Excellence &amp; Concrete Solutions
              </p>
            </div>

            {/* Construction Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-200 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-green via-brand-emerald to-brand-gold rounded-full relative"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Subtle sheen highlight */}
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <div className="flex justify-between text-[11px] font-bold text-gray-500 pt-0.5">
                <span>Civil Engineering Readiness</span>
                <span className="text-brand-green font-mono">{Math.min(progress, 100)}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
