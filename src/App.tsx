import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MivanSection } from './components/MivanSection';
import { ProjectsAndContactSection } from './components/ProjectsAndContactSection';
import { Footer } from './components/Footer';

export function App() {
  const handleNavigate = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-offWhite font-sans text-brand-charcoal selection:bg-brand-green selection:text-white flex flex-col">
      {/* Header with utility bar and responsive navigation */}
      <Header onNavigate={handleNavigate} />

      {/* Main 5-Section Architectural Homepage */}
      <main className="flex-1">
        {/* Section 1: Architectural Hero */}
        <HeroSection />

        {/* Section 2: Story, Vision, Mission & Leadership */}
        <AboutSection />

        {/* Section 3: Engineering Services & Why KKR */}
        <ServicesSection />

        {/* Section 4: Mivan Formwork Technology Showcase */}
        <MivanSection />

        {/* Section 5: Project Showcase & Integrated Contact Form */}
        <ProjectsAndContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
