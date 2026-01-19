import { ProductCard } from '@/components/features/ProductCard';

const products = [
    {
        id: 1,
        name: "TITAN X3",
        tagline: "Rugged headphones for extreme conditions",
        price: 249,
        category: "Audio",
        specs: {
            battery: "50hr",
            waterproof: "IP68",
            temperature: "-30°C"
        },
        imageUrl: "/images/titan-x3.png"  
    },
    {
        id: 2,
        name: "PATHFINDER PRO",
        tagline: "GPS navigator for the backcountry",
        price: 399,
        category: "Navigation",
        specs: {
            battery: "200hr standby",
            waterproof: "IP67",
        },
        imageUrl: "/images/pathfinder.png" 
    },
];

export default function HomePage() {
    
    return (
        <main className="min-h-screen bg-stone-950 text-stone-100">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-orange-500 text-sm tracking-[0.3em] mb-4">
                        ADVENTURE-READY TECH
                    </p>
                    <h1 className="font-oswald text-7xl font-bold mb-6">
                        BUILT FOR<br/>
                        <span className="text-stone-500">THE WILD</span>
                    </h1>
                    <p className="text-stone-400 max-w-md mx-auto mb-8">
                        Rugged electronics engineered to survive where others fail.
                    </p>
                    <button className="bg-orange-600 text-stone-950 px-8 py-4 font-semibold tracking-wider hover:bg-orange-500 transition-colors">
                        EXPLORE GEAR
                    </button>
                </div>
            </section>
            
            {/* Products Section */}
            <section className="px-8 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="text-orange-500 text-xs tracking-[0.3em]">
                            01 — GEAR LINEUP
                        </span>
                        <h2 className="font-oswald text-5xl font-bold mt-2">
                            ENGINEERED FOR<br/>
                            <span className="text-orange-500">EXTREMES</span>
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={(p) => console.log('Added:', p.name)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}