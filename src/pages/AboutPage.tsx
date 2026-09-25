import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  HardHat, 
  User, 
  Award, 
  Target, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Users,
  Clock,
  TrendingUp,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/companyData';
import { SEO } from '../components/SEO';
import { ABOUT_PAGE_SCHEMAS } from '../data/seoSchemas';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal?: (service?: string, mode?: 'quote' | 'inspection') => void;
}

const whyChooseCardsData = [
  {
    id: "01",
    badge: "01 / Standard",
    title: "Quality Construction",
    description: "Uncompromising focus on material standards, concrete mix density, and structural integrity across every build phase.",
    feature: "Raft Foundation & RCC Grade Testing",
    imageUrl: "/images/whychoose/quality-construction-kkr-construction-developer.png",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "green"
  },
  {
    id: "02",
    badge: "02 / Leadership",
    title: "Technical Expertise",
    description: "Led by civil engineering professionals with up to 13 years of specialized experience in structural and Mivan technology.",
    feature: "13+ & 8+ Years Civil Engineering Experience",
    imageUrl: "/images/whychoose/technical-expertise-kkr-construction-developer.png",
    icon: <HardHat className="w-5 h-5" />,
    color: "gold"
  },
  {
    id: "03",
    badge: "03 / Trust",
    title: "Client-Centric Approach",
    description: "Transparent communications, regular progress updates, and personalized solutions tailored to individual project visions.",
    feature: "Direct Partner Communication & Updates",
    imageUrl: "/images/whychoose/client-centric-approach-kkr-construction-developer.png",
    icon: <Users className="w-5 h-5" />,
    color: "green"
  },
  {
    id: "04",
    badge: "04 / Discipline",
    title: "Professional Execution",
    description: "Methodical site management, strict adherence to engineering drawings, and disciplined safety standards.",
    feature: "100% Engineering Drawing Fidelity",
    imageUrl: "/images/whychoose/professional-execution-kkr-construction-developer.png",
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "gold"
  },
  {
    id: "05",
    badge: "05 / Speed",
    title: "Timely Completion",
    description: "Optimized construction cycles—utilizing advanced Mivan formwork systems to achieve rapid project turnaround.",
    feature: "7–10 Days Per Floor Cycle Time",
    imageUrl: "/images/whychoose/timely-completion-kkr-construction-developer.png",
    icon: <Clock className="w-5 h-5" />,
    color: "green"
  },
  {
    id: "06",
    badge: "06 / Longevity",
    title: "Long-Term Value",
    description: "Durable, low-maintenance structures engineered to retain visual appeal and high asset value over decades.",
    feature: "High Resale & Structural Longevity",
    imageUrl: "/images/whychoose/long-term-value-kkr-construction-developer.png",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "gold"
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const advantageScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollAdvantage = (direction: 'left' | 'right') => {
    if (advantageScrollRef.current) {
      const scrollAmount = advantageScrollRef.current.clientWidth * 0.8;
      advantageScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-10 bg-brand-offWhite min-h-screen text-brand-charcoal w-full max-w-full overflow-x-hidden">
      <SEO 
        title="About Us | KKR Construction & Developers - Engineering Leadership & Heritage"
        description="Learn about KKR Construction & Developers, established by Mr. Mohan Ram with managing civil engineers Mr. Thangavel (13 yrs exp) and Mr. Pradeep (8 yrs exp) in Thiruvallur, Tamil Nadu."
        canonicalUrl="/about"
        keywords="About KKR Construction, Civil Engineering Leadership, Thiruvallur Builders, Mohan Ram Construction, Thangavel Civil Engineer, Mivan Engineering Experts, Structural Contractors Tamil Nadu"
        ogType="article"
        ogImage="/about-banner-kkr-constrcutions-developer.png"
        schemaData={ABOUT_PAGE_SCHEMAS}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
      />
      
      {/* 1. Page Hero Banner with Authentic Site Banner Image & NO Color Overlay */}
      <section className="relative text-white py-10 sm:py-16 overflow-hidden min-h-[280px] sm:min-h-[320px] flex items-center">
        
        {/* Background Image - 100% Pure Image without Color Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/about-banner-kkr-constrcutions-developer.png" 
            alt="KKR Construction Project Site Execution"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-3"
          >
            {/* Breadcrumb with crisp contrast */}
            <div className="flex items-center gap-2 text-xs font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_1px_6px_rgba(0,0,0,1)]">
              <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-amber-300 transition-colors uppercase tracking-wider"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-amber-300 uppercase tracking-wider">About Us</span>
            </div>

            {/* Title with Ultra-Crisp Contrast Shadow */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_12px_rgba(0,0,0,1)] leading-tight">
              Engineering Heritage &amp; Client Trust
            </h1>

            {/* Subheading with Text Shadow */}
            <p className="text-white text-sm sm:text-lg leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_8px_rgba(0,0,0,1)] max-w-2xl">
              Founded on strict civil engineering principles, disciplined project execution, and specialized Mivan formwork technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. About Story - Left (Story) & Right (Office Image) */}
      <section className="py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Company Story */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
              <span>Who We Are</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight leading-tight">
              Engineered for Durability, Built on Client Trust
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {COMPANY_INFO.story}
            </p>

            <div className="p-4 sm:p-5 rounded-[4px] bg-brand-lightGreen/50 border border-brand-green/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-brand-green tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Civil Engineering Direct Supervision</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                All structural works, foundation footings, and Mivan formwork shuttering are supervised directly on-site by our qualified civil engineers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-brand-green">13+ &amp; 8+ Yrs</div>
                <div className="text-xs text-gray-600 font-semibold mt-0.5">Civil Engineering Experience</div>
              </div>
              <div className="p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-brand-gold">7–10 Days</div>
                <div className="text-xs text-gray-600 font-semibold mt-0.5">Floor Cycle via Mivan Formwork</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Office Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[4px] overflow-hidden shadow-2xl border border-gray-200 group bg-white">
              <img 
                src="/about-kkr-construction-developers.png" 
                alt="KKR Construction & Developers Office" 
                loading="lazy"
                decoding="async"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">Headquarters</div>
                <div className="text-sm sm:text-base font-bold font-display">{COMPANY_INFO.name}</div>
                <div className="text-xs text-gray-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-green" />
                  <span>{COMPANY_INFO.officeLocation}</span>
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-[4px] bg-brand-green text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 border border-emerald-400/30">
               <span>Registered Office</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Vision, Mission & Values Cards */}
      <section className="py-8 sm:py-12 bg-brand-charcoal text-white relative overflow-hidden architectural-grid-dark border-y border-brand-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/30">
              <span>Our Strategic Core</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              Vision, Mission &amp; Values
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              The foundational pillars that guide every residential, commercial, and structural endeavor we undertake.
            </p>
          </div>

          {/* 3 Standalone Frosted Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Card 1: Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-7 rounded-[4px] bg-brand-charcoal/90 backdrop-blur-md border border-white/20 hover:border-brand-green/80 transition-all flex flex-col justify-between group shadow-2xl"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-[4px] bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Future Horizon</span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">Our Vision</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
                <ul className="space-y-2 pt-3 border-t border-white/10 text-xs text-gray-300">
                  {COMPANY_INFO.visionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-7 rounded-[4px] bg-brand-charcoal/90 backdrop-blur-md border border-white/20 hover:border-brand-gold/80 transition-all flex flex-col justify-between group shadow-2xl"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-[4px] bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-colors">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Our Daily Drive</span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">Our Mission</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
                <ul className="space-y-2 pt-3 border-t border-white/10 text-xs text-gray-300">
                  {COMPANY_INFO.missionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 3: Core Engineering Values */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-7 rounded-[4px] bg-brand-charcoal/90 backdrop-blur-md border border-white/20 hover:border-brand-green/80 transition-all flex flex-col justify-between group shadow-2xl"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-[4px] bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Core Values</span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">Engineering Values</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Every residential, commercial, and structural endeavor is rooted in technical discipline and integrity.
                </p>
                <ul className="space-y-2 pt-3 border-t border-white/10 text-xs text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Precision Engineering:</strong> Strict drawing fidelity and load calculations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Mivan Technology:</strong> High-speed 7–10 day floor cycles with smooth concrete finish.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Transparent Execution:</strong> Direct partner supervision on all active sites.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Our KKR Pillars Section - 2x2 Grid with 4px rounded radius */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
            <span>Leadership Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Our KKR Pillars
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Directly managed by experienced civil engineering professionals with proven field expertise and site execution mastery.
          </p>
        </motion.div>

        {/* Highlighted Top Center Card: Founder Mr. Mohan Ram */}
        {(() => {
          const founder = TEAM_MEMBERS.find(m => m.isFounder) || TEAM_MEMBERS[0];
          const otherMembers = TEAM_MEMBERS.filter(m => !m.isFounder);
          return (
            <>
              {founder && (
                <motion.div 
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl mx-auto mb-8 sm:mb-10 bg-white rounded-[4px] overflow-hidden border-2 border-brand-green/40 shadow-xl hover:shadow-2xl hover:border-brand-green transition-all group flex flex-col sm:flex-row relative"
                >
                  {/* Portrait Visual Area */}
                  <div className="sm:w-2/5 relative min-h-[240px] sm:min-h-[280px] bg-slate-900 flex items-center justify-center overflow-hidden shrink-0">
                    {founder.imageUrl ? (
                      <img 
                        src={founder.imageUrl} 
                        alt={founder.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 architectural-grid-dark opacity-30"></div>
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-[4px] bg-gradient-to-tr from-brand-gold/40 via-emerald-500/20 to-brand-green/40 border-2 border-amber-300/40 p-2 shadow-2xl flex items-center justify-center group-hover:scale-105 group-hover:border-amber-400 transition-all duration-500">
                          <div className="w-full h-full rounded-[2px] bg-brand-charcoal/95 flex flex-col items-center justify-center text-amber-300 shadow-inner">
                            <User className="w-14 h-14 sm:w-16 sm:h-16 text-amber-300 drop-shadow-sm group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-extrabold tracking-widest uppercase text-amber-300 mt-1">Founder</span>
                          </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl pointer-events-none"></div>
                      </>
                    )}

                    {/* Soft gradient overlay at bottom of photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent pointer-events-none"></div>

                    {/* Founder Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-[4px] bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-amber-300/30">
                      <Award className="w-3.5 h-3.5" />
                      <span>Company Founder</span>
                    </div>
                  </div>

                  {/* Founder Content Area */}
                  <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-3 py-1 rounded-[4px] bg-amber-50 text-amber-800 text-xs font-extrabold uppercase tracking-wider border border-amber-300/40">
                          {founder.experience}
                        </span>
                        <div className="flex items-center gap-1 text-amber-600">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-charcoal group-hover:text-brand-green transition-colors">
                          {founder.name}
                        </h3>
                        <div className="text-xs sm:text-sm font-bold text-brand-gold uppercase tracking-wider mt-0.5">
                          {founder.role} &amp; Construction Director
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-1">
                        {founder.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold">
                      <div className="flex items-center gap-1.5 text-brand-green">
                        <Shield className="w-4 h-4" />
                        <span>Strategic Leadership &amp; Direction</span>
                      </div>
                      <span className="text-[11px] text-amber-700 font-bold px-2 py-0.5 rounded-[4px] bg-amber-50 border border-amber-200">
                        Head of Management
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 2x2 Grid for Other Leadership Members with Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {otherMembers.map((member, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-[4px] overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-brand-green/60 transition-all group flex flex-col sm:flex-row"
                  >
                    {/* Portrait Visual Area */}
                    <div className="sm:w-2/5 relative min-h-[230px] sm:min-h-[260px] bg-slate-900 flex items-center justify-center overflow-hidden shrink-0">
                      {member.imageUrl ? (
                        <img 
                          src={member.imageUrl} 
                          alt={member.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[4px] bg-gradient-to-tr from-brand-green/30 via-emerald-500/10 to-brand-gold/30 border-2 border-white/20 p-2 shadow-2xl flex items-center justify-center group-hover:scale-105 group-hover:border-brand-green transition-all duration-500">
                          <div className="w-full h-full rounded-[2px] bg-brand-charcoal/90 flex items-center justify-center text-brand-green shadow-inner">
                            <User className="w-14 h-14 text-brand-green/90 group-hover:text-amber-300 transition-colors" />
                          </div>
                        </div>
                      )}

                      {/* Soft gradient overlay at bottom of photo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent pointer-events-none"></div>

                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-[4px] bg-brand-charcoal/85 backdrop-blur-md border border-white/20 text-brand-gold text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                        Pillar 0{idx + 1}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="inline-block px-2.5 py-0.5 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-extrabold uppercase tracking-wider border border-brand-green/20">
                            {member.experience}
                          </span>
                          <Award className="w-4 h-4 text-brand-gold" />
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold font-display text-brand-charcoal group-hover:text-brand-green transition-colors mt-1">
                          {member.name}
                        </h3>

                        <div className="text-xs sm:text-sm font-bold text-brand-gold uppercase tracking-wider leading-snug">
                          {member.role}
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                          {member.description}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold">
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          );
        })()}
      </section>

      {/* 5. Creative "Why Choose KKR / The KKR Engineering Advantage" Section with Mobile/Tablet Carousel */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left max-w-3xl space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
              <span>The KKR Engineering Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-charcoal tracking-tight">
              Why Choose KKR Construction
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Every project is backed by structural safety, seasoned civil engineering leadership, and advanced construction technology.
            </p>
          </motion.div>

          {/* Mobile / Tablet Carousel Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0 self-center sm:self-end">
            <button
              onClick={() => scrollAdvantage('left')}
              className="p-2.5 rounded-[4px] bg-white hover:bg-brand-lightGreen text-brand-charcoal hover:text-brand-green transition-colors border border-gray-200 shadow-sm active:scale-95"
              aria-label="Previous Advantage Card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold font-mono text-gray-500 px-1.5">
              Swipe / Scroll
            </span>
            <button
              onClick={() => scrollAdvantage('right')}
              className="p-2.5 rounded-[4px] bg-white hover:bg-brand-lightGreen text-brand-charcoal hover:text-brand-green transition-colors border border-gray-200 shadow-sm active:scale-95"
              aria-label="Next Advantage Card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 In-Card Image Grid on Desktop / Carousel on Mobile & Tablet */}
        <div 
          ref={advantageScrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {whyChooseCardsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="w-[85vw] max-w-[340px] sm:w-[360px] lg:w-auto snap-center shrink-0 lg:shrink bg-white rounded-[4px] overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:border-brand-green/60 transition-all group flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent"></div>
                
                {/* Badge top-left */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[4px] bg-brand-charcoal/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
                  {item.badge}
                </div>

                {/* Floating Icon top-right */}
                <div className={`absolute top-3.5 right-3.5 w-10 h-10 rounded-[4px] flex items-center justify-center text-white shadow-lg backdrop-blur-md ${
                  item.color === 'green' ? 'bg-brand-green/90 border border-emerald-400/40' : 'bg-brand-gold/90 text-brand-charcoal border border-amber-300/40'
                }`}>
                  {item.icon}
                </div>

                {/* Bottom Overlay Title in Image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Engineering Feature Pill */}
                <div className="pt-2.5 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-green">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.feature}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 6. Call to Action Banner */}
      <section className="py-6 sm:py-8 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[4px] bg-gradient-to-r from-brand-green to-emerald-700 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Ready to Discuss Your Construction Project?
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              Connect directly with Mr. Mohan Ram, Mr. Thangavel, or Mr. Pradeep for technical consultation and structural estimates.
            </p>
          </div>
          {onOpenQuoteModal ? (
            <button
              onClick={() => onOpenQuoteModal('Residential Construction (Villas / G+3)', 'quote')}
              className="px-7 py-3.5 rounded-[4px] bg-white text-brand-charcoal font-bold text-sm uppercase tracking-wider hover:bg-brand-gold hover:text-brand-charcoal transition-all shadow-lg flex items-center gap-2 active:scale-95 shrink-0"
            >
              <span>Get Free Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-[4px] bg-white text-brand-charcoal font-bold text-sm uppercase tracking-wider hover:bg-brand-gold hover:text-brand-charcoal transition-all shadow-lg flex items-center gap-2 active:scale-95 shrink-0"
            >
              <span>Contact Our Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </section>

    </div>
  );
};
