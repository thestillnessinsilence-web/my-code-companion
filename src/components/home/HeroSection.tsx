import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6958433b395a7679475e55c6/d2fe50019_Gemini_Generated_Image_1vvtch1vvtch1vvt.png"
          alt="Spiritual gift bag with healing crystals and sacred herbs from Appalachian mountains"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 via-purple-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
        
        {/* Crystalline sparkle overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-200 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-100 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
        </div>
      </div>

      {/* Sacred Geometry Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
              <polygon 
                points="10,0 20,5.77 20,17.32 10,23.09 0,17.32 0,5.77" 
                fill="none" 
                stroke="#b695c8" 
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Floating Crystal Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 opacity-20 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 95,50 50,95 5,50" stroke="#b695c8" strokeWidth="1" />
          <polygon points="50,20 80,50 50,80 20,50" stroke="#10665c" strokeWidth="0.8" />
          <polygon points="50,35 65,50 50,65 35,50" stroke="#9b6cb0" strokeWidth="0.6" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 w-24 h-24 opacity-15 hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#10665c" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="30" stroke="#7c4d8f" strokeWidth="0.6" />
          <polygon points="50,10 90,50 50,90 10,50" stroke="#b695c8" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#b695c8]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#b695c8]">
              Herbalism & Crystal Healing
            </span>
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Crystal
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b695c8] via-[#d4b8e8] to-[#9b6cb0]">
              Bloomery
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-stone-300 leading-relaxed mb-10 max-w-lg">
            Handcrafted and assembled in the heart of the Appalachian mountains. Crystals and herbs 
            woven together—each Oracle bag carries a unique blessing curated for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={createPageUrl('Shop')}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#10665c] to-[#0d534a] text-white px-8 py-4 font-sans text-sm tracking-widest uppercase transition-all hover:shadow-lg hover:shadow-emerald-900/30"
            >
              The Oracle Bag
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to={createPageUrl('About')}
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 font-sans text-sm tracking-widest uppercase transition-all hover:bg-white/10"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
