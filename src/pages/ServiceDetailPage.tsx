import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Compass, 
  Hammer, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  ShieldCheck, 
  HardHat, 
  Layers, 
  MapPin, 
  Phone, 
  ChevronLeft, 
  ChevronRight,
  Calendar
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SEO } from '../components/SEO';
import { 
  SERVICE_RESIDENTIAL_SCHEMA, 
  SERVICE_COMMERCIAL_SCHEMA, 
  SERVICE_INTERIOR_SCHEMA, 
  SERVICE_CONCRETE_SCHEMA,
  BASE_BUSINESS_SCHEMA
} from '../data/seoSchemas';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: string) => void;
  onOpenQuoteModal?: (serviceTitle?: string, mode?: 'quote' | 'inspection') => void;
}

export interface ServiceDetailFull {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullOverview: string;
  images: { url: string; caption: string }[];
  specifications: string[];
  executionWorkflow: { step: string; title: string; desc: string }[];
  deliverables: string[];
  geoCoverage: {
    primaryHub: string;
    keyDistricts: string[];
    turnaround: string;
    siteVisitCommitment: string;
  };
  icon: React.ReactNode;
}

export const SERVICE_DETAILS_DATA: Record<string, ServiceDetailFull> = {
  residential: {
    id: "residential",
    title: "Residential Construction",
    category: "Building & Living",
    shortDesc: "Individual houses, duplex villas, and modern residential developments engineered for structural longevity, aesthetic appeal, and living comfort.",
    fullOverview: "KKR Construction & Developers provides end-to-end residential construction managed directly by qualified civil engineering professionals. From initial architectural layout, vastu planning, and soil bearing tests to RCC frame casting, high-grade masonry, and modern elevation finishing, we ensure every home is built with non-negotiable structural integrity.",
    images: [
      {
        url: "/images/services/residential-construction-service-detail-kkr-constrcutions-developer.png",
        caption: "Completed Modern Residential Elevation with Architectural Facade"
      },
      {
        url: "/images/services/residential-construction-service1-detail-kkr-constrcutions-developer.png",
        caption: "Live Residential Site Execution - Exterior Plastering & Staging"
      },
      {
        url: "/images/services/residential-construction-service2-detail-kkr-constrcutions-developer.png",
        caption: "Reinforced Plinth & Slab Staging for Residential Development"
      },
      {
        url: "/images/services/residential-construction-service3-detail-kkr-constrcutions-developer.png",
        caption: "Smooth Ceiling Slab Casting & Concealed Electrical Conduits"
      }
    ],
    specifications: [
      "Standard IS 456 compliant reinforced concrete framing",
      "Certified Fe550 TMT primary and secondary steel reinforcement",
      "Anti-termite foundation chemical barrier and damp-proof course (DPC)",
      "Vibration-compacted M20/M25 grade ready-mix and site-mix concrete",
      "High-durability external weather-shield acrylic emulsion paint"
    ],
    executionWorkflow: [
      {
        step: "01",
        title: "Soil Test & Boundary Survey",
        desc: "Comprehensive soil load-bearing capacity assessment, boundary demarcation, and foundation depth calculation."
      },
      {
        step: "02",
        title: "Architectural Blueprints & Vastu Plan",
        desc: "2D floor plans, 3D exterior elevations, structural load diagrams, and local municipal approval assistance."
      },
      {
        step: "03",
        title: "Foundation & Plinth Beam Casting",
        desc: "Excavation, PCC bed layout, heavy column footing steel binding, and continuous RCC plinth beam pour."
      },
      {
        step: "04",
        title: "Superstructure, Columns & Slabs",
        desc: "Precision shuttering staging, monolithic beam and roof slab concrete pouring with needle compaction."
      },
      {
        step: "05",
        title: "Finishing, Plumbing & Key Handover",
        desc: "Internal plastering, premium tile flooring, concealed plumbing, electrical wiring, and on-time handover."
      }
    ],
    deliverables: [
      "Complete 2D Architectural, Structural & Electrical Blueprints",
      "Certified Concrete Compressive Strength & Rebar Test Reports",
      "Weekly Site Progress Logs & Direct Partner Updates",
      "100% Quality-Audited Clean Key Handover"
    ],
    geoCoverage: {
      primaryHub: "Thiruvallur (Plot No:37, Sai Garden, Tamil Nadu 631203)",
      keyDistricts: ["Thiruvallur", "Chennai", "Avadi", "Poonamallee", "Ambattur", "Sriperumbudur", "Kanchipuram", "Tiruttani", "Red Hills"],
      turnaround: "Site Visit within 24–48 Hours",
      siteVisitCommitment: "Direct on-site inspection and elevation discussion by civil engineering partners across all northern Tamil Nadu districts."
    },
    icon: <Home className="w-8 h-8" />
  },
  commercial: {
    id: "commercial",
    title: "Commercial Construction",
    category: "Enterprise & Infrastructure",
    shortDesc: "Commercial office complexes, banking premises, retail hubs, and industrial facilities built with heavy load capacity and strict safety compliance.",
    fullOverview: "Commercial projects require advanced structural calculations to handle heavy occupancy loads, high vibration machinery, and specialized security structures (such as reinforced RCC bank lockers and strongrooms). Led by Mr. Thangavel (13 yrs experience) and our civil engineering team, we deliver commercial facilities built for multi-decade durability.",
    images: [
      {
        url: "/images/services/commercial-construction1-kkr-constrcutions-developer.png",
        caption: "Commercial Complex Multi-Tier Framework & Heavy Scaffolding"
      },
      {
        url: "/images/services/commercial-construction2-kkr-constrcutions-developer.png",
        caption: "Heavy Column Footing Rebar Cage Assembly for Commercial Hub"
      },
      {
        url: "/images/services/commercial-construction3-kkr-constrcutions-developer.png",
        caption: "Commercial Structural Staging & Slab Casting Execution"
      },
      {
        url: "/images/services/service-of-kkr-constrcutions-developer.png",
        caption: "Structural Concrete Engineering & Multi-Story Commercial Execution"
      }
    ],
    specifications: [
      "Heavy commercial load-bearing column and beam frame engineering",
      "Specialized reinforced RCC bank lockers, strongrooms, and vault walls",
      "High fire-retardant concrete grades (M25/M30) with seismic detailing",
      "Pre-planned utility sleeves for high-volume electrical and HVAC routing"
    ],
    executionWorkflow: [
      {
        step: "01",
        title: "Commercial Load Analysis",
        desc: "Live, dead, and wind load engineering calculations tailored to commercial occupancy and industrial use."
      },
      {
        step: "02",
        title: "Raft Foundation & Shear Walls",
        desc: "Heavy steel mesh mat reinforcement, elevator pit casting, and high-strength retaining wall execution."
      },
      {
        step: "03",
        title: "Multi-Tier Framework Casting",
        desc: "Systematic column staging, heavy beam bottom shuttering, and vibration-compacted structural slab pours."
      },
      {
        step: "04",
        title: "Specialized Security & Enclosures",
        desc: "Executing reinforced RCC strongrooms (Canara Bank specifications), fire barrier partitions, and storefront elevations."
      },
      {
        step: "05",
        title: "Commercial Fit-Out & Handover",
        desc: "Structural safety certifications, fire code compliance checks, and commercial tenant readiness handover."
      }
    ],
    deliverables: [
      "Commercial Structural Stability & Load-Bearing Certificates",
      "Reinforced RCC Security Strongroom Execution Sign-Off",
      "Full Material Inspection Logs & Curing Certificates",
      "Complete Commercial Blueprint Documentation"
    ],
    geoCoverage: {
      primaryHub: "Thiruvallur & Chennai Metropolitan Region",
      keyDistricts: ["Chennai Central & West", "Thiruvallur Industrial Corridor", "Sriperumbudur SIPCOT", "Ambattur Industrial Estate", "Gummidipoondi", "Kanchipuram"],
      turnaround: "Site Visit within 24 Hours",
      siteVisitCommitment: "Rapid engineering consultation for commercial builders, industrial plots, and institutional clients across Tamil Nadu."
    },
    icon: <Building2 className="w-8 h-8" />
  },
  interior: {
    id: "interior",
    title: "Interior Design & Engineering",
    category: "Space Optimization",
    shortDesc: "Architectural interior planning, concealed conduit engineering, custom false ceilings, cantilever window seatings, and luxury finishes.",
    fullOverview: "Interior works executed by KKR Construction are grounded in structural civil engineering. Unlike decorative-only decorators, our engineers ensure that false ceilings, partition layouts, plumbing chases, and custom cantilever window seatings are engineered without weakening structural integrity or causing water seepage.",
    images: [
      {
        url: "/images/whychoose/client-centric-approach-kkr-construction-developer.png",
        caption: "Precision Ceiling Slab Casting with Concealed Electrical Conduits"
      },
      {
        url: "/images/whychoose/timely-completion-kkr-construction-developer.png",
        caption: "Custom Window Seating & Contemporary Facade Integration"
      }
    ],
    specifications: [
      "Monolithic smooth concrete ceiling finishes and laser-leveled false ceilings",
      "Concealed fire-resistant electrical wiring conduits cast during slab pours",
      "Moisture-proof gypsum and acoustic thermal insulation barriers",
      "Custom cantilever concrete alcove frames and modular joinery"
    ],
    executionWorkflow: [
      {
        step: "01",
        title: "Spatial Flow & Lighting Study",
        desc: "Analyzing floor space utilization, natural sunlight angles, and ergonomic furniture/storage placement."
      },
      {
        step: "02",
        title: "Conduit & Utility Channeling",
        desc: "Precision concealed electrical, data, and plumbing conduit layout integrated directly into wall chases."
      },
      {
        step: "03",
        title: "Laser-Aligned Ceiling Framing",
        desc: "Lightweight galvanized steel framing for seamless drop ceilings, cove lighting, and HVAC diffusers."
      },
      {
        step: "04",
        title: "Joinery, Windows & Partitions",
        desc: "Custom cantilever window bays, glass partitions, and durable architectural woodwork execution."
      },
      {
        step: "05",
        title: "Surface Finish & Illumination",
        desc: "Multi-coat smooth putty application, premium royal emulsion paint, architectural lighting, and final cleanup."
      }
    ],
    deliverables: [
      "3D Interior Concept Renders & Lighting Layout Plans",
      "Concealed Electrical & Plumbing Schematic Drawings",
      "High-End Surface Finishing with Zero Plaster Blemishes",
      "Complete Room-by-Room Ergonomic Handover"
    ],
    geoCoverage: {
      primaryHub: "Thiruvallur & Chennai Metropolitan Region",
      keyDistricts: ["Thiruvallur", "Chennai (Anna Nagar, Porur, Guindy)", "Kanchipuram", "Avadi", "Ambattur", "Poonamallee"],
      turnaround: "Site Visit within 24 Hours",
      siteVisitCommitment: "Direct interior space measurement and 3D architectural review at your home or project site."
    },
    icon: <Compass className="w-8 h-8" />
  },
  concrete: {
    id: "concrete",
    title: "Concrete & Structural Works",
    category: "Core Civil Engineering",
    shortDesc: "Engineered foundation casting, raft bottom mats, first-floor beam shuttering, high-speed Mivan aluminum formwork, and culvert structures.",
    fullOverview: "Structural concrete is the core civil specialty of KKR Construction & Developers. Managed by our veteran engineers, we execute heavy raft bottom mats, high-tolerance beam shuttering, and high-speed Mivan aluminum formwork (7–10 days per floor) to deliver impenetrable structural strength for residential and commercial structures.",
    images: [
      {
        url: "/images/services/service-of-kkr-constrcutions-developer.png",
        caption: "Heavy Column Footing Rebar Cage Assembly & Concrete Foundation Base"
      },
      {
        url: "/homepage-banner-kkr-construction-developers.png",
        caption: "Monolithic Mivan Aluminum Formwork Staging for High-Speed Pouring"
      },
      {
        url: "/images/whychoose/quality-construction-kkr-construction-developer.png",
        caption: "Heavy Raft Foundation Bottom Mat Steel Reinforcement Assembly"
      },
      {
        url: "/images/whychoose/technical-expertise-kkr-construction-developer.png",
        caption: "Civil Engineering Team Inspecting Multi-Tier Rebar Framework"
      }
    ],
    specifications: [
      "Mivan lightweight reusable aluminum formwork precision staging",
      "High-grade M20, M25, and M30 vibration-compacted concrete",
      "Precision-bound Fe550 TMT rebar cages for columns and retaining walls",
      "Raft bottom mats, FF beam bottom shuttering, and culvert bridges"
    ],
    executionWorkflow: [
      {
        step: "01",
        title: "Staging & Formwork Alignment",
        desc: "Laser-leveled assembly of aluminum formwork or heavy steel shuttering with verified strut support."
      },
      {
        step: "02",
        title: "Rebar Inspection & Clear Cover",
        desc: "Rigorous verification of bar spacing, concrete cover blocks, lap lengths, and stirrup binding."
      },
      {
        step: "03",
        title: "Continuous Concrete Pour",
        desc: "Monolithic concrete pouring with mechanical needle compaction to prevent voids and honeycombing."
      },
      {
        step: "04",
        title: "14–21 Day Curing Regimen",
        desc: "Disciplined ponding and chemical curing schedule ensuring maximum compressive strength gain."
      },
      {
        step: "05",
        title: "De-Shuttering & Surface Inspection",
        desc: "Systematic formwork striking revealing smooth, dense, defect-free concrete finishes."
      }
    ],
    deliverables: [
      "Concrete Cube Compressive Strength Test Certificates",
      "Steel Rebar Quality & Binding Inspection Reports",
      "Mivan Cycle Speed & Alignment Verification Logs",
      "Structural Stability & Seismic Resilience Sign-Off"
    ],
    geoCoverage: {
      primaryHub: "All Tamil Nadu Industrial & Residential Zones",
      keyDistricts: ["Thiruvallur", "Chennai", "Kanchipuram", "Chengalpattu", "Vellore", "Ranipet", "Tiruvannamalai", "Viluppuram"],
      turnaround: "Site Inspection within 24 Hours",
      siteVisitCommitment: "Full technical engineering site evaluation and Mivan formwork availability assessment."
    },
    icon: <Hammer className="w-8 h-8" />
  }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId, onNavigate, onOpenQuoteModal }) => {
  // Normalize serviceId
  const currentKey = SERVICE_DETAILS_DATA[serviceId] ? serviceId : 'residential';
  const service = SERVICE_DETAILS_DATA[currentKey];

  // Carousel state
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % service.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [service.images.length]);

  const handlePrev = () => {
    setActiveImageIdx((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  const handleNext = () => {
    setActiveImageIdx((prev) => (prev + 1) % service.images.length);
  };

  const getSchemaForService = () => {
    switch (currentKey) {
      case 'residential':
        return [BASE_BUSINESS_SCHEMA, SERVICE_RESIDENTIAL_SCHEMA];
      case 'commercial':
        return [BASE_BUSINESS_SCHEMA, SERVICE_COMMERCIAL_SCHEMA];
      case 'interior':
        return [BASE_BUSINESS_SCHEMA, SERVICE_INTERIOR_SCHEMA];
      case 'concrete':
        return [BASE_BUSINESS_SCHEMA, SERVICE_CONCRETE_SCHEMA];
      default:
        return [BASE_BUSINESS_SCHEMA, SERVICE_RESIDENTIAL_SCHEMA];
    }
  };

  const getCanonicalForService = () => {
    switch (currentKey) {
      case 'residential':
        return '/services/residential-construction';
      case 'commercial':
        return '/services/commercial-construction';
      case 'interior':
        return '/services/interior-design-engineering';
      case 'concrete':
        return '/services/concrete-structural-works';
      default:
        return `/services/${currentKey}`;
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-10 bg-brand-offWhite min-h-screen text-brand-charcoal w-full max-w-full overflow-x-hidden">
      <SEO 
        title={`${service.title} | KKR Construction & Developers Thiruvallur`}
        description={service.shortDesc}
        canonicalUrl={getCanonicalForService()}
        keywords={`${service.title}, KKR Construction, Civil Engineering ${service.category}, Builders Thiruvallur, Chennai Construction Contractors`}
        ogType="article"
        ogImage={service.images[0]?.url || '/images/services/residential-construction-service-detail-kkr-constrcutions-developer.png'}
        schemaData={getSchemaForService()}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.title, url: getCanonicalForService() }
        ]}
      />
      
      {/* 1. Clean Breadcrumb & Header Section (NO Large Background Banner) */}
      <section className="bg-white border-b border-gray-200 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-brand-green transition-colors font-medium"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={() => onNavigate('services')} 
              className="hover:text-brand-green transition-colors font-medium"
            >
              Services
            </button>
            <span>/</span>
            <span className="text-brand-green font-bold truncate">{service.title}</span>
          </div>

          {/* Title Header with Category Pill */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[4px] bg-brand-lightGreen text-brand-darkGreen text-xs font-bold uppercase tracking-wider border border-brand-green/30 mb-1.5">
                <span>{service.category}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-brand-charcoal tracking-tight">
                {service.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-700 max-w-3xl mt-1 leading-relaxed font-normal">
                {service.shortDesc}
              </p>
            </div>

            {/* Quick Action CTAs - 1 row on mobile & tablet */}
            <div className="flex flex-row items-center gap-2 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
              <button
                onClick={() => onNavigate('services')}
                className="flex-1 sm:flex-initial px-3 sm:px-3.5 py-2 rounded-[4px] bg-gray-100 hover:bg-gray-200 text-brand-charcoal text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 active:scale-95 border border-gray-300 text-center"
              >
                <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                <span>All Services</span>
              </button>

              <button
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal(service.title, 'quote') : onNavigate('contact')}
                className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-[4px] bg-brand-green text-white text-[11px] sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 border border-emerald-400/30 text-center"
              >
                <span>Request Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Image Carousel Section - Page Attached (Seamless Full Container, NOT a boxed card) */}
      <section className="py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Strip attached directly to page */}
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-[2px] bg-brand-green"></span>
            <span className="text-xs sm:text-sm font-bold text-brand-charcoal uppercase tracking-wider">
              Project Site Execution Gallery
            </span>
            <span className="text-[11px] font-extrabold px-1.5 py-0.5 rounded-[4px] bg-brand-lightGreen text-brand-green border border-brand-green/30">
              {activeImageIdx + 1} / {service.images.length}
            </span>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-[4px] bg-white border border-gray-300 hover:bg-brand-green hover:text-white hover:border-brand-green text-brand-charcoal transition-colors shadow-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-[4px] bg-white border border-gray-300 hover:bg-brand-green hover:text-white hover:border-brand-green text-brand-charcoal transition-colors shadow-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Display Image - Page Attached Sleek Edge */}
        <div className="relative h-72 sm:h-96 md:h-[480px] lg:h-[520px] rounded-[4px] overflow-hidden bg-slate-900 group shadow-lg border border-gray-200">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImageIdx}
              src={service.images[activeImageIdx].url}
              alt={service.images[activeImageIdx].caption}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Floating In-Image Chevrons on Hover for Easy Click */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-[4px] bg-black/60 hover:bg-brand-green text-white transition-all backdrop-blur-md opacity-80 hover:opacity-100 shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-[4px] bg-black/60 hover:bg-brand-green text-white transition-all backdrop-blur-md opacity-80 hover:opacity-100 shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Overlay Caption Bar with High Contrast */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-6">
            <div className="text-sm sm:text-base md:text-lg font-bold text-white mt-1 leading-snug drop-shadow-md">
              {service.images[activeImageIdx].caption}
            </div>
          </div>
        </div>

        {/* Thumbnail Strip Attached Underneath */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3.5 mt-3">
          {service.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImageIdx(i)}
              className={`relative h-16 sm:h-24 md:h-28 rounded-[4px] overflow-hidden border-2 transition-all group ${
                activeImageIdx === i
                  ? 'border-brand-green ring-2 ring-brand-green/30 shadow-md opacity-100'
                  : 'border-gray-200 opacity-65 hover:opacity-100'
              }`}
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              {activeImageIdx === i && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-green"></div>
              )}
            </button>
          ))}
        </div>

      </section>

      {/* 3. Deep Engineering Specifications & Workflow Grid */}
      <section className="py-4 sm:py-6 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left 8 Cols: Overview, Technical Specs & Workflow */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            
            {/* Overview Card */}
            <div className="bg-white rounded-[4px] p-5 sm:p-6 border border-gray-200 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-brand-green font-bold text-xs sm:text-sm uppercase tracking-wider">
                <HardHat className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Engineering Overview &amp; Execution Standard</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-brand-charcoal">
                Professional Engineering &amp; Quality Control
              </h2>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                {service.fullOverview}
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="bg-white rounded-[4px] p-5 sm:p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-brand-green font-bold text-xs sm:text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Technical Specifications &amp; Quality Codes</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-brand-charcoal">
                Material Standards &amp; Quality Codes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {service.specifications.map((spec, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-[4px] bg-slate-50 border border-gray-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Execution Workflow */}
            <div className="bg-white rounded-[4px] p-5 sm:p-6 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-brand-gold font-bold text-xs sm:text-sm uppercase tracking-wider">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>5-Step Execution Workflow</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-brand-charcoal">
                How We Execute Your Project
              </h3>
              
              <div className="space-y-2.5">
                {service.executionWorkflow.map((step, stIdx) => (
                  <div key={stIdx} className="p-3.5 rounded-[4px] bg-slate-50 border border-gray-200 flex items-start gap-3.5 hover:border-brand-green/60 transition-colors">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[4px] bg-brand-green text-white font-mono font-extrabold flex items-center justify-center text-xs sm:text-sm shrink-0 shadow-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Deliverables */}
            <div className="bg-white rounded-[4px] p-5 sm:p-6 border border-gray-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-display text-brand-charcoal">
                Client Deliverables Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-800">
                {service.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-[4px] bg-slate-50 border border-gray-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right 4 Cols: GEO Support & On-Site Consultation Card */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            
            {/* GEO Support Coverage Card - High-Contrast Solid Deep Theme */}
            <div className="bg-[#0B1520] text-white rounded-[4px] p-5 sm:p-6 border border-brand-green/40 shadow-xl space-y-4 relative overflow-hidden architectural-grid-dark">
              
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-extrabold font-display text-white">
                  Regional Service Hub &amp; Site Reach
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our civil engineering team manages on-site execution across key Tamil Nadu districts.
                </p>
              </div>

              {/* Primary Location Badge with Solid Background */}
              <div className="p-3.5 rounded-[4px] bg-[#132030] border border-slate-700/90 space-y-1.5">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-brand-green shrink-0" />
                  <span>Primary Registered Hub</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                  {COMPANY_INFO.address}
                </div>
              </div>

              {/* Active District Badges */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Active On-Site Districts
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.geoCoverage.keyDistricts.map((dist, dIdx) => (
                    <span 
                      key={dIdx}
                      className="px-2.5 py-0.5 rounded-[4px] bg-[#1A2C40] text-white text-xs font-semibold border border-slate-600 shadow-sm"
                    >
                      {dist}
                    </span>
                  ))}
                </div>
              </div>

              {/* Response Time Commitment with High-Contrast Green Box */}
              <div className="p-3 rounded-[4px] bg-emerald-950/90 border border-emerald-500/40 text-xs text-emerald-100 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-300 font-extrabold text-xs">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{service.geoCoverage.turnaround}</span>
                </div>
                <p className="text-[11px] text-emerald-200 leading-relaxed">
                  {service.geoCoverage.siteVisitCommitment}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal(service.title, 'inspection') : onNavigate('contact')}
                className="w-full py-3 px-4 rounded-[4px] bg-brand-green text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-darkGreen transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 border border-emerald-400/30"
              >
                <span>Book On-Site Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* Direct Phone Consultation Box */}
            <div className="bg-white rounded-[4px] p-5 border border-gray-200 shadow-sm space-y-3">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Direct Access</span>
                <h4 className="text-base sm:text-lg font-bold font-display text-brand-charcoal">
                  Speak Directly With Engineers
                </h4>
                <p className="text-xs text-gray-600">
                  Call our founders directly for blueprints and quotation feasibility.
                </p>
              </div>

              <div className="space-y-2">
                <a 
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-[4px] bg-brand-lightGreen hover:bg-brand-green text-brand-charcoal hover:text-white transition-all flex items-center justify-between text-xs font-bold group border border-brand-green/20"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-green group-hover:text-white" />
                    <span>Mr. Mohan Ram (Founder)</span>
                  </div>
                  <span className="font-mono">{COMPANY_INFO.phones[0]}</span>
                </a>

                <a 
                  href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-[4px] bg-brand-lightGreen hover:bg-brand-green text-brand-charcoal hover:text-white transition-all flex items-center justify-between text-xs font-bold group border border-brand-green/20"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-green group-hover:text-white" />
                    <span>Mr. Thangavel (Managing Partner)</span>
                  </div>
                  <span className="font-mono">{COMPANY_INFO.phones[1]}</span>
                </a>
              </div>
            </div>

            {/* Other Services Switcher */}
            <div className="bg-white rounded-[4px] p-5 border border-gray-200 shadow-sm space-y-2.5">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Explore Other Services</span>
              <div className="space-y-1.5">
                {Object.keys(SERVICE_DETAILS_DATA).map((key) => {
                  const s = SERVICE_DETAILS_DATA[key];
                  if (s.id === service.id) return null;
                  return (
                    <button
                      key={s.id}
                      onClick={() => onNavigate(`service-${s.id}`)}
                      className="w-full p-2.5 rounded-[4px] hover:bg-brand-lightGreen text-left text-xs font-semibold text-brand-charcoal hover:text-brand-green transition-colors flex items-center justify-between group border border-gray-100 hover:border-brand-green/20"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-green group-hover:translate-x-1 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
