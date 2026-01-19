import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import crystalEnergyImg from '@/assets/blog/crystal-energy.jpg';

export default function CrystalEnergy() {
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
              Crystals
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Calendar className="w-4 h-4" />
              December 15, 2025
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Clock className="w-4 h-4" />
              11 min read
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mb-6">
            Understanding Crystal Energy: Amethyst, Rose Quartz & Beyond
          </h1>
          <p className="font-sans text-lg text-stone-600 leading-relaxed">
            Dive deep into the vibrational frequencies of healing stones, their traditional meanings, 
            and how to work with crystal energy in your spiritual practice.
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
            src={crystalEnergyImg}
            alt="Crystal collection amethyst rose quartz healing stones spiritual energy Appalachian"
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
            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">The Nature of Crystal Energy</h2>
            <p>
              Crystals are naturally occurring mineral formations with highly organized molecular 
              structures. This precise atomic arrangement gives crystals their characteristic 
              properties—including piezoelectricity (the ability to generate electricity under 
              pressure) found in quartz, which is why quartz is used in watches and electronics.
            </p>
            <p>
              Proponents of crystal healing suggest that these structured vibrations can interact 
              with the energy fields of humans, promoting balance and well-being. While this hasn't 
              been scientifically proven, the practice draws from a rich historical tradition and 
              provides many practitioners with a meaningful framework for meditation and self-reflection.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">How Crystals Form Their Energy</h2>
            <p>
              Each crystal forms under specific geological conditions over thousands to millions of years. 
              Amethyst, for example, forms when silica-rich solutions fill cavities in volcanic rock, 
              with iron impurities and irradiation creating its purple color. Rose quartz gets its pink 
              hue from trace amounts of titanium, iron, or manganese.
            </p>
            <p>
              Crystal healers believe that the conditions of formation—heat, pressure, mineral 
              composition—influence the energetic properties of each stone. The slow, ancient process 
              of crystallization is seen as imbuing the stones with earth's wisdom.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Deep Dive: Essential Healing Stones</h2>

            <div className="bg-purple-50 p-8 rounded-lg my-8 border border-purple-200">
              <h3 className="font-serif text-2xl text-purple-900 mb-4">Amethyst: The Spiritual Stone</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <span className="text-xs text-purple-700 uppercase tracking-widest">Chakra</span>
                  <p className="font-medium text-purple-900">Third Eye, Crown</p>
                </div>
                <div>
                  <span className="text-xs text-purple-700 uppercase tracking-widest">Element</span>
                  <p className="font-medium text-purple-900">Air, Water</p>
                </div>
                <div>
                  <span className="text-xs text-purple-700 uppercase tracking-widest">Zodiac</span>
                  <p className="font-medium text-purple-900">Pisces, Virgo, Aquarius</p>
                </div>
              </div>
              <p className="mb-4">
                Amethyst has been prized since ancient times. The Egyptians used it in jewelry and 
                amulets; the Greeks believed it prevented intoxication. In medieval Europe, it was 
                considered a symbol of royalty, adorning British Crown Jewels and religious artifacts.
              </p>
              <p className="mb-4">
                <strong>Traditional Properties:</strong> Calming the mind, enhancing intuition, 
                promoting restful sleep, supporting meditation, connecting to higher consciousness.
              </p>
              <p>
                <strong>How to Work With Amethyst:</strong> Place under your pillow for peaceful dreams, 
                hold during meditation to deepen practice, position in your home office to promote 
                focus and reduce stress.
              </p>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg my-8 border border-pink-200">
              <h3 className="font-serif text-2xl text-pink-900 mb-4">Rose Quartz: The Love Stone</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <span className="text-xs text-pink-700 uppercase tracking-widest">Chakra</span>
                  <p className="font-medium text-pink-900">Heart</p>
                </div>
                <div>
                  <span className="text-xs text-pink-700 uppercase tracking-widest">Element</span>
                  <p className="font-medium text-pink-900">Earth, Water</p>
                </div>
                <div>
                  <span className="text-xs text-pink-700 uppercase tracking-widest">Zodiac</span>
                  <p className="font-medium text-pink-900">Taurus, Libra</p>
                </div>
              </div>
              <p className="mb-4">
                Rose quartz was used in love rituals as early as 600 BC. Ancient Romans and Egyptians 
                believed it could prevent aging. In Greek mythology, the stone was created when 
                Aphrodite's blood stained white quartz as she tried to save her wounded lover Adonis.
              </p>
              <p className="mb-4">
                <strong>Traditional Properties:</strong> Unconditional love, self-love, romantic love, 
                emotional healing, compassion, heart chakra opening, forgiveness.
              </p>
              <p>
                <strong>How to Work With Rose Quartz:</strong> Place over your heart during meditation, 
                keep on your nightstand to invite loving energy, use during self-care rituals, carry 
                when working through heartache.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg my-8 border border-gray-200">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Clear Quartz: The Master Healer</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <span className="text-xs text-gray-700 uppercase tracking-widest">Chakra</span>
                  <p className="font-medium text-gray-900">All, especially Crown</p>
                </div>
                <div>
                  <span className="text-xs text-gray-700 uppercase tracking-widest">Element</span>
                  <p className="font-medium text-gray-900">All Elements</p>
                </div>
                <div>
                  <span className="text-xs text-gray-700 uppercase tracking-widest">Zodiac</span>
                  <p className="font-medium text-gray-900">All Signs</p>
                </div>
              </div>
              <p className="mb-4">
                Clear quartz is the most versatile crystal, used across virtually all cultures 
                throughout history. Australian Aborigines called it "living crystal." Japanese 
                called it "tama," the perfect jewel, symbolizing purity and patience.
              </p>
              <p className="mb-4">
                <strong>Traditional Properties:</strong> Amplification of energy and intention, 
                clarity, cleansing, programming with specific goals, enhancing other crystals.
              </p>
              <p>
                <strong>How to Work With Clear Quartz:</strong> Program with specific intentions by 
                holding and stating your goal, pair with other crystals to amplify their properties, 
                use as a meditation focal point, place in windowsills to fill space with cleansed energy.
              </p>
            </div>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Crystal Combinations</h2>
            <p>
              Many practitioners work with multiple crystals together, believing their energies 
              complement and enhance each other. Here are some traditional pairings:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Amethyst + Rose Quartz:</strong> Combines spiritual insight with heart healing, 
                excellent for emotional processing and self-compassion
              </li>
              <li>
                <strong>Clear Quartz + Any Crystal:</strong> Amplifies the properties of any stone it's 
                paired with
              </li>
              <li>
                <strong>Black Tourmaline + Amethyst:</strong> Protection and spiritual awareness, good 
                for sensitive individuals
              </li>
              <li>
                <strong>Citrine + Rose Quartz:</strong> Abundance and love, supports manifestation 
                from the heart
              </li>
            </ul>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Working With Your Oracle Bag Crystals</h2>
            <p>
              Each Oracle Bag from Crystal Bloomery contains crystals selected to work together 
              harmoniously. Your bag includes crystal information cards explaining the traditional 
              properties of your specific stones.
            </p>
            <p>
              To work with your crystals:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Cleanse them when you first receive them (moonlight, sound, or intention)</li>
              <li>Hold each one and notice any sensations—warmth, tingling, calm</li>
              <li>Meditate with them daily, even briefly, to build connection</li>
              <li>Keep them on your altar, in your pocket, or under your pillow</li>
              <li>Trust your intuition about which crystals to work with when</li>
            </ol>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Respecting the Practice</h2>
            <p>
              Whether or not you believe crystals possess inherent healing energy, approaching the 
              practice with respect deepens its value. Crystals can serve as powerful tools for 
              intention-setting, meditation anchoring, and mindfulness practice—benefits supported 
              by psychological research on focused attention and ritual.
            </p>
            <p>
              At minimum, crystals remind us to pause, connect with something ancient and natural, 
              and turn our attention inward. In our fast-paced digital world, this alone is valuable.
            </p>

            <div className="border-t border-stone-200 mt-12 pt-8">
              <p className="text-sm text-stone-500 italic">
                Sources: HowStuffWorks Science, geological research on crystal formation, historical 
                references from various cultural traditions. Crystal healing is a complementary 
                practice and should not replace professional medical care.
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
            <Link to="/blog/moon-water" className="group">
              <div className="bg-white p-6 border border-stone-200 hover:border-[#10665c] transition-colors">
                <span className="text-xs text-[#7c4d8f] uppercase tracking-widest">Rituals</span>
                <h4 className="font-serif text-lg text-stone-800 mt-2 group-hover:text-[#10665c] transition-colors">
                  The Power of Moon Water
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
