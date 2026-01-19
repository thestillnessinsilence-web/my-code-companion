import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

export default function MoonWater() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#10665c] font-sans text-sm tracking-widest uppercase mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#10665c] text-white px-3 py-1 text-xs tracking-widest uppercase rounded-sm">
              Rituals
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Calendar className="w-4 h-4" />
              January 15, 2026
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mb-6">
            The Power of Moon Water: Lunar Energy for Crystal Charging
          </h1>
          <p className="font-sans text-lg text-stone-600 leading-relaxed">
            Discover how to harness lunar energy through moon water rituals and crystal charging ceremonies, 
            an ancient practice spanning multiple cultures and traditions.
          </p>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=1200&q=80"
            alt="Full moon over water ritual herbal bag crystal ceremony spiritual gift Asheville"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <div className="font-sans text-stone-700 leading-relaxed space-y-6">
            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">What Is Moon Water?</h2>
            <p>
              Moon water is water that has been charged under the light of the moon, typically during a full moon 
              when lunar energy is believed to be at its peak. This practice has roots in various ancient traditions, 
              including those of the Egyptians, Greeks, and Indigenous cultures who recognized the moon's influence 
              on tides, agriculture, and spiritual practices.
            </p>
            <p>
              The concept draws from the understanding that the moon affects Earth's water bodies—creating tides 
              in our oceans. Practitioners believe this same lunar influence can imbue water with specific energetic 
              properties that can be used for cleansing, ritual work, and crystal charging.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">The Science of Lunar Cycles</h2>
            <p>
              While the metaphysical properties of moon water remain in the realm of spiritual practice, the moon's 
              physical influence on Earth is well-documented. The gravitational pull of the moon creates tidal forces 
              that move billions of gallons of ocean water daily. Some researchers have also studied correlations 
              between lunar cycles and plant growth, with certain farming traditions (biodynamic agriculture) 
              timing planting and harvesting according to moon phases.
            </p>
            <p>
              Many practitioners find that working with lunar cycles creates a meaningful connection to natural 
              rhythms—a form of mindfulness practice that encourages regular reflection and intention-setting.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">How to Create Moon Water</h2>
            <div className="bg-[#f8f6f3] p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl text-stone-800 mb-4">Materials Needed:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>A clear glass jar or bowl (avoid plastic)</li>
                <li>Fresh spring water or filtered water</li>
                <li>Optional: crystals that are water-safe (clear quartz, amethyst)</li>
                <li>A quiet outdoor space with moon visibility</li>
              </ul>
            </div>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Choose Your Moon Phase:</strong> Full moons are traditional for charging, but new moons 
                are ideal for setting intentions. Each phase carries different energy—waxing for growth, waning for release.
              </li>
              <li>
                <strong>Prepare Your Container:</strong> Cleanse your glass container with pure water. Some 
                practitioners pass it through sage smoke or sound vibrations.
              </li>
              <li>
                <strong>Set Your Intention:</strong> Hold the container and clearly state or visualize your 
                intention for the water—healing, clarity, protection, or general blessing.
              </li>
              <li>
                <strong>Place Under Moonlight:</strong> Set your water outside or on a windowsill where it 
                will receive direct moonlight. Leave overnight from moonrise to sunrise.
              </li>
              <li>
                <strong>Retrieve Before Sunrise:</strong> Collect your moon water before the sun rises to 
                preserve its lunar charge. Store in a dark, cool place.
              </li>
            </ol>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Using Moon Water for Crystal Charging</h2>
            <p>
              One of the most popular uses for moon water is cleansing and charging crystals. Place your crystals 
              in or around a bowl of moon water during the full moon to both cleanse them of accumulated energies 
              and recharge them with lunar light.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <p className="text-amber-800">
                <strong>Important:</strong> Not all crystals are water-safe. Selenite, malachite, pyrite, and 
                hematite can be damaged by water. Research your specific crystals before submerging them.
              </p>
            </div>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Integrating Moon Water Into Your Practice</h2>
            <p>
              Moon water can be incorporated into many aspects of your spiritual practice:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Add to your bath for a cleansing ritual</li>
              <li>Use to water plants with intention</li>
              <li>Incorporate into tea ceremonies (use food-grade water)</li>
              <li>Anoint crystals, sacred objects, or yourself</li>
              <li>Add to cleaning solutions for space clearing</li>
            </ul>
            <p>
              At Crystal Bloomery, our Oracle Bags are prepared during specific lunar phases, with crystals 
              cleansed under full moon light before being carefully wrapped for their journey to you.
            </p>

            <div className="border-t border-stone-200 mt-12 pt-8">
              <p className="text-sm text-stone-500 italic">
                Note: The practices described in this article are based on traditional spiritual beliefs and 
                folklore. They are not intended as medical advice or scientific claims. The experience of 
                working with moon water is personal and subjective.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <h3 className="font-serif text-2xl text-stone-800 mb-6">Continue Your Journey</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/crystal-healing" className="group">
              <div className="bg-white p-6 border border-stone-200 hover:border-[#10665c] transition-colors">
                <span className="text-xs text-[#7c4d8f] uppercase tracking-widest">Crystals</span>
                <h4 className="font-serif text-lg text-stone-800 mt-2 group-hover:text-[#10665c] transition-colors">
                  Crystal Healing for Beginners
                </h4>
              </div>
            </Link>
            <Link to="/blog/tea-ceremonies" className="group">
              <div className="bg-white p-6 border border-stone-200 hover:border-[#10665c] transition-colors">
                <span className="text-xs text-[#7c4d8f] uppercase tracking-widest">Rituals</span>
                <h4 className="font-serif text-lg text-stone-800 mt-2 group-hover:text-[#10665c] transition-colors">
                  The Art of Tea Ceremonies
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
