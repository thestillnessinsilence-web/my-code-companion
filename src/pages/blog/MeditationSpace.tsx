import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import meditationSpaceImg from '@/assets/blog/cozy-meditation-corner-sacred-space-decor.jpg';

export default function MeditationSpace() {
  return (
    <>
      <Helmet>
        <title>Creating Your Meditation Space | Crystal Bloomery</title>
        <meta name="description" content="Design a peaceful sanctuary in your home for meditation and mindfulness. Tips for setting up your Spirit Blooms ritual space." />
      </Helmet>
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
              Meditation
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Calendar className="w-4 h-4" />
              December 28, 2025
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mb-6">
            Creating Your Meditation Space: A Sanctuary for Inner Peace
          </h1>
          <p className="font-sans text-lg text-stone-600 leading-relaxed">
            Design a peaceful sanctuary in your home where you can connect with your Spirit Blooms, 
            practice mindfulness, and nurture your spiritual well-being.
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
            src={meditationSpaceImg}
            alt="Sunlit meditation corner featuring a beige floor pillow, large potted plants, and lit candles on a woven tray near a window with sheer curtains."
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
            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Why a Dedicated Space Matters</h2>
            <p>
              Research in environmental psychology shows that our physical surroundings significantly impact 
              our mental state. A study published in the Journal of Environmental Psychology found that 
              environmental cues can trigger specific behaviors and emotional states—a concept known as 
              "environmental priming."
            </p>
            <p>
              By creating a dedicated meditation space, you establish a visual and sensory trigger that 
              helps your mind transition into a relaxed, contemplative state more easily. Over time, 
              simply entering this space can begin to calm your nervous system before you even sit down.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Choosing Your Location</h2>
            <p>
              Your meditation space doesn't need to be an entire room—it can be a corner, a closet, or even 
              a designated chair. Consider these factors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Quiet:</strong> Choose a spot away from household traffic and noise</li>
              <li><strong>Privacy:</strong> A space where you won't be interrupted</li>
              <li><strong>Natural Light:</strong> If possible, near a window for natural light (optional)</li>
              <li><strong>Temperature:</strong> A comfortable, consistent temperature</li>
              <li><strong>Size:</strong> Just enough room to sit comfortably; larger isn't necessarily better</li>
            </ul>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Essential Elements</h2>

            <div className="bg-[#f8f6f3] p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl text-stone-800 mb-4">Comfortable Seating</h3>
              <p>
                Your body's comfort directly affects your ability to focus. Choose seating that supports 
                good posture without causing strain:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Meditation cushion (zafu) for floor sitting</li>
                <li>Meditation bench for those with knee issues</li>
                <li>Supportive chair with feet flat on the floor</li>
                <li>Blanket for warmth and extra cushioning</li>
              </ul>
            </div>

            <div className="bg-[#f8f6f3] p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl text-stone-800 mb-4">Sacred Objects & Altar</h3>
              <p>
                An altar or focal point gives your eyes somewhere to rest and creates a sense of sacredness. 
                Consider including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Your Spirit Blooms crystals and message from the universe</li>
                <li>Candles (soy candles like those in our Spirit Blooms are clean-burning)</li>
                <li>Fresh flowers or plants</li>
                <li>Meaningful photographs or artwork</li>
                <li>Religious or spiritual symbols that resonate with you</li>
                <li>A small bowl for sacred water</li>
              </ul>
            </div>

            <div className="bg-[#f8f6f3] p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl text-stone-800 mb-4">Sensory Elements</h3>
              <p>
                Engage multiple senses to deepen your practice:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Scent:</strong> Incense, essential oil diffuser, or herb bundles</li>
                <li><strong>Sound:</strong> Singing bowl, chimes, or soft background music</li>
                <li><strong>Touch:</strong> Soft textiles, mala beads, smooth crystals to hold</li>
                <li><strong>Sight:</strong> Soft, warm lighting; avoid harsh overhead lights</li>
              </ul>
            </div>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Setting Up Your Spirit Blooms Ritual Space</h2>
            <p>
              Your Spirit Blooms contains everything you need for a meaningful meditation ritual. Here's how 
              to create a dedicated space for working with your satchel:
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Create a Small Altar:</strong> Place a cloth or tray where you can display your 
                crystals, the soy candle, and your message from the universe.
              </li>
              <li>
                <strong>Tea Station:</strong> Keep a small electric kettle nearby for brewing the organic 
                tea included in your satchel. A favorite mug adds to the ritual.
              </li>
              <li>
                <strong>Journal Space:</strong> Have a journal and pen ready for recording insights from 
                your messages from the universe and meditation experiences.
              </li>
              <li>
                <strong>Display Your Artwork:</strong> Frame and hang the Appalachian artwork from your 
                Spirit Blooms as a visual anchor for your practice.
              </li>
            </ol>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Minimalism vs. Abundance</h2>
            <p>
              There's no right or wrong approach to decorating your meditation space. Some practitioners 
              prefer stark minimalism—a single cushion, bare walls, perhaps one candle. Others find 
              comfort in abundance—layers of textiles, collections of crystals, multiple sacred objects.
            </p>
            <p>
              The key is that your space should feel supportive to you. If visual clutter distracts you, 
              keep it simple. If sacred objects help you feel connected, include them. Your space will 
              likely evolve over time as your practice deepens.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Maintaining Sacred Energy</h2>
            <p>
              Once you've created your space, maintain its energy with regular care:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep the space clean and free of unrelated clutter</li>
              <li>Periodically cleanse with smoke (sage, palo santo) or sound (singing bowl)</li>
              <li>Charge your crystals under the full moon</li>
              <li>Refresh flowers and offerings regularly</li>
              <li>Use the space only for meditation and spiritual practice if possible</li>
            </ul>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Small Space Solutions</h2>
            <p>
              Don't let limited space stop you from creating a meditation sanctuary:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Portable Altar:</strong> Use a beautiful box or tray that you can set up and put away</li>
              <li><strong>Window Seat:</strong> Transform a sunny window into a meditation nook</li>
              <li><strong>Closet Conversion:</strong> A walk-in closet can become a cozy meditation cave</li>
              <li><strong>Outdoor Space:</strong> A garden corner, balcony, or porch can serve beautifully</li>
              <li><strong>Dedicated Chair:</strong> Simply having a specific chair for meditation creates ritual</li>
            </ul>

            <p className="mt-8">
              Remember, the most important element of your meditation space is your intention. Even the 
              simplest corner, approached with reverence, can become a powerful sanctuary for inner peace.
            </p>

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
    </>
  );
}
