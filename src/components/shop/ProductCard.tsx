import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ChevronLeft, ChevronRight, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ZODIAC_SIGNS } from '@/pages/Shop';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  images?: string[];
  imageAlt?: string;
  features?: string[];
  requiresZodiac?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, zodiacSign?: string, birthDate?: Date, birthTime?: string) => void;
  isAdding: boolean;
}

export default function ProductCard({ product, onAddToCart, isAdding }: ProductCardProps) {
  const images = product.images || (product.image_url ? [product.image_url] : ['https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&q=80']);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedZodiac, setSelectedZodiac] = useState<string>('');
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [birthTime, setBirthTime] = useState<string>('');

  const handleAddToCart = () => {
    if (product.requiresZodiac && !selectedZodiac) {
      return;
    }
    onAddToCart(
      product, 
      product.requiresZodiac ? selectedZodiac : undefined,
      product.requiresZodiac ? birthDate : undefined,
      product.requiresZodiac && birthTime ? birthTime : undefined
    );
  };

  const isZodiacFormValid = !product.requiresZodiac || selectedZodiac;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
      <div className="relative aspect-square overflow-hidden mb-6">
        <img
          src={images[currentImageIndex]}
          alt={product.imageAlt || `${product.name} - ritual herbal bag crystal ceremony spiritual gift Asheville Appalachian art`}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
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
      <div className="px-4 sm:px-6 flex-1 flex flex-col pb-6">
        <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-3 select-text">
          {product.name}
        </h3>
        <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed mb-4 select-text">
          {product.description}
        </p>
        
        {/* Features */}
        {product.features && product.features.length > 0 && (
          <ul className="space-y-1 mb-4">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
                <Check className="w-3 h-3 text-[#10665c]" />
                <span className="select-text">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Zodiac Sign Selector */}
        {product.requiresZodiac && (
          <div className="space-y-4 mb-4">
            {/* Zodiac Sign Dropdown */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-2">
                Select Your Zodiac Sign *
              </label>
              <Select value={selectedZodiac} onValueChange={setSelectedZodiac}>
                <SelectTrigger className="w-full bg-white border-stone-200 focus:ring-[#9b6cb0] focus:border-[#9b6cb0]">
                  <SelectValue placeholder="Choose your sign..." />
                </SelectTrigger>
                <SelectContent className="bg-white border-stone-200">
                  {ZODIAC_SIGNS.map((sign) => (
                    <SelectItem key={sign} value={sign} className="cursor-pointer hover:bg-stone-50">
                      {sign}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-2">
                Date of Birth <span className="normal-case text-stone-400">(optional, for more accuracy)</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white border-stone-200 hover:bg-stone-50",
                      !birthDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {birthDate ? format(birthDate, "MMMM d, yyyy") : <span>Select your birth date...</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={birthDate}
                    onSelect={setBirthDate}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Birth Time (Optional) */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-2">
                Birth Time <span className="normal-case text-stone-400">(optional, for more accuracy)</span>
              </label>
              <Input
                type="time"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="w-full bg-white border-stone-200 focus:ring-[#9b6cb0] focus:border-[#9b6cb0]"
                placeholder="e.g., 14:30"
              />
            </div>
          </div>
        )}

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-2">
          <span className="font-serif text-xl sm:text-2xl text-[#10665c]">${product.price}</span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding || !isZodiacFormValid}
            className="relative bg-gradient-to-r from-[#d4af37] to-[#c9a961] hover:from-[#c9a961] hover:to-[#d4af37] text-stone-900 font-sans text-xs tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
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
