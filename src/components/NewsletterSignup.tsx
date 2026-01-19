import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const SUPABASE_URL = "https://2d4faa0b-efd0-4042-adf0-cf7a958b11df.supabase.co";

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      const response = await fetch(`${SUPABASE_URL}/functions/v1/klaviyo-subscribe`, {
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
    <form onSubmit={handleSubmit} className="mt-4">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-stone-800 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#b695c8] transition-colors"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-[#10665c] hover:bg-[#0d534a] text-white text-sm tracking-widest uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      </div>
      <p className="text-xs text-stone-500 mt-2">
        Receive oracle wisdom, exclusive offers, and crystal guidance.
      </p>
    </form>
  );
}
