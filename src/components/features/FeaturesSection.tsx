'use client';

import dynamic from 'next/dynamic';
import { SectionNumber } from '@/components/ui/Badge';
import { features } from '@/lib/data';

// Dynamically import Lightning to avoid SSR issues with WebGL
const Lightning = dynamic(() => import('@/components/ui/Lightning'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-summit-charcoal" />
});

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Lightning Background */}
      <div className="absolute inset-0">
        <Lightning
          hue={230}
          xOffset={0}
          speed={0.8}
          intensity={1.2}
          size={1.2}
        />
      </div>
      {/* Enhanced foggy overlay for better readability */}
      <div className="absolute inset-0 bg-summit-charcoal/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-summit-charcoal/70 via-summit-charcoal/40 to-summit-charcoal/70" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Top fade for seamless transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-summit-charcoal to-transparent z-10" />
      {/* Bottom fade for seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-summit-charcoal to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber number={2} />
            <span className="text-xs font-semibold tracking-tactical uppercase text-summit-cream/60">
              Specifications
            </span>
          </div>
          <h2 className="font-oswald text-5xl lg:text-6xl font-bold text-summit-cream leading-none">
            BUILT TO OUTLAST
            <br />
            <span className="text-ember-400">THE EXTREME</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="
                bg-summit-charcoal/40 backdrop-blur-sm
                border border-summit-cream/10
                p-6 text-center
                transition-all duration-300
                hover:border-summit-cream/30 hover:bg-summit-charcoal/60
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-oswald text-sm font-semibold text-summit-cream mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-xs text-summit-cream/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-summit-cream/20">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {['Lifetime Warranty', 'Free Repairs', 'Field Tested'].map((badge) => (
              <div key={badge} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-ember-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-summit-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold tracking-wider text-summit-cream uppercase">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
