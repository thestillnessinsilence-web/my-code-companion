import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShoppingBag, ArrowRight, Loader2, Lock, Plus, Minus, Trash2, ShieldCheck, Truck, Heart, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { createPageUrl } from '@/utils';
import { useCart } from '@/context/CartContext';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: ''
  });
  const [processing, setProcessing] = useState(false);
  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true);

  const handleQuantityChange = (id: string, delta: number, currentQuantity: number) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity <= 0) {
      removeFromCart(id);
      toast.success('Item removed from bag');
    } else if (newQuantity > 50) {
      toast.error('Maximum 50 bags allowed per order');
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
    toast.success('Item removed from bag');
  };

  const subtotal = totalPrice;
  const total = subtotal;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    toast.success('Order placed successfully! Thank you for your purchase.');
    setCheckoutMode(false);
    setProcessing(false);
  };

  return (
    <>
      <Helmet>
        <title>Your Shopping Bag | Crystal Bloomery</title>
        <meta name="description" content="Review your Crystal Bloomery order. Secure checkout for handcrafted Oracle Bags with free shipping." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" },
        { name: "Cart", url: "https://crystalbloomery.com/cart" }
      ]} />
    <div className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-stone-100 to-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center mx-auto mb-8 shadow-sm">
              <ShoppingBag className="w-8 h-8 text-[#10665c]" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl text-stone-800 mb-3">Your bag is empty</h2>
            <p className="font-sans text-stone-500 mb-10 max-w-sm mx-auto">
              Discover our Oracle Bags and begin your journey.
            </p>
            <Link
              to={createPageUrl('Shop')}
              className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-4 font-sans text-xs tracking-widest uppercase hover:bg-stone-800 transition-all hover:shadow-lg"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : checkoutMode ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <button
                onClick={() => setCheckoutMode(false)}
                className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-700 transition-colors mb-6 font-sans text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Cart
              </button>
              <h1 className="font-serif text-3xl text-stone-800">Checkout</h1>
            </div>

            <form onSubmit={handleCheckout} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Forms */}
              <div className="space-y-6 order-2 lg:order-1">
                {/* Shipping Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="font-serif text-lg text-stone-800 mb-4">Shipping Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                          First Name
                        </Label>
                        <Input
                          required
                          value={checkoutData.firstName}
                          onChange={(e) => setCheckoutData({ ...checkoutData, firstName: e.target.value })}
                          className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                          Last Name
                        </Label>
                        <Input
                          required
                          value={checkoutData.lastName}
                          onChange={(e) => setCheckoutData({ ...checkoutData, lastName: e.target.value })}
                          className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                        Email
                      </Label>
                      <Input
                        type="email"
                        required
                        value={checkoutData.email}
                        onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                        className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                        Address
                      </Label>
                      <Input
                        required
                        value={checkoutData.address}
                        onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                        className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                          City
                        </Label>
                        <Input
                          required
                          value={checkoutData.city}
                          onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                          className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                          State
                        </Label>
                        <Input
                          required
                          value={checkoutData.state}
                          onChange={(e) => setCheckoutData({ ...checkoutData, state: e.target.value })}
                          className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                          ZIP
                        </Label>
                        <Input
                          required
                          value={checkoutData.zip}
                          onChange={(e) => setCheckoutData({ ...checkoutData, zip: e.target.value })}
                          className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                          placeholder="ZIP"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Payment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="font-serif text-lg text-stone-800 mb-4">Payment Method</h3>

                  <label className="flex items-center gap-3 cursor-pointer mb-5 p-3 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={shippingSameAsBilling}
                      onChange={(e) => setShippingSameAsBilling(e.target.checked)}
                      className="w-4 h-4 rounded border-stone-300 text-[#10665c] focus:ring-[#10665c]"
                    />
                    <span className="font-sans text-sm text-stone-600">Billing address is the same as shipping</span>
                  </label>

                  {!shippingSameAsBilling && (
                    <div className="mb-6 space-y-4 p-4 bg-stone-50 rounded-lg">
                      <h4 className="font-serif text-base text-stone-800">Billing Address</h4>
                      <div>
                        <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                          Address
                        </Label>
                        <Input
                          required
                          value={checkoutData.billingAddress}
                          onChange={(e) => setCheckoutData({ ...checkoutData, billingAddress: e.target.value })}
                          className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                            City
                          </Label>
                          <Input
                            required
                            value={checkoutData.billingCity}
                            onChange={(e) => setCheckoutData({ ...checkoutData, billingCity: e.target.value })}
                            className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                            State
                          </Label>
                          <Input
                            required
                            value={checkoutData.billingState}
                            onChange={(e) => setCheckoutData({ ...checkoutData, billingState: e.target.value })}
                            className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                            placeholder="State"
                          />
                        </div>
                        <div>
                          <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                            ZIP
                          </Label>
                          <Input
                            required
                            value={checkoutData.billingZip}
                            onChange={(e) => setCheckoutData({ ...checkoutData, billingZip: e.target.value })}
                            className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                            placeholder="ZIP"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                        Card Number
                      </Label>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        value={checkoutData.cardNumber}
                        onChange={(e) => setCheckoutData({ ...checkoutData, cardNumber: e.target.value })}
                        className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                          Expiry Date
                        </Label>
                        <Input
                          placeholder="MM/YY"
                          value={checkoutData.expiry}
                          onChange={(e) => setCheckoutData({ ...checkoutData, expiry: e.target.value })}
                          className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                        />
                      </div>
                      <div>
                        <Label className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-2 block">
                          CVV
                        </Label>
                        <Input
                          placeholder="123"
                          value={checkoutData.cvv}
                          onChange={(e) => setCheckoutData({ ...checkoutData, cvv: e.target.value })}
                          className="border-stone-200 rounded-lg focus:border-[#10665c] focus:ring-[#10665c]/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Complete Order Button */}
                  <Button
                    type="submit"
                    disabled={processing}
                    className="w-full mt-6 bg-[#10665c] hover:bg-[#0d5249] text-white py-5 font-sans text-sm tracking-widest uppercase transition-all rounded-xl shadow-lg hover:shadow-xl"
                  >
                    {processing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Complete Order
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm lg:sticky lg:top-32"
                >
                <h3 className="font-serif text-lg text-stone-800 mb-4">Order Summary</h3>
                <div className="divide-y divide-stone-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <img
                        src={item.image_url || 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=100&q=80'}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 flex justify-between items-center">
                        <div>
                          <h4 className="font-serif text-stone-800">{item.name}</h4>
                          <p className="text-sm text-stone-500">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-serif text-[#10665c]">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-stone-200 mt-4 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">Subtotal</span>
                    <span className="text-stone-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">Shipping</span>
                    <span className="text-[#10665c]">Free</span>
                  </div>
                  <div className="flex justify-between font-serif text-xl pt-2">
                    <span className="text-stone-800">Total</span>
                    <span className="text-[#10665c]">${total.toFixed(2)}</span>
                  </div>
                </div>
                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400 pt-6 mt-6 border-t border-stone-100">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs">SSL Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span className="text-xs">Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">Handcrafted</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="font-serif text-3xl text-stone-800">Your Bag</h1>
              <span className="font-sans text-sm text-stone-500 bg-stone-200/50 px-3 py-1 rounded-full">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} {cartItems.reduce((sum, item) => sum + item.quantity, 0) === 1 ? 'item' : 'items'}
              </span>
            </div>

            {/* Side by Side Layout */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Cart Items - Left Side */}
              <div className="flex-1 sm:flex-[3]">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden divide-y divide-stone-100">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex gap-5 p-5"
                      >
                        <img
                          src={item.image_url || 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=200&q=80'}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-serif text-lg text-stone-800">{item.name}</h3>
                              <p className="font-serif text-[#10665c] mt-1">${item.price.toFixed(2)}</p>
                            </div>
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-stone-300 hover:text-stone-500 transition-colors p-2 -m-2"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-center gap-1 mt-3">
                            <button
                              onClick={() => handleQuantityChange(item.id, -1, item.quantity)}
                              className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-sans text-sm w-10 text-center">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, 1, item.quantity)}
                              className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Order Summary - Right Side */}
              <div className="sm:flex-[2]">
                <div className="bg-white rounded-xl shadow-sm p-6 sm:sticky sm:top-28">
                  <h2 className="font-serif text-xl text-stone-800 mb-5">Order Summary</h2>
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Subtotal</span>
                      <span className="text-stone-800">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Shipping</span>
                      <span className="text-[#10665c]">Free</span>
                    </div>
                  </div>
                  <div className="border-t border-stone-100 pt-4 mb-6">
                    <div className="flex justify-between font-serif text-2xl">
                      <span className="text-stone-800">Total</span>
                      <span className="text-[#10665c]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setCheckoutMode(true)}
                    className="w-full bg-[#10665c] hover:bg-[#0d5249] text-white py-5 font-sans text-sm tracking-widest uppercase transition-all rounded-xl shadow-lg hover:shadow-xl"
                  >
                    Proceed to Checkout
                  </Button>
                  <Link
                    to={createPageUrl('Shop')}
                    className="block text-center font-sans text-sm text-stone-500 hover:text-stone-700 mt-4 transition-colors"
                  >
                    Continue Shopping
                  </Link>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400 pt-6 mt-6 border-t border-stone-100">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs">SSL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span className="text-xs">Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">Handcrafted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
    </>
  );
}
