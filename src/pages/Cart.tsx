import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Cart() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <ShoppingBag className="w-16 h-16 text-stone-300 mx-auto mb-6" />
          <h1 className="font-serif text-4xl text-stone-800 mb-4">Your Cart is Empty</h1>
          <p className="font-sans text-stone-500 mb-8">
            Discover our sacred collection and add some magic to your journey.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9b6cb0] to-[#7c4d8f] text-white px-10 py-4 font-sans text-sm tracking-widest uppercase rounded-full hover:shadow-lg transition-shadow"
          >
            Browse Shop
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
