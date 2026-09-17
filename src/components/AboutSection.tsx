import { motion } from 'framer-motion';
import { User, Shield, Award, HardHat, Building2 } from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white text-brand-charcoal relative overflow-hidden architectural-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-3 mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
            <span>About Us &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Built on Professional Engineering &amp; Client Trust
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-green to-brand-gold rounded-full"></div>
        </motion.div>

        {/* Story & Construction Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Company Story */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-5"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-brand-charcoal">
              Our Journey &amp; Engineering Heritage
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {COMPANY_INFO.story}
            </p>
            <div className="p-5 sm:p-6 rounded-xl bg-brand-lightGreen/60 border border-brand-green/30 space-y-2.5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-brand-green font-bold text-sm uppercase tracking-wide">
                <Shield className="w-5 h-5" />
                <span>Foundational Commitment</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                They work on residential homes, interior works, and various structural construction projects—emphasizing non-negotiable quality, customer satisfaction, and disciplined execution.
              </p>
            </div>
          </motion.div>

          {/* Right Column: High-Quality Construction Image Card with Hover Parallax */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
                alt="KKR Structural Construction Site" 
                className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent"></div>
              
              {/* Image Floating Info Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-1.5 group-hover:bg-white/15 transition-all">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <HardHat className="w-4 h-4 text-brand-green" />
                  <span>Structural &amp; Civil Engineering Excellence</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold font-display text-white">
                  Precision Concrete &amp; Commercial Development
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Executing raft bottom mat, beam shuttering, Mivan formwork, and multi-story residential structures with civil engineering expertise.
                </p>
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-brand-green text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Field Operations</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Our KKR Pillars Section - 4 Grid Cards */}
        <div className="pt-4 sm:pt-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-brand-charcoal">
              Our KKR Pillars
            </h3>
            <p className="text-sm text-gray-500">
              Directly managed by experienced civil engineering professionals with proven field expertise.
            </p>
          </motion.div>

          {/* 4 Card Grid with Exact 100px x 100px Rounded Profile Photo Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-brand-green/60 transition-all group flex flex-col justify-between text-center"
              >
                <div className="space-y-3.5">
                  {/* Exact 100px x 100px Rounded Profile Photo Placeholder Container */}
                  <div className="relative w-[100px] h-[100px] mx-auto rounded-full overflow-hidden bg-brand-lightGreen border-2 border-brand-green/30 group-hover:border-brand-green transition-all shadow-md flex items-center justify-center text-brand-green group-hover:scale-105 shrink-0">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-brand-lightGreen via-emerald-50 to-emerald-100/60">
                      <User className="w-12 h-12 text-brand-green drop-shadow-sm" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-display text-brand-charcoal group-hover:text-brand-green transition-colors">
                      {member.name}
                    </h4>
                    <div className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-0.5 leading-snug">
                      {member.role}
                    </div>
                    <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-brand-lightGreen text-brand-green text-[11px] font-bold border border-brand-green/20">
                      {member.experience}
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed text-center">
                    {member.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Civil Engineering Focus</span>
                  <Award className="w-4 h-4 text-brand-green" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
