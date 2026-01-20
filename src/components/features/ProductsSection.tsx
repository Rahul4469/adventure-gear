'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { SectionNumber } from '@/components/ui/Badge';
import { Button, ArrowRight } from '@/components/ui/Button';
import { products } from '@/lib/data';

// Background images for the carousel
const backgroundImages = [
    '/images/expedition-patagonia.jpg',
    '/images/expedition-arctic.jpg',
    '/images/expedition-sahara.jpg',
    '/images/hikers-going-up-high-mountain.jpg',
    '/images/off-road-car-wilderness.jpg',
    '/images/portrait-senior-man-with-camera-device-world-photography-day-celebration.jpg',
    '/images/hero-bg.jpg',
];

export function ProductsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [bgIndex, setBgIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length);
            setBgIndex((prev) => (prev + 1) % backgroundImages.length);
            setIsTransitioning(false);
        }, 300);
    }, []);

    const prevSlide = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
            setBgIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
            setIsTransitioning(false);
        }, 300);
    }, []);

    const goToSlide = (index: number) => {
        if (index === currentIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setBgIndex(index % backgroundImages.length);
            setIsTransitioning(false);
        }, 300);
    };

    // Auto-advance carousel (pauses on hover)
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    const currentProduct = products[currentIndex];

    return (
        <section id="products" className="relative min-h-screen bg-summit-charcoal overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0">
                {backgroundImages.map((img, index) => (
                    <div
                        key={img}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                            index === bgIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={img}
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-summit-charcoal/70" />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-summit-charcoal via-transparent to-summit-charcoal/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-summit-charcoal via-transparent to-summit-charcoal/60" />

                {/* Top fade for seamless transition from previous section */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-summit-charcoal to-transparent z-10" />
                {/* Bottom fade for seamless transition to next section */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-summit-charcoal to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Top Navigation Bar */}
                <div className="border-b border-summit-ash/30">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="py-6 flex items-center justify-between">
                            {/* Section Label */}
                            <div className="flex items-center gap-4">
                                <SectionNumber number={1} />
                                <span className="text-xs font-semibold tracking-tactical uppercase text-summit-mist">
                                    Gear Lineup
                                </span>
                            </div>

                            {/* Category Filter Pills */}
                            <div className="hidden md:flex items-center gap-2">
                                {['All', 'Audio', 'Navigation', 'Power', 'Communication'].map((cat, i) => (
                                    <button
                                        key={cat}
                                        className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                                            i === 0
                                                ? 'text-summit-charcoal bg-summit-cream'
                                                : 'text-summit-mist hover:text-summit-cream border border-summit-ash/50 hover:border-summit-cream/50'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Slide Counter */}
                            <div className="flex items-center gap-4">
                                <span className="font-oswald text-2xl text-summit-cream">
                                    {String(currentIndex + 1).padStart(2, '0')}
                                </span>
                                <span className="text-summit-ash">/</span>
                                <span className="font-oswald text-lg text-summit-mist">
                                    {String(products.length).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Carousel Area */}
                <div className="flex-1 flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            {/* Left Side - Product Info */}
                            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}>
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span
                                        className="inline-block px-3 py-1 text-xs font-semibold tracking-tactical uppercase border"
                                        style={{
                                            color: currentProduct.accentColor,
                                            borderColor: currentProduct.accentColor
                                        }}
                                    >
                                        {currentProduct.category}
                                    </span>
                                </div>

                                {/* Product Name */}
                                <h2 className="font-oswald text-5xl lg:text-7xl font-bold text-summit-cream leading-none mb-4">
                                    {currentProduct.name}
                                </h2>

                                {/* Tagline */}
                                <p className="text-lg lg:text-xl text-summit-mist mb-8 max-w-md">
                                    {currentProduct.tagline}
                                </p>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {Object.entries(currentProduct.specs).map(([key, value]) => (
                                        <div key={key} className="border-l-2 border-summit-ash pl-4">
                                            <p className="text-xs text-summit-mist uppercase tracking-wider mb-1">
                                                {key}
                                            </p>
                                            <p className="font-oswald text-lg text-summit-cream font-semibold">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Features List */}
                                <ul className="space-y-2 mb-10">
                                    {currentProduct.features?.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-summit-mist">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: currentProduct.accentColor }}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Price and CTA */}
                                <div className="flex items-center gap-8">
                                    <div>
                                        <p className="text-xs text-summit-mist uppercase tracking-wider mb-1">Price</p>
                                        <p className="font-oswald text-4xl text-summit-cream font-bold">
                                            ${currentProduct.price}
                                        </p>
                                    </div>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        rightIcon={<ArrowRight />}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>

                            {/* Right Side - Product Image */}
                            <div
                                className="relative flex items-center justify-center cursor-pointer"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                {/* Decorative frame */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-[80%] h-[80%] border transition-colors duration-300 ${isPaused ? 'border-ember-500/50' : 'border-summit-ash/30'}`} />
                                </div>
                                <div className="absolute -top-4 -right-4 w-32 h-32 border border-summit-ash/20" />
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-ember-500/20" />

                                {/* Paused Indicator */}
                                <div className={`absolute top-4 left-4 z-20 flex items-center gap-2 transition-all duration-300 ${isPaused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                                    <span className="w-8 h-8 rounded-full bg-summit-charcoal/80 backdrop-blur-sm border border-stone-500 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
                                            <rect x="6" y="4" width="4" height="16" />
                                            <rect x="14" y="4" width="4" height="16" />
                                        </svg>
                                    </span>
                                    <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">View</span>
                                </div>

                                {/* Product Image Container */}
                                <div
                                    className={`relative w-full max-w-md aspect-square transition-all duration-500 ${
                                        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                    } ${isPaused ? 'scale-105' : 'scale-100'}`}
                                >
                                    {/* Glow effect */}
                                    <div
                                        className={`absolute inset-0 blur-3xl transition-opacity duration-300 ${isPaused ? 'opacity-50' : 'opacity-30'}`}
                                        style={{
                                            background: `radial-gradient(circle, ${currentProduct.accentColor} 0%, transparent 70%)`
                                        }}
                                    />

                                    {/* Product Image */}
                                    <Image
                                        src={currentProduct.imageUrl}
                                        alt={currentProduct.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="border-t border-summit-ash/30">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="py-6 flex items-center justify-between">
                            {/* Navigation Arrows */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 border border-summit-ash flex items-center justify-center text-summit-cream hover:border-ember-500 hover:text-ember-500 transition-colors"
                                    aria-label="Previous product"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 border border-summit-ash flex items-center justify-center text-summit-cream hover:border-ember-500 hover:text-ember-500 transition-colors"
                                    aria-label="Next product"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            {/* Product Thumbnails / Dots */}
                            <div className="hidden sm:flex items-center gap-3">
                                {products.map((product, index) => (
                                    <button
                                        key={product.id}
                                        onClick={() => goToSlide(index)}
                                        className={`relative w-16 h-16 border transition-all duration-300 overflow-hidden ${
                                            index === currentIndex
                                                ? 'border-ember-500'
                                                : 'border-summit-ash/50 opacity-50 hover:opacity-100'
                                        }`}
                                        aria-label={`Go to ${product.name}`}
                                    >
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            fill
                                            sizes="64px"
                                            className="object-contain p-1 bg-summit-stone/50"
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Mobile dots */}
                            <div className="flex sm:hidden items-center gap-2">
                                {products.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex
                                                ? 'bg-ember-500 w-6'
                                                : 'bg-summit-ash'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* View All Link */}
                            <a
                                href="#"
                                className="group flex items-center gap-3 text-sm text-summit-cream hover:text-ember-500 transition-colors"
                            >
                                <span className="hidden sm:inline uppercase tracking-wider">View All Products</span>
                                <span className="w-10 h-10 rounded-full border border-summit-ash flex items-center justify-center group-hover:border-ember-500 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
