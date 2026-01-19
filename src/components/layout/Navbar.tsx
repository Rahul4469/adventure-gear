'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, ArrowRight } from '@/components/ui/Button';

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'Products', href: '/products' },
    { label: 'Technology', href: '/technology' },
    { label: 'Expeditions', href: '/expeditions' },
    { label: 'Support', href: '/support' },
]

// LOGO ---------------
function Logo() {
    return (
        <Link href="/" className="flex items-centre gap-3 group">
            {/* Logo Mark - Angular Summit Shape */}
            <div className="relative">
                <span className="text-3xl font-bold text-ember-500 leading-none">◢</span>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
                <span className="font-oswald text-lg font-bold tracking-wider text-summit-cream leading-none">
                    SUMMIT GEAR
                </span>
                <span className="font-oswald text-xs font-normal tracking-[0.3em] text-summit-mist mt-0.5">
                    CO.
                </span>
            </div>
        </Link>
    );
}

// Mobile menu  -------------------------------
function MenuIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
                className={`
          h-0.5 w-full bg-summit-cream transition-all duration-300
          ${isOpen ? 'rotate-45 translate-y-2' : ''}
        `}
            />
            <span
                className={`
          h-0.5 w-full bg-summit-cream transition-all duration-300
          ${isOpen ? 'opacity-0' : ''}
        `}
            />
            <span
                className={`
          h-0.5 w-full bg-summit-cream transition-all duration-300
          ${isOpen ? '-rotate-45 -translate-y-2' : ''}
        `}
            />
        </div>
    );
}

// Main Navbar ---------------------------
export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Set loaded state for animations
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Track Scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change or escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
                    ? 'bg-summit-charcoal/95 backdrop-blur-md border-b border-summit-ash/50'
                    : 'bg-transparent'
                }
      `}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                  text-sm font-semibold tracking-wider uppercase
                  text-summit-mist hover:text-summit-cream
                  transition-all duration-300
                  ${isLoaded
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 -translate-y-2'
                                    }
                `}
                                style={{
                                    transitionDelay: isLoaded ? `${index * 100}ms` : '0ms',
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button
                            variant="primary"
                            size="md"
                            rightIcon={<ArrowRight />}
                            className="group"
                        >
                            Shop Now
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 -mr-2"
                        aria-label="Toggle menu"
                    >
                        <MenuIcon isOpen={isMobileMenuOpen} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
          lg:hidden
          absolute top-full left-0 right-0
          bg-summit-charcoal/98 backdrop-blur-lg
          border-b border-summit-ash/50
          transition-all duration-300
          ${isMobileMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }
        `}
            >
                <div className="px-6 py-8 space-y-6">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`
                block text-lg font-semibold tracking-wider uppercase
                text-summit-mist hover:text-ember-500
                transition-all duration-300
                ${isMobileMenuOpen
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-4'
                                }
              `}
                            style={{
                                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="pt-4 border-t border-summit-ash">
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full justify-center"
                        >
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}