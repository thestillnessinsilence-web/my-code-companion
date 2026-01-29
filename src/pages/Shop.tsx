import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { fetchShopifyProducts, ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import ShopifyProductCard from '@/components/shop/ShopifyProductCard';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const shopDescription = `True clarity requires a pause. A moment to disconnect from external noise and listen to inner wisdom.

Bloom Satchels are the space inbetween the pause.

Pour the tea. Be with Stillness. Feel the Resonance of the Crystals.

Untie the twine to open.

The universe has a message that's been waiting for you.`;

export default function Shop() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addingProduct, setAddingProduct] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function loadProducts() {
      try {
        const fetchedProducts = await fetchShopifyProducts(50);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to load products:', error);
        toast.error('Failed to load products');
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  const handleAddToCart = async (
    product: ShopifyProduct,
    variantId: string,
    variantTitle: string,
    price: { amount: string; currencyCode: string },
    selectedOptions: Array<{ name: string; value: string }>
  ) => {
    setAddingProduct(variantId);
    
    await addItem({
      product,
      variantId,
      variantTitle,
      price,
      quantity: 1,
      selectedOptions
    });
    
    toast.success(`${product.node.title} added to your bag`);
    setAddingProduct(null);
  };

  return (
    <>
      <Helmet>
        <title>Mystery Crystal & Tea Ceremony Kit | Bloom Satchels</title>
        <meta name="description" content="A complete ritual in a velvet bag. Includes intuitively chosen crystals, herbal tea, and a tea light. Perfect for meditation, contemplation, and peace. What message does the Oracle have for you?" />
        <meta name="keywords" content="bloom satchels, crystal healing, herbal tea, ceremony kit, spiritual gifts, Asheville crystals, handmade ritual bag" />
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
              Bloom Satchels
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
            <p className="font-sans text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {shopDescription}
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
                <ShopifyProductCard
                  key={product.node.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isAdding={addingProduct}
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