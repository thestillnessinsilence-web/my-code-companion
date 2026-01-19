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
          <p className="font-sans text-xs text-stone-500 mb-8">Last Updated: January 2026</p>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Overview</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              This website is operated by Crystal Bloomery. Throughout the site, the terms "we", "us" and "our" 
              refer to Crystal Bloomery. We offer this website, including all information, tools, and services 
              available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, 
              policies, and notices stated here.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mt-4">
              By visiting our site or purchasing something from us, you engage in our "Service" and agree to be 
              bound by the following terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 1 - Metaphysical & Medical Disclaimer</h2>
            <p className="font-sans text-stone-600 leading-relaxed font-semibold mb-2">Please Read Carefully:</p>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              Crystal Bloomery sells products related to spiritual wellness, meditation, and crystal healing.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              <strong>No Medical Advice:</strong> The information provided on this website and in our products 
              (including card inserts) is for educational and spiritual purposes only. It is not intended to be 
              a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of 
              your physician with any questions regarding a medical condition.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              <strong>Outcomes Not Guaranteed:</strong> Metaphysical descriptions of crystals, herbs, and rituals 
              are based on spiritual beliefs and tradition. We do not guarantee any specific physical, emotional, 
              or financial outcome from using our products. Legally, these items are sold as "curios" or for 
              entertainment/novelty purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 2 - Product Safety & Usage</h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              By purchasing our products, you agree to use them responsibly:
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              <strong>Candles:</strong> Never leave a burning candle unattended. Keep away from drafts, pets, and 
              children. Burn on a heat-resistant surface. Crystal Bloomery is not responsible for damage or injury 
              resulting from improper use of candles.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              <strong>Herbs & Teas:</strong> Our teas contain organic ingredients. Please review all ingredients 
              for potential allergies before consumption. If you are pregnant, nursing, or on medication, consult 
              your doctor before using herbal products.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              <strong>Choking Hazard:</strong> Some of our products contain small crystals or parts that may pose 
              a choking hazard. Keep out of reach of small children and pets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 3 - Handmade & Natural Variations</h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              <strong>Natural Products:</strong> Our products feature natural stones and dried botanicals. No two 
              crystals are exactly alike. Variations in color, shape, size, and texture are natural and expected.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              <strong>Mystery Items:</strong> The "Oracle Bag" is a mystery item. By purchasing, you acknowledge 
              that the contents are intuitively selected and you may not choose specific stones or messages. These 
              natural variations are not considered defects.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 4 - Wholesale Accounts</h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              <strong>Resale Authorization:</strong> Wholesale accounts are for verified retailers only. You agree 
              not to resell Crystal Bloomery products on third-party marketplaces (like Amazon, Etsy, or eBay) 
              without our express written permission.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              <strong>Minimums:</strong> Wholesale orders must meet the minimum order quantity (MOQ) specified in 
              our wholesale portal.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              <strong>Brand Representation:</strong> You agree to represent the Crystal Bloomery brand accurately 
              and not to alter packaging or remove branding tags.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 5 - General Conditions</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              We reserve the right to refuse service to anyone for any reason at any time. You understand that 
              your content (not including credit card information) may be transferred unencrypted and involve 
              (a) transmissions over various networks; and (b) changes to conform and adapt to technical 
              requirements of connecting networks or devices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 6 - Accuracy of Billing and Account Information</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit 
              or cancel quantities purchased per person, per household, or per order. If we make a change to or 
              cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone 
              number provided at the time the order was made.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 7 - Returns & Refunds</h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              <strong>Retail Orders:</strong> Due to the personal and energetic nature of our ritual tools, we 
              generally do not accept returns on opened items or tea products. If an item arrives damaged, please 
              contact us within 48 hours of delivery with photos of the damage.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              <strong>Mystery Bags:</strong> "The Oracle Bag" is a final sale item due to its mystery nature, 
              unless the item is defective.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 8 - Limitation of Liability</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              In no case shall Crystal Bloomery, our directors, officers, employees, affiliates, agents, contractors, 
              interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any 
              direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, 
              without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any 
              similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, 
              arising from your use of any of the service or any products procured using the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 9 - Governing Law</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              These Terms of Service and any separate agreements whereby we provide you Services shall be governed 
              by and construed in accordance with the laws of the State of North Carolina, United States.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4">Section 10 - Contact Information</h2>
            <p className="font-sans text-stone-600 leading-relaxed">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mt-2">
              <strong>Crystal Bloomery</strong><br />
              crystalbloomery@gmail.com<br />
              122 Arlington St, Unit A<br />
              Asheville, NC
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