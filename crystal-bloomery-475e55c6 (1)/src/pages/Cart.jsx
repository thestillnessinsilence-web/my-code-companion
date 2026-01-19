import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Loader2, CreditCard, Lock } from 'lucide-react';
import { toast } from 'sonner';

export default function Cart() {
  const [sessionId, setSessionId] = useState(null);
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
  const queryClient = useQueryClient();

  useEffect(() => {
    const id = localStorage.getItem('crystal_session') || 
      `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('crystal_session', id);
    setSessionId(id);
  }, []);

  const { data: cartItems, isLoading } = useQuery({
    queryKey: ['cart', sessionId],
    queryFn: () => sessionId ? base44.entities.CartItem.filter({ session_id: sessionId }) : [],
    enabled: !!sessionId,
    initialData: [],
  });

  const updateQuantity = async (item, delta) => {
    const newQuantity = (item.quantity || 1) + delta;

    if (newQuantity <= 0) {
      await base44.entities.CartItem.delete(item.id);
    } else {
      const totalQuantity = cartItems.reduce((sum, i) => sum + (i.quantity || 1), 0);
      const newTotal = totalQuantity + delta;

      if (newTotal > 50) {
        toast.error('Maximum 50 bags allowed per order');
        return;
      }

      await base44.entities.CartItem.update(item.id, { quantity: newQuantity });
    }
    queryClient.invalidateQueries(['cart']);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const removeItem = async (itemId) => {
    await base44.entities.CartItem.delete(itemId);
    queryClient.invalidateQueries(['cart']);
    window.dispatchEvent(new Event('cart-updated'));
    toast.success('Item removed from bag');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shipping = 0;
  const total = subtotal;

  const handleCheckout = async (e) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart
    for (const item of cartItems) {
      await base44.entities.CartItem.delete(item.id);
    }
    
    queryClient.invalidateQueries(['cart']);
    window.dispatchEvent(new Event('cart-updated'));
    
    toast.success('Order placed successfully! Thank you for your purchase.');
    setCheckoutMode(false);
    setProcessing(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#10665c] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#ebe8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {cartItems.length === 0 ? (
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
        ) : checkoutMode ? (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleCheckout} className="space-y-6">
                {/* Shipping Information */}
                <div>
                  <h3 className="font-serif text-lg text-stone-800 mb-3">Shipping Information</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                          First Name
                        </Label>
                        <Input
                          required
                          value={checkoutData.firstName}
                          onChange={(e) => setCheckoutData({ ...checkoutData, firstName: e.target.value })}
                          className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                          Last Name
                        </Label>
                        <Input
                          required
                          value={checkoutData.lastName}
                          onChange={(e) => setCheckoutData({ ...checkoutData, lastName: e.target.value })}
                          className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                        Email
                      </Label>
                      <Input
                        type="email"
                        required
                        value={checkoutData.email}
                        onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                        className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                        Address
                      </Label>
                      <Input
                        required
                        value={checkoutData.address}
                        onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                        className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                          City
                        </Label>
                        <Input
                          required
                          value={checkoutData.city}
                          onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                          className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                          State
                        </Label>
                        <Input
                          required
                          value={checkoutData.state}
                          onChange={(e) => setCheckoutData({ ...checkoutData, state: e.target.value })}
                          className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                          ZIP
                        </Label>
                        <Input
                          required
                          value={checkoutData.zip}
                          onChange={(e) => setCheckoutData({ ...checkoutData, zip: e.target.value })}
                          className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                          placeholder="ZIP"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div>
                  <h3 className="font-serif text-lg text-stone-800 mb-3">Payment Method</h3>

                  {/* Billing Address Checkbox */}
                  <div className="mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={shippingSameAsBilling}
                        onChange={(e) => setShippingSameAsBilling(e.target.checked)}
                        className="w-4 h-4 rounded border-stone-300 text-[#10665c] focus:ring-[#10665c]"
                      />
                      <span className="font-sans text-sm text-stone-600">Billing address is the same as shipping</span>
                    </label>
                  </div>

                  {/* Billing Address Fields */}
                  {!shippingSameAsBilling && (
                    <div className="mb-6 space-y-4 p-4 bg-stone-50 rounded-lg">
                      <h4 className="font-serif text-base text-stone-800 mb-2">Billing Address</h4>
                      <div>
                        <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                          Address
                        </Label>
                        <Input
                          required
                          value={checkoutData.billingAddress}
                          onChange={(e) => setCheckoutData({ ...checkoutData, billingAddress: e.target.value })}
                          className="border-2 border-stone-300 rounded-lg focus:border-[#10665c] focus:ring-2 focus:ring-[#10665c]/20 py-3 transition-all"
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                            City
                          </Label>
                          <Input
                            required
                            value={checkoutData.billingCity}
                            onChange={(e) => setCheckoutData({ ...checkoutData, billingCity: e.target.value })}
                            className="border-2 border-stone-300 rounded-lg focus:border-[#10665c] focus:ring-2 focus:ring-[#10665c]/20 py-3 transition-all"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                            State
                          </Label>
                          <Input
                            required
                            value={checkoutData.billingState}
                            onChange={(e) => setCheckoutData({ ...checkoutData, billingState: e.target.value })}
                            className="border-2 border-stone-300 rounded-lg focus:border-[#10665c] focus:ring-2 focus:ring-[#10665c]/20 py-3 transition-all"
                            placeholder="State"
                          />
                        </div>
                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                            ZIP
                          </Label>
                          <Input
                            required
                            value={checkoutData.billingZip}
                            onChange={(e) => setCheckoutData({ ...checkoutData, billingZip: e.target.value })}
                            className="border-2 border-stone-300 rounded-lg focus:border-[#10665c] focus:ring-2 focus:ring-[#10665c]/20 py-3 transition-all"
                            placeholder="ZIP"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Express Payment Options */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="w-full bg-black hover:bg-gray-900 text-white font-medium px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-all min-h-[56px]"
                    >
                      <svg className="h-7" viewBox="0 0 55 24" fill="currentColor">
                        <path d="M11.8 5.6c.7-.8 1.2-2 1.1-3.1-1 .1-2.3.7-3 1.5-.6.7-1.2 1.9-1.1 3 1.2.1 2.3-.6 3-1.4zm1.1 1.7c-1.7-.1-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.3.8 1.4 0 2.4-1.2 3.3-2.4.9-1.4 1.3-2.8 1.3-2.9 0 0-2.6-1-2.6-3.8 0-2.4 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.9l-.4.4z"/>
                        <text x="25" y="18" fill="currentColor" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '14px', fontWeight: '500' }}>Pay</text>
                      </svg>
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-medium px-6 py-4 rounded-lg flex items-center justify-center transition-all min-h-[56px]"
                    >
                      <svg className="h-6" viewBox="0 0 122 48" fill="none">
                        <path d="M61.7461 24.9121C61.7461 18.293 66.7656 13.8359 73.6328 13.8359C76.9297 13.8359 79.6172 15.0859 81.3125 17.2734L78.0625 19.6172C76.8359 17.9219 75.0469 16.9219 73.6328 16.9219C68.6836 16.9219 65.2344 20.293 65.2344 24.9121C65.2344 29.5312 68.6836 32.9023 73.6328 32.9023C75.0469 32.9023 76.8359 31.9023 78.0625 30.207L81.3125 32.5508C79.6172 34.7383 76.9297 35.9883 73.6328 35.9883C66.7656 35.9883 61.7461 31.5312 61.7461 24.9121Z" fill="#5F6368"/>
                        <path d="M93.7344 24.9121C93.7344 29.5312 89.7812 32.9727 85.1094 32.9727C80.4375 32.9727 76.4844 29.5312 76.4844 24.9121C76.4844 20.293 80.4375 16.8516 85.1094 16.8516C89.7812 16.8516 93.7344 20.293 93.7344 24.9121ZM90.3203 24.9121C90.3203 21.957 87.9375 19.9375 85.1094 19.9375C82.2812 19.9375 79.8984 21.957 79.8984 24.9121C79.8984 27.8672 82.2812 29.8867 85.1094 29.8867C87.9375 29.8867 90.3203 27.8672 90.3203 24.9121Z" fill="#5F6368"/>
                        <path d="M105.984 24.9121C105.984 29.5312 102.031 32.9727 97.3594 32.9727C92.6875 32.9727 88.7344 29.5312 88.7344 24.9121C88.7344 20.293 92.6875 16.8516 97.3594 16.8516C102.031 16.8516 105.984 20.293 105.984 24.9121ZM102.57 24.9121C102.57 21.957 100.188 19.9375 97.3594 19.9375C94.5312 19.9375 92.1484 21.957 92.1484 24.9121C92.1484 27.8672 94.5312 29.8867 97.3594 29.8867C100.188 29.8867 102.57 27.8672 102.57 24.9121Z" fill="#5F6368"/>
                        <path d="M118.234 17.2031V32.3203C118.234 38.3203 114.422 40.5078 110.188 40.5078C106.234 40.5078 103.898 38.1094 102.953 36.1367L105.914 34.8398C106.445 36.207 107.883 37.4219 110.188 37.4219C113.055 37.4219 114.961 35.7266 114.961 32.6719V31.4219H114.844C113.898 32.5078 112.32 32.9727 110.953 32.9727C106.656 32.9727 102.703 29.3203 102.703 24.9492C102.703 20.5781 106.656 16.8516 110.953 16.8516C112.32 16.8516 113.898 17.3164 114.844 18.3867H114.961V17.2031H118.234ZM115.211 24.9492C115.211 22.0664 113.055 19.9375 110.438 19.9375C107.82 19.9375 105.453 22.0664 105.453 24.9492C105.453 27.832 107.82 29.8867 110.438 29.8867C113.055 29.8867 115.211 27.832 115.211 24.9492Z" fill="#5F6368"/>
                        <path d="M51.8906 21.418V24.6094H60.625C60.4453 26.1875 59.9219 27.332 59.0938 28.1602C58.0859 29.168 56.5078 30.2539 51.8906 30.2539C45.8906 30.2539 41.2031 25.4805 41.2031 19.4805C41.2031 13.4805 45.8906 8.70703 51.8906 8.70703C55.1406 8.70703 57.5234 9.97266 59.3125 11.6875L61.5703 9.42969C59.0938 7.04297 55.8203 5.44141 51.8906 5.44141C43.9688 5.44141 37.4141 11.7969 37.4141 19.4805C37.4141 27.1641 43.9688 33.5195 51.8906 33.5195C55.7422 33.5195 58.6641 32.2891 60.9453 29.9336C63.2969 27.582 64.0547 24.2148 64.0547 21.5625C64.0547 20.6992 63.9844 19.9062 63.8398 19.2539H51.8906V21.418Z" fill="#4285F4"/>
                        <path d="M26.5 24C26.5 18.2109 22.1289 13.9219 16.5 13.9219C10.8711 13.9219 6.5 18.2109 6.5 24C6.5 29.6836 10.8711 34.0781 16.5 34.0781C22.1289 34.0781 26.5 29.6836 26.5 24ZM22.9102 24C22.9102 27.6523 20.1172 30.4922 16.5 30.4922C12.8828 30.4922 10.0898 27.6523 10.0898 24C10.0898 20.2422 12.8828 17.5078 16.5 17.5078C20.1172 17.5078 22.9102 20.2422 22.9102 24Z" fill="#EA4335"/>
                        <path d="M48.5 24C48.5 18.2109 44.1289 13.9219 38.5 13.9219C32.8711 13.9219 28.5 18.2109 28.5 24C28.5 29.6836 32.8711 34.0781 38.5 34.0781C44.1289 34.0781 48.5 29.6836 48.5 24ZM44.9102 24C44.9102 27.6523 42.1172 30.4922 38.5 30.4922C34.8828 30.4922 32.0898 27.6523 32.0898 24C32.0898 20.2422 34.8828 17.5078 38.5 17.5078C42.1172 17.5078 44.9102 20.2422 44.9102 24Z" fill="#FBBC04"/>
                      </svg>
                    </button>
                  </div>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-stone-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-white px-4 text-stone-400 uppercase tracking-widest">Or pay with card</span>
                    </div>
                  </div>

                  {/* Card Payment Form */}
                  <div className="space-y-3">
                    <div>
                      <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                        Card Number
                      </Label>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        value={checkoutData.cardNumber}
                        onChange={(e) => setCheckoutData({ ...checkoutData, cardNumber: e.target.value })}
                        className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                          Expiry
                        </Label>
                        <Input
                          placeholder="MM/YY"
                          value={checkoutData.expiry}
                          onChange={(e) => setCheckoutData({ ...checkoutData, expiry: e.target.value })}
                          className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1.5 block">
                          CVV
                        </Label>
                        <Input
                          placeholder="123"
                          value={checkoutData.cvv}
                          onChange={(e) => setCheckoutData({ ...checkoutData, cvv: e.target.value })}
                          className="border border-stone-300 rounded-md focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c]/20 py-2 text-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCheckoutMode(false)}
                    className="flex-1 py-3 rounded-md border-stone-300 text-sm"
                  >
                    Back to Bag
                  </Button>
                  <Button
                    type="submit"
                    disabled={processing}
                    className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#c9a961] hover:from-[#c9a961] hover:to-[#d4af37] text-stone-900 font-sans text-xs tracking-widest uppercase py-3 rounded-lg shadow-lg"
                  >
                    {processing ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      'COMPLETE YOUR CEREMONY'
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative p-6 bg-gradient-to-br from-[#e8f5f2]/40 to-[#f3eef5]/40 backdrop-blur-sm">
                {/* Sacred geometry pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <pattern id="sacred" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="8" stroke="#10665c" strokeWidth="0.5" fill="none" />
                      <polygon points="10,2 18,10 10,18 2,10" stroke="#7c4d8f" strokeWidth="0.3" fill="none" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#sacred)" />
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9b6cb0]/30 to-transparent" />
                  
                  <h3 className="font-serif text-lg text-stone-800 mb-4">Order Summary</h3>
                  <div className="space-y-2 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-xs">
                        <span className="text-stone-600">
                          {item.product_name} × {item.quantity || 1}
                        </span>
                        <span className="font-medium text-stone-700">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-stone-300/30 pt-3 space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-500">Subtotal</span>
                      <span className="text-stone-600">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-500">Shipping</span>
                      <span className="text-stone-600">FREE</span>
                    </div>
                    <div className="flex justify-between text-base font-serif pt-2 border-t border-stone-300/30 mt-2">
                      <span className="text-stone-800">Total</span>
                      <span className="text-[#10665c]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10665c]/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-[160px,1fr,340px] gap-6 bg-white p-6 rounded-lg mb-8"
              >
                {/* Product Image */}
                <div className="relative">
                  <div className="w-full aspect-square bg-stone-900 relative rounded">
                    <div className="absolute top-3 left-3 bg-[#3a2d4a] text-white px-3 py-1.5 text-[10px] tracking-widest font-medium rounded-sm">
                      HANDCRAFTED
                    </div>
                    <img
                      src={item.image_url || 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&q=80'}
                      alt={`${item.product_name} - spiritual gift bag with moon blessed crystals and meditation ritual tools`}
                      className="w-full h-full object-cover rounded"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="font-serif text-3xl text-stone-900">{item.product_name}</h2>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-stone-300 hover:text-stone-600 transition-colors"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      </button>
                    </div>
                    <p className="text-stone-500 italic mb-4">A sacred vessel for your spiritual journey</p>
                    <div className="flex items-center gap-2 text-sm text-stone-600 mb-6">
                      <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Handmade in Asheville, NC</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6 mb-auto">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        <span className="text-sm font-semibold text-stone-900 tracking-wide uppercase">Sacred Herbs</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#e8f0e5] text-[#5a7c4d] px-3 py-1.5 text-sm rounded">Lavender</span>
                        <span className="bg-[#e8f0e5] text-[#5a7c4d] px-3 py-1.5 text-sm rounded">Mugwort</span>
                        <span className="bg-[#e8f0e5] text-[#5a7c4d] px-3 py-1.5 text-sm rounded">White Sage</span>
                        <span className="bg-[#e8f0e5] text-[#5a7c4d] px-3 py-1.5 text-sm rounded">Rose Petals</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-sm font-semibold text-stone-900 tracking-wide uppercase">Healing Crystals</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#e8e5f0] text-[#6b5b7c] px-3 py-1.5 text-sm rounded">Amethyst</span>
                        <span className="bg-[#e8e5f0] text-[#6b5b7c] px-3 py-1.5 text-sm rounded">Clear Quartz</span>
                        <span className="bg-[#e8e5f0] text-[#6b5b7c] px-3 py-1.5 text-sm rounded">Rose Quartz</span>
                        <span className="bg-[#e8e5f0] text-[#6b5b7c] px-3 py-1.5 text-sm rounded">Black Tourmaline</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 6v6l4 2"/>
                          <circle cx="12" cy="12" r="10"/>
                        </svg>
                        <span className="text-sm font-semibold text-stone-900 tracking-wide uppercase">Organic Floral Tea</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#f0eee5] text-[#7c6d4d] px-3 py-1.5 text-sm rounded">Unique Blend</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        <span className="text-sm font-semibold text-stone-900 tracking-wide uppercase">Herbage Bookmark</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#e8f0e5] text-[#5a7c4d] px-3 py-1.5 text-sm rounded">Handcrafted</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-4xl text-stone-900">${item.price}</span>
                      <span className="text-lg text-stone-400 line-through">$148</span>
                    </div>
                  </div>
                </div>

                {/* Order Details Sidebar */}
                <div className="bg-stone-50 rounded-lg p-5 flex flex-col h-fit sticky top-32">
                  <h3 className="font-serif text-xl text-stone-900 mb-5">Order Details</h3>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-600">Subtotal</span>
                      <span className="text-stone-900 font-medium">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-600">Shipping</span>
                      <span className="text-amber-600 font-semibold">Free</span>
                    </div>
                  </div>

                  <div className="border-t border-stone-300 pt-5 mb-6">
                    <div className="flex justify-between items-baseline">
                      <span className="font-serif text-xl text-stone-900">Total</span>
                      <span className="font-serif text-3xl text-stone-900">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setCheckoutMode(true)}
                    className="w-full bg-[#4a3558] hover:bg-[#3d2d48] text-white font-semibold py-4 text-sm tracking-wider uppercase transition-colors rounded-md mb-4"
                  >
                    <svg className="w-4 h-4 inline mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    PROCEED TO CHECKOUT
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-stone-500 mb-4">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Secure checkout with 256-bit encryption</span>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-xs italic text-center text-stone-600 leading-relaxed">
                      "Each Oracle Bag is cleansed under the moonlight and blessed with intentions of protection, clarity, and abundance."
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto py-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <p className="font-semibold text-base text-stone-900 mb-1">Free Shipping</p>
                <p className="text-sm text-stone-500">On all orders</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <p className="font-semibold text-base text-stone-900 mb-1">Blessed & Cleansed</p>
                <p className="text-sm text-stone-500">Before shipping</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="font-semibold text-base text-stone-900 mb-1">5-Star Reviews</p>
                <p className="text-sm text-stone-500">Trusted by 2,000+</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}