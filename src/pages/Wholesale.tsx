import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Store, Package, Heart, Sparkles, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function Wholesale() {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    business_type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    toast.success('Application submitted successfully!');
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: Package,
      title: "Curated Collections",
      description: "Access to our full range of handcrafted Oracle Bags and crystal offerings at wholesale pricing."
    },
    {
      icon: Heart,
      title: "Partnership & Support",
      description: "Work directly with us to understand product stories and receive marketing support for your store."
    },
    {
      icon: Sparkles,
      title: "Exclusive Offerings",
      description: "First access to limited edition bags and seasonal collections for your retail space."
    },
    {
      icon: Store,
      title: "Flexible Minimums",
      description: "Reasonable minimum order quantities designed to support small, conscious retailers."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wholesale Oracle Bags & Crystal Ritual Kits | Handmade in Asheville, NC</title>
        <meta name="description" content="Stock your boutique with handmade mystery Oracle Bags. Unique crystal & herbal ritual kits from Asheville, NC. Join our stockist program for exclusive pricing." />
        <meta name="keywords" content="wholesale crystals, bulk oracle bags, metaphysical wholesale, wellness retail, crystal shop supplier, Asheville wholesale" />
        <link rel="canonical" href="https://crystalbloomery.com/wholesale" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" },
        { name: "Wholesale", url: "https://crystalbloomery.com/wholesale" }
      ]} />
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Partner With Us
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6">
            Wholesale Crystal Ritual Kits
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
          <p className="font-sans text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Join our community of conscious retailers who share sacred healing tools with their communities. 
            We work with boutiques, wellness centers, yoga studios, metaphysical shops, and mindful retailers.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-center text-stone-800 mb-12">Wholesale Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-[#10665c]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">{benefit.title}</h3>
                  <p className="font-sans text-stone-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-4">Apply for Wholesale</h2>
            <p className="font-sans text-stone-600 px-4">
              We'd love to learn about your business and how Crystal Bloomery can support your offerings.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-6 bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] rounded-lg">
              <CheckCircle className="w-16 h-16 text-[#10665c] mx-auto mb-4" />
              <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-3">Application Received</h3>
              <p className="font-sans text-stone-600 max-w-md mx-auto px-4">
                Thank you for your interest in partnering with Crystal Bloomery. We'll review your 
                application and be in touch within 3-5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-8 md:p-12 rounded-lg shadow-sm border border-stone-200">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block font-sans text-xs sm:text-sm text-stone-700 mb-2">
                    Business Name *
                  </label>
                  <Input
                    required
                    value={formData.business_name}
                    onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                    placeholder="Your Store Name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs sm:text-sm text-stone-700 mb-2">
                    Contact Name *
                  </label>
                  <Input
                    required
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block font-sans text-xs sm:text-sm text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs sm:text-sm text-stone-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(000) 000-0000"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block font-sans text-xs sm:text-sm text-stone-700 mb-2">
                    Website / Social Media
                  </label>
                  <Input
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="www.yourstore.com or @instagram"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs sm:text-sm text-stone-700 mb-2">
                    Location *
                  </label>
                  <Input
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="City, State"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label className="block font-sans text-xs sm:text-sm text-stone-700 mb-2">
                  Business Type *
                </label>
                <Input
                  required
                  value={formData.business_type}
                  onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
                  placeholder="e.g., Metaphysical Shop, Wellness Center, Boutique"
                  className="w-full"
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block font-sans text-xs sm:text-sm text-stone-700 mb-2">
                  Tell Us About Your Business *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your store's story, your customer base, and why Crystal Bloomery would be a good fit..."
                  className="h-32 sm:h-40 w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#10665c] to-[#0d534a] text-white py-4 sm:py-6 font-sans text-xs sm:text-sm tracking-widest uppercase hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </form>
          )}
        </motion.div>

        {/* Sacred Geometry Decoration */}
        <div className="flex justify-center opacity-10">
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
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
