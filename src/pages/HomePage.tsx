import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  Home, 
  Compass, 
  Hammer,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, ServiceItem } from '../data/companyData';
import { HeroSection } from '../components/HeroSection';
import { SEO } from '../components/SEO';
import { HOME_PAGE_SCHEMAS } from '../data/seoSchemas';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal?: (service?: string, mode?: 'quote' | 'inspection') => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Hammer: <Hammer className="w-6 h-6" />,
};

// Curated Real Site Project Photos for Homepage Gallery
const HOMEPAGE_GALLERY = [
  {
    id: "hg-1",
    title: "Mivan Aluminum Formwork Modular Staging",
    category: "Mivan Technology",
    imageUrl: "/images/mivan/mivan-technology-beam-build-kkr-constructions-and-developers.png",
    description: "Laser-aligned 6061-T6 aluminum panels erected for rapid monolithic wall and deck casting."
  },
  {
    id: "hg-2",
    title: "High-Density RCC Monolithic Pouring",
    category: "Monolithic Casting",
    imageUrl: "/images/mivan/mivan-technology-beam-concreate-kkr-constructions-and-developers.png",
    description: "M25/M30 high-grade concrete pouring with mechanical needle vibration, eliminating voids and honeycombs."
  },
  {
    id: "hg-3",
    title: "Residential G+3 Building Turnkey Execution",
    category: "Residential Construction",
    imageUrl: "/images/services/residential-construction-service-detail-kkr-constrcutions-developer.png",
    description: "Full-scale structural RCC framework, premium facade elevations, and interior finishings."
  },
  {
    id: "hg-4",
    title: "Commercial Multi-Story Complex",
    category: "Commercial Projects",
    imageUrl: "/images/services/commercial-construction1-kkr-constrcutions-developer.png",
    description: "Multi-floor commercial infrastructure engineered for high footfall, banking, and office compliance."
  },
  {
    id: "hg-5",
    title: "Deck Formwork & High-Yield Steel Binding",
    category: "Structural Works",
    imageUrl: "/images/mivan/mivan-technology-slab-construction-kkr-constructions-and-developers.png",
    description: "Aluminum deck panels with drop-head supports and Fe550 rebar mesh binding for single-pour floor slabs."
  },
  {
    id: "hg-6",
    title: "Before & After Structural Excellence",
    category: "Mivan Technology",
    imageUrl: "/images/mivan/mivan-technology-before-after-kkr-constructions-and-developers.png",
    description: "Defect-free monolithic concrete wall finish eliminating traditional brick mortar joint lines and thick plaster."
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState<number | null>(null);
  const servicesScrollRef = React.useRef<HTMLDivElement>(null);

  // Mivan Savings Estimator State
  const [builtUpArea, setBuiltUpArea] = useState<number>(5000);
  const [floors, setFloors] = useState<number>(3);

  const estimatedDaysTraditional = floors * 24;
  const estimatedDaysMivan = floors * 8;
  const daysSaved = estimatedDaysTraditional - estimatedDaysMivan;
  const plasteringSavings = builtUpArea * 55; // ₹55/sq.ft avg savings
  const carpetAreaGainSqFt = Math.round(builtUpArea * 0.05); // ~5% carpet gain

  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesScrollRef.current) {
      const scrollAmount = servicesScrollRef.current.clientWidth * 0.8;
      servicesScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-brand-offWhite text-brand-charcoal w-full max-w-full overflow-x-hidden">
      <SEO 
        title="KKR Construction & Developers | Civil Engineering & Mivan Construction Thiruvallur"
        description="KKR Construction & Developers delivers precision civil engineering, turnkey residential buildings, commercial infrastructure, and rapid Mivan aluminum formwork construction in Thiruvallur, Chennai, and Tamil Nadu."
        canonicalUrl="/"
        keywords="KKR Construction, KKR Construction Developers, Mivan Construction Thiruvallur, Builders in Thiruvallur, Civil Engineers Chennai, Residential Building Contractors, Commercial Construction Tamil Nadu, Raft Foundation"
        ogType="website"
        ogImage="/homepage-banner-kkr-construction-developers.png"
        schemaData={HOME_PAGE_SCHEMAS}
        breadcrumbs={[
          { name: 'Home', url: '/' }
        ]}
      />
      
      {/* 1. Hero Section with 3 Fact Cards */}
      <HeroSection onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />

      {/* 2. Welcome & Company Heritage Teaser */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Story Teaser */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
             <span>Welcome to KKR Construction</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight leading-tight">
              Civil Engineering Precision for Residential &amp; Commercial Development
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {COMPANY_INFO.story}
            </p>

            <div className="pt-2 flex flex-row gap-2 sm:gap-4 w-full">
              <button
                onClick={() => onNavigate('about')}
                className="flex-1 px-2.5 sm:px-6 py-2.5 sm:py-3 rounded-[4px] bg-brand-green text-white font-bold text-[11px] sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-md hover:shadow-brand-green/30 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 border border-emerald-400/30 text-center"
              >
                <span>About Us</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="flex-1 px-2.5 sm:px-6 py-2.5 sm:py-3 rounded-[4px] bg-white border border-gray-300 text-brand-charcoal hover:text-brand-green hover:border-brand-green font-bold text-[11px] sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 text-center"
              >
                <span>Project Gallery</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Office Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[4px] overflow-hidden shadow-xl border border-gray-200 group bg-white">
              <img 
                src="/about-kkr-construction-developers.png" 
                alt="KKR Construction & Developers Office" 
                loading="lazy"
                decoding="async"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-transparent to-transparent"></div>
          
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Mivan Formwork Technology Spotlight & Interactive Estimator */}
      <section className="py-12 sm:py-16 bg-brand-charcoal text-white relative overflow-hidden architectural-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/30">
               <span>Specialized Formwork Technology</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                Mivan Aluminum Formwork Construction
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Utilizing durable aluminum formwork to achieve rapid <strong>7–10 days per floor</strong> completion cycles, superior seismic resistance, and smooth monolithic concrete casting.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-[4px] bg-white/5 border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-green font-display">7–10 Days</div>
                  <div className="text-[10px] text-gray-300 uppercase mt-0.5 font-bold">Floor Cycle</div>
                </div>
                <div className="p-3.5 rounded-[4px] bg-white/5 border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-gold font-display">30–40%</div>
                  <div className="text-[10px] text-gray-300 uppercase mt-0.5 font-bold">Faster Completion</div>
                </div>
                <div className="p-3.5 rounded-[4px] bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">100%</div>
                  <div className="text-[10px] text-gray-300 uppercase mt-0.5 font-bold">Aluminum Formwork</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('mivan')}
                  className="px-6 py-3 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all flex items-center gap-2 shadow-lg active:scale-95 border border-emerald-400/30"
                >
                  <span>Explore Mivan Technology</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {onOpenQuoteModal && (
                  <button
                    onClick={() => onOpenQuoteModal('Mivan Formwork Construction (7–10 Days/Floor)', 'quote')}
                    className="px-6 py-3 rounded-[4px] bg-white/10 hover:bg-white text-white hover:text-brand-charcoal font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 border border-white/20 active:scale-95"
                  >
                    <span>Request Mivan Quote</span>
                  </button>
                )}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-[4px] overflow-hidden border border-white/15 shadow-2xl relative group">
                <img 
                  src="/homepage-banner-kkr-construction-developers.png" 
                  alt="Mivan Shuttering Site" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
                  Mivan Aluminum Shuttering On-Site Execution
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Mivan Savings Estimator Widget directly in Homepage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[4px] p-6 sm:p-10 border-2 border-brand-green/30 shadow-2xl text-brand-charcoal"
          >
            <div className="max-w-3xl space-y-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-extrabold uppercase tracking-wider border border-brand-green/20">
                Interactive Project Estimator
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-charcoal">
                Estimate Your Time &amp; Cost Savings with Mivan Tech
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Adjust your project size and floor count to see estimated timeline compression, direct plastering savings, and carpet area expansion.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Input Sliders */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Built Up Area Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-bold">
                    <span className="text-gray-800">Total Built-Up Area (sq.ft):</span>
                    <span className="text-brand-green font-mono text-base font-extrabold">{builtUpArea.toLocaleString()} sq.ft</span>
                  </div>
                  <input 
                    type="range" 
                    min="2000" 
                    max="30000" 
                    step="1000"
                    value={builtUpArea}
                    onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                    className="w-full h-2.5 bg-gray-200 rounded-[2px] appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>2,000 sq.ft</span>
                    <span>15,000 sq.ft</span>
                    <span>30,000 sq.ft</span>
                  </div>
                </div>

                {/* Floors Count Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-bold">
                    <span className="text-gray-800">Number of Slabs / Floors:</span>
                    <span className="text-brand-green font-mono text-base font-extrabold">{floors} Floors (G+{floors - 1})</span>
                  </div>
                  <input 
                    type="range" 
                    min="2" 
                    max="10" 
                    step="1"
                    value={floors}
                    onChange={(e) => setFloors(Number(e.target.value))}
                    className="w-full h-2.5 bg-gray-200 rounded-[2px] appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>2 Floors (G+1)</span>
                    <span>5 Floors (G+4)</span>
                    <span>10 Floors (G+9)</span>
                  </div>
                </div>
              </div>

              {/* Calculated Result Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Time Saved Card */}
                <div className="p-5 rounded-[4px] bg-[#0B1520] text-white border border-slate-800 space-y-1.5 shadow-md">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <span>Estimated Days Saved</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    ~{daysSaved} Days
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Mivan: {estimatedDaysMivan} days vs Traditional: {estimatedDaysTraditional} days.
                  </p>
                </div>

                {/* Plastering Savings Card */}
                <div className="p-5 rounded-[4px] bg-[#0B1520] text-white border border-slate-800 space-y-1.5 shadow-md">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <span>Plastering Cost Saved</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    ₹{plasteringSavings.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Zero wall plastering needed at ~₹55/sq.ft.
                  </p>
                </div>

                {/* Usable Carpet Area Gain */}
                <div className="p-5 rounded-[4px] bg-[#0B1520] text-white border border-slate-800 space-y-1.5 sm:col-span-2 shadow-md">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <span>Usable Carpet Area Gained</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    +{carpetAreaGainSqFt.toLocaleString()} sq.ft of Real Living Space
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Thin, high-strength RCC shear walls yield ~5% extra carpet space compared to thick 9-inch brick walls.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Core Services Overview Grid / Mobile Carousel */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 gap-4">
          <div className="text-center sm:text-left space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
              <span>What We Build</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-brand-charcoal">
              Our Core Construction Services
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Executed under the direct supervision of experienced civil engineers.
            </p>
          </div>

          {/* Mobile / Tablet Carousel Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0 self-center sm:self-end">
            <button
              onClick={() => scrollServices('left')}
              className="p-2.5 rounded-[4px] bg-white hover:bg-brand-lightGreen text-brand-charcoal hover:text-brand-green transition-colors border border-gray-200 shadow-sm active:scale-95"
              aria-label="Previous Service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold font-mono text-gray-500 px-1.5">
              Swipe / Scroll
            </span>
            <button
              onClick={() => scrollServices('right')}
              className="p-2.5 rounded-[4px] bg-white hover:bg-brand-lightGreen text-brand-charcoal hover:text-brand-green transition-colors border border-gray-200 shadow-sm active:scale-95"
              aria-label="Next Service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={servicesScrollRef}
          className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {SERVICES.map((service: ServiceItem, idx: number) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="w-[82vw] max-w-[320px] sm:w-[320px] lg:w-auto snap-center shrink-0 lg:shrink p-6 rounded-[4px] bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-green/60 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-[4px] bg-brand-lightGreen text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors border border-brand-green/20">
                  {iconMap[service.iconName] || <Building2 className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-brand-gold tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-base font-bold font-display text-brand-charcoal group-hover:text-brand-green transition-colors mt-0.5">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-green">
                <button 
                  onClick={() => onNavigate(`service-${service.id}`)}
                  className="hover:underline flex items-center gap-1"
                >
                  <span>Learn details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Project Gallery Section with Interactive Lightbox Popup (Directly next to What We Build) */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
            <div className="text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
                <span>Site Execution Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-brand-charcoal">
                Project Gallery
              </h2>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="px-5 py-2.5 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all flex items-center gap-2 shadow-md hover:shadow-brand-green/30 border border-emerald-400/30 shrink-0 active:scale-95"
            >
              <span>Explore All Gallery Photos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Gallery Image Grid - 2-Grid system on mobile/tablet */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {HOMEPAGE_GALLERY.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPhotoIdx(idx)}
                className="group relative rounded-[4px] overflow-hidden border border-gray-200 bg-slate-900 shadow-sm hover:shadow-2xl hover:border-brand-green transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Thumbnail */}
                <div className="relative h-36 sm:h-52 lg:h-60 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-[4px] bg-brand-charcoal/85 backdrop-blur-md border border-white/20 text-brand-gold text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider">
                    {item.category}
                  </div>

                  {/* Click to Enlarge Hover Indicator */}
                  <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-charcoal/40 backdrop-blur-xs">
                    <div className="px-3.5 py-2 rounded-[4px] bg-brand-green text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to Enlarge</span>
                    </div>
                  </div>
                </div>

                {/* Footer caption - Title and View only (No description) */}
                <div className="p-2.5 sm:p-3.5 bg-white border-t border-gray-100 flex items-center justify-between text-xs">
                  <h3 className="text-brand-charcoal font-bold font-display truncate pr-2 text-xs sm:text-sm group-hover:text-brand-green transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-brand-green font-bold shrink-0 flex items-center gap-0.5 sm:gap-1 group-hover:translate-x-0.5 transition-transform text-[10px] sm:text-xs">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Popup Modal for Project Gallery - ONLY image and title */}
      <AnimatePresence>
        {selectedPhotoIdx !== null && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto min-h-screen"
            onClick={() => setSelectedPhotoIdx(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#05213e] rounded-[4px] max-w-4xl w-full overflow-hidden shadow-2xl border border-gray-800 relative flex flex-col max-h-[92vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIdx(null)}
                className="absolute top-3.5 right-3.5 z-30 p-2.5 rounded-[4px] bg-black/70 hover:bg-brand-charcoal text-white transition-colors backdrop-blur-md active:scale-95"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Navigation Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : HOMEPAGE_GALLERY.length - 1));
                }}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-[4px] bg-black/70 hover:bg-brand-green text-white transition-colors backdrop-blur-md active:scale-95 shadow-xl"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIdx((prev) => (prev !== null && prev < HOMEPAGE_GALLERY.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-[4px] bg-black/70 hover:bg-brand-green text-white transition-colors backdrop-blur-md active:scale-95 shadow-xl"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image Preview Box */}
              <div className="relative h-72 sm:h-96 md:h-[480px] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img 
                  src={HOMEPAGE_GALLERY[selectedPhotoIdx].imageUrl} 
                  alt={HOMEPAGE_GALLERY[selectedPhotoIdx].title} 
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Only Title Bar */}
              <div className="p-4 bg-white text-center border-t border-gray-200">
                <h3 className="text-base sm:text-lg font-bold font-display text-brand-charcoal">
                  {HOMEPAGE_GALLERY[selectedPhotoIdx].title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. Consultation CTA Banner */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-[4px] bg-gradient-to-r from-[#05213e] via-brand-charcoal to-[#05213e] text-white p-8 sm:p-12 relative overflow-hidden border border-brand-green/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Connect With Our Civil Engineers</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Ready to Start Your Construction Project?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Get in touch with Mr. Mohan Ram and our civil engineering partners for site visits, estimations, and Mivan formwork consultations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {onOpenQuoteModal ? (
              <button
                onClick={() => onOpenQuoteModal('General Turnkey Build', 'quote')}
                className="px-7 py-3.5 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-xl hover:shadow-brand-green/40 flex items-center justify-center gap-2 active:scale-95 border border-emerald-400/30"
              >
                <span>Get Free Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-xl hover:shadow-brand-green/40 flex items-center justify-center gap-2 active:scale-95 border border-emerald-400/30"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
