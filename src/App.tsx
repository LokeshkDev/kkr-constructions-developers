import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { PageLoader } from './components/PageLoader';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingSupport } from './components/FloatingSupport';

// Dynamic code-splitting for high FCP & LCP performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const MivanPage = lazy(() => import('./pages/MivanPage').then(m => ({ default: m.MivanPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const QuoteModal = lazy(() => import('./components/QuoteModal').then(m => ({ default: m.QuoteModal })));

const PageSkeletonFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center py-24">
    <div className="flex flex-col items-center gap-3">
      <div className="w-9 h-9 border-3 border-brand-green/20 border-t-brand-green rounded-full animate-spin"></div>
      <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Loading Page...</span>
    </div>
  </div>
);

// SEO Clean URL Map
export const getPageUrl = (page: string): string => {
  switch (page) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'services':
      return '/services';
    case 'service-residential':
      return '/services/residential-construction';
    case 'service-commercial':
      return '/services/commercial-construction';
    case 'service-interior':
      return '/services/interior-design-engineering';
    case 'service-concrete':
      return '/services/concrete-structural-works';
    case 'mivan':
      return '/mivan-technology';
    case 'projects':
      return '/project-gallery';
    case 'contact':
      return '/contact';
    default:
      if (page.startsWith('service-')) {
        return `/services/${page.replace('service-', '')}`;
      }
      return `/${page}`;
  }
};

export const parsePathToPage = (path: string, hash: string): string => {
  // 1. Clean path
  const normalizedPath = path.toLowerCase().replace(/\/$/, '') || '/';
  
  if (normalizedPath === '/' || normalizedPath === '/home') return 'home';
  if (normalizedPath === '/about' || normalizedPath === '/about-us') return 'about';
  if (normalizedPath === '/services' || normalizedPath === '/our-services') return 'services';
  
  // Specific service detail SEO URLs
  if (normalizedPath === '/services/residential-construction' || normalizedPath === '/services/residential') return 'service-residential';
  if (normalizedPath === '/services/commercial-construction' || normalizedPath === '/services/commercial') return 'service-commercial';
  if (normalizedPath === '/services/interior-design-engineering' || normalizedPath === '/services/interior' || normalizedPath === '/services/interior-design') return 'service-interior';
  if (normalizedPath === '/services/concrete-structural-works' || normalizedPath === '/services/concrete') return 'service-concrete';

  if (normalizedPath.startsWith('/services/')) {
    const slug = normalizedPath.replace('/services/', '');
    if (slug.includes('residential')) return 'service-residential';
    if (slug.includes('commercial')) return 'service-commercial';
    if (slug.includes('interior')) return 'service-interior';
    if (slug.includes('concrete')) return 'service-concrete';
    return `service-${slug}`;
  }

  if (normalizedPath === '/mivan-technology' || normalizedPath === '/mivan' || normalizedPath === '/mivan-tech') return 'mivan';
  if (normalizedPath === '/project-gallery' || normalizedPath === '/project-showcase' || normalizedPath === '/projects' || normalizedPath === '/portfolio') return 'projects';
  if (normalizedPath === '/contact' || normalizedPath === '/contact-us') return 'contact';

  // 2. Fallback to hash if present (for legacy deep links)
  if (hash) {
    const cleanHash = hash.replace('#', '').toLowerCase();
    if (['home', 'about', 'services', 'service-residential', 'service-commercial', 'service-interior', 'service-concrete', 'mivan', 'projects', 'contact'].includes(cleanHash)) {
      return cleanHash;
    }
    if (cleanHash.startsWith('service/')) {
      return `service-${cleanHash.replace('service/', '')}`;
    }
  }

  return 'home';
};

export function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => 
    parsePathToPage(window.location.pathname, window.location.hash)
  );

  // Quote / Site Inspection Modal State
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string>('');
  const [quoteMode, setQuoteMode] = useState<'quote' | 'inspection'>('quote');

  const handleOpenQuoteModal = useCallback((serviceTitle?: string, mode: 'quote' | 'inspection' = 'quote') => {
    setQuoteService(serviceTitle || '');
    setQuoteMode(mode);
    setQuoteModalOpen(true);
  }, []);

  // Sync route on popstate (browser back/forward) & initial load
  useEffect(() => {
    const handlePopState = () => {
      const targetPage = parsePathToPage(window.location.pathname, window.location.hash);
      setCurrentPage(targetPage);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((page: string) => {
    const targetUrl = getPageUrl(page);
    
    // Clean SEO URL pushState
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ page }, '', targetUrl);
    }
    
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const isServiceDetailPage = currentPage.startsWith('service-');
  const activeServiceId = isServiceDetailPage ? currentPage.replace('service-', '') : 'residential';

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-brand-offWhite font-sans text-brand-charcoal selection:bg-brand-green selection:text-white flex flex-col relative">
      {/* Light Construction Page Loader Overlay */}
      <PageLoader />

      {/* Unified Free Quotation & Site Inspection Popup Modal (Loaded on demand) */}
      {quoteModalOpen && (
        <Suspense fallback={null}>
          <QuoteModal 
            isOpen={quoteModalOpen}
            onClose={() => setQuoteModalOpen(false)}
            mode={quoteMode}
            defaultService={quoteService}
          />
        </Suspense>
      )}

      {/* Floating Support Button & Popover (Mobile & Tablet Only) */}
      <FloatingSupport onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Header with navigation and active page indicator */}
      <Header 
        currentPage={isServiceDetailPage ? 'services' : currentPage} 
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Multi-Page Dynamic View with Fast Suspense Stream */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Suspense fallback={<PageSkeletonFallback />}>
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />}
          {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />}
          {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />}
          {isServiceDetailPage && (
            <ServiceDetailPage 
              serviceId={activeServiceId} 
              onNavigate={handleNavigate} 
              onOpenQuoteModal={handleOpenQuoteModal}
            />
          )}
          {currentPage === 'mivan' && <MivanPage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />}
          {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />}
          {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />}
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
