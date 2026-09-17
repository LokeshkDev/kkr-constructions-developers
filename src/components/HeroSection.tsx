import { useState, useEffect } from 'react';
import { ArrowRight, Building2, ShieldCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  headline: string;
  highlightText: string;
  subheading: string;
  imageUrl: string;
  primaryCta: string;
  primaryCtaTarget: string;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    headline: "Engineering Excellence.",
    highlightText: "Construction You Can Trust.",
    subheading: "Delivering high-durability residential & commercial building projects with professional civil engineering, structural strength, and transparent execution.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=2000&q=80",
    primaryCta: "Explore Our Projects",
    primaryCtaTarget: "#projects"
  },
  {
    id: 2,
    headline: "Rapid Project Completion.",
    highlightText: "7–10 Days Per Floor.",
    subheading: "Utilizing lightweight reusable aluminum formwork for 30–40% faster execution, smooth monolithic concrete finishes, and high seismic resistance.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
    primaryCta: "Discover Mivan Tech",
    primaryCtaTarget: "#mivan"
  },
  {
    id: 3,
    headline: "Precision Structural Execution.",
    highlightText: "Built For Long-Term Value.",
    subheading: "From raft bottom mat foundations to bank lockers, culvert bridges, and commercial elevation with qualified civil professionals.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
    primaryCta: "Contact Civil Team",
    primaryCtaTarget: "#contact"
  }
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  return (
    <section id="hero" className="relative pt-36 sm:pt-32 lg:pt-36 pb-12 bg-brand-charcoal text-white overflow-hidden architectural-grid-dark">
      
      {/* Subtle Architectural Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-10"></div>

      {/* 1. Main Catchy Banner Carousel Slider */}
      <div 
        className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[620px] flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {CAROUSEL_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === currentSlide 
                ? 'opacity-100 z-20 pointer-events-auto scale-100' 
                : 'opacity-0 z-0 pointer-events-none scale-105'
            }`}
          >
            {/* Background Image with Architectural Slow Parallax Zoom */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={slide.imageUrl} 
                alt={slide.headline}
                className={`w-full h-full object-cover object-center transition-transform duration-10000 ease-out ${
                  idx === currentSlide ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/60"></div>
            </div>

            {/* Slide Content */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-6 sm:py-16">
              <div className="max-w-4xl space-y-4 sm:space-y-6">
                
                {/* Architectural Accent Line */}
                <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-brand-green via-brand-emerald to-brand-gold rounded-full"></div>

                {/* Headline (Optimized Responsively for Mobile & Desktop) */}
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.08]">
                  {slide.headline} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-green to-amber-300">
                    {slide.highlightText}
                  </span>
                </h1>

                {/* Subheading (Optimized Responsively) */}
                <p className="text-gray-200 text-sm sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-normal pt-1 sm:pt-2">
                  {slide.subheading}
                </p>

                {/* CTA Buttons */}
                <div className="pt-3 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => scrollTo(slide.primaryCtaTarget)}
                    className="px-6 py-3.5 sm:px-9 sm:py-4 rounded bg-brand-green text-white font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-xl hover:shadow-brand-green/40 flex items-center justify-center gap-2.5 border border-emerald-400/30 active:scale-95"
                  >
                    <span>{slide.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    onClick={() => scrollTo('#contact')}
                    className="px-6 py-3.5 sm:px-9 sm:py-4 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base uppercase border border-white/25 transition-all flex items-center justify-center gap-2 backdrop-blur-md active:scale-95"
                  >
                    <span>Request Callback</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Slider Controls (Arrows) */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-full bg-black/50 hover:bg-brand-green text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 hidden sm:flex items-center justify-center shadow-2xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-full bg-black/50 hover:bg-brand-green text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 hidden sm:flex items-center justify-center shadow-2xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Slider Indicators (Dots) */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 sm:gap-2.5">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 ${
                idx === currentSlide 
                  ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-brand-green rounded-full shadow-lg' 
                  : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 hover:bg-white/70 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. SINGLE HORIZONTAL ROW of 3 Fact Cards right below/next to the banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Roots */}
          <div className="p-5 sm:p-7 rounded-2xl bg-brand-darkSlate/95 backdrop-blur-md border border-white/15 hover:border-brand-green/70 transition-all shadow-2xl group flex flex-col justify-between hover:-translate-y-1">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 sm:p-3.5 rounded-xl bg-brand-green/20 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors shrink-0">
                  <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold font-display text-white">Roots ~2024</div>
                  <div className="text-xs font-semibold text-gray-400 mt-0.5">Established in Thiruvallur</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-0.5">
                Founded by Mr. Mohan Ram with a commitment to professional civil engineering standards.
              </p>
            </div>
          </div>

          {/* Card 2: Leadership Experience */}
          <div className="p-5 sm:p-7 rounded-2xl bg-brand-darkSlate/95 backdrop-blur-md border border-white/15 hover:border-brand-gold/70 transition-all shadow-2xl group flex flex-col justify-between hover:-translate-y-1">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 sm:p-3.5 rounded-xl bg-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-colors shrink-0">
                  <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold font-display text-white">13+ &amp; 8+ Years</div>
                  <div className="text-xs font-semibold text-gray-400 mt-0.5">Civil Engineering Leadership</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-0.5">
                Managed by Mr. Thangavel (13 yrs) &amp; Mr. Pradeep (8 yrs) alongside founder Mr. Mohan Ram (8+ yrs).
              </p>
            </div>
          </div>

          {/* Card 3: Mivan Cycle */}
          <div className="p-5 sm:p-7 rounded-2xl bg-brand-darkSlate/95 backdrop-blur-md border border-white/15 hover:border-brand-green/70 transition-all shadow-2xl group flex flex-col justify-between hover:-translate-y-1">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-3xl font-extrabold font-display text-white">7–10 Days</span>
                    <span className="text-[10px] sm:text-xs text-emerald-400 font-extrabold uppercase tracking-wider">MIVAN CYCLE</span>
                  </div>
                  <div className="text-xs font-semibold text-gray-400 mt-0.5">Aluminum Formwork System</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-0.5">
                Company-profile claim: 30–40% faster than traditional brickwork with high structural strength.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
