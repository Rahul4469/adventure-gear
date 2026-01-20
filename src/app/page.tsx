import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/features/HeroSection';
import { ProductsSection } from '@/components/features/ProductsSection';
import { FeaturesSection } from '@/components/features/FeaturesSection';
import { CTASection } from '@/components/features/CTASection';

function Footer() {
  const footerLinks = {
    products: ['Headphones', 'GPS Devices', 'Solar Chargers', 'Speakers', 'Radios', 'Power Banks'],
    company: ['Our Story', 'Expeditions', 'Sustainability', 'Careers', 'Press'],
    support: ['Contact Us', 'Warranty', 'Repairs', 'FAQs', 'Shipping'],
  };

  return (
    <footer className="bg-summit-charcoal border-t border-summit-ash">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <div className="flex items-center flex-row gap-3">
                <div className="font-oswald text-lg font-bold tracking-wider text-summit-cream">
                  SUMMIT GEAR
                </div>
                <div className="font-oswald text-xs tracking-[0.3em] text-summit-mist">
                  CO.
                </div>
              </div>
            </div>
            <p className="text-sm text-summit-mist leading-relaxed">
              Built for the wild since 2026.
              <br />
              Trusted by adventurers worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-tactical uppercase text-summit-mist mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-summit-mist hover:text-summit-cream transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-tactical uppercase text-summit-mist mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-summit-mist hover:text-summit-cream transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-tactical uppercase text-summit-mist mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-summit-mist hover:text-summit-cream transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-summit-ash">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs tracking-wider text-summit-mist/60">
              © 2026 SUMMIT GEAR CO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              {['IG', 'YT', 'TW', 'FB'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-semibold tracking-wider text-summit-mist hover:text-ember-500 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// MAIN PAGE

export default function HomePage() {
  return (
    <>
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}