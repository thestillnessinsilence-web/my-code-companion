import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import { Loader2, Sparkles } from 'lucide-react';

const SUPABASE_FUNCTIONS_URL = "https://hdvdshevmjbnntbwjjfd.supabase.co/functions/v1";

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${SUPABASE_FUNCTIONS_URL}/klaviyo-subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok || data?.error) {
        throw new Error(data?.error || 'Subscription failed');
      }

      setIsSubscribed(true);
      toast.success('Welcome to the Crystal Bloomery family!');
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error('Unable to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Newsletter | Crystal Bloomery - Asheville Crystal & Herbal Wisdom</title>
        <meta 
          name="description" 
          content="Subscribe to Crystal Bloomery's newsletter for exclusive offers, crystal wisdom, herbal insights, and updates on new Bloom Satchels from Asheville, NC." 
        />
      </Helmet>

      <div className="min-h-screen pt-20 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#10665c]/10 via-[#7c4d8f]/10 to-[#b695c8]/20 mb-6">
              <Sparkles className="w-8 h-8 text-[#7c4d8f]" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-4">
              Join Our Circle
            </h1>
            <p className="text-stone-600 leading-relaxed max-w-lg mx-auto">
              Wisdom for your unfolding, exclusive offers, and crystal and herbal insights 
              delivered straight to your inbox.
            </p>
          </div>

          {/* Signup Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-10 border border-stone-200/50">
            {isSubscribed ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#10665c]/10 mb-4">
                  <svg className="w-7 h-7 text-[#10665c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-stone-800 mb-2">Welcome to the Family</h2>
                <p className="text-stone-600">
                  Thank you for subscribing. Watch your inbox for crystal wisdom and exclusive offerings.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-xl text-stone-800 mb-6 text-center">
                  Subscribe to Our Newsletter
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 placeholder-stone-400 text-base focus:outline-none focus:border-[#10665c] focus:ring-1 focus:ring-[#10665c] transition-colors rounded-md"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-[#10665c] hover:bg-[#0d534a] text-white text-sm tracking-widest uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-md"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </form>

                <p className="text-xs text-stone-500 text-center mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            )}
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-[#7c4d8f] font-serif text-lg mb-1">Crystal Wisdom</div>
              <p className="text-sm text-stone-600">Monthly insights on working with healing crystals</p>
            </div>
            <div>
              <div className="text-[#7c4d8f] font-serif text-lg mb-1">Exclusive Offers</div>
              <p className="text-sm text-stone-600">Early access to new Bloom Satchels & special deals</p>
            </div>
            <div>
              <div className="text-[#7c4d8f] font-serif text-lg mb-1">Herbal Guidance</div>
              <p className="text-sm text-stone-600">Seasonal tea rituals and Appalachian herb lore</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
