import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import ProductCard from '../components/shop/ProductCard';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Shop() {
  const [addingProduct, setAddingProduct] = useState(null);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => base44.entities.Product.list(),
    initialData: [],
  });

  const handleAddToCart = async (product) => {
    setAddingProduct(product.id);
    
    const sessionId = localStorage.getItem('crystal_session') || 
      `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('crystal_session', sessionId);

    // Check if item already exists in cart
    const allItems = await base44.entities.CartItem.filter({ session_id: sessionId });
    const totalQuantity = allItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

    if (totalQuantity >= 50) {
      toast.error('Maximum 50 bags allowed per order');
      setAddingProduct(null);
      return;
    }

    const existingItems = await base44.entities.CartItem.filter({ 
      session_id: sessionId, 
      product_id: product.id 
    });

    if (existingItems.length > 0) {
      // Update quantity
      await base44.entities.CartItem.update(existingItems[0].id, {
        quantity: (existingItems[0].quantity || 1) + 1
      });
    } else {
      // Create new cart item
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
    setAddingProduct(null);
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
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
            The Oracle Bag
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
          <p className="font-sans text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            True clarity requires a pause. A moment to disconnect from external noise and listen to inner wisdom.
            <br /><br />
            The Oracle Bag is the space inbetween the pause.
            <br /><br />
            Pour the tea. Be with Stillness. Feel the Resonance of the Crystals.
            <br /><br />
            Untie the twine to open.
            <br /><br />
            The Oracle has a message that's been waiting for you.
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 auto-rows-fr">
            {products
              .filter(product => !product.is_deleted && !['Pressed Flower Card', 'Herbal Tea'].includes(product.name))
              .sort((a, b) => {
                const aIsOracle = a.name.includes('Oracle Bag');
                const bIsOracle = b.name.includes('Oracle Bag');
                if (aIsOracle && !bIsOracle) return -1;
                if (!aIsOracle && bIsOracle) return 1;
                return 0;
              })
              .map((product) => (
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
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
  );
}