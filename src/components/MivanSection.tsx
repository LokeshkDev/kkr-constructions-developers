import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MIVAN_HIGHLIGHTS } from '../data/companyData';

export const MivanSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mivan' | 'traditional'>('mivan');

  return (
    <section id="mivan" className="py-12 sm:py-16 lg:py-20 bg-brand-charcoal text-white relative overflow-hidden architectural-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            {MIVAN_HIGHLIGHTS.headline}
          </h2>
          <div className="text-xl font-semibold text-brand-gold">
            {MIVAN_HIGHLIGHTS.subheadline}
          </div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed pt-1">
            {MIVAN_HIGHLIGHTS.description}
          </p>
        </div>

        {/* 3 Metric Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {MIVAN_HIGHLIGHTS.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 hover:border-brand-green/60 transition-all group"
            >
              <div className="text-4xl sm:text-5xl font-extrabold font-display text-brand-green group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-base font-bold text-white mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span>Mivan System Advantages</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {MIVAN_HIGHLIGHTS.benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white font-display">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Feature */}
        <div className="bg-brand-darkSlate rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div>
              <h4 className="text-xl font-bold font-display text-white">System Comparison</h4>
              <p className="text-xs text-gray-400">See how Mivan Formwork compares to traditional masonry methods</p>
            </div>

            {/* Toggle Tabs */}
            <div className="inline-flex rounded-lg bg-white/10 p-1 border border-white/10">
              <button
                onClick={() => setActiveTab('mivan')}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'mivan' 
                    ? 'bg-brand-green text-white shadow' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Mivan Aluminum System
              </button>
              <button
                onClick={() => setActiveTab('traditional')}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'traditional' 
                    ? 'bg-amber-600 text-white shadow' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Traditional Brickwork
              </button>
            </div>
          </div>

          {activeTab === 'mivan' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 sm:p-6 rounded-xl bg-brand-green/10 border border-brand-green/30">
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider">Speed &amp; Cycle</div>
                <div className="text-base sm:text-lg font-bold text-white">7–10 Days / Floor</div>
                <p className="text-xs text-gray-300">Rapid shuttering dismantling and re-erection allows continuous floor progress.</p>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider">Concrete Finish</div>
                <div className="text-base sm:text-lg font-bold text-white">Monolithic &amp; Smooth</div>
                <p className="text-xs text-gray-300">High-grade surface finish eliminates thick plaster layers and reduces site debris.</p>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider">Seismic Resilience</div>
                <div className="text-base sm:text-lg font-bold text-white">Superior Box Structure</div>
                <p className="text-xs text-gray-300">Continuous concrete casting of walls and slabs acts as a unified rigid structural shell.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 sm:p-6 rounded-xl bg-amber-950/30 border border-amber-500/20">
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Speed &amp; Cycle</div>
                <div className="text-base sm:text-lg font-bold text-white">20–25 Days / Floor</div>
                <p className="text-xs text-gray-300">Requires waiting for individual brick curing, plastering mortar drying, and staging.</p>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Concrete Finish</div>
                <div className="text-base sm:text-lg font-bold text-white">Rough Masonry</div>
                <p className="text-xs text-gray-300">Requires manual plaster coats, increasing labor dependency and material wastage.</p>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Seismic Resilience</div>
                <div className="text-base sm:text-lg font-bold text-white">Masonry Joints</div>
                <p className="text-xs text-gray-300">Brick joint lines present potential shear weak points under seismic displacement.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
