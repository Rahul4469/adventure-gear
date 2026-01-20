'use client'

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';


const Aurora = dynamic(() => import('@/components/ui/Aurora'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-summit-charcoal" />
});

// All images from public/images - extended loop with variations
const images = [
    { src: '/images/expedition-patagonia.jpg', label: 'Patagonia' },
    { src: '/images/titan-x3.png', label: 'Titan X3' },
    { src: '/images/expedition-arctic.jpg', label: 'Arctic' },
    { src: '/images/pathfinder.png', label: 'Pathfinder' },
    { src: '/images/expedition-sahara.jpg', label: 'Sahara' },
    { src: '/images/solar-vault.png', label: 'Solar Vault' },
    { src: '/images/hero-bg.jpg', label: 'Base Camp' },
    { src: '/images/powercore.png', label: 'PowerCore' },
    { src: '/images/expedition-patagonia.jpg', label: 'Torres del Paine' },
    { src: '/images/storm-speaker.png', label: 'Storm Speaker' },
    { src: '/images/expedition-arctic.jpg', label: 'Northern Lights' },
    { src: '/images/basecamp-radio.png', label: 'Basecamp Radio' },
    { src: '/images/expedition-sahara.jpg', label: 'Desert Storm' },
    { src: '/images/titan-x3.png', label: 'Summit Gear' },
    { src: '/images/hero-bg.jpg', label: 'Expedition HQ' },
    { src: '/images/pathfinder.png', label: 'Trail Finder' },
    { src: '/images/solar-vault.png', label: 'Power Station' },
    { src: '/images/powercore.png', label: 'Energy Core' },
];


const speedPattern = [400, 300, 200, 1000, 300, 700, 250, 2000];

// Main Hero Component - Agency Style
export function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [speedIndex, setSpeedIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const nextImage = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
            setSpeedIndex((prev) => (prev + 1) % speedPattern.length);
            setIsTransitioning(false);
        }, 150);
    }, []);

    useEffect(() => {
        const currentSpeed = speedPattern[speedIndex];
        const interval = setInterval(nextImage, currentSpeed);
        return () => clearInterval(interval);
    }, [speedIndex, nextImage]);

    return (
        <section className="relative min-h-screen bg-summit-charcoal overflow-hidden" suppressHydrationWarning>
            {/* Aurora Background */}
            <div className="absolute inset-0">
                <Aurora
                    colorStops={['#5227FF', '#B19EEF', '#7cff67']}
                    amplitude={1.2}
                    blend={0.6}
                    speed={0.5}
                />
            </div>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-summit-charcoal/40 via-transparent to-summit-charcoal/80" />

            {/* Bottom fade for seamless transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-summit-charcoal to-transparent z-20" />

            {/* Get in touch - Top Right Corner */}
            <a
                href="mailto:contact@summitgear.co"
                className="absolute top-24 right-6 lg:right-8 z-20 group flex items-center gap-3 text-sm text-summit-cream hover:text-ember-500 transition-colors"
            >
                <span className="hidden sm:inline">Get in touch</span>
                <span className="w-8 h-8 rounded-full border border-summit-ash flex items-center justify-center group-hover:border-ember-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </span>
            </a>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Hero Content */}
                <div className="flex-1 flex flex-col lg:flex-row">
                    {/* Left Column - Text Content */}
                    <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-26">
                        <div className="max-w-xl">

                            {/* Top Bar - Contact CTA */}
                            <div className="w-full border-b border-summit-ash/30">
                                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                                    <div className="py-4 flex items-center justify-between">
                                        <p className="text-sm text-summit-mist">
                                            Built for explorers. Trusted by professionals.
                                        </p>
                                        <a
                                            href="mailto:contact@summitgear.co"
                                            className="group flex items-center gap-3 text-sm text-summit-cream hover:text-ember-500 transition-colors"
                                        >
                                            {/* <span className="w-8 h-8 rounded-full border border-summit-ash flex items-center justify-center group-hover:border-ember-500 transition-colors">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </span>
                                            <span className="hidden sm:inline">Get in touch</span> */}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Headl   ine */}
                            <h1
                                className={`font-oswald text-[clamp(4.5rem,18vw,14rem)] font-bold leading-[0.85] tracking-tight mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            >
                                <span className="text-summit-cream block">NEW</span>
                                <span className="text-summit-cream block">TERRAIN</span>
                            </h1>

                            {/* Description */}
                            <p
                                className={`text-lg lg:text-xl text-summit-mist leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            >
                                Adventure-grade electronics engineered for extreme conditions. Gear up and conquer new grounds.
                            </p>

                            {/* CTA Link */}
                            <a
                                href="#products"
                                className={`group inline-flex items-center gap-4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            >
                                <span className="w-12 h-12 rounded-full border border-ember-500 flex items-center justify-center group-hover:bg-ember-500 transition-all duration-300">
                                    <svg className="w-5 h-5 text-ember-500 group-hover:text-summit-charcoal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                                <span className="text-summit-cream text-lg group-hover:text-ember-500 transition-colors">
                                    Explore the collection
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image Carousel Card */}
                    <div className="lg:w-1/2 relative min-h-[40vh] lg:min-h-0 flex items-center justify-center p-6 lg:p-16">
                        {/* Image Card */}
                        <div
                            className={`relative w-full max-w-sm aspect-[4/5] transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        >
                            {/* Card Container */}
                            <div className="relative w-full h-full bg-summit-stone/90 backdrop-blur-sm border border-summit-ash overflow-hidden shadow-2xl">
                                {/* Image */}
                                <div className={`absolute inset-0 transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                    <Image
                                        src={images[currentImageIndex].src}
                                        alt={images[currentImageIndex].label}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-summit-charcoal via-transparent to-transparent" />

                                {/* Card Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6">
                                    {/* Top - Navigation indicator */}
                                    <div className="flex items-center justify-end">
                                        <span className="text-xs text-summit-cream/60 uppercase tracking-wider">
                                            {String(currentImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Bottom - Label */}
                                    <div>
                                        <p className="text-xs text-summit-cream/60 uppercase tracking-wider mb-1">Featured</p>
                                        <p className={`text-2xl font-oswald font-semibold text-summit-cream transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                            {images[currentImageIndex].label.toUpperCase()}
                                        </p>
                                        <div className="mt-3 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse" />
                                            <span className="text-xs text-summit-mist">Adventure <br></br>stories</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border border-summit-ash/30" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-ember-500/20" />
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="border-t border-summit-ash/30 bg-summit-charcoal/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="py-6 grid grid-cols-3 gap-8">
                            {[
                                { value: '50+', label: 'Expeditions' },
                                { value: '7', label: 'Continents' },
                                { value: '-40°C', label: 'Tested' },
                            ].map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`text-center lg:text-left transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                                >
                                    <p className="font-oswald text-2xl lg:text-3xl font-semibold text-summit-cream">{stat.value}</p>
                                    <p className="text-xs text-summit-mist uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
