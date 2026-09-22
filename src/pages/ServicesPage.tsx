import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Compass, 
  Hammer, 
  ArrowRight,
  CheckCircle2,
  Eye
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SERVICES_PAGE_SCHEMAS } from '../data/seoSchemas';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal?: (serviceTitle?: string, mode?: 'quote' | 'inspection') => void;
}

interface ServiceDetailData {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  shortDesc: string;
  fullOverview: string;
  specifications: string[];
  executionWorkflow: { step: string; desc: string }[];
  deliverables: string[];
  icon: React.ReactNode;
}

const detailedServices: ServiceDetailData[] = [
  {
    id: "residential",
    title: "Residential Construction",
    category: "Building & Living",
    imageUrl: "/images/services/residential-construction-service-detail-kkr-constrcutions-developer.png",
    shortDesc: "Individual houses, duplex villas, and modern residential developments engineered for structural longevity, aesthetic appeal, and living comfort.",
    fullOverview: "KKR Construction & Developers delivers custom residential building solutions managed directly by experienced civil engineers. From initial architectural layout and soil bearing tests to structural RCC framing, masonry, electrical plumbing conduits, and modern facade finishes, every step adheres to strict building codes and client vision.",
    specifications: [
      "Standard IS 456 compliant reinforced concrete structure",
      "High-grade Fe550 TMT steel reinforcement binding",
      "Termite-proof foundation treatment and anti-dampness DPC layers",
      "High-finish cement plastering with weather-resistant exterior painting"
    ],
    executionWorkflow: [
      { step: "01. Soil & Site Survey", desc: "Detailed boundary verification, soil load-bearing calculation, and foundation depth planning." },
      { step: "02. Architectural & Structural Design", desc: "2D/3D elevation layouts, vastu-compliant plans, and structural engineering blueprints." },
      { step: "03. Foundation & Plinth Execution", desc: "Heavy excavation, PCC sub-base, raft/column footing, and reinforced plinth beam casting." },
      { step: "04. Superstructure & Slabs", desc: "Precision shuttering staging, steel cage reinforcement, and vibration-compacted concrete pouring." },
      { step: "05. Finishing & Handover", desc: "Masonry, plumbing, wiring, floor tile setting, painting, and on-time key handover." }
    ],
    deliverables: [
      "Complete 2D Architectural & Structural Drawing Sets",
      "Material Quality & Concrete Strength Test Approvals",
      "On-Site Daily/Weekly Progress Supervision Reports",
      "Final Structural Handover & Clean Site Clearance"
    ],
    icon: <Home className="w-7 h-7" />
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    category: "Enterprise & Infrastructure",
    imageUrl: "/images/services/commercial-construction1-kkr-constrcutions-developer.png",
    shortDesc: "Commercial office spaces, retail complexes, banking infrastructure, and industrial developments built with robust load capacity and modern utility integration.",
    fullOverview: "We engineer high-durability commercial structures capable of handling high occupancy loads, heavy mechanical staging, and specialized security needs (such as reinforced RCC bank lockers and strongrooms). All works are led by our managing partners with up to 13 years of civil engineering execution experience.",
    specifications: [
      "Heavy-load structural column and beam frame engineering",
      "Heavy RCC strongroom, vault walls, and security enclosure construction",
      "Optimized open-span structural planning for commercial flexibility",
      "Industrial-grade fire retardant and structural safety compliance"
    ],
    executionWorkflow: [
      { step: "01. Structural Load Analysis", desc: "Calculating live and dead loads tailored to commercial usage, equipment, and foot traffic." },
      { step: "02. Deep Foundation & Mat Work", desc: "Raft bottom mat reinforcement, shear wall steel cages, and heavy concrete pour." },
      { step: "03. Multi-Tier Framework Execution", desc: "Staged beam shuttering, heavy column casting, and pre-planned utility sleeve integration." },
      { step: "04. Security & Heavy Enclosures", desc: "Executing reinforced bank locker rooms, heavy barrier walls, and exterior elevations." },
      { step: "05. Commercial Handover", desc: "Full structural safety certifications and commercial fit-out readiness." }
    ],
    deliverables: [
      "Commercial Load-Bearing Structural Certificates",
      "Reinforced RCC Security Vault & Partition Execution",
      "Heavy Scaffolding & Site Safety Audit Protocols",
      "Complete Infrastructure Blueprint Compliance"
    ],
    icon: <Building2 className="w-7 h-7" />
  },
  {
    id: "interior",
    title: "Interior Design & Engineering",
    category: "Space Optimization",
    imageUrl: "/images/whychoose/client-centric-approach-kkr-construction-developer.png",
    shortDesc: "Comprehensive interior spatial planning, electrical conduit integration, custom false ceilings, and premium finishing managed with engineering precision.",
    fullOverview: "Interior spaces executed by KKR Construction bridge the gap between aesthetic beauty and structural durability. Unlike purely decorative approaches, our civil engineers ensure that false ceilings, partition walls, electrical conduits, and custom window seatings integrate seamlessly without compromising structural load or surface water resistance.",
    specifications: [
      "Seamless monolithic ceiling finish and concealed electrical ducting",
      "Custom cantilever window bays and integrated concrete seating frames",
      "Moisture-resistant gypsum and thermal acoustic insulation layers",
      "High-durability wood, glass, and steel interior architectural fixtures"
    ],
    executionWorkflow: [
      { step: "01. Spatial & Lighting Planning", desc: "Optimizing room flow, natural illumination angles, and electrical point distribution." },
      { step: "02. Conduit & Service Staging", desc: "Precision concealed electrical, plumbing, and HVAC conduit channeling into structural slabs." },
      { step: "03. Ceiling Framing & Leveling", desc: "Laser-aligned lightweight metal framing for durable drop ceilings and acoustic panels." },
      { step: "04. Joinery & Custom Alcoves", desc: "Executing custom seating bays, partition walls, and durable surface treatments." },
      { step: "05. Final Detailing & Polish", desc: "Smooth plaster finish, premium emulsion paint, lighting installation, and handover." }
    ],
    deliverables: [
      "3D Interior Concept Visualizations & Layout Plans",
      "Concealed Electrical & Plumbing Schematic Blueprints",
      "High-End Surface Finishing with Zero Plaster Defects",
      "Client Walkthrough & Ergonomic Quality Sign-Off"
    ],
    icon: <Compass className="w-7 h-7" />
  },
  {
    id: "concrete",
    title: "Concrete & Structural Works",
    category: "Core Engineering",
    imageUrl: "/images/services/service-of-kkr-constrcutions-developer.png",
    shortDesc: "Precision concrete foundations, raft bottom mats, first-floor beam shuttering, high-speed Mivan aluminum formwork, and RCC compound walls.",
    fullOverview: "The core foundation of KKR Construction & Developers lies in specialized civil structural works. From complex raft bottom mat rebar binding and multi-column footings to high-speed Mivan aluminum formwork (7–10 days per floor) and culvert bridge infrastructure, we maintain rigorous engineering quality on all structural pours.",
    specifications: [
      "Laser-aligned Mivan aluminum formwork and plywood shuttering staging",
      "High-density vibration-compacted concrete (M20, M25, M30 grades)",
      "Heavy rebar cage binding for footings, columns, and retaining walls",
      "Raft bottom mats, FF slab reinforcement, and culvert bridge works"
    ],
    executionWorkflow: [
      { step: "01. Shuttering & Rebar Alignment", desc: "Precision assembly of lightweight reusable aluminum formwork or heavy steel staging." },
      { step: "02. Reinforcement Quality Check", desc: "Verifying bar spacing, clear cover blocks, lap lengths, and stirrup binding fidelity." },
      { step: "03. Concrete Pour & Compaction", desc: "Continuous pouring using needle vibrators to eliminate air pockets and honeycombing." },
      { step: "04. Monolithic Curing Cycle", desc: "Strict 14-to-21 day water curing schedule to achieve peak structural compression strength." },
      { step: "05. Formwork Strike & Inspection", desc: "Systematic formwork de-shuttering revealing smooth, defect-free concrete surfaces." }
    ],
    deliverables: [
      "Concrete Cube Compressive Strength Test Reports",
      "Steel Rebar Test Certificates & Binding Inspection Logs",
      "Mivan Formwork Cycle Time & Alignment Audits",
      "Structural Stability & Seismic Resilience Sign-Off"
    ],
    icon: <Hammer className="w-7 h-7" />
  }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="pt-20 sm:pt-24 pb-10 bg-brand-offWhite min-h-screen text-brand-charcoal w-full max-w-full overflow-x-hidden">
      <SEO 
        title="Construction & Civil Engineering Services | KKR Construction & Developers"
        description="Explore our specialized construction services: residential turnkey villas, commercial complexes & bank vaults, interior civil engineering, and high-strength concrete structural works in Thiruvallur & Chennai."
        canonicalUrl="/services"
        keywords="Construction Services Thiruvallur, Residential Builders Chennai, Commercial Construction Tamil Nadu, Interior Design Civil Engineers, Concrete Works Contractors, RCC Raft Foundation"
        ogType="website"
        ogImage="/images/services/residential-construction-service-detail-kkr-constrcutions-developer.png"
        schemaData={SERVICES_PAGE_SCHEMAS}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
      />
      
      {/* Main Services Section with Inline Breadcrumb next to Core Solutions */}
      <section className="py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Breadcrumb + Core Solutions Badge */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-7 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-brand-green transition-colors font-medium"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-brand-green font-bold">Services</span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-extrabold uppercase tracking-wider border border-brand-green/20">
              <span>Core Solutions</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Our Construction &amp; Engineering Services
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Executed with civil engineering precision, certified structural materials, and strict safety compliance.
          </p>
        </div>

        {/* 4 Cards Grid with Compact Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {detailedServices.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[4px] overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-brand-green/60 transition-all flex flex-col justify-between group"
            >
              {/* In-Card Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-900">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/20 to-transparent"></div>
                
                {/* Category Badge top-left */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-[4px] bg-brand-charcoal/80 backdrop-blur-md border border-white/20 text-brand-gold text-[10px] font-bold uppercase tracking-wider shadow-md">
                  {service.category}
                </div>

                {/* Floating Icon top-right */}
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-[4px] bg-brand-green text-white flex items-center justify-center shadow-lg border border-emerald-400/40">
                  {service.icon}
                </div>

                {/* Bottom Overlay Title in Image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Content & Details */}
              <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Key Execution Scope</span>
                    <ul className="space-y-1">
                      {service.specifications.slice(0, 3).map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive CTA Buttons - Single row on mobile & tablet */}
                <div className="pt-3 border-t border-gray-100 flex flex-row gap-2 w-full">
                  <button
                    onClick={() => onNavigate(`service-${service.id}`)}
                    className="flex-1 py-2 sm:py-2.5 px-2.5 sm:px-3.5 rounded-[4px] bg-brand-lightGreen hover:bg-brand-green text-brand-green hover:text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-xs border border-brand-green/20 active:scale-95 truncate text-center"
                  >
                    <Eye className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">View Details</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal ? onOpenQuoteModal(service.title, 'quote') : onNavigate('contact')}
                    className="py-2 sm:py-2.5 px-3 sm:px-4 rounded-[4px] bg-brand-green text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-brand-darkGreen transition-all flex items-center justify-center gap-1 shadow-sm active:scale-95 shrink-0 border border-emerald-400/30 text-center"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 pb-4">
        <div className="rounded-[4px] bg-brand-charcoal text-white p-6 sm:p-8 relative overflow-hidden architectural-grid-dark shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 border border-brand-green/30">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold font-display">
              Have a Custom Project or Site Requirement?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              We provide end-to-end civil engineering solutions across Thiruvallur, Chennai, and Tamil Nadu.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal ? onOpenQuoteModal('General Construction', 'quote') : onNavigate('contact')}
            className="px-6 py-3 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-lg hover:shadow-brand-green/40 flex items-center gap-2 active:scale-95 shrink-0 border border-emerald-400/30"
          >
            <span>Consult Our Civil Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
