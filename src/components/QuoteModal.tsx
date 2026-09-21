import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Check, 
  PhoneCall, 
  MessageCircle, 
  Calendar, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'quote' | 'inspection';
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  mode = 'quote',
  defaultService = 'Residential Construction (Villas / G+3)'
}) => {
  const isInspection = mode === 'inspection';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: defaultService,
    area: '',
    location: '',
    preferredDate: '',
    preferredSlot: 'Morning (9:00 AM – 1:00 PM)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData(prev => ({
        ...prev,
        serviceType: defaultService || 'Residential Construction (Villas / G+3)'
      }));
    }
  }, [isOpen, defaultService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto min-h-screen"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-[4px] max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative my-auto max-h-[90vh] sm:max-h-[86vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#0A1118] text-white p-4 sm:p-6 relative border-b border-brand-green/30 shrink-0">
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-[4px] bg-white/10 hover:bg-white/20 text-white transition-colors z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-brand-green/20 text-brand-green text-[10px] font-extrabold uppercase tracking-wider border border-brand-green/30 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isInspection ? 'Civil Site Inspection' : 'Free Project Estimation'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
              {isInspection ? 'Book On-Site Civil Inspection' : 'Request Free Project Quotation'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-lg">
              {isInspection 
                ? 'Schedule a comprehensive site evaluation with Mr. Mohan Ram & civil engineering partners.'
                : 'Get an accurate cost estimate, structural timeline, and Mivan feasibility evaluation.'}
            </p>
          </div>

          {/* Form Content / Success Screen */}
          <div className="p-5 sm:p-6 overflow-y-auto flex-1">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-[4px] bg-brand-green text-white flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold font-display text-brand-charcoal">
                  {isInspection ? 'Site Inspection Booked Successfully!' : 'Quotation Request Received!'}
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our civil engineering team has received your request for <strong>{formData.serviceType}</strong> at <strong>{formData.location || 'your site'}</strong>. We will reach out to <strong>{formData.phone}</strong> within 24 hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <a
                    href={`https://wa.me/919940176461?text=${encodeURIComponent(
                      `Hello KKR Construction, I just submitted a ${isInspection ? 'Site Inspection' : 'Quotation'} request for ${formData.serviceType} in ${formData.location}. My phone is ${formData.phone}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-[4px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quick WhatsApp Follow-up</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="py-3 px-5 rounded-[4px] bg-gray-100 hover:bg-gray-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. S. Karthik"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-green focus:bg-white text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 99401 76461"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-green focus:bg-white text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Email Address (Optional)
                    </label>
                    <input 
                      type="email" 
                      placeholder="e.g. karthik@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-green focus:bg-white text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Project Service / Scope *
                    </label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-green focus:bg-white text-xs sm:text-sm transition-colors"
                    >
                      <option value="Residential Construction (Villas / G+3)">Residential Construction (Villas / G+3)</option>
                      <option value="Commercial Multi-Story Complex">Commercial Multi-Story Complex</option>
                      <option value="Mivan Formwork Construction (7–10 Days/Floor)">Mivan Formwork Construction (7–10 Days/Floor)</option>
                      <option value="Interior Design & Space Planning">Interior Design & Space Planning</option>
                      <option value="Concrete & Structural RCC Works">Concrete & Structural RCC Works</option>
                      <option value="Turnkey Joint Venture Development">Turnkey Joint Venture Development</option>
                    </select>
                  </div>
                </div>

                {/* Area & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Approx Built-up / Plot Area
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. 3,500 sq.ft or 2,400 sq.ft plot"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-green focus:bg-white text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Site Location / District in Tamil Nadu *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Thiruvallur, Avadi, Anna Nagar, Sriperumbudur..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-green focus:bg-white text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Inspection Specific Fields */}
                {isInspection && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3.5 rounded-[4px] bg-brand-lightGreen/50 border border-brand-green/20">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-green" />
                        <span>Preferred Visit Date</span>
                      </label>
                      <input 
                        type="date" 
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2 rounded-[4px] bg-white border border-gray-200 focus:outline-none focus:border-brand-green text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Preferred Time Slot</span>
                      </label>
                      <select 
                        value={formData.preferredSlot}
                        onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                        className="w-full px-3 py-2 rounded-[4px] bg-white border border-gray-200 focus:outline-none focus:border-brand-green text-xs sm:text-sm"
                      >
                        <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM – 6:00 PM)">Afternoon (2:00 PM – 6:00 PM)</option>
                        <option value="Weekend Slot">Weekend Slot</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Message / Specific Requirements */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    {isInspection ? 'Site Details & Specific Inspection Notes' : 'Specific Requirements / Plan Status'}
                  </label>
                  <textarea 
                    rows={2}
                    placeholder={isInspection 
                      ? 'e.g. Looking for soil bearing test, G+3 structural feasibility, landmark near Thiruvallur bus stand...'
                      : 'e.g. Plan already approved, ready to start in 1 month, need Mivan shuttering quotation...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[4px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-green focus:bg-white text-xs sm:text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-[4px] bg-brand-green text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-darkGreen transition-all shadow-lg hover:shadow-brand-green/30 flex items-center justify-center gap-2 border border-emerald-400/30 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{isInspection ? 'Confirm On-Site Inspection Request' : 'Submit Quotation Request'}</span>
                </button>

                {/* Founder Direct Assistance Callout */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500">
                  <div className="flex items-center gap-1 text-brand-green font-semibold">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Direct Site Partner Contact:</span>
                  </div>
                  <a href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} className="font-mono font-bold text-brand-charcoal hover:text-brand-green">
                    {COMPANY_INFO.phones[0]}
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

