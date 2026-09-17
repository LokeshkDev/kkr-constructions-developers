import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Mivan Tech', href: '#mivan' },
    { label: 'Project Showcase', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`bg-brand-charcoal text-gray-300 text-xs border-b border-brand-blue/30 transition-all duration-300 ${isScrolled ? 'hidden md:block py-1' : 'py-1.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Address */}
          <div className="flex items-center gap-2 text-gray-300 truncate">
            <MapPin className="w-3.5 h-3.5 text-brand-green shrink-0" />
            <span className="truncate">{COMPANY_INFO.address}</span>
          </div>

          {/* Right: Phone & Email */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-brand-green transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-green" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-2 shadow-xl border-b border-brand-green/20' 
          : 'bg-white/90 backdrop-blur-sm py-2.5 border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Bigger Compact Logo */}
          <a 
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} 
            className="flex items-center gap-3 group py-0.5"
          >
            <img 
              src="/logo.png" 
              alt="KKR Construction & Developers Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-sm"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="px-3.5 py-2 text-sm font-semibold text-brand-charcoal hover:text-brand-green transition-colors rounded-md hover:bg-brand-lightGreen"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-green text-white text-xs sm:text-sm font-bold hover:bg-brand-darkGreen transition-all shadow-md hover:shadow-lg border border-emerald-400/20 active:scale-95"
            >
              <span>Get Free Quote</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-brand-charcoal hover:text-brand-green hover:bg-brand-lightGreen focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="block px-3 py-2.5 rounded text-base font-semibold text-brand-charcoal hover:text-brand-green hover:bg-brand-lightGreen border-l-3 border-transparent hover:border-brand-green"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="text-xs text-gray-500 px-3 font-bold uppercase tracking-wider">Direct Contacts</div>
              {COMPANY_INFO.phones.slice(0, 2).map((phone, idx) => (
                <a 
                  key={idx} 
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-sm text-brand-charcoal px-3 hover:text-brand-green font-semibold"
                >
                  <Phone className="w-4 h-4 text-brand-green" />
                  <span>{phone}</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="block text-center w-full py-2.5 rounded bg-brand-green text-white font-bold text-sm mt-2 shadow"
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
