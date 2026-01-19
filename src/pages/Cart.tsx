import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Cart() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#ebe8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-[#10665c]" strokeWidth={1} />
          </div>
          <h2 className="font-serif text-2xl text-stone-800 mb-4">Your bag is empty</h2>
          <p className="font-sans text-stone-500 mb-8">
            Discover our Oracle Bags and begin your journey.
          </p>
          <Link
            to={createPageUrl('Shop')}
            className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
