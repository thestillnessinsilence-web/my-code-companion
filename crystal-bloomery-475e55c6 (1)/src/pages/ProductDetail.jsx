import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Check, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { toast } from 'sonner';

export default function ProductDetail() {
  const [addingToCart, setAddingToCart] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const products = await base44.entities.Product.filter({ id: productId });
      return products[0];
    },
    enabled: !!productId,
  });

  const handleAddToCart = async () => {
    setAddingToCart(true);
    
    const sessionId = localStorage.getItem('crystal_session') || 
      `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('crystal_session', sessionId);

    const existingItems = await base44.entities.CartItem.filter({ 
      session_id: sessionId, 
      product_id: product.id 
    });

    if (existingItems.length > 0) {
      await base44.entities.CartItem.update(existingItems[0].id, {
        quantity: (existingItems[0].quantity || 1) + 1
      });
    } else {
      await base44.entities.CartItem.create({
        product_id: product.id,
        product_name: product.name,
        price: product.price,
        image_url: product.image_url,
        quantity: 1,
        session_id: sessionId
      });
    }

    window.dispatchEvent(new Event('cart-updated'));
    toast.success(`${product.name} added to your bag`);
    setAddingToCart(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#10665c] animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-stone-600">Product not found</p>
          <Link to={createPageUrl('Shop')} className="text-[#10665c] hover:underline mt-4 inline-block">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={createPageUrl('Shop')}
          className="inline-flex items-center gap-2 font-sans text-sm text-stone-600 hover:text-[#10665c] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img
                src={product.image_url || 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4">
              Sacred Offering
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-6">
              {product.name}
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-[#9b6cb0] to-transparent mb-8" />
            
            <p className="font-sans text-stone-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-serif text-xl text-stone-800 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#10665c] flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price & Add to Cart */}
            <div className="mt-auto pt-8 border-t border-stone-200">
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-2xl sm:text-3xl text-[#10665c]">${product.price}</span>
              </div>
              <Button
                onClick={handleAddToCart}
                disabled={addingToCart}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white font-sans text-sm tracking-widest uppercase px-8 py-6 rounded-none transition-all duration-300"
              >
                {addingToCart ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Adding...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Bag
                  </span>
                )}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Sacred Geometry Decoration */}
        <div className="flex justify-center mt-24 opacity-10">
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
  );
}