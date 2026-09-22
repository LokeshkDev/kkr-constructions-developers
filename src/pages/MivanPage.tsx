import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  Layers,
  Maximize2,
  ShieldCheck,
  Trash2,
  Coins,
  Check,
  ArrowRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Repeat,
  RotateCw,
  Sparkles
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

// 5-Stage Continuous Closed-Loop Mivan Floor Cycle Steps
const MIVAN_CYCLE_STEPS = [
  {
    step: "01",
    days: "Days 1–2",
    title: "Rebar & Conduits Staging",
    phaseTag: "Vertical Reinforcement",
    recycleAction: "Pre-tied rebar cages bound prior to formwork arrival",
    desc: "Vertical wall rebar binding with certified Fe550 high-yield steel cages, clear cover concrete spacers, plumbing sleeves, and fire-resistant electrical conduits before formwork closure.",
    keyCheck: "Laser cover spacing & conduit integrity",
    badge: "Fe550 High-Yield Steel"
  },
  {
    step: "02",
    days: "Days 3–4",
    title: "Wall Formwork Setup",
    phaseTag: "Precision Panel Erection",
    recycleAction: "Panels recycled from lower level hoisted & erected within 12–16 hrs",
    desc: "Erection of lightweight 6061-T6 aluminum wall panels, pin-wedge locking, and heavy horizontal alignment wallers to withstand hydrostatic concrete pressure with zero wooden props.",
    keyCheck: "Laser plumb line alignment & pin-wedge tightness",
    badge: "Sub-Millimeter Tolerances"
  },
  {
    step: "03",
    days: "Days 5–6",
    title: "Deck & Slab Mesh",
    phaseTag: "Monolithic Deck Assembly",
    recycleAction: "Drop-head system enables early wall form striking without slab disturbance",
    desc: "Laying aluminum deck panels, supporting drop prop-heads, and binding roof slab reinforcement mesh with integrated drop beams and ceiling conduits.",
    keyCheck: "Prop-head level checking & deck joint seal",
    badge: "Single-Pour Monolith"
  },
  {
    step: "04",
    days: "Day 7",
    title: "Monolithic Concrete Pour",
    phaseTag: "Unified Box Casting",
    recycleAction: "Continuous monolithic pour cast in a single continuous 8–10 hr shift",
    desc: "Continuous single-stage pour of M25/M30 grade concrete with mechanical needle compaction across walls and slabs together—completely eliminating cold joints.",
    keyCheck: "Continuous compaction & slump flow",
    badge: "100% Water-Tight Shell"
  },
  {
    step: "05",
    days: "Day 8+",
    title: "De-Shutter & Recycle Hoist",
    phaseTag: "Closed-Loop Floor Hoist",
    recycleAction: "Forms struck in 12–16 hrs ➔ Cleaned ➔ Hoisted to Floor N+1 to restart Step 01",
    desc: "Wall forms struck within 12–16 hours. Panels cleaned, oiled, and hoisted immediately to the upper level for the next floor cycle while slab props remain in place for curing.",
    keyCheck: "Early strength verification & prop retention",
    badge: "250+ Cycle Repetitions"
  }
];

// Cost & Financial Comparison Metrics - Construction Demographics
const COST_COMPARISON_DATA = [
  {
    id: "speed",
    category: "Timeline & Velocity",
    parameter: "Construction Speed & Floor Cycle",
    deltaBadge: "68% Faster Cycle",
    iconName: "clock" as const,
    benchmarkMetric: "7–10 Days vs 25 Days",
    engineeringStandard: "IS 456 Rapid Curing Protocol",
    imageUrl: "/images/mivan/construction-speed-and-floor-cycle-kkr-construction-and-developers.png",
    imageCaption: "Rapid 7–10 Day Monolithic Turnaround vs Multi-Stage Brick Masonry Staging",
    traditional: {
      badge: "Traditional Brickwork",
      value: "20–25 Days / Floor",
      description: "Multi-stage timber/plywood formwork, separate masonry brick infill, staggered column casting, and curing downtime (6–12 months for G+3).",
      gaugePercent: 100,
      metricTag: "25 Days/Floor (Prolonged)"
    },
    mivan: {
      badge: "KKR Monolithic Mivan",
      value: "7–10 Days / Floor",
      description: "Single-pour monolithic wall & slab cast with rapid 12–16 hr panel de-shuttering and immediate upper-level cycling (3–5 months for G+3).",
      gaugePercent: 35,
      metricTag: "7–10 Days/Floor (Rapid Turnaround)"
    },
    costImpact: "30–40% Faster Delivery: Saves 4+ months of site rent, engineering overhead, scaffolding leases, and bank loan interest.",
    highlightRoi: "Save 4+ Months Overheads"
  },
  {
    id: "plaster",
    category: "Surface Quality & Plaster",
    parameter: "Wall & Ceiling Plastering Cost",
    deltaBadge: "0mm Plaster (100% Eliminated)",
    iconName: "layers" as const,
    benchmarkMetric: "Zero Plaster vs 20mm Sand Plaster",
    engineeringStandard: "Sub-Millimeter 6061-T6 Aluminum Mold",
    imageUrl: "/images/mivan/mivan-technology-wall-ceiling-plastering-cost-kkr-construction-and-developers.png",
    imageCaption: "Mirror-Smooth Aluminum Finish (0mm Plaster) vs Rough Sand-Cement Mortar Plastering",
    traditional: {
      badge: "Traditional Brickwork",
      value: "15–20mm Thick Cement Sand Plaster",
      description: "Rough, uneven brick surfaces require heavy double-sided manual plastering (₹45–₹65/sq.ft), curing water, and labor cartage.",
      gaugePercent: 100,
      metricTag: "15–20mm Mortar Plaster"
    },
    mivan: {
      badge: "KKR Monolithic Mivan",
      value: "Zero Plastering (1–2mm Skim Coat)",
      description: "Glass-smooth de-shuttered concrete surfaces eliminate plaster completely; ready directly for 1–2mm skin putty and primer.",
      gaugePercent: 10,
      metricTag: "0mm Plaster (Direct Putty)"
    },
    costImpact: "Direct Cash Savings: ₹45,000 to ₹65,000 saved per 1,000 sq.ft of built-up area on plastering labor, sand, and cement.",
    highlightRoi: "Save ₹45,000–₹65,000 / 1,000 sq.ft"
  },
  {
    id: "space",
    category: "Architectural Footprint",
    parameter: "Carpet Area (Usable Space) Gain",
    deltaBadge: "+4% to +6% Usable Carpet Area",
    iconName: "maximize" as const,
    benchmarkMetric: "120mm Shear Wall vs 230mm Brick",
    engineeringStandard: "High-Strength Structural Shear Box",
    imageUrl: "/images/mivan/mivan-technology-Carpet-Area-Usable-Space-Gain-kkr-construction-and-developers.png",
    imageCaption: "Slender 120mm Monolithic Shear Wall Profile vs Bulky 230mm (9-Inch) Brick Footprint (+5% Carpet Gain)",
    traditional: {
      badge: "Traditional Brickwork",
      value: "9-inch (230mm) Thick Brick Walls",
      description: "Thick non-load-bearing masonry infills take up 8% to 10% of total structural footprint, eating into usable room dimensions.",
      gaugePercent: 100,
      metricTag: "230mm Wall Thickness"
    },
    mivan: {
      badge: "KKR Monolithic Mivan",
      value: "4-to-6 inch (100–160mm) Shear Walls",
      description: "Slender structural RCC walls serve as both load-bearing columns and room partitions, freeing 50–60 sq.ft living area per 1,000 sq.ft.",
      gaugePercent: 50,
      metricTag: "120mm Profile (+5% Extra Space)"
    },
    costImpact: "Net Asset Value Expansion: 50+ sq.ft extra carpet area on the same plot boundary—significantly elevating property resale and lease value.",
    highlightRoi: "+50–60 sq.ft Usable Space / 1k sq.ft"
  },
  {
    id: "seepage",
    category: "Structural Durability",
    parameter: "Seepage & Long-Term Maintenance",
    deltaBadge: "0 Joint Lines · 100% Water-Tight",
    iconName: "shield" as const,
    benchmarkMetric: "Monolith Box vs 10,000+ Seams",
    engineeringStandard: "Continuous Single-Stage Monolithic Pour",
    imageUrl: "/images/mivan/mivan-technology-Seepage-and-Long-Term-Maintenance-kkr-construction-and-developers.png",
    imageCaption: "100% Watertight Monolithic Shell vs Thousands of Porous Mortar Joint Seepage Micro-Cracks",
    traditional: {
      badge: "Traditional Brickwork",
      value: "Thousands of Mortar Joints",
      description: "Micro-cracks between concrete RCC frame and brick mortar allow capillary rainwater seepage, peeling paint every 3–4 years.",
      gaugePercent: 90,
      metricTag: "High Seepage Vulnerability"
    },
    mivan: {
      badge: "KKR Monolithic Mivan",
      value: "Monolithic Box (Zero Joint Seams)",
      description: "Walls, slabs, and staircases poured seamlessly in one unified envelope. Impermeable water barrier with 10+ year exterior paint cycles.",
      gaugePercent: 5,
      metricTag: "100% Water-Impermeable"
    },
    costImpact: "Negligible Structural Upkeep: Eliminates recurrent dampness rectification, crack filling, and wall hacking expenses over a 50+ year lifespan.",
    highlightRoi: "50+ Years Zero Joint Seepage"
  },
  {
    id: "wastage",
    category: "Site Sustainability",
    parameter: "Material Wastage & Site Scrap",
    deltaBadge: "<1% Scrap vs 15% Brick Scrap",
    iconName: "trash" as const,
    benchmarkMetric: "<1% Reusable vs 15% Waste Scrap",
    engineeringStandard: "250+ Reusable Aluminum Panels",
    imageUrl: "/images/mivan/mivan-technology-material-wastage-and-Site-Scrap-kkr-construction-and-developers.png",
    imageCaption: "Zero-Waste Reusable Modular Aluminum Formwork vs Broken Masonry Scrap & Mortar Debris",
    traditional: {
      badge: "Traditional Brickwork",
      value: "10–15% Wastage & Chiseling Debris",
      description: "Wall chiseling for electrical conduits, broken bricks, spilled sand, and mortar runoff generate tons of debris requiring paid removal.",
      gaugePercent: 95,
      metricTag: "15% Waste Scrap & Debris"
    },
    mivan: {
      badge: "KKR Monolithic Mivan",
      value: "Near 0% Wastage (Modular Panels)",
      description: "Conduits and plumbing cutouts pre-set in steel cages before pouring. Factory-machined aluminum panels reused 250+ times with zero debris.",
      gaugePercent: 5,
      metricTag: "<1% Precision Zero-Waste"
    },
    costImpact: "Zero Debris Hauling Expense: Eliminates broken masonry waste, reduces transport hauling fees, and maintains an impeccably clean site.",
    highlightRoi: "Zero Scrap & Disposal Costs"
  },
  {
    id: "roi",
    category: "Capital Turnover & ROI",
    parameter: "Early ROI & Rental Generation",
    deltaBadge: "4+ Months Early Handover",
    iconName: "coins" as const,
    benchmarkMetric: "Immediate Cashflow vs 6-Mo Delay",
    engineeringStandard: "Accelerated Capital Turnover",
    imageUrl: "/images/mivan/mivan-technology-Early-ROI-and-Rental-Generation-kkr-construction-and-developers.png",
    imageCaption: "Immediate Tenant Handover & Early Rental Income vs Prolonged Construction Staging Loss",
    traditional: {
      badge: "Traditional Brickwork",
      value: "Prolonged Completion (Delayed Cashflow)",
      description: "Unpredictable masonry labor, prolonged curing, and multi-contractor delays push handover back by 4 to 8 months, tying up investment capital.",
      gaugePercent: 85,
      metricTag: "Delayed Occupancy"
    },
    mivan: {
      badge: "KKR Monolithic Mivan",
      value: "Immediate Occupancy Handover",
      description: "Predictable industrial 7–10 day floor cycles enable guaranteed delivery schedules, permitting owners to occupy or monetize months earlier.",
      gaugePercent: 15,
      metricTag: "4+ Months Early Handover"
    },
    costImpact: "Accelerated Rental Income: Generates ₹1,00,000 to ₹5,00,000 in early rental income on residential/commercial units while wiping out interim bank interest.",
    highlightRoi: "₹1L–₹5L Early Cashflow Earned"
  }
];

export const MivanPage: React.FC<MivanPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  // Navigation & Interactive Tabs State
  const [beforeAfterTab, setBeforeAfterTab] = useState<'after' | 'before'>('after');
  const [selectedComparisonCategory, setSelectedComparisonCategory] = useState<string>('speed');
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [openCycleIdx, setOpenCycleIdx] = useState<number>(0);

  // Click-to-Zoom Lightbox State
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    alt: string;
    title?: string;
    caption?: string;
  } | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Lock body scroll and listen for Escape key when zoom lightbox is active
  useEffect(() => {
    if (zoomedImage) {
      setZoomScale(1);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setZoomedImage(null);
        } else if (e.key === '+' || e.key === '=') {
          setZoomScale((prev: number) => Math.min(3, prev + 0.5));
        } else if (e.key === '-') {
          setZoomScale((prev: number) => Math.max(1, prev - 0.5));
        } else if (e.key === '0') {
          setZoomScale(1);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [zoomedImage]);

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

      {/* 3. Before & After Technical Comparison Module - Interactive Tabs */}
      <section className="py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 space-y-2">
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

        {/* Interactive 2-Tab Switcher: KKR Mivan (After) vs Conventional (Before) */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-gray-100/90 rounded-[4px] border border-gray-200/80 max-w-md mx-auto mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => setBeforeAfterTab('after')}
            className={`flex-1 py-2.5 px-3 sm:px-5 rounded-[4px] text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              beforeAfterTab === 'after'
                ? 'bg-brand-green text-white shadow-md'
                : 'text-gray-700 hover:text-brand-green hover:bg-white/70'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span className="truncate">KKR Mivan (After)</span>
          </button>
          
          <button
            type="button"
            onClick={() => setBeforeAfterTab('before')}
            className={`flex-1 py-2.5 px-3 sm:px-5 rounded-[4px] text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              beforeAfterTab === 'before'
                ? 'bg-[#B91C1C] text-white shadow-md'
                : 'text-gray-700 hover:text-red-600 hover:bg-white/70'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-red-800 text-white flex items-center justify-center text-[10px] font-extrabold shrink-0">✕</span>
            <span className="truncate">Conventional (Before)</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {beforeAfterTab === 'before' && (
            <motion.div
              key="tab-before"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-[4px] border-2 border-red-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
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

                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-500 font-medium">
                  <span>Requires frequent structural maintenance and repainting every 3–4 years.</span>
                  <button 
                    type="button" 
                    onClick={() => setBeforeAfterTab('after')}
                    className="inline-flex items-center gap-1 text-brand-green font-bold hover:underline"
                  >
                    <span>See Mivan After Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {beforeAfterTab === 'after' && (
            <motion.div
              key="tab-after"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-gradient-to-br from-emerald-50/70 via-white to-brand-lightGreen/50 rounded-[4px] border-2 border-brand-green p-6 sm:p-8 shadow-md relative overflow-hidden">
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

                <div className="mt-6 pt-4 border-t border-brand-green/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-bold text-brand-green">
                  <span>Seismic Box Structure Compliant with IS 13920 • 50+ Year Longevity</span>
                  <button 
                    type="button" 
                    onClick={() => setBeforeAfterTab('before')}
                    className="inline-flex items-center gap-1 text-red-600 font-bold hover:underline"
                  >
                    <span>Compare Conventional (Before)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                {/* Image Box (Click to Zoom) */}
                <div 
                  className="relative h-44 sm:h-52 lg:h-60 overflow-hidden bg-slate-900 cursor-zoom-in group/img"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStageIdx(idx);
                    setZoomedImage({
                      src: stage.imageUrl,
                      alt: stage.title,
                      title: `${stage.phase}: ${stage.title}`,
                      caption: stage.desc
                    });
                  }}
                >
                  <img 
                    src={stage.imageUrl} 
                    alt={stage.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover/img:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  
                  {/* Phase Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-[4px] bg-brand-charcoal/85 backdrop-blur-md border border-white/20 text-brand-gold text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider">
                    {stage.phase}
                  </div>

                  {/* Click to zoom pill */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-[4px] bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium flex items-center gap-1 group-hover/img:bg-brand-green group-hover/img:border-brand-green transition-colors shadow">
                    <ZoomIn className="w-3 h-3" />
                    <span>Zoom</span>
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

      {/* 5. Comprehensive Cost & Efficiency Demographics Module */}
      <section id="cost-calculator" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Blueprint Stamp */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
           <span>Construction Demographics &amp; ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Cost &amp; Efficiency: Traditional Tech vs Mivan Tech
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            Architectural comparative analysis of floor turnaround velocity, wall cross-sections, structural durability, and lifetime financial returns between conventional brickwork and monolithic aluminum formwork.
          </p>
        </div>

        {/* 1. Macro Demographic Performance Barometer (HUD) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white rounded-[4px] p-4 sm:p-5 border-2 border-emerald-500/30 shadow-sm relative overflow-hidden group hover:border-brand-green transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-green" />
                Cycle Velocity
              </span>
              <span className="px-2 py-0.5 rounded-[4px] bg-emerald-100 text-brand-green text-[10px] font-extrabold">
                -68% Time
              </span>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-brand-charcoal">
              7–10 Days
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              Per floor vs <span className="line-through text-red-500/80 font-semibold">25 days</span> traditional
            </p>
          </div>

          <div className="bg-white rounded-[4px] p-4 sm:p-5 border-2 border-emerald-500/30 shadow-sm relative overflow-hidden group hover:border-brand-green transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-green" />
                Surface Plaster
              </span>
              <span className="px-2 py-0.5 rounded-[4px] bg-emerald-100 text-brand-green text-[10px] font-extrabold">
                0mm Needed
              </span>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-brand-charcoal">
              100% Eliminated
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              Saves <span className="text-brand-green font-bold">₹45k–₹65k</span> / 1,000 sq.ft
            </p>
          </div>

          <div className="bg-white rounded-[4px] p-4 sm:p-5 border-2 border-emerald-500/30 shadow-sm relative overflow-hidden group hover:border-brand-green transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-brand-green" />
                Net Carpet Area
              </span>
              <span className="px-2 py-0.5 rounded-[4px] bg-emerald-100 text-brand-green text-[10px] font-extrabold">
                +4% to +6%
              </span>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-brand-charcoal">
              +50–60 sq.ft
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              Extra space per 1k sq.ft plot footprint
            </p>
          </div>

          <div className="bg-white rounded-[4px] p-4 sm:p-5 border-2 border-emerald-500/30 shadow-sm relative overflow-hidden group hover:border-brand-green transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                Joint Integrity
              </span>
              <span className="px-2 py-0.5 rounded-[4px] bg-emerald-100 text-brand-green text-[10px] font-extrabold">
                100% Waterproof
              </span>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-brand-charcoal">
              0 Cold Joints
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              Seamless monolithic concrete shell
            </p>
          </div>
        </div>

        {/* 2. Architectural Wall Cross-Section Benchmark with 3D Structural Render */}
        <div className="bg-white rounded-[4px] border border-gray-200 shadow-md p-4 sm:p-6 mb-6 sm:mb-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-brand-charcoal font-display">
                  Architectural Cross-Section Benchmark: Wall Footprint &amp; Seepage Barrier
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-emerald-50 border border-emerald-300 text-brand-green text-[10px] sm:text-xs font-bold self-start sm:self-auto">
              140mm Thinner Wall Profile (+5% Space)
            </span>
          </div>

          {/* High-Resolution 3D Structural Cross-Section Image */}
          <div 
            onClick={() => setZoomedImage({
              src: "/images/mivan/mivan-tech-shear-wall-kkr-construction-and-developers.png",
              alt: "Conventional Wall 260mm vs KKR-Style Shear Wall 120mm Architectural Cross-Section",
              title: "Cross-Section: 260mm Conventional Wall vs 120mm KKR Shear Wall",
              caption: "Architectural comparison showing 140mm thickness difference, eliminated plaster layer, and monolithic seepage barrier."
            })}
            className="w-full rounded-[4px] overflow-hidden border border-gray-200 bg-slate-950/5 relative mb-4 cursor-zoom-in group"
          >
            <img 
              src="/images/mivan/mivan-tech-shear-wall-kkr-construction-and-developers.png"
              alt="Conventional Wall 260mm vs KKR-Style Shear Wall 120mm Architectural Cross-Section" 
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[480px] object-contain mx-auto group-hover:scale-102 transition-transform duration-500"
            />
            {/* Click to zoom badge */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-[4px] bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md group-hover:bg-brand-green group-hover:border-brand-green transition-colors">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Click to zoom</span>
            </div>
          </div>

          {/* Key Engineering Takeaways beneath the render */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
            <div className="p-3 sm:p-3.5 rounded-[4px] bg-amber-50/50 border border-amber-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-red-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  Conventional Brick Wall (260 mm Total)
                </span>
                <span className="font-mono font-bold text-red-800 text-[11px] bg-red-100 px-2 py-0.5 rounded-[2px]">
                  ~10% Floor Loss
                </span>
              </div>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                15 mm plaster + 230 mm clay brick + 15 mm plaster. Heavy dead load with thousands of mortar joints prone to capillary seepage and shrinkage cracks.
              </p>
            </div>

            <div className="p-3 sm:p-3.5 rounded-[4px] bg-emerald-50/60 border-2 border-brand-green/30 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-green flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-brand-green" />
                  KKR-Style Shear Wall (120 mm Total)
                </span>
                <span className="font-mono font-bold text-brand-green text-[11px] bg-brand-lightGreen px-2 py-0.5 rounded-[2px]">
                  +5% Living Space
                </span>
              </div>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                120 mm ultra-dense monolithic concrete with Fe550 steel rebar cage. 140 mm thinner profile saves room area; zero cold joints guarantee 100% water-impermeability.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Interactive Category Filter Bar (Removed 'All 6 Benchmarks') */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 sm:mb-8 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {COST_COMPARISON_DATA.map((tab) => {
            const isActive = selectedComparisonCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedComparisonCategory(tab.id)}
                className={`px-3.5 py-2 rounded-[4px] text-xs sm:text-sm font-bold shrink-0 transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-brand-green text-white border-brand-green shadow-md ring-1 ring-brand-green/30'
                    : 'bg-white text-gray-700 hover:text-brand-green hover:bg-gray-50 border-gray-200 shadow-sm'
                }`}
              >
                {tab.iconName === 'clock' && <Clock className="w-4 h-4 shrink-0" />}
                {tab.iconName === 'layers' && <Layers className="w-4 h-4 shrink-0" />}
                {tab.iconName === 'maximize' && <Maximize2 className="w-4 h-4 shrink-0" />}
                {tab.iconName === 'shield' && <ShieldCheck className="w-4 h-4 shrink-0" />}
                {tab.iconName === 'trash' && <Trash2 className="w-4 h-4 shrink-0" />}
                {tab.iconName === 'coins' && <Coins className="w-4 h-4 shrink-0" />}
                <span>{tab.category.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* 4. Active Benchmark Feature Card with Dedicated Responsive Image */}
        <AnimatePresence mode="wait">
          {COST_COMPARISON_DATA
            .filter(item => item.id === selectedComparisonCategory)
            .map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[4px] border border-gray-200 shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Left Column (Desktop 5 cols, Mobile full): Responsive Visual Render */}
                  <div 
                    onClick={() => setZoomedImage({
                      src: item.imageUrl,
                      alt: item.parameter,
                      title: item.parameter,
                      caption: `${item.mivan.value} vs ${item.traditional.value} • Value Impact: ${item.deltaBadge}`
                    })}
                    className="lg:col-span-5 relative bg-slate-950 flex flex-col justify-between overflow-hidden min-h-[220px] sm:min-h-[280px] lg:min-h-[440px] cursor-zoom-in group/bench"
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={item.parameter} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center max-h-[300px] sm:max-h-[340px] lg:max-h-full group-hover/bench:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                    {/* Click to zoom badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-[4px] bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md group-hover/bench:bg-brand-green group-hover/bench:border-brand-green transition-colors">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to zoom</span>
                    </div>
                  </div>

                  {/* Right Column (Desktop 7 cols, Mobile full): Technical Demographics & Comparison */}
                  <div className="lg:col-span-7 p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4">
                    
                    {/* Card Header (Solved for Mobile Truncation & Collision) */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                          {item.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-[4px] bg-emerald-100 text-brand-green text-xs font-extrabold flex items-center gap-1 border border-brand-green/20 shrink-0">
                         <span>{item.deltaBadge}</span>
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-extrabold font-display text-brand-charcoal leading-tight">
                        {item.parameter}
                      </h3>
                    </div>

                    {/* Comparison Panels (Solved for Mobile Overlap / Stacking) */}
                    <div className="space-y-3">
                      
                      {/* Conventional Brickwork Block */}
                      <div className="p-3 sm:p-4 rounded-[4px] bg-amber-50/50 border border-amber-200/80 space-y-2">
                        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                          <span className="font-bold text-red-700 flex items-center gap-1.5 text-xs sm:text-sm">
                            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                            {item.traditional.badge}
                          </span>
                          <span className="font-mono font-bold text-red-800 text-[11px] sm:text-xs bg-red-100/70 px-2 py-0.5 rounded-[3px] self-start xs:self-auto">
                            {item.traditional.value}
                          </span>
                        </div>
                        
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                          {item.traditional.description}
                        </p>

                        {/* Gauge Bar */}
                        <div className="pt-1">
                          <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-1">
                            <span>Conventional Scale</span>
                            <span className="text-red-700 font-bold">{item.traditional.metricTag}</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-[2px] overflow-hidden">
                            <div 
                              className="h-full bg-red-400/80 rounded-[2px]" 
                              style={{ width: `${item.traditional.gaugePercent}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* KKR Monolithic Mivan Block */}
                      <div className="p-3 sm:p-4 rounded-[4px] bg-emerald-50/60 border-2 border-brand-green/30 space-y-2">
                        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                          <span className="font-bold text-brand-green flex items-center gap-1.5 text-xs sm:text-sm">
                            <Check className="w-4 h-4 text-brand-green shrink-0" />
                            {item.mivan.badge}
                          </span>
                          <span className="font-mono font-bold text-brand-green text-[11px] sm:text-xs bg-brand-lightGreen px-2 py-0.5 rounded-[3px] self-start xs:self-auto">
                            {item.mivan.value}
                          </span>
                        </div>

                        <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed">
                          {item.mivan.description}
                        </p>

                        {/* Gauge Bar */}
                        <div className="pt-1">
                          <div className="flex justify-between text-[10px] text-emerald-800 font-mono mb-1">
                            <span className="font-semibold">Mivan Efficiency Scale</span>
                            <span className="text-brand-green font-extrabold">{item.mivan.metricTag}</span>
                          </div>
                          <div className="w-full h-2 bg-emerald-100 rounded-[2px] overflow-hidden">
                            <div 
                              className="h-full bg-brand-green rounded-[2px] transition-all duration-500" 
                              style={{ width: `${item.mivan.gaugePercent}%` }}
                            />
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Blueprint Verified Financial Impact Stamp */}
                    <div className="pt-3 border-t border-dashed border-gray-200">
                      <div className="p-3 sm:p-3.5 rounded-[4px] bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50/60 border border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                            <Coins className="w-3.5 h-3.5 text-amber-700" />
                            <span>KKR Verified Value Impact</span>
                          </div>
                          <p className="text-xs font-semibold text-gray-800 leading-snug">
                            {item.costImpact}
                          </p>
                        </div>

                        <span className="px-2.5 py-1 rounded-[4px] bg-amber-200/90 text-amber-950 font-bold text-xs whitespace-nowrap self-start sm:self-center shrink-0 border border-amber-400/40">
                          {item.highlightRoi}
                        </span>
                      </div>
                    </div>

                    {/* Quick Previous / Next Navigation Controls */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          const currIdx = COST_COMPARISON_DATA.findIndex(c => c.id === selectedComparisonCategory);
                          const prevIdx = (currIdx - 1 + COST_COMPARISON_DATA.length) % COST_COMPARISON_DATA.length;
                          setSelectedComparisonCategory(COST_COMPARISON_DATA[prevIdx].id);
                        }}
                        className="px-3 py-1.5 rounded-[4px] bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center gap-1 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>

                      <span className="text-[11px] font-mono font-semibold text-gray-400">
                        {COST_COMPARISON_DATA.findIndex(c => c.id === selectedComparisonCategory) + 1} of 6
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          const currIdx = COST_COMPARISON_DATA.findIndex(c => c.id === selectedComparisonCategory);
                          const nextIdx = (currIdx + 1) % COST_COMPARISON_DATA.length;
                          setSelectedComparisonCategory(COST_COMPARISON_DATA[nextIdx].id);
                        }}
                        className="px-3 py-1.5 rounded-[4px] bg-brand-lightGreen hover:bg-brand-green hover:text-white text-brand-green font-bold flex items-center gap-1 transition-colors"
                      >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
        </AnimatePresence>

      </section>

      {/* 6. Continuous Closed-Loop 7–10 Day Mivan Floor Cycle - Recycle Timeline */}
      <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
            <span>Closed-Loop Formwork Recycle Cadence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight">
            How KKR Executes the 7–10 Day Mivan Floor Cycle
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A continuous, high-velocity industrial repetition loop. Lightweight 6061-T6 aluminum panels are stripped within 12–16 hours, cleaned, oiled, and hoisted to Floor N+1 to restart Step 01—achieving 250+ repetitions with zero timber waste.
          </p>
        </div>

        {/* 4-Metric Closed-Loop HUD Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="p-3.5 sm:p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm flex items-center gap-3 hover:border-brand-green transition-colors">
            <div className="w-10 h-10 rounded-[4px] bg-brand-lightGreen text-brand-green flex items-center justify-center shrink-0">
              <Repeat className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-brand-charcoal font-display">250+ Repetitions</div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">100% Recyclable 6061-T6 Alloy</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm flex items-center gap-3 hover:border-brand-green transition-colors">
            <div className="w-10 h-10 rounded-[4px] bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-brand-charcoal font-display">7–10 Day Cadence</div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">68% Faster than Brickwork</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm flex items-center gap-3 hover:border-brand-green transition-colors">
            <div className="w-10 h-10 rounded-[4px] bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <RotateCw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-brand-charcoal font-display">12–16 Hr Striking</div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Rapid Vertical Form Hoisting</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm flex items-center gap-3 hover:border-brand-green transition-colors">
            <div className="w-10 h-10 rounded-[4px] bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-brand-charcoal font-display">Zero Timber Debris</div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Eco-Friendly Closed Loop</div>
            </div>
          </div>
        </div>

        {/* Desktop View: Horizontal Connected Recycle Timeline Pipeline (>= lg) */}
        <div className="hidden lg:block space-y-6">
          
          {/* Step Connecting Flow Track */}
          <div className="grid grid-cols-5 gap-3.5 relative">
            {MIVAN_CYCLE_STEPS.map((step, idx) => {
              const isSelected = openCycleIdx === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setOpenCycleIdx(idx)}
                  className={`relative bg-white rounded-[4px] border shadow-sm p-4 flex flex-col justify-between transition-all cursor-pointer group ${
                    isSelected ? 'border-brand-green ring-2 ring-brand-green/30 shadow-md' : 'border-gray-200 hover:border-brand-green/60'
                  }`}
                >
                  {/* Step Connector Arrow between steps */}
                  {idx < MIVAN_CYCLE_STEPS.length - 1 && (
                    <div className="absolute -right-3.5 top-8 z-10 w-5 h-5 rounded-full bg-brand-lightGreen border border-emerald-300 text-brand-green flex items-center justify-center text-[10px] font-bold shadow-sm">
                      ➔
                    </div>
                  )}

                  <div className="space-y-3">
                    {/* Step Header */}
                    <div className="flex items-center justify-between gap-1.5">
                      <div className={`w-8 h-8 rounded-[4px] font-mono font-extrabold flex items-center justify-center text-xs shadow-sm transition-transform group-hover:scale-105 ${
                        isSelected ? 'bg-brand-green text-white' : 'bg-brand-charcoal text-white'
                      }`}>
                        {step.step}
                      </div>
                      <span className="px-2 py-0.5 rounded-[4px] bg-emerald-50 text-brand-green border border-emerald-200 text-[10px] font-bold">
                        {step.days}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block">
                        {step.phaseTag}
                      </span>
                      <h4 className="text-sm font-bold font-display text-brand-charcoal mt-0.5 group-hover:text-brand-green transition-colors">
                        {step.title}
                      </h4>
                    </div>

                    {/* Recycle Action Pill */}
                    <div className="p-2 rounded-[4px] bg-emerald-50/70 border border-emerald-200/70 text-[11px] text-emerald-900 leading-snug flex items-start gap-1.5">
                      <RotateCw className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span>{step.recycleAction}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Quality Check Pill */}
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center gap-1.5 text-[10px] font-semibold text-brand-charcoal">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span className="truncate">{step.keyCheck}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Click-to-Zoom Lightbox Modal (Mobile & Desktop) */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col justify-between p-2 sm:p-4 select-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setZoomedImage(null);
              }
            }}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-stone-900/90 rounded-[4px] border border-stone-800 text-white shrink-0 z-10">
              <div className="flex items-center gap-2 min-w-0">
                <span className="hidden xs:inline-flex px-2 py-0.5 rounded-[4px] bg-brand-green/30 text-emerald-400 border border-emerald-500/30 text-[10px] sm:text-xs font-mono font-bold shrink-0">
                  MIVAN SPEC
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-gray-100 truncate">
                  {zoomedImage.title || 'Technical Visual'}
                </h4>
              </div>

              {/* Controls: Zoom Out, Percentage, Zoom In, Reset, Close */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setZoomScale((prev) => Math.max(1, prev - 0.5))}
                  disabled={zoomScale <= 1}
                  className="p-1.5 sm:p-2 rounded-[4px] bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-all active:scale-95"
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setZoomScale(1)}
                  className="px-2 py-1 rounded-[4px] bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-gray-200 transition-all active:scale-95"
                  title="Reset Zoom"
                >
                  {Math.round(zoomScale * 100)}%
                </button>

                <button
                  type="button"
                  onClick={() => setZoomScale((prev) => Math.min(3, prev + 0.5))}
                  disabled={zoomScale >= 3}
                  className="p-1.5 sm:p-2 rounded-[4px] bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-all active:scale-95"
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setZoomScale(1)}
                  className="p-1.5 sm:p-2 rounded-[4px] bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95 hidden xs:inline-flex"
                  title="Reset to 100%"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <div className="h-5 w-[1px] bg-white/20 mx-0.5 sm:mx-1"></div>

                <button
                  type="button"
                  onClick={() => setZoomedImage(null)}
                  className="p-1.5 sm:p-2 rounded-[4px] bg-red-600/80 hover:bg-red-600 text-white font-bold transition-all active:scale-95 flex items-center gap-1 shadow-lg"
                  title="Close (Esc)"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                  <span className="text-xs hidden sm:inline">Close</span>
                </button>
              </div>
            </div>

            {/* Central Zoom Viewport (Double-click or double-tap to zoom) */}
            <div 
              className="flex-1 flex items-center justify-center overflow-auto p-2 sm:p-4 my-2 relative touch-pan-x touch-pan-y"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setZoomedImage(null);
                }
              }}
              onDoubleClick={() => setZoomScale((prev) => (prev > 1 ? 1 : 2))}
            >
              <div 
                className="transition-transform duration-200 ease-out max-w-full max-h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{
                  transform: `scale(${zoomScale})`,
                  transformOrigin: 'center center',
                }}
              >
                <img
                  src={zoomedImage.src}
                  alt={zoomedImage.alt}
                  className="max-w-[92vw] max-h-[68vh] sm:max-h-[74vh] object-contain rounded-[4px] shadow-2xl ring-1 ring-white/10 select-none pointer-events-auto"
                  draggable={false}
                />
              </div>
            </div>

            {/* Bottom Caption & Navigation Bar */}
            <div className="px-3 py-2 sm:px-4 sm:py-2.5 bg-stone-900/90 rounded-[4px] border border-stone-800 text-center shrink-0 z-10 max-w-2xl mx-auto w-full">
              {zoomedImage.caption && (
                <p className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed">
                  {zoomedImage.caption}
                </p>
              )}
              <div className="flex items-center justify-center gap-3 text-[10px] text-gray-400 mt-1">
                <span>Double-tap / double-click to toggle zoom</span>
                <span>•</span>
                <span>Drag to pan</span>
                <span>•</span>
                <span>Esc to exit</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
