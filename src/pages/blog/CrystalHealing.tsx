import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import crystalHealingImg from '@/assets/blog/crystal-healing.jpg';

export default function CrystalHealing() {
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
              January 10, 2026
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mb-6">
            Crystal Healing for Beginners: A Complete Guide
          </h1>
          <p className="font-sans text-lg text-stone-600 leading-relaxed">
            Learn the fundamentals of working with healing crystals, from selecting your first stones 
            to understanding their traditional meanings and modern applications.
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
            src={crystalHealingImg}
            alt="Healing crystals collection amethyst rose quartz clear quartz spiritual gift Asheville Appalachian"
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
            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">The Ancient Practice of Crystal Healing</h2>
            <p>
              Healing crystals have been valued for their beauty and alleged metaphysical properties for thousands 
              of years. Ancient Egyptians used crystals like lapis lazuli and carnelian in jewelry, amulets, and 
              burial rituals. In Chinese culture, jade has been revered for its protective and healing qualities 
              for millennia—traditional Chinese medicine still incorporates jade tools like gua sha stones. 
              Indian Ayurvedic traditions have long recognized the therapeutic properties of gemstones, known as 
              <em>ratnas</em>.
            </p>
            <p>
              Today, crystal healing has experienced a resurgence as people seek holistic approaches to wellness 
              and self-care. While scientific studies have not proven that crystals possess healing energies, 
              many practitioners find that working with crystals provides a meaningful framework for meditation, 
              intention-setting, and mindfulness.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">How Crystal Healing Works</h2>
            <p>
              The theory behind crystal healing suggests that crystals interact with the body's energy field to 
              promote physical and spiritual well-being. Crystals are believed to vibrate at specific frequencies 
              due to their molecular composition, and these vibrations may influence our own energy.
            </p>
            <p>
              From a practical perspective, many people find that crystals serve as powerful tools for focused 
              meditation and intention-setting. Holding a crystal while meditating can provide a tangible anchor 
              for attention, making the practice more accessible for beginners.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Essential Crystals for Beginners</h2>
            
            <div className="grid gap-6 my-8">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="font-serif text-xl text-stone-800 mb-2">Amethyst</h3>
                <p className="text-sm text-stone-600 mb-2"><strong>Color:</strong> Purple, from light lavender to deep violet</p>
                <p>
                  Known as the "stone of spirituality and contentment," amethyst is traditionally associated with 
                  calming the mind, enhancing intuition, and promoting restful sleep. Ancient Greeks believed 
                  amethyst could prevent intoxication—the name comes from the Greek "amethystos" meaning "not drunk."
                </p>
                <p className="mt-2 text-sm text-purple-700">
                  <strong>Traditional uses:</strong> Meditation, stress relief, sleep support, spiritual connection
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="font-serif text-xl text-stone-800 mb-2">Rose Quartz</h3>
                <p className="text-sm text-stone-600 mb-2"><strong>Color:</strong> Soft pink, often translucent</p>
                <p>
                  Called the "stone of unconditional love," rose quartz is associated with matters of the heart—
                  self-love, romantic love, and compassion. It has been used in love rituals since 600 BC and 
                  was prized by ancient Egyptians and Romans for its beauty and symbolic meaning.
                </p>
                <p className="mt-2 text-sm text-pink-700">
                  <strong>Traditional uses:</strong> Heart healing, self-love, relationships, emotional balance
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="font-serif text-xl text-stone-800 mb-2">Clear Quartz</h3>
                <p className="text-sm text-stone-600 mb-2"><strong>Color:</strong> Transparent to milky white</p>
                <p>
                  Known as the "master healer," clear quartz is believed to amplify energy and intention. 
                  It's the most versatile crystal in any collection, used to enhance the properties of other 
                  stones and to bring clarity to any situation. Clear quartz is piezoelectric, meaning it 
                  generates electricity under pressure—a property used in watches and electronics.
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Traditional uses:</strong> Amplification, clarity, cleansing, programming with intentions
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-500">
                <h3 className="font-serif text-xl text-stone-800 mb-2">Black Tourmaline</h3>
                <p className="text-sm text-stone-600 mb-2"><strong>Color:</strong> Opaque black</p>
                <p>
                  Regarded as a powerful protective stone, black tourmaline is traditionally used for grounding 
                  and shielding against negative energies. It's one of the few crystals that is pyroelectric—
                  it becomes electrically charged when heated, a property first discovered by Dutch traders who 
                  noticed it could attract ash and straw.
                </p>
                <p className="mt-2 text-sm text-stone-700">
                  <strong>Traditional uses:</strong> Protection, grounding, EMF shielding, boundary setting
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-serif text-xl text-stone-800 mb-2">Citrine</h3>
                <p className="text-sm text-stone-600 mb-2"><strong>Color:</strong> Yellow to golden orange</p>
                <p>
                  Known as the "merchant's stone" or "success stone," citrine is associated with abundance, 
                  creativity, and personal power. Unlike most crystals, citrine is said not to hold negative 
                  energy, making it a popular choice for those new to crystal work.
                </p>
                <p className="mt-2 text-sm text-yellow-700">
                  <strong>Traditional uses:</strong> Abundance, confidence, creativity, energy boost
                </p>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">How to Choose Your Crystals</h2>
            <p>
              When selecting crystals, many practitioners suggest following your intuition. Notice which stones 
              you're drawn to visually or energetically. Some people report feeling warmth, tingling, or a 
              sense of calm when holding certain crystals.
            </p>
            <p>Practical considerations include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Purpose:</strong> What do you want to work on? Choose stones traditionally associated with your goals.</li>
              <li><strong>Authenticity:</strong> Purchase from reputable sources to ensure you're getting genuine crystals.</li>
              <li><strong>Size and form:</strong> Tumbled stones are affordable and portable; raw specimens maintain natural energy; shaped pieces (spheres, points) have specific uses.</li>
              <li><strong>Budget:</strong> Start with common, affordable stones. Clear quartz and amethyst are excellent beginner choices.</li>
            </ul>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Cleansing and Charging Your Crystals</h2>
            <p>
              Most practitioners recommend cleansing crystals when you first receive them and periodically 
              thereafter. Common cleansing methods include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Moonlight:</strong> Place under full moon light overnight (safe for all crystals)</li>
              <li><strong>Sunlight:</strong> Brief sun exposure (avoid with amethyst, rose quartz as they may fade)</li>
              <li><strong>Sound:</strong> Singing bowls, bells, or tuning forks</li>
              <li><strong>Smoke:</strong> Sage, palo santo, or incense smoke</li>
              <li><strong>Earth:</strong> Bury in soil overnight (not for water-soluble crystals)</li>
              <li><strong>Other crystals:</strong> Place on a selenite plate or clear quartz cluster</li>
            </ul>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Beginning Your Practice</h2>
            <p>
              Start simple. Choose one crystal that resonates with you and spend time with it daily. Hold it 
              during meditation, carry it in your pocket, or place it where you'll see it often. Pay attention 
              to any shifts in your mood, thoughts, or awareness.
            </p>
            <p>
              Remember that crystal healing is a personal practice. What works for one person may differ for 
              another. Trust your experience and allow your relationship with your crystals to develop naturally.
            </p>
            <p>
              Each Oracle Bag from Crystal Bloomery includes carefully selected crystals along with information 
              cards explaining their traditional properties, helping you begin your crystal journey with guidance 
              and intention.
            </p>

            <div className="border-t border-stone-200 mt-12 pt-8">
              <p className="text-sm text-stone-500 italic">
                Sources: HowStuffWorks Science, historical references from Ancient Egyptian and Greek texts, 
                mineral properties from geological research. Crystal healing is a complementary practice and 
                should not replace professional medical care.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <h3 className="font-serif text-2xl text-stone-800 mb-6">Continue Your Journey</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/crystal-energy" className="group">
              <div className="bg-white p-6 border border-stone-200 hover:border-[#10665c] transition-colors">
                <span className="text-xs text-[#7c4d8f] uppercase tracking-widest">Crystals</span>
                <h4 className="font-serif text-lg text-stone-800 mt-2 group-hover:text-[#10665c] transition-colors">
                  Understanding Crystal Energy
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
