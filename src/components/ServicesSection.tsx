import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Compass, Hammer, ShieldCheck, HardHat, Users, CheckCircle2, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { SERVICES, WHY_CHOOSE_KKR, ServiceItem } from '../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
  Compass: <Compass className="w-7 h-7" />,
  Hammer: <Hammer className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  HardHat: <HardHat className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

export const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-brand-offWhite text-brand-charcoal relative border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-3 mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Our Core Construction &amp; Engineering Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Specialized solutions delivered with civil engineering precision, quality materials, and client-focused execution.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-green to-brand-gold rounded-full"></div>
        </motion.div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {SERVICES.map((service: ServiceItem, idx: number) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-2xl hover:border-brand-green/60 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-xl bg-brand-lightGreen text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors border border-brand-green/20">
                  {iconMap[service.iconName] || <Building2 className="w-7 h-7" />}
                </div>

                <div>
                  <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-brand-charcoal mt-0.5 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-700">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100">
                <button
                  onClick={scrollToContact}
                  className="w-full py-2.5 rounded bg-brand-offWhite group-hover:bg-brand-green text-brand-charcoal group-hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-gray-200 group-hover:border-transparent active:scale-95"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose KKR Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-charcoal text-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden architectural-grid-dark"
        >
          <div className="max-w-3xl space-y-3 mb-8 sm:mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/30">
              <span>Why Choose KKR</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
              Grounding Quality in Engineering Standards
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              We focus strictly on source-supported principles: durability, professional management, and long-term client value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative z-10">
            {WHY_CHOOSE_KKR.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-green/60 transition-all hover:bg-white/10 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-brand-green/20 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors shrink-0">
                    {iconMap[item.iconName] || <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold font-display text-white group-hover:text-brand-green transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
