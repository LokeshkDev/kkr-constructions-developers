import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { MIVAN_PAGE_SCHEMAS, BASE_BUSINESS_SCHEMA } from '../data/seoSchemas';

interface MivanPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal?: (serviceTitle?: string, mode?: 'quote' | 'inspection') => void;
}

// 7 Mivan Images Data with respective technical phases
const MIVAN_GALLERY_STAGES = [
  {
    id: "01",
    title: "Heavy Rebar Grilling & Steel Binding",
    phase: "Phase 01: Reinforcement Framework",
    desc: "Certified Fe550 TMT high-yield rebar cages meticulously bound with laser-verified spacing, concrete cover blocks, and integrated electrical conduits before formwork closure.",
    imageUrl: "/images/mivan/mivan-technology-grilling-beam-construction-kkr-constructions-and-developers.png",
    metric: "Fe550 High-Yield Steel"
  },
  {
    id: "02",
    title: "Aluminum Formwork Modular Erection",
    phase: "Phase 02: Precision Shuttering",
    desc: "Lightweight 6061-T6 aluminum alloy panels locked with drop-head pins and wedges, creating airtight mold boundaries without wooden props or nails.",
    imageUrl: "/images/mivan/mivan-technology-beam-build-kkr-constructions-and-developers.png",
    metric: "Sub-Millimeter Tolerances"
  },
  {
    id: "03",
    title: "Integrated Column & Pillar Alignment",
    phase: "Phase 03: Vertical Framework",
    desc: "Laser-aligned vertical column shuttering reinforced with heavy-duty tie rods and wallers to withstand high hydrostatic concrete pressure during rapid pours.",
    imageUrl: "/images/mivan/mivan-technology-beam-pillar-kkr-constructions-and-developers.png",
    metric: "Hydrostatic Pressure Rated"
  },
  {
    id: "04",
    title: "Monolithic Deck & Floor Slab Staging",
    phase: "Phase 04: Deck Formwork",
    desc: "Aluminum deck panels laid with prop-head support systems, enabling continuous, single-stage pouring of structural walls and roof slabs simultaneously.",
    imageUrl: "/images/mivan/mivan-technology-slab-construction-kkr-constructions-and-developers.png",
    metric: "Single-Pour Monolith"
  },
  {
    id: "05",
    title: "High-Density Concrete Pour & Compaction",
    phase: "Phase 05: Monolithic Casting",
    desc: "Continuous pouring of M25/M30 grade concrete with mechanical needle vibrator compaction, completely eliminating air pockets, voids, and honeycomb defects.",
    imageUrl: "/images/mivan/mivan-technology-beam-concreate-kkr-constructions-and-developers.png",
    metric: "M25/M30 Monolithic Pour"
  },
  {
    id: "06",
    title: "Joint Sealing & Damp-Proof Barrier",
    phase: "Phase 06: De-Shuttering & Finish",
    desc: "Rapid wall de-shuttering within 12–16 hours revealing ultra-smooth, moisture-impermeable concrete walls with zero brick mortar joint lines.",
    imageUrl: "/images/mivan/mivan-technology-sealing-construction-kkr-constructions-and-developers.png",
    metric: "100% Water-Tight Shell"
  },
  {
    id: "07",
    title: "Before & After Structural Excellence",
    phase: "Phase 07: Finished Monolith vs Brickwork",
    desc: "Dramatic visual difference comparing porous traditional brickwork requiring thick plaster against laser-smooth monolithic Mivan concrete.",
    imageUrl: "/images/mivan/mivan-technology-before-after-kkr-constructions-and-developers.png",
    metric: "Zero Plastering Required"
  }
];

// 5-Step Floor Cycle Timeline Steps
const MIVAN_CYCLE_STEPS = [
  {
    step: "01",
    days: "Days 1–2",
    title: "Rebar & Conduits Staging",
    desc: "Vertical wall rebar binding with Fe550 high-yield steel cages, clear cover concrete spacers, plumbing sleeves, and fire-resistant electrical conduit placement before formwork closure.",
    keyCheck: "Laser cover spacing & conduit integrity"
  },
  {
    step: "02",
    days: "Days 3–4",
    title: "Wall Formwork Setup",
    desc: "Erection of lightweight 6061-T6 aluminum wall panels, pin-wedge locking, and heavy horizontal alignment wallers to withstand hydrostatic concrete pressure.",
    keyCheck: "Plumb line alignment & pin-wedge tightness"
  },
  {
    step: "03",
    days: "Days 5–6",
    title: "Deck & Slab Mesh",
    desc: "Laying aluminum deck panels, supporting drop prop-heads, and binding roof slab reinforcement mesh with integrated drop beams and ceiling conduits.",
    keyCheck: "Prop-head level checking & deck joint seal"
  },
  {
    step: "04",
    days: "Day 7",
    title: "Monolithic Concrete Pour",
    desc: "Continuous single-stage pour of M25/M30 grade concrete with mechanical needle compaction across walls and slabs together—eliminating cold joints.",
    keyCheck: "Continuous compaction & slump flow"
  },
  {
    step: "05",
    days: "Day 8+",
    title: "De-Shutter & Next Floor",
    desc: "Wall forms struck within 12–16 hours. Panels hoisted immediately to upper level for the next floor cycle while slab props remain in place for curing.",
    keyCheck: "Early strength verification & prop retention"
  }
];

// Cost & Financial Comparison Metrics
const COST_COMPARISON_DATA = [
  {
    parameter: "Construction Speed & Floor Cycle",
    traditional: "20–25 Days / Floor (6–12 months per G+3)",
    mivan: "7–10 Days / Floor (3–5 months per G+3)",
    costImpact: "30–40% Faster Delivery = 4+ months savings on site rent, staff, & loan interest",
    winner: "mivan"
  },
  {
    parameter: "Wall & Ceiling Plastering Cost",
    traditional: "Mandatory 15–20mm thick cement plaster on both sides (₹45–₹65/sq.ft)",
    mivan: "Zero Plastering Required. Direct 1–2mm skin putty coat applied",
    costImpact: "Direct savings of ₹45,000–₹65,000 per 1,000 sq.ft on plastering labor and material",
    winner: "mivan"
  },
  {
    parameter: "Carpet Area (Usable Space) Gain",
    traditional: "9-inch (230mm) thick brick masonry walls take up floor space",
    mivan: "4-to-6 inch (100–160mm) high-strength shear walls",
    costImpact: "Increases usable carpet area by 4% to 6% on the same plot footprint (Higher asset value)",
    winner: "mivan"
  },
  {
    parameter: "Seepage & Long-Term Maintenance",
    traditional: "Brick joint mortar cracks over time; requires repainting/repairs every 3–4 yrs",
    mivan: "Monolithic box concrete with zero joints; zero water ingress; 10+ yr repaint cycles",
    costImpact: "Negligible structural maintenance over 50+ years lifetime",
    winner: "mivan"
  },
  {
    parameter: "Material Wastage & Site Debris",
    traditional: "10–15% wastage from broken bricks, AAC block chiseling, and sand debris",
    mivan: "Near 0% wastage with reusable aluminum formwork (250+ repetitions)",
    costImpact: "Clean site execution with zero wasted masonry scrap",
    winner: "mivan"
  },
  {
    parameter: "Early ROI & Rental Generation",
    traditional: "Delayed occupancy pushes back rental income by 4 to 8 months",
    mivan: "Immediate occupancy handover 4+ months ahead of market schedule",
    costImpact: "Generates ₹1,00,000 to ₹5,00,000 in early rental income on commercial/residential units",
    winner: "mivan"
  }
];

export const MivanPage: React.FC<MivanPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  // Interactive Calculator State
  const [builtUpArea, setBuiltUpArea] = useState<number>(5000);
  const [floors, setFloors] = useState<number>(3);
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [openCycleIdx, setOpenCycleIdx] = useState<number>(0);

  // Carousel refs for Mobile / Tablet horizontal scroll
  const galleryScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryScrollRef.current) {
      const scrollAmount = galleryScrollRef.current.clientWidth * 0.85;
      galleryScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Calculations based on civil engineering metrics
  const estimatedDaysTraditional = floors * 24;
  const estimatedDaysMivan = floors * 8;
  const daysSaved = estimatedDaysTraditional - estimatedDaysMivan;
  const plasteringSavings = builtUpArea * 55; // ₹55 avg savings per sq.ft
  const carpetAreaGainSqFt = Math.round(builtUpArea * 0.05); // 5% avg carpet area gain

  return (
    <div className="pt-20 sm:pt-24 pb-10 bg-brand-offWhite min-h-screen text-brand-charcoal w-full max-w-full overflow-x-hidden">
      <SEO 
        title="Mivan Aluminum Formwork Construction Technology | KKR Construction & Developers"
        description="Discover Mivan aluminum formwork construction with 7-10 day floor cycles, monolithic seamless concrete casting, zero plastering, high seismic strength, and 4-6% carpet area gain in Thiruvallur & Chennai."
        canonicalUrl="/mivan-technology"
        keywords="Mivan Construction Thiruvallur, Aluminum Formwork Chennai, Monolithic Concrete Walls, Mivan Technology Tamil Nadu, Fast Construction Method, Seismic Resistant Buildings"
        ogType="article"
        ogImage="/images/mivan/mivan-technology-beam-concreate-kkr-constructions-and-developers.png"
        schemaData={[BASE_BUSINESS_SCHEMA, ...MIVAN_PAGE_SCHEMAS]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Mivan Technology', url: '/mivan-technology' }
        ]}
      />
      
      {/* 1. Clean Breadcrumb Bar */}
      <section className="bg-white border-b border-gray-200 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-brand-green transition-colors font-medium"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-brand-green font-bold">Mivan Technology</span>
          </div>
        </div>
      </section>

      {/* 2. High-Impact Hero Section */}
      <section className="relative bg-brand-charcoal text-white py-8 sm:py-12 overflow-hidden architectural-grid-dark border-b border-brand-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left 7 Cols: Hero Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-3.5 sm:space-y-4"
            >
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Mivan Formwork Construction. <br />
                <span className="text-amber-300">
                  7–10 Days Per Floor.
                </span>
              </h1>

              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-2xl">
                Engineered for rapid, earthquake-resistant residential and commercial projects. Lightweight reusable aluminum formwork casts walls and slabs simultaneously into a monolithic concrete shell—eliminating brick joints, saving plastering costs, and accelerating completion by <strong>30–40%</strong>.
              </p>

              {/* 4 Key Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-2.5 sm:p-3 rounded-[4px] bg-white/5 border border-white/10 text-center">
                  <div className="text-lg sm:text-2xl font-extrabold text-brand-green font-display">7–10 Days</div>
                  <div className="text-[10px] text-gray-300 font-bold uppercase mt-0.5">Floor Cycle</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-[4px] bg-white/5 border border-white/10 text-center">
                  <div className="text-lg sm:text-2xl font-extrabold text-brand-gold font-display">30–40%</div>
                  <div className="text-[10px] text-gray-300 font-bold uppercase mt-0.5">Faster Turnaround</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-[4px] bg-white/5 border border-white/10 text-center">
                  <div className="text-lg sm:text-2xl font-extrabold text-emerald-400 font-display">0 mm</div>
                  <div className="text-[10px] text-gray-300 font-bold uppercase mt-0.5">Plastering Needed</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-[4px] bg-white/5 border border-white/10 text-center">
                  <div className="text-lg sm:text-2xl font-extrabold text-white font-display">+5%</div>
                  <div className="text-[10px] text-gray-300 font-bold uppercase mt-0.5">Carpet Area Gain</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    const el = document.querySelector('#cost-calculator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-xl hover:shadow-brand-green/40 flex items-center justify-center gap-2 border border-emerald-400/30 active:scale-95"
                >
                  <span>Cost vs Traditional Comparison</span>
                </button>

                <button
                  onClick={() => onOpenQuoteModal ? onOpenQuoteModal('Mivan Formwork Construction', 'quote') : onNavigate('contact')}
                  className="px-5 py-3 rounded-[4px] bg-white/10 hover:bg-white text-white hover:text-brand-charcoal font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/20 active:scale-95"
                >
                  <span>Request Mivan Quotation</span>
                </button>
              </div>
            </motion.div>

            {/* Right 5 Cols: Hero Showcase Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[4px] overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group">
                <img 
                  src="/images/mivan/mivan-technology-before-after-kkr-constructions-and-developers.png" 
                  alt="KKR Mivan Formwork Monolithic Finish" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 sm:h-80 lg:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-amber-400 text-brand-charcoal text-[10px] font-extrabold uppercase tracking-wider">
                    <span>Live Field Comparison</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-display text-white">
                    Monolithic Cast vs Traditional Brickwork
                  </h3>
                  <p className="text-xs text-gray-300">
                    Precision aluminum shuttering strikes defect-free, mirror-smooth concrete walls with zero plastering blemish.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Before & After Technical Comparison Module */}
      <section className="py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
            <span>Direct Structural Contrast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Before vs After: Mivan Formwork Technology
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            See how aluminum formwork eliminates the structural vulnerabilities, uneven plastering, and slow progress of conventional brick-and-mortar masonry.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 6 Cols: Traditional Brickwork (Before) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white rounded-[4px] border-2 border-red-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-red-100 text-red-700 font-extrabold text-xs uppercase tracking-wider rounded-bl-[4px]">
              Conventional / Before
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[4px] bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-brand-charcoal">
                    Traditional Brick &amp; Block Masonry
                  </h3>
                  <div className="text-xs font-semibold text-red-600">
                    High Labor, Slow Cycles &amp; Joint Cracks
                  </div>
                </div>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span><strong>Slow Progress:</strong> 20–25 days per floor cycle due to brick laying and mortar curing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span><strong>Heavy Plastering Needed:</strong> Uneven brick surfaces require 15–20mm thick cement plaster coats.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span><strong>Moisture &amp; Seepage Risk:</strong> Thousands of mortar joint lines invite water dampness and hairline cracks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span><strong>Thick Walls (Loss of Space):</strong> 9-inch brick walls reduce the internal usable carpet area by ~5%.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
              Requires frequent structural maintenance and repainting every 3–4 years.
            </div>
          </motion.div>

          {/* Right 6 Cols: Monolithic Mivan System (After) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-gradient-to-br from-emerald-50/70 via-white to-brand-lightGreen/50 rounded-[4px] border-2 border-brand-green p-6 sm:p-8 shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-brand-green text-white font-extrabold text-xs uppercase tracking-wider rounded-bl-[4px] shadow-sm">
              KKR Mivan / After
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[4px] bg-brand-green text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-brand-charcoal">
                    Monolithic Aluminum Formwork
                  </h3>
                  <div className="text-xs font-bold text-brand-green">
                    7–10 Days Rapid Cycle, Monolithic &amp; Zero Plaster
                  </div>
                </div>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-gray-800">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>High-Speed Floor Cycle:</strong> 7–10 days per floor allows 30–40% faster total project delivery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Zero Plastering Required:</strong> Mirror-smooth de-shuttered concrete finish needs only 1–2mm skin putty.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Impermeable Monolithic Shell:</strong> Unified box structure with zero joint lines stops dampness &amp; water leaks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>4–6% Carpet Area Gain:</strong> High-strength slender RCC shear walls increase living space on the same plot.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-green/30 flex items-center justify-between text-xs font-bold text-brand-green">
              <span>Seismic Box Structure Compliant with IS 13920</span>
              <span>50+ Year Longevity</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Complete Visual Field Showcase (Using ALL 7 Mivan Images from folder) */}
      <section className="py-8 sm:py-12 bg-brand-charcoal text-white relative overflow-hidden architectural-grid-dark border-y border-brand-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4">
            <div className="text-center sm:text-left max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/30">
                <span>Full Field Execution Gallery</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
                7 Stages of Mivan Formwork Execution
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl">
                Real-world site photographs demonstrating precision steel binding, aluminum panel staging, monolithic pouring, and clean de-shuttered finishes.
              </p>
            </div>

            {/* Mobile / Tablet Carousel Controls */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => scrollGallery('left')}
                className="p-2.5 rounded-[4px] bg-slate-800 hover:bg-brand-green text-white transition-colors border border-slate-700 active:scale-95"
                aria-label="Previous Stage"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold font-mono text-gray-300 px-2">
                Swipe / Scroll
              </span>
              <button
                onClick={() => scrollGallery('right')}
                className="p-2.5 rounded-[4px] bg-slate-800 hover:bg-brand-green text-white transition-colors border border-slate-700 active:scale-95"
                aria-label="Next Stage"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive 7 Stage Grid / Mobile Carousel */}
          <div 
            ref={galleryScrollRef}
            className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {MIVAN_GALLERY_STAGES.map((stage, idx) => (
              <motion.div 
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className={`w-[85vw] max-w-[340px] sm:w-[360px] lg:w-auto snap-center shrink-0 lg:shrink bg-[#0D1822] rounded-[4px] overflow-hidden border transition-all flex flex-col justify-between group cursor-pointer ${
                  activeStageIdx === idx ? 'border-brand-green ring-2 ring-brand-green/40 shadow-2xl' : 'border-slate-700/80 hover:border-brand-green/70'
                }`}
                onClick={() => setActiveStageIdx(idx)}
              >
                {/* Image Box */}
                <div className="relative h-44 sm:h-52 lg:h-60 overflow-hidden bg-slate-900">
                  <img 
                    src={stage.imageUrl} 
                    alt={stage.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  
                  {/* Phase Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-[4px] bg-brand-charcoal/85 backdrop-blur-md border border-white/20 text-brand-gold text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider">
                    {stage.phase}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-4 sm:p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {stage.desc}
                  </p>

                  <div className="pt-2.5 border-t border-slate-700/80 flex items-center justify-between text-xs text-brand-green font-bold">
                    <span>Stage {stage.id} of 07</span>
                    <span className="text-[10px] sm:text-[11px] text-gray-400 font-semibold">KKR Quality Tested</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Comprehensive Cost & ROI Comparison Module */}
      <section id="cost-calculator" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
           <span>Financial &amp; Timeline ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Cost &amp; Efficiency: Traditional Tech vs Mivan Tech
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            While aluminum formwork is an engineered system, the massive reduction in project duration, plastering elimination, and carpet area expansion yields substantial net financial savings.
          </p>
        </div>

        {/* Detailed Table Comparison */}
        <div className="bg-white rounded-[4px] border border-gray-200 shadow-lg overflow-hidden mb-6 sm:mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0A1118] text-white border-b border-gray-800">
                  <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-gray-300 w-1/4">Cost &amp; Engineering Parameter</th>
                  <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-red-300 w-1/4">Traditional Brickwork Tech</th>
                  <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-emerald-400 w-1/4">Mivan Aluminum Tech</th>
                  <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-amber-300 w-1/4">Client Financial Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {COST_COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-charcoal">
                      {row.parameter}
                    </td>
                    <td className="p-3.5 sm:p-4 text-gray-700 bg-red-50/20">
                      {row.traditional}
                    </td>
                    <td className="p-3.5 sm:p-4 font-semibold text-brand-green bg-emerald-50/30">
                      {row.mivan}
                    </td>
                    <td className="p-3.5 sm:p-4 font-medium text-gray-800 bg-amber-50/20">
                      {row.costImpact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Mivan Savings Estimator Widget - Crisp High Contrast Light Container */}
        <div className="bg-white rounded-[4px] p-5 sm:p-8 border-2 border-brand-green/30 shadow-xl relative overflow-hidden">
          
          <div className="max-w-3xl space-y-1.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-extrabold uppercase tracking-wider border border-brand-green/20">
              Interactive Project Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-charcoal">
              Estimate Your Time &amp; Cost Savings with Mivan Tech
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Adjust your project size and floor count to see estimated timeline compression and direct plastering savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Input Sliders */}
            <div className="lg:col-span-6 space-y-5">
              
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
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              
              {/* Time Saved Card */}
              <div className="p-4 sm:p-5 rounded-[4px] bg-[#0B1520] text-white border border-slate-800 space-y-1 shadow-md">
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
              <div className="p-4 sm:p-5 rounded-[4px] bg-[#0B1520] text-white border border-slate-800 space-y-1 shadow-md">
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
              <div className="p-4 sm:p-5 rounded-[4px] bg-[#0B1520] text-white border border-slate-800 space-y-1 sm:col-span-2 shadow-md">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span>Usable Carpet Area Gained</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold font-display text-white">
                  +{carpetAreaGainSqFt.toLocaleString()} sq.ft of Real Living Space
                </div>
                <p className="text-[11px] text-gray-300">
                  Thin, high-strength RCC shear walls yield ~5% extra carpet space compared to thick 9-inch brick walls.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 6. Step-by-Step 5-Day Mivan Cycle Workflow - Accordion on Mobile/Tablet */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center sm:text-left max-w-3xl mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
            <span>Disciplined Cycle Time</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight">
            How KKR Executes the 7–10 Day Mivan Floor Cycle
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
            A continuous, synchronized sequence executed by qualified civil engineering teams and trained formwork carpenters.
          </p>
        </div>

        {/* Mobile / Tablet: Interactive Accordion (< md) */}
        <div className="md:hidden space-y-3">
          {MIVAN_CYCLE_STEPS.map((step, idx) => {
            const isOpen = openCycleIdx === idx;
            return (
              <div 
                key={step.step}
                className={`rounded-[4px] border transition-all overflow-hidden bg-white shadow-sm ${
                  isOpen ? 'border-brand-green ring-1 ring-brand-green/30' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenCycleIdx(isOpen ? -1 : idx)}
                  className="w-full p-3.5 flex items-center justify-between gap-3 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-[4px] font-mono font-extrabold flex items-center justify-center text-xs shadow-sm shrink-0 ${
                      isOpen ? 'bg-brand-green text-white' : 'bg-brand-lightGreen text-brand-green'
                    }`}>
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-brand-charcoal">
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-bold text-brand-green">
                        {step.days}
                      </span>
                    </div>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-green' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 text-xs text-gray-700 space-y-2 border-t border-gray-100 bg-gray-50/50">
                        <p className="leading-relaxed">
                          {step.desc}
                        </p>
                        <div className="flex items-center justify-between text-[11px] font-semibold text-brand-charcoal pt-1">
                          <span className="text-brand-gold font-bold">Quality Check:</span>
                          <span className="text-gray-600">{step.keyCheck}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: 5-Column Progressive Grid (>= md) */}
        <div className="hidden md:grid md:grid-cols-5 gap-4">
          {MIVAN_CYCLE_STEPS.map((step) => (
            <div 
              key={step.step}
              className="p-4 sm:p-5 rounded-[4px] bg-white border border-gray-200 shadow-sm space-y-2 flex flex-col justify-between hover:border-brand-green transition-colors group"
            >
              <div>
                <div className="w-8 h-8 rounded-[4px] bg-brand-green text-white font-mono font-extrabold flex items-center justify-center text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform">
                  {step.step}
                </div>
                <h4 className="text-sm font-bold font-display text-brand-charcoal mt-2.5 group-hover:text-brand-green transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="text-[11px] font-bold text-brand-green pt-2 border-t border-gray-100 flex items-center justify-between">
                <span>{step.days}</span>
                <span className="text-[10px] text-gray-400 font-mono">Stage {step.step}</span>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
