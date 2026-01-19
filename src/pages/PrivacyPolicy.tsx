import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Your Privacy Matters
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-6">
            Privacy Policy
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-sm border border-stone-200"
        >
          <p className="font-sans text-stone-700 leading-relaxed mb-8">
            Your privacy is important to us. This policy describes how your personal information is collected, 
            used, and shared when you visit or make a purchase from Crystal Bloomery.
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Information We Collect</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              When you make a purchase, we collect certain information from you, including your name, 
              billing address, shipping address, payment information (such as credit card numbers, 
              processed securely via Shopify Payments), email address, and phone number.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">How We Use Your Information</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              We use this to fulfill any orders placed through the Site (including processing your payment 
              information, arranging for shipping, and providing you with invoices and/or order confirmations) 
              and to communicate with you regarding your order.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Sharing Your Information</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              We share your Personal Information with third parties only to help us conduct our business. 
              For example, we use Shopify to power our online store. We do not sell your personal data to others.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Contact Us</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              For more information about our privacy practices, or if you have questions, please contact us by email at{' '}
              <a 
                href="mailto:crystalbloomery@gmail.com" 
                className="text-[#10665c] hover:text-[#0d534a] underline transition-colors"
              >
                crystalbloomery@gmail.com
              </a>.
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
  );
}