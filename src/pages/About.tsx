import { motion } from 'framer-motion';
import { Sparkles, Heart, Leaf, Moon } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Intention & Love",
      description: "Every Oracle Bag is crafted with pure intention, love, and sacred energy."
    },
    {
      icon: Leaf,
      title: "Nature's Wisdom",
      description: "We honor the healing properties of crystals and herbs."
    },
    {
      icon: Moon,
      title: "Moon Blessed",
      description: "Each creation is blessed under the moon's phases, amplifying its spiritual energy."
    },
    {
      icon: Sparkles,
      title: "Unique Blessings",
      description: "No two bags are alike. Each one is intuitively crafted to carry its own distinct energy and vibration."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Our Story
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6">
            Handcrafted Heritage
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5]">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#10665c]/20" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#b76e79]/20" />
            
            <p className="font-sans text-base sm:text-lg text-stone-700 leading-relaxed mb-6">
              Our Products are hand assembled or crafted in the heart of the Appalachian Mountains of Asheville, NC. We work in rhythm with nature, honoring the lineage of herbal wisdom thats been passed to us.
            </p>
            <p className="font-sans text-base sm:text-lg text-stone-700 leading-relaxed mb-6">
              When you untie the twine of a Crystal Bloomery parcel, you are receiving a blessing. You are receiving a moment of silence, wrapped in cloth, delivered with love.
            </p>
            <p className="font-sans text-lg text-stone-700 leading-relaxed">
              Enjoy the stillness in silence.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-center text-stone-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 text-[#10665c]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-stone-800 mb-2">{value.title}</h3>
                  <p className="font-sans text-stone-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sacred Geometry Decoration */}
        <div className="flex justify-center opacity-10 mb-20">
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#10665c" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="35" stroke="#7c4d8f" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="22" stroke="#b695c8" strokeWidth="0.3" />
            <polygon points="50,5 95,50 50,95 5,50" stroke="#10665c" strokeWidth="0.3" />
            <polygon points="50,20 80,50 50,80 20,50" stroke="#9b6cb0" strokeWidth="0.3" />
          </svg>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="font-serif text-lg sm:text-xl text-stone-700 italic mb-6">
            "Each Oracle Bag is a sacred offering, crafted with reverence for the healing power of nature."
          </p>
          <div className="w-16 h-px bg-[#9b6cb0]/40 mx-auto mb-8" />
          <p className="font-sans text-stone-600 mb-8">
            Have questions or want to learn more about our process? We'd love to connect with you.
          </p>
          <a
            href="mailto:crystalbloomery@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#10665c] to-[#7c4d8f] text-white px-8 py-4 font-sans text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}
