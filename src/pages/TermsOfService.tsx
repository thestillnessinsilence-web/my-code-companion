import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Crystal Bloomery</title>
        <meta name="description" content="Crystal Bloomery terms of service. Read our terms and conditions for using our website and purchasing products." />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" },
        { name: "Terms of Service", url: "https://crystalbloomery.com/terms-of-service" }
      ]} />
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Legal Information
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-6">
            Terms of Service
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-sm border border-stone-200"
        >
          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Overview</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              This website is operated by Crystal Bloomery. Throughout the site, the terms "we", "us" and "our" 
              refer to Crystal Bloomery. By visiting our site and/or purchasing something from us, you agree 
              to be bound by the following terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">General Conditions</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              We reserve the right to refuse service to anyone for any reason at any time. You agree not to 
              reproduce, duplicate, copy, sell, or exploit any portion of the Service or materials on the 
              website without express written permission by us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Accuracy of Information</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              You agree to provide current, complete, and accurate purchase and account information for all 
              purchases made at our store so that we can complete your transactions and contact you as needed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Product Disclaimer</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              Our Oracle Bags, including the crystals, teas, and ritual components within, are sold as curios 
              for contemplation, meditation, and entertainment purposes. They are meant to support a personal 
              spiritual practice and are not a substitute for professional medical, psychological, financial, 
              or legal advice. Please use herbs and candles responsibly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Changes to Terms</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              You can review the most current version of the Terms of Service at any time on this page. 
              We reserve the right to update, change or replace any part of these Terms of Service by 
              posting updates to our website.
            </p>
          </section>
        </motion.div>

        {/* Sacred Geometry Decoration */}
        <div className="flex justify-center opacity-10 mt-16">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#10665c" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="35" stroke="#7c4d8f" strokeWidth="0.3" />
            <polygon points="50,5 95,50 50,95 5,50" stroke="#10665c" strokeWidth="0.3" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}