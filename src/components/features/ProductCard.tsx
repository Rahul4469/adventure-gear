'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

export interface ProductSpecs {
    battery?: string;
    waterproof?: string;
    temperature?: string;
    range?: string;
}

export interface Product {
    id: number;
    name: string;
    tagline: string;
    price: number;
    category: string;
    specs: ProductSpecs;
    imageUrl: string;
    accentColor?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  index?: number; // For staggered animations
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);


    const specsDisplay = Object.entries(product.specs)
        .filter(([_, value]) => value)  // Remove undefined
        .map(([key, value]) => value)
        .join(' • ');

    return (
        <article
            className="group relative bg-stone-900 border border-stone-800 overflow-hidden transition-all duration-300 hover:border-orange-600/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-500 uppercase">
                    {product.category}
                </span>
            </div>

            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center overflow-hidden">
                {/* Placeholder until image loads */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-stone-800 animate-pulse" />
                )}

                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={`
                        w-32 h-32 object-contain
                        transition-transform duration-500
                        ${isHovered ? 'scale-110' : 'scale-100'}
                        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                    `}
                    onLoad={() => setImageLoaded(true)}
                />

                {/* Hover Overlay */}
                <div className={`
                    absolute inset-0 bg-orange-600/10 
                    transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                `} />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-oswald text-xl font-semibold text-stone-100 mb-1">
                    {product.name}
                </h3>

                <p className="text-xs text-stone-500 mb-4 tracking-wide">
                    {specsDisplay}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-800">
                    <span className="font-oswald text-2xl font-semibold text-stone-100">
                        ${product.price}
                    </span>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="
                            text-xs font-semibold tracking-[0.15em] text-orange-500
                            hover:text-orange-400 transition-colors
                            flex items-center gap-2
                        "
                    >
                        ADD TO CART
                        <span className={`
                            transition-transform duration-300
                            ${isHovered ? 'translate-x-1' : 'translate-x-0'}
                        `}>
                            →
                        </span>
                    </button>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className={`
                absolute bottom-0 left-0 right-0 h-1 bg-orange-600
                transition-transform duration-300 origin-left
                ${isHovered ? 'scale-x-100' : 'scale-x-0'}
            `} />
        </article>
    );
}