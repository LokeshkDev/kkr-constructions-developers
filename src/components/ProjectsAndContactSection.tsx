import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, ExternalLink, Filter, X } from 'lucide-react';
import { PROJECTS_DATA, PROJECT_CATEGORIES, COMPANY_INFO, ProjectItem } from '../data/companyData';

export const ProjectsAndContactSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: 'Residential Construction',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white text-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
            <span>Portfolio of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-charcoal tracking-tight">
            Where Vision Meets Reality: Our Project Showcase
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Authentic field photographs and engineering work labels representing our concrete, structural, and building execution.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-green to-brand-gold rounded-full"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-brand-green" />
            <span>Filter:</span>
          </div>
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-brand-green text-white border-brand-green shadow-md'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-brand-offWhite rounded-xl overflow-hidden border border-gray-200 hover:border-brand-green hover:shadow-xl transition-all group cursor-pointer flex flex-col"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-brand-charcoal/80 text-brand-green text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
                  {project.category}
                </div>

                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-white/20 text-white backdrop-blur-sm group-hover:bg-brand-green transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Details Box */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold font-display text-brand-charcoal group-hover:text-brand-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                    {project.description}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-semibold text-brand-green flex items-center gap-1">
                  <span>View Project Details</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] bg-gray-900 overflow-hidden relative">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded bg-brand-lightGreen text-brand-green text-xs font-bold uppercase">
                  {selectedProject.category}
                </div>
                <h3 className="text-2xl font-bold font-display text-brand-charcoal">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded bg-brand-charcoal text-white text-xs font-bold hover:bg-brand-green transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integrated Contact Section */}
        <div id="contact" className="pt-10 sm:pt-14 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-wider border border-brand-gold/20">
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-3xl font-extrabold font-display text-brand-charcoal tracking-tight">
                  Let's Build Something Strong Together
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contact our civil engineering team for project inquiries, residential construction, commercial development, or Mivan formwork execution.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3.5">
                
                {/* Phone Numbers */}
                <div className="p-4 sm:p-5 rounded-xl bg-brand-offWhite border border-gray-200 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-brand-green/10 text-brand-green shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Phone Contacts</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-1">
                      {COMPANY_INFO.phones.map((phone, idx) => (
                        <a 
                          key={idx} 
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="text-xs font-semibold text-brand-charcoal hover:text-brand-green"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-4 sm:p-5 rounded-xl bg-brand-offWhite border border-gray-200 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-brand-green/10 text-brand-green shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Email Inbox</div>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-xs sm:text-sm font-semibold text-brand-charcoal hover:text-brand-green break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="p-4 sm:p-5 rounded-xl bg-brand-offWhite border border-gray-200 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-brand-green/10 text-brand-green shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Office Location</div>
                    <p className="text-xs font-semibold text-brand-charcoal mt-1">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* Google Maps CTA Placeholder */}
              <div className="pt-1">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-brand-charcoal text-white text-xs font-bold hover:bg-brand-green transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>View Location on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 bg-brand-charcoal text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/10 architectural-grid-dark">
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Send a Direct Project Inquiry
              </h3>
              <p className="text-xs text-gray-300 mb-6 sm:mb-8">
                Fill out the details below to connect directly with Mr. Mohan Ram and our engineering leadership.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-brand-green/20 border border-brand-green text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Received Successfully</h4>
                  <p className="text-xs text-gray-300">
                    Thank you, {formData.name}. Our team will review your project details and contact you back via phone/email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Your Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Project Category</label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-brand-darkSlate border border-white/20 text-white text-xs focus:outline-none focus:border-brand-green"
                      >
                        <option value="Residential Construction">Residential Construction</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Interior Design & Engineering">Interior Design &amp; Engineering</option>
                        <option value="Concrete & Structural Works">Concrete &amp; Structural Works</option>
                        <option value="Mivan Formwork Execution">Mivan Formwork Execution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Project Message / Requirements</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe plot location, required floor area, or structural details..."
                      className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-brand-green resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded bg-brand-green text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-emerald transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
