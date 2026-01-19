import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShoppingBag, ArrowRight, Loader2, Lock, Plus, Minus, Trash2, Shield, Truck, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { createPageUrl } from '@/utils';
import { useCart } from '@/context/CartContext';

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
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    toast.success('Order placed successfully! Thank you for your purchase.');
    setCheckoutMode(false);
    setProcessing(false);
  };

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
                          Expiry Date
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

                <Button
                  type="submit"
                  disabled={processing}
                  className="w-full bg-[#10665c] hover:bg-[#0d5249] text-white py-4 font-sans text-sm tracking-widest uppercase transition-colors"
                >
                  {processing ? (
                    <span className="flex items-center gap-2 justify-center">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      <Lock className="w-4 h-4" />
                      Complete Order - ${total.toFixed(2)}
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 h-fit"
            >
              <h3 className="font-serif text-lg text-stone-800 mb-4">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image_url || 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=100&q=80'}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-serif text-sm text-stone-800">{item.name}</h4>
                      <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                      <p className="text-sm text-[#10665c] font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-stone-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Subtotal</span>
                  <span className="text-stone-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Shipping</span>
                  <span className="text-stone-800">Free</span>
                </div>
                <div className="flex justify-between font-serif text-lg pt-2 border-t border-stone-200">
                  <span className="text-stone-800">Total</span>
                  <span className="text-[#10665c]">${total.toFixed(2)}</span>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setCheckoutMode(false)}
                className="w-full mt-4 border-stone-300 text-stone-600 hover:bg-stone-50"
              >
                Back to Cart
              </Button>
            </motion.div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-8">
                  <h1 className="font-serif text-2xl sm:text-3xl text-stone-800">Your Bag</h1>
                  <span className="font-sans text-sm text-stone-500">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
                </div>

                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-6 p-4 bg-white"
                    >
                      <img
                        src={item.image_url || 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=200&q=80'}
                        alt={item.name}
                        className="w-24 h-24 sm:w-32 sm:h-32 object-cover"
                      />
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif text-lg text-stone-800">{item.name}</h3>
                            <p className="text-sm text-[#10665c] font-medium mt-1">${item.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-stone-400 hover:text-stone-600 transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center gap-3">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1, item.quantity)}
                            className="w-8 h-8 flex items-center justify-center border border-stone-300 hover:border-stone-400 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1, item.quantity)}
                            className="w-8 h-8 flex items-center justify-center border border-stone-300 hover:border-stone-400 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 h-fit sticky top-32"
            >
              <h3 className="font-serif text-lg text-stone-800 mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Subtotal</span>
                  <span className="text-stone-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Shipping</span>
                  <span className="text-stone-800">Free</span>
                </div>
              </div>
              <div className="border-t border-stone-200 pt-4 mb-6">
                <div className="flex justify-between font-serif text-xl">
                  <span className="text-stone-800">Total</span>
                  <span className="text-[#10665c]">${total.toFixed(2)}</span>
                </div>
              </div>
              <Button
                onClick={() => setCheckoutMode(true)}
                className="w-full bg-[#10665c] hover:bg-[#0d5249] text-white py-4 font-sans text-sm tracking-widest uppercase transition-colors"
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
              <div className="mt-8 pt-6 border-t border-stone-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Shield className="w-5 h-5 text-[#10665c] mb-2" />
                    <span className="font-sans text-xs text-stone-500">Secure Payment</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Truck className="w-5 h-5 text-[#10665c] mb-2" />
                    <span className="font-sans text-xs text-stone-500">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Heart className="w-5 h-5 text-[#10665c] mb-2" />
                    <span className="font-sans text-xs text-stone-500">Handcrafted</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
