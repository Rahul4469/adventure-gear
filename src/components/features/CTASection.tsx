'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-summit-charcoal">
      {/* Top fade for seamless transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-summit-charcoal to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-xs font-semibold tracking-wide-tactical uppercase text-ember-500 mb-6 block">
              Join the Expedition
            </span>
            <h2 className="font-oswald text-5xl lg:text-6xl font-bold text-summit-cream leading-none mb-6">
              GEAR UP.
              <br />
              <span className="text-summit-mist font-normal">HEAD OUT.</span>
            </h2>
            <p className="text-lg text-summit-mist leading-relaxed mb-8 max-w-md">
              Sign up for early access to new releases, expedition reports,
              and exclusive field-tested deals.
            </p>

            {/* Email Form */}
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="flex-1 bg-summit-stone border border-summit-ash px-5 py-4 text-sm text-summit-cream placeholder:text-summit-mist tracking-wider focus:border-ember-500 focus:outline-none transition-colors duration-200"
              />
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] bg-summit-stone border border-summit-ash overflow-hidden">
              {/* Expedition Patagonia Image */}
              <Image
                src="/images/expedition-patagonia.jpg"
                alt="Expedition Patagonia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-summit-charcoal/60 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute -bottom-px -left-px bg-summit-charcoal border border-summit-ash px-5 py-4">
                <span className="text-xs text-summit-mist tracking-wider block">
                  EXPEDITION 47
                </span>
                <span className="font-oswald text-xl font-semibold text-ember-500">
                  PATAGONIA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
