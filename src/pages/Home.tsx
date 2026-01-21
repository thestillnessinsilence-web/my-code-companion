import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import OracleBagSection from '@/components/home/OracleBagSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Crystal and Herbal Ceremony Ritual Bags Handmade in Asheville, NC: Crystal Bloomery</title>
        <meta name="description" content="Find your moment of serenity with Crystal Bloomery. Our signature mystery Spirit Blooms are complete contemplation ceremonies, featuring intuitively chosen crystals, calming tea, and a tea light." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Spirit Blooms",
            "description": "A complete, intuitively curated ceremony designed to nurture your spirit and ground your energy. Handmade in the Blue Ridge Mountains of Asheville, NC, each velvet vessel is a mystery—assembled with intention and components that are meant specifically for the recipient.",
            "image": "https://crystalbloomery.com/images/oracle-bag.jpg",
            "brand": {
              "@type": "Brand",
              "name": "Crystal Bloomery"
            },
            "offers": {
              "@type": "Offer",
              "price": "48.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" }
      ]} />
      <div>
      <HeroSection />
      <OracleBagSection />
      
      {/* Call to Action */}
      <section className="pt-24 pb-16 bg-stone-900 relative overflow-hidden">
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="ctaPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <polygon points="15,0 30,15 15,30 0,15" fill="none" stroke="#b695c8" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaPattern)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#b695c8] mb-6 block">
              Begin Your Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              Ready to Receive Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b695c8] to-[#d4b8e8]">
                Sacred Message?
              </span>
            </h2>
            <p className="font-sans text-stone-400 mb-10 max-w-xl mx-auto">
              Each Spirit Bloom is prepared with love and intention. Allow the universe to speak 
              to you through crystals, herbs, and sacred wisdom.
            </p>
            <Link
              to={createPageUrl('Shop')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9b6cb0] to-[#7c4d8f] text-white px-10 py-4 font-sans text-sm tracking-widest uppercase transition-all hover:shadow-[0_0_40px_rgba(155,108,176,0.6)] hover:scale-105 rounded-full"
            >
              Shop Now
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
