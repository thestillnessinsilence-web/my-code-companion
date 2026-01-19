import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
            About Crystal Bloomery
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-stone max-w-none"
        >
          <p className="font-serif text-xl text-stone-700 leading-relaxed mb-8 text-center">
            Born in the heart of the Appalachian mountains, Crystal Bloomery is a sacred space 
            where ancient wisdom meets modern healing.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">Our Mission</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                We believe in the transformative power of crystals and herbs. Each Oracle Bag 
                is thoughtfully curated to bring peace, clarity, and healing to its recipient. 
                Our goal is to bridge the gap between ancient wisdom and contemporary wellness.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">Our Practice</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                Every crystal is cleansed under the light of the moon. Every herb is sourced 
                from trusted Appalachian growers. Every Oracle message is channeled with deep 
                intention and love for the person who will receive it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
