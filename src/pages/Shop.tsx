import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ProductCard from '@/components/shop/ProductCard';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';
import meditationRitualKit from '@/assets/meditation-ritual-kit-oracle-bag.png';
import greenVelvetRitualBag from '@/assets/green-velvet-forest-ritual-bag-crystals.png';
import meditationSpace from '@/assets/blog/meditation-space.jpg';
import greenVelvetPouchClosed from '@/assets/green-velvet-pouch-closed.jpg';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
] as const;
// Sample products for display (in production, this would come from a database)
const sampleProducts = [
  {
    id: '1',
    name: 'Winter Bloom',
    description: 'A sacred vessel containing carefully selected healing crystals, dried herbs, organic tea, and a personalized message from the universe.',
    price: 48,
    images: [
      meditationRitualKit,
      greenVelvetRitualBag
    ],
    imageAlt: 'Meditation ritual kit with crystals, tea, and candle',
    features: ['Moon-blessed crystals', 'Organic herbal tea', 'Message from the oracle', 'Appalachian handmade herbage bookmark', 'Crystal information cards', 'Soy candle']
  },
  {
    id: '2',
    name: 'Oracle Bloom',
    description: 'A curated collection of healing crystals accompanied by a personalized message from the universe, perfect for those beginning their crystal journey.',
    price: 22,
    images: [greenVelvetPouchClosed],
    imageAlt: 'Closed green velvet ritual pouch',
    features: ['Hand-selected crystals', 'Message from the oracle', 'Crystal information cards']
  },
  {
    id: '3',
    name: 'Astro Bloom',
    description: 'A personalized cosmic journey tailored to your unique celestial blueprint. Each bag includes a custom birth chart report with crystals and herbs aligned to your zodiac energy.',
    price: 69,
    images: [greenVelvetRitualBag],
    imageAlt: 'Green velvet ritual bag with crystals and herbs',
    features: ['Custom birth chart report', 'Zodiac-aligned crystals', 'Astrological herbal blend', 'Personalized cosmic message', 'Birth chart reference card', 'Celestial soy candle'],
    requiresZodiac: true
  }
];

export default function Shop() {
  const [addingProduct, setAddingProduct] = useState<string | null>(null);
  const { addToCart } = useCart();
  const isLoading = false;
  const products = sampleProducts;

  const handleAddToCart = async (
    product: typeof sampleProducts[0], 
    zodiacSign?: string,
    birthDate?: Date,
    birthTime?: string
  ) => {
    setAddingProduct(product.id);
    
    // Build product name with zodiac info if provided
    let displayName = product.name;
    if (zodiacSign) {
      displayName = `${product.name} (${zodiacSign})`;
    }
    
    // Add to cart context
    addToCart({
      id: product.id,
      name: displayName,
      price: product.price,
      image_url: product.images?.[0]
    });
    
    await new Promise(resolve => setTimeout(resolve, 300));
    toast.success(`${product.name} added to your bag`);
    setAddingProduct(null);
  };

  return (
    <>
      <Helmet>
        <title>Mystery Crystal & Tea Ceremony Kit | Spirit Blooms</title>
        <meta name="description" content="A complete ritual in a velvet bag. Includes intuitively chosen crystals, herbal tea, and a tea light. Perfect for meditation, contemplation, and peace. What message does the Oracle have for you?" />
        <meta name="keywords" content="spirit blooms, crystal healing, herbal tea, ceremony kit, spiritual gifts, Asheville crystals, handmade ritual bag" />
        <link rel="canonical" href="https://crystalbloomery.com/shop" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" },
        { name: "Shop", url: "https://crystalbloomery.com/shop" }
      ]} />
    <div className="min-h-screen bg-stone-50 pt-32 pb-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Sacred Offerings
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6">
            Spirit Blooms
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
          <p className="font-sans text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            True clarity requires a pause. A moment to disconnect from external noise and listen to inner wisdom.
            <br /><br />
            Spirit Blooms are the space inbetween the pause.
            <br /><br />
            Pour the tea. Be with Stillness. Feel the Resonance of the Crystals.
            <br /><br />
            Untie the twine to open.
            <br /><br />
            The universe has a message that's been waiting for you.
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-[#10665c] animate-spin" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-sans text-stone-500">Products coming soon...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isAdding={addingProduct === product.id}
              />
            ))}
          </div>
        )}
      </div>

      {/* Sacred Geometry Decoration */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="flex justify-center opacity-10">
          <svg className="w-48 h-48" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#10665c" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="35" stroke="#7c4d8f" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="22" stroke="#b695c8" strokeWidth="0.3" />
            <polygon points="50,5 95,50 50,95 5,50" stroke="#10665c" strokeWidth="0.3" />
            <polygon points="50,20 80,50 50,80 20,50" stroke="#9b6cb0" strokeWidth="0.3" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}
