import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/companyData';
import { SEO } from '../components/SEO';
import { CONTACT_PAGE_SCHEMAS } from '../data/seoSchemas';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal?: (service?: string, mode?: 'quote' | 'inspection') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Residential Construction',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 sm:pt-24 pb-10 bg-brand-offWhite min-h-screen text-brand-charcoal w-full max-w-full overflow-x-hidden">
      <SEO 
        title="Contact Us & Registered Headquarters | KKR Construction & Developers"
        description="Contact KKR Construction & Developers in Thiruvallur. Call +91 80721 83386 or visit Plot No:37 Sai Garden for free project quotes, site inspections, and structural blueprints."
        canonicalUrl="/contact"
        keywords="Contact KKR Construction, Construction Company Phone Number Thiruvallur, Civil Engineers Contact Chennai, Construction Site Inspection Tamil Nadu"
        ogType="website"
        ogImage="/about-banner-kkr-constrcutions-developer.png"
        schemaData={CONTACT_PAGE_SCHEMAS}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
      />
      
      {/* 1. Page Hero Banner with About Banner Background Image */}
      <section className="relative text-white py-10 sm:py-16 overflow-hidden min-h-[280px] sm:min-h-[320px] flex items-center">
        
        {/* Background Image - 100% Original without Color Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/about-banner-kkr-constrcutions-developer.png" 
            alt="KKR Construction & Developers Contact"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-2.5 sm:space-y-3"
          >
            {/* Breadcrumb with crisp contrast */}
            <div className="flex items-center gap-2 text-xs font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_1px_6px_rgba(0,0,0,1)]">
              <button 
                onClick={() => onNavigate('home')} 
                className="hover:text-amber-300 transition-colors uppercase tracking-wider"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-amber-300 uppercase tracking-wider">Contact Us</span>
            </div>

            {/* Title with Ultra-Crisp Contrast Shadow */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_12px_rgba(0,0,0,1)] leading-tight">
              Get In Touch With Our Team
            </h1>

            {/* Subheading with Text Shadow */}
            <p className="text-white text-xs sm:text-base leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_8px_rgba(0,0,0,1)] max-w-2xl">
              Speak directly with our managing partners and civil engineers for site visits, cost estimations, Mivan formwork consultations, and project blueprints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Instant Call Access & Map Location Side-by-Side Section */}
      <section className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column (7 cols): Direct Leadership Phone Contact Cards Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
                <span>Instant Call Access</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-charcoal">
                Direct Leadership Phone Numbers
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Call our founders and civil engineering partners directly for fast responses and immediate site visit arrangements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {TEAM_MEMBERS.map((member, idx) => {
                const phone = COMPANY_INFO.phones[idx] || COMPANY_INFO.phones[0];
                return (
                  <motion.a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="p-3.5 sm:p-4 rounded-[4px] bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-green/70 transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="p-1.5 rounded-[4px] bg-brand-lightGreen text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-[4px] bg-emerald-50 text-brand-green border border-brand-green/20">
                          Tap To Call
                        </span>
                      </div>

                      <div>
                        <h3 className="text-sm sm:text-base font-bold font-display text-brand-charcoal group-hover:text-brand-green transition-colors">
                          {member.name}
                        </h3>
                        <div className="text-[11px] text-brand-gold font-bold uppercase tracking-wider">
                          {member.role}
                        </div>
                      </div>

                      <div className="pt-1.5 border-t border-gray-100">
                        <span className="text-xs sm:text-sm font-extrabold text-brand-charcoal group-hover:text-brand-green font-display font-mono">
                          {phone}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): Office Map Location - Page Attached (NO Card Box) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3 pt-1">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
                <MapPin className="w-3.5 h-3.5" />
                <span>Office &amp; Site Location</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-charcoal">
                Registered Headquarters
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                {COMPANY_INFO.address}
              </p>
            </div>

            {/* Embedded Google Map - Clean Page Attached Frame */}
            <div className="rounded-[4px] overflow-hidden border border-gray-300 h-52 sm:h-60 lg:h-64 w-full relative bg-slate-100 shadow-sm">
              <iframe
                title="KKR Construction Office Map"
                src="https://maps.google.com/maps?q=Thiruvallur%20Bus%20Stand%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map Action Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
             <a
                href="https://maps.google.com/?q=Thiruvallur+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-[4px] bg-brand-green hover:bg-brand-darkGreen text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm border border-emerald-400/30"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Main Form & Office Info Layout - Page Attached (No Boxed Cards) */}
      <section className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Office & Company Details - Page Attached (No Card Box) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Registered Headquarters</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-charcoal">
                  KKR Construction &amp; Developers
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  We welcome clients to our office for structural consultations, blueprint reviews, and construction agreements.
                </p>
              </div>

              <div className="space-y-4 pt-1">
                {/* Address Item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-[4px] bg-brand-lightGreen text-brand-green shrink-0 mt-0.5 border border-brand-green/20 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Office Location</div>
                    <div className="text-sm font-semibold text-brand-charcoal mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-[4px] bg-brand-lightGreen text-brand-green shrink-0 mt-0.5 border border-brand-green/20 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</div>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-sm font-semibold text-brand-charcoal hover:text-brand-green transition-colors mt-0.5 block break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-[4px] bg-brand-lightGreen text-brand-green shrink-0 mt-0.5 border border-brand-green/20 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Working Hours</div>
                    <div className="text-sm font-semibold text-brand-charcoal mt-0.5">
                      Monday – Saturday: 9:00 AM – 7:30 PM <br />
                      <span className="text-xs text-gray-500 font-normal">Sunday: Site Visits by Prior Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Project Inquiry Form - Page Attached (No Card Box) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Fast Response Inquiry</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-charcoal">
                Request Project Consultation &amp; Estimate
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Fill in your project details and our civil engineering team will connect with you within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-[4px] bg-brand-lightGreen/70 border border-brand-green text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-[4px] bg-brand-green text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-display text-brand-charcoal">
                  Thank You, {formData.name || 'Valued Client'}!
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                  Your inquiry for <strong>{formData.serviceType}</strong> has been received. Mr. Mohan Ram or our civil engineering team will reach out at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', serviceType: 'Residential Construction', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-[4px] bg-brand-green text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-darkGreen transition-colors border border-emerald-400/30"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Your Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. K. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[4px] bg-white border border-gray-300 focus:outline-none focus:border-brand-green text-sm transition-colors shadow-xs"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[4px] bg-white border border-gray-300 focus:outline-none focus:border-brand-green text-sm transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[4px] bg-white border border-gray-300 focus:outline-none focus:border-brand-green text-sm transition-colors shadow-xs"
                    />
                  </div>

                  {/* Service Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Project Interest *
                    </label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-[4px] bg-white border border-gray-300 focus:outline-none focus:border-brand-green text-sm transition-colors shadow-xs"
                    >
                      <option value="Residential Construction">Residential Home Construction</option>
                      <option value="Mivan Formwork Construction">Mivan Aluminum Formwork (7–10 Days/Floor)</option>
                      <option value="Commercial Construction">Commercial &amp; Office Building</option>
                      <option value="Concrete & Structural Works">Concrete, Raft Mat &amp; Beam Shuttering</option>
                      <option value="Interior Design & Engineering">Interior Design &amp; Renovation</option>
                      <option value="Plot Selling & Buying">Plot Selling &amp; Buying</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Project Location / Details / Requirements
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Please share plot size, built-up area (sq.ft), floor count, location in Tamil Nadu, or specific structural requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[4px] bg-white border border-gray-300 focus:outline-none focus:border-brand-green text-sm transition-colors resize-none shadow-xs"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-[4px] bg-brand-green text-white font-bold text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-lg hover:shadow-brand-green/30 flex items-center justify-center gap-2 border border-emerald-400/30 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Consultation Request</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

    </div>
  );
};
