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
    index?: number; // staggered animations
}

// ProductCard Component --------------------------------------------------
export function ProductCard({ product, onAddToCart, index = 0 }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);


    const specsDisplay = Object.values(product.specs)
        .filter(Boolean)
        .join(' • ');

    // Default accent color if not provided
    const accentColor = product.accentColor || '#D2691E';

    return (
        <article
            className="border border-summit-ash group relative bg-summit-stone overflow-hidden transition-all duration-500 ease-out hover:border-ember-500/50 animate-fade-in-up"
            style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'backwards',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
                <Badge variant="outline" size="sm">
                    {product.category}
                </Badge>
            </div>

            {/* Image Container */}
            <div className="relative h-56 bg-gradient-to-br from-summit-charcoal to-summit-stone flex items-center justify-center overflow-hidden">
                {/* Background Glow on Hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
                    }}
                />

                {/* Product Image */}
                {!imageError ? (
                    <div
                        className={`relative w-40 h-40 transition-transform duration-500 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-contain drop-shadow-2xl"
                            onError={() => setImageError(true)}
                            sizes="160px"
                        />
                    </div>
                ) : (
                    // Fallback placeholder
                    <div className="w-40 h-40 flex items-center justify-center text-6xl opacity-50">
                        Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Product Name */}
                <h3 className="font-oswald text-2xl font-semibold text-summit-cream mb-2 group-hover:text-ember-500 transition-colors duration-300">
                    {product.name}
                </h3>

                {/* Specs */}
                <p className="text-xs text-summit-mist tracking-wide mb-6">
                    {specsDisplay}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-summit-ash">
                    {/* Price */}
                    <span className="font-oswald text-2xl font-semibold text-summit-cream">
                        ${product.price}
                    </span>

                    {/* Add to Cart */}
                    <button
                        onClick={() => onAddToCart?.(product)}
                        className="flex items-center gap-2 text-xs font-semibold tracking-tactical uppercase text-ember-500 hover:text-ember-400 transition-colors duration-200"
                    >
                        <span>Add to Cart</span>
                        <span
                            className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}
                        >
                            →
                        </span>
                    </button>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}
                style={{ backgroundColor: accentColor }}
            />
        </article>
    );
}

// Prodcut grid ----------------------------------
interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

// ProductGrid Component ----------------
export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          index={index}
        />
      ))}
    </div>
  );
}