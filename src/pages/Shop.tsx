import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'The Oracle Bag - Classic',
    price: 45,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6958433b395a7679475e55c6/24360c6a1_image.png',
    description: 'Crystals, herbs, and a personal oracle message'
  },
  {
    id: 2,
    name: 'The Oracle Bag - Deluxe',
    price: 75,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6958433b395a7679475e55c6/b0c618ed1_Gemini_Generated_Image_t4n75at4n75at4n7.jpeg',
    description: 'Premium crystals, rare herbs, soy candle, and artwork'
  },
  {
    id: 3,
    name: 'Crystal Bracelet - Amethyst',
    price: 28,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6958433b395a7679475e55c6/e29f62b16_Gemini_Generated_Image_lwgrmqlwgrmqlwgr.jpeg',
    description: 'Hand-strung healing amethyst beads'
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Sacred Offerings
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
            Shop Our Collection
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-stone-800 mb-2">{product.name}</h3>
                <p className="font-sans text-sm text-stone-500 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#10665c]">${product.price}</span>
                  <button className="bg-gradient-to-r from-[#9b6cb0] to-[#7c4d8f] text-white px-6 py-2 font-sans text-sm tracking-widest uppercase rounded-full hover:shadow-lg transition-shadow">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
