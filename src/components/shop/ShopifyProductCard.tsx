import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { ShopifyProduct } from '@/lib/shopify';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
  onAddToCart: (
    product: ShopifyProduct,
    variantId: string,
    variantTitle: string,
    price: { amount: string; currencyCode: string },
    selectedOptions: Array<{ name: string; value: string }>
  ) => void;
  isAdding: string | null;
}

export default function ShopifyProductCard({ product, onAddToCart, isAdding }: ShopifyProductCardProps) {
  const images = product.node.images.edges.map(e => e.node.url);
  const hasImages = images.length > 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Handle variant selection
  const hasVariants = product.node.variants.edges.length > 1;
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.node.variants.edges[0]?.node.id || ''
  );
  
  const selectedVariant = product.node.variants.edges.find(
    v => v.node.id === selectedVariantId
  )?.node || product.node.variants.edges[0]?.node;

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    
    onAddToCart(
      product,
      selectedVariant.id,
      selectedVariant.title,
      selectedVariant.price,
      selectedVariant.selectedOptions
    );
  };

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Parse features from description - only if "Features " is explicitly present
  const hasFeatures = product.node.description.includes('Features ');
  const features = hasFeatures
    ? product.node.description
        .split('Features ')
        .pop()
        ?.split(', ')
        .filter(f => f.length > 0 && f.length < 100) || []
    : [];

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

      {/* Image Carousel */}
      <div className="relative aspect-square overflow-hidden mb-6 bg-stone-100">
        {hasImages ? (
          <img
            src={images[currentImageIndex]}
            alt={product.node.images.edges[currentImageIndex]?.node.altText || product.node.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400">
            <Sparkles className="w-12 h-12" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Carousel Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 bg-white/80 hover:bg-white active:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5 text-stone-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 bg-white/80 hover:bg-white active:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-5 sm:h-5 text-stone-700" />
            </button>
          </>
        )}
        
        {/* Sacred Geometry Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <svg className="w-24 h-24 text-white/30" viewBox="0 0 100 100" fill="none">
            <polygon points="50,10 90,50 50,90 10,50" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.6" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 flex-1 flex flex-col pb-6 select-text">
        <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-3 select-text">
          {product.node.title}
        </h3>
        <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed mb-4 select-text">
          {product.node.description.split('Features')[0].trim()}
        </p>
        
        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-1 mb-4">
            {features.slice(0, 6).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
                <Check className="w-3 h-3 text-[#10665c]" />
                <span className="select-text">{feature.replace(/\.$/, '')}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Variant Selector */}
        {hasVariants && (
          <div className="mb-4">
            <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-2">
              {product.node.options[0]?.name || 'Select Option'} *
            </label>
            <Select value={selectedVariantId} onValueChange={setSelectedVariantId}>
              <SelectTrigger className="w-full bg-white border-stone-200 focus:ring-[#9b6cb0] focus:border-[#9b6cb0] cursor-pointer">
                <SelectValue placeholder="Choose..." />
              </SelectTrigger>
              <SelectContent className="bg-white border-stone-200 z-[100]">
                {product.node.variants.edges.map((variant) => (
                  <SelectItem 
                    key={variant.node.id} 
                    value={variant.node.id} 
                    className="cursor-pointer hover:bg-stone-50"
                    disabled={false}
                  >
                    {variant.node.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-auto">
          <span className="font-serif text-xl sm:text-2xl text-[#10665c]">
            ${parseFloat(selectedVariant?.price.amount || '0').toFixed(0)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding === selectedVariantId}
            className="relative bg-gradient-to-r from-[#d4af37] to-[#c9a961] hover:from-[#c9a961] hover:to-[#d4af37] text-stone-900 font-sans text-xs tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
            style={{
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              clipPath: 'ellipse(45% 38% at 50% 50%)'
            }}
          >
            {isAdding === selectedVariantId ? (
              <span className="flex items-center gap-2 justify-center">
                <div className="w-4 h-4 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin" />
                Adding...
              </span>
            ) : (
              <span className="flex items-center gap-2 justify-center">
                <Sparkles className="w-4 h-4" strokeWidth={1} />
                Add to Satchel
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
