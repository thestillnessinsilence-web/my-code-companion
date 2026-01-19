import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  features?: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isAdding: boolean;
}

export default function ProductCard({ product, onAddToCart, isAdding }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white h-full flex flex-col"
    >
      {/* Decorative Frame */}
      <div className="absolute -inset-2 border border-stone-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner Accents */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#10665c]/0 group-hover:border-[#10665c]/40 transition-colors duration-300" />
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#9b6cb0]/0 group-hover:border-[#9b6cb0]/40 transition-colors duration-300" />

      {/* Image */}
      <div className="relative aspect-square overflow-hidden mb-6">
        <img
          src={product.image_url || 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&q=80'}
          alt={`${product.name} - spiritual gift bag with healing crystals and sacred meditation tools`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Sacred Geometry Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg className="w-24 h-24 text-white/30" viewBox="0 0 100 100" fill="none">
            <polygon points="50,10 90,50 50,90 10,50" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.6" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-3 select-text">
          {product.name}
        </h3>
        <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed mb-4 line-clamp-2 select-text">
          {product.description}
        </p>
        
        {/* Features */}
        {product.features && product.features.length > 0 && (
          <ul className="space-y-1 mb-6">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
                <Check className="w-3 h-3 text-[#10665c]" />
                <span className="select-text">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-auto">
          <span className="font-serif text-xl sm:text-2xl text-[#10665c]">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={isAdding}
            className="relative bg-gradient-to-r from-[#d4af37] to-[#c9a961] hover:from-[#c9a961] hover:to-[#d4af37] text-stone-900 font-sans text-xs tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 shadow-lg transition-all duration-300 disabled:opacity-50 min-h-[44px]"
            style={{
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              clipPath: 'ellipse(45% 38% at 50% 50%)'
            }}
          >
            {isAdding ? (
              <span className="flex items-center gap-2 justify-center">
                <div className="w-4 h-4 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin" />
                Adding...
              </span>
            ) : (
              <span className="flex items-center gap-2 justify-center">
                <Sparkles className="w-4 h-4" strokeWidth={1} />
                Add to Bag
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
