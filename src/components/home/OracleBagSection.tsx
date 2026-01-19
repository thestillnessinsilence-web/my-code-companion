import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import oracleStep01 from '@/assets/oracle-step-01.png';

export default function OracleBagSection() {
  const steps = [
    {
      number: '01',
      title: 'Unwrap the Velvet Satchel',
      description: 'Find a quiet, peaceful space. Gently open your Oracle Bag and discover the crystals, herbs, soy candle, and Appalachian artwork made just for you.',
      image: oracleStep01,
      alt: 'Ritual herbal bag unwrapping ceremony with velvet pouch crystals and Appalachian art spiritual gift Asheville'
    },
    {
      number: '02',
      title: 'Prepare the Flower Tea',
      description: 'Brew the organic floral tea included in your satchel. Each one is unique, be sure to read the properties listed on each tea box.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6958433b395a7679475e55c6/e29f62b16_Gemini_Generated_Image_lwgrmqlwgrmqlwgr.jpeg',
      alt: 'Crystal ceremony bag tea ritual organic floral tea meditation preparation spiritual gift Asheville'
    },
    {
      number: '03',
      title: 'Enter Deep Meditation',
      description: 'Hold your crystals and close your eyes. Let the energy flow through you. Read your personal oracle message and receive the universe\'s guidance meant for you.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6958433b395a7679475e55c6/d85a6b53e_Gemini_Generated_Image_t4n75bt4n75bt4n7.jpeg',
      alt: 'Healing crystal meditation ritual herbal bag oracle message Appalachian art spiritual journey'
    },
  ];

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="flowerOfLife" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#10665c" strokeWidth="0.5" />
              <circle cx="5" cy="25" r="20" fill="none" stroke="#10665c" strokeWidth="0.5" />
              <circle cx="45" cy="25" r="20" fill="none" stroke="#10665c" strokeWidth="0.5" />
              <circle cx="15" cy="7.68" r="20" fill="none" stroke="#10665c" strokeWidth="0.5" />
              <circle cx="35" cy="7.68" r="20" fill="none" stroke="#10665c" strokeWidth="0.5" />
              <circle cx="15" cy="42.32" r="20" fill="none" stroke="#10665c" strokeWidth="0.5" />
              <circle cx="35" cy="42.32" r="20" fill="none" stroke="#10665c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flowerOfLife)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Our Signature Creation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
            The Oracle Bag
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          {/* Oracle Bag Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-purple-50 via-stone-50 to-emerald-50">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6958433b395a7679475e55c6/24360c6a1_image.png"
                alt="Crystal ceremony bag oracle collection moon blessed crystals ritual herbal blend Appalachian art spiritual gift Asheville"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-xl sm:text-2xl text-stone-700 leading-relaxed mb-8">
              Each Oracle Bag is a sacred vessel containing carefully selected healing crystals, 
              dried herbs, and a personalized message from the universe.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-8">
              More than just a gift, it's a bridge to ancient wisdom. Whether for yourself or someone 
              special, the Oracle Bag arrives carrying energies uniquely attuned to its recipient. 
              The crystals are cleansed under moonlight, and each blessing is channeled with deep 
              intention and love.
            </p>
            <Link
              to={createPageUrl('Shop')}
              className="inline-flex items-center gap-3 text-[#10665c] font-sans text-sm tracking-widest uppercase group"
            >
              <span className="border-b border-[#10665c]/30 pb-1 group-hover:border-[#10665c] transition-colors">
                Discover Your Oracle Bag
              </span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        {/* How It Works Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-stone-500 mb-4 block">
              The Experience Guide
            </span>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
              How It Works
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mx-auto mb-6" />
            <p className="font-sans text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Your Oracle Bag is more than a gift—it's a sacred ceremony for peace. Follow these steps to unlock its full healing potential and connect with the universe's wisdom.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                    <img
                      src={step.image}
                      alt={step.alt || step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative bg-stone-50 group-hover:bg-[#c8b5d9] px-6 py-8 text-center transition-colors duration-300">
                    <span className="font-serif text-5xl mb-4 block text-stone-400 group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                    <h4 className="font-serif text-xl mb-3 text-stone-800 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="font-sans text-sm leading-relaxed text-stone-600 group-hover:text-white/95 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
