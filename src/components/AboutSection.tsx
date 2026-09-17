import { motion } from 'framer-motion';
import { UserCheck, Shield, Award, HardHat, Building2 } from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-brand-charcoal relative overflow-hidden architectural-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4 mb-16"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Company Story */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-brand-charcoal">
              Our Journey &amp; Engineering Heritage
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {COMPANY_INFO.story}
            </p>
            <div className="p-6 rounded-xl bg-brand-lightGreen/60 border border-brand-green/30 space-y-3 shadow-sm hover:shadow-md transition-shadow">
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
                className="w-full h-[420px] object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent"></div>
              
              {/* Image Floating Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-2 group-hover:bg-white/15 transition-all">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <HardHat className="w-4 h-4 text-brand-green" />
                  <span>Structural &amp; Civil Engineering Excellence</span>
                </div>
                <h4 className="text-lg font-bold font-display text-white">
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

        {/* Leadership & Engineering Team Section */}
        <div className="pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-brand-charcoal">
              Civil Engineering Leadership
            </h3>
            <p className="text-sm text-gray-500">
              Directly managed by experienced civil engineering professionals with proven field experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-brand-green/50 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-lightGreen text-brand-green flex items-center justify-center font-bold text-xl group-hover:bg-brand-green group-hover:text-white transition-colors border border-brand-green/20">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-brand-charcoal group-hover:text-brand-green transition-colors">
                      {member.name}
                    </h4>
                    <div className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-0.5">
                      {member.role}
                    </div>
                    <div className="inline-block mt-2 px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">
                      {member.experience}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
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
