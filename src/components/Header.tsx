import { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown,
  Home,
  Building2,
  Compass,
  Hammer,
  ArrowRight,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { getPageUrl } from '../App';

interface HeaderProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
  onOpenQuoteModal?: (serviceTitle?: string, mode?: 'quote' | 'inspection') => void;
}

const SERVICE_SUB_ITEMS = [
  {
    id: 'residential',
    page: 'service-residential',
    title: 'Residential Construction',
    desc: 'Villas, duplex homes & turnkey apartments',
    icon: Home
  },
  {
    id: 'commercial',
    page: 'service-commercial',
    title: 'Commercial Construction',
    desc: 'Office complexes, retail & banking vault rooms',
    icon: Building2
  },
  {
    id: 'interior',
    page: 'service-interior',
    title: 'Interior Design & Engineering',
    desc: 'False ceilings, utility conduit & space planning',
    icon: Compass
  },
  {
    id: 'concrete',
    page: 'service-concrete',
    title: 'Concrete & Structural Works',
    desc: 'Raft mats, beam shuttering & Mivan formwork',
    icon: Hammer
  }
];

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services', hasDropdown: true },
    { label: 'Mivan Tech', page: 'mivan' },
    { label: 'Project Gallery', page: 'projects' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
    onNavigate(page);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150);
  };

  const isServiceActive = currentPage === 'services' || currentPage.startsWith('service-');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar - Clean Header Strip with Theme Colors */}
      <div className={`bg-[#0A1118] text-gray-300 text-xs border-b border-brand-green/20 transition-all duration-300 ${isScrolled ? 'hidden md:block py-1' : 'py-1.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Address */}
          <div className="flex items-center gap-2 text-gray-300 truncate">
            <MapPin className="w-3.5 h-3.5 text-brand-green shrink-0" />
            <span className="truncate">{COMPANY_INFO.address}</span>
          </div>

          {/* Right: Email Inbox */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-brand-green transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-green" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-1 sm:py-1.5 shadow-md border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm py-2 sm:py-3 border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-3">
          {/* Logo & Text in Theme Colors with SEO clean href */}
          <a 
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
            className="flex items-center gap-2.5 sm:gap-3.5 group py-0.5 shrink-0"
          >
            <img 
              src="/logo.png" 
              alt="KKR Construction & Developers Logo" 
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled 
                  ? 'h-11 sm:h-10 lg:h-11' 
                  : 'h-14 xs:h-[60px] sm:h-14 lg:h-16'
              }`}
            />
            <div className="flex flex-col justify-center">
              <span className={`font-display font-extrabold text-brand-green leading-tight tracking-tight uppercase transition-all duration-300 ${
                isScrolled ? 'text-sm sm:text-sm lg:text-base' : 'text-base xs:text-lg sm:text-lg lg:text-xl'
              }`}>
                KKR Construction
              </span>
              <span className={`font-extrabold text-brand-green tracking-widest uppercase transition-all duration-300 ${
                isScrolled ? 'text-[10px] sm:text-[10px]' : 'text-[11px] xs:text-xs sm:text-xs'
              }`}>
                &amp; Developers
              </span>
            </div>
          </a>

          {/* Right Aligned Container: Desktop Links + CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-2 xl:gap-3 ml-auto">
            {/* Desktop Links - Right Aligned with clean 2px-5px radius */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.label}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => handleNavClick('services')}
                        className={`relative px-3 py-2 text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-1 group ${
                          isServiceActive
                            ? 'text-brand-green'
                            : 'text-brand-charcoal hover:text-brand-green'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180 text-brand-green' : isServiceActive ? 'text-brand-green' : 'text-gray-400 group-hover:text-brand-green'}`} />
                        {isServiceActive && (
                          <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-brand-green rounded-full" />
                        )}
                      </button>

                      {/* Desktop Dropdown Panel */}
                      {desktopDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-white rounded-[4px] shadow-2xl border border-gray-200 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          {/* Top Overview Link */}
                          <div className="px-3 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">Our Solutions</span>
                            <a
                              href={getPageUrl('services')}
                              onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                              className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
                            >
                              <span>All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>

                          {/* 4 Dedicated Service Detail Links */}
                          <div className="space-y-0.5 px-1.5">
                            {SERVICE_SUB_ITEMS.map((sub) => {
                              const isSubActive = currentPage === sub.page;
                              const SubIcon = sub.icon;
                              return (
                                <a
                                  key={sub.id}
                                  href={getPageUrl(sub.page)}
                                  onClick={(e) => { e.preventDefault(); handleNavClick(sub.page); }}
                                  className={`flex items-start gap-3 p-2.5 rounded-[4px] transition-colors group ${
                                    isSubActive ? 'bg-brand-lightGreen text-brand-green' : 'hover:bg-brand-lightGreen/60 text-brand-charcoal'
                                  }`}
                                >
                                  <div className={`p-2 rounded-[4px] mt-0.5 shrink-0 transition-colors ${
                                    isSubActive ? 'bg-brand-green text-white' : 'bg-gray-100 text-brand-green group-hover:bg-brand-green group-hover:text-white'
                                  }`}>
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-bold text-brand-charcoal group-hover:text-brand-green transition-colors leading-snug">
                                      {sub.title}
                                    </div>
                                    <div className="text-[11px] text-gray-500 line-clamp-1 leading-tight mt-0.5">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = currentPage === item.page;
                return (
                  <a
                    key={item.label}
                    href={getPageUrl(item.page)}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.page); }}
                    className={`relative px-3 py-2 text-sm font-bold transition-colors whitespace-nowrap flex items-center ${
                      isActive
                        ? 'text-brand-green'
                        : 'text-brand-charcoal hover:text-brand-green'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-brand-green rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA & Mobile Toggle with 4px border radius */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal('General Construction', 'quote') : handleNavClick('contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-[4px] bg-brand-green text-white text-xs sm:text-sm font-bold hover:bg-brand-darkGreen transition-all shadow-sm hover:shadow-md border border-emerald-400/20 active:scale-95 whitespace-nowrap"
              >
                <span>Get Free Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-[4px] text-brand-charcoal hover:text-brand-green hover:bg-brand-lightGreen focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between px-3 py-2">
                      <a
                        href={getPageUrl('services')}
                        onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                        className={`inline-flex items-center text-base font-bold transition-colors ${
                          isServiceActive ? 'text-brand-green border-b-2 border-brand-green pb-1' : 'text-brand-charcoal hover:text-brand-green'
                        }`}
                      >
                        <span>{item.label}</span>
                      </a>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1.5 rounded text-gray-500 hover:text-brand-green"
                        aria-label="Toggle services list"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-brand-green' : ''}`} />
                      </button>
                    </div>

                    {/* Expandable Nested Sub-Items */}
                    {mobileServicesOpen && (
                      <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-brand-green/30 ml-3">
                        <a
                          href={getPageUrl('services')}
                          onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-[4px] text-xs font-extrabold text-brand-green hover:bg-brand-lightGreen"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>All Services Overview</span>
                        </a>
                        {SERVICE_SUB_ITEMS.map((sub) => {
                          const SubIcon = sub.icon;
                          const isSubActive = currentPage === sub.page;
                          return (
                            <a
                              key={sub.id}
                              href={getPageUrl(sub.page)}
                              onClick={(e) => { e.preventDefault(); handleNavClick(sub.page); }}
                              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[4px] text-xs font-bold transition-colors ${
                                isSubActive ? 'bg-brand-lightGreen text-brand-green' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-green'
                              }`}
                            >
                              <SubIcon className="w-4 h-4 text-brand-green shrink-0" />
                              <span>{sub.title}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentPage === item.page;
              return (
                <div key={item.label} className="px-3 py-2">
                  <a
                    href={getPageUrl(item.page)}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.page); }}
                    className={`inline-flex items-center text-base font-semibold transition-colors ${
                      isActive 
                        ? 'text-brand-green font-bold border-b-2 border-brand-green pb-1' 
                        : 'text-brand-charcoal hover:text-brand-green'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                </div>
              );
            })}
            <div className="pt-4 border-t border-gray-100 space-y-2.5">
              <div className="text-xs text-gray-500 px-3 font-bold uppercase tracking-wider">Direct Phone Contacts</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a 
                    key={idx} 
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-sm text-brand-charcoal px-3 py-1.5 rounded-[4px] hover:bg-brand-lightGreen hover:text-brand-green font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-green shrink-0" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
              <a
                href={getPageUrl('contact')}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                className="block text-center w-full py-2.5 rounded-[4px] bg-brand-green text-white font-bold text-sm mt-3 shadow"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
