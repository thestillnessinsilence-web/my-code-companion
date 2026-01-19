import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import teaCeremonyImg from '@/assets/blog/tea-ceremony.jpg';

export default function TeaCeremonies() {
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
              December 20, 2025
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mb-6">
            The Art of Tea Ceremonies: Transform Daily Tea Into Sacred Ritual
          </h1>
          <p className="font-sans text-lg text-stone-600 leading-relaxed">
            Learn how to elevate your daily tea into a mindful ritual that promotes relaxation, 
            presence, and connection with the herbs in your Oracle Bag.
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
            src={teaCeremonyImg}
            alt="Tea ceremony ritual herbal tea organic chamomile lavender meditation mindfulness"
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
            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">The Ancient Tradition of Tea Ritual</h2>
            <p>
              The practice of transforming tea preparation into ceremony dates back thousands of years. 
              The Japanese Chanoyu (Way of Tea) and Chinese Gongfu tea ceremony elevated tea drinking 
              from simple refreshment to spiritual practice. At their heart, these traditions share a 
              common principle: the act of making and drinking tea becomes a meditation in itself.
            </p>
            <p>
              You don't need formal training or elaborate equipment to bring this mindfulness to your 
              daily cup. The essence of tea ceremony is presence—full attention to each moment of the 
              preparation and enjoyment of your tea.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">The Science of Tea and Relaxation</h2>
            <p>
              Research supports the calming effects of tea ritual. A systematic review published in 
              Nutrition and Food Technology examined the relationship between tea consumption and 
              psychological well-being. Studies found that both the act of preparing tea and the 
              bioactive compounds in herbal infusions—particularly L-theanine, an amino acid found 
              in tea—can promote relaxation without drowsiness.
            </p>
            <p>
              Chamomile, included in many Oracle Bags, has been studied extensively. A review in 
              Phytotherapy Research found evidence supporting its traditional use for promoting calm 
              and supporting sleep. The ritual of preparation may amplify these effects by activating 
              the parasympathetic nervous system—the "rest and digest" response.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Creating Your Personal Tea Ceremony</h2>

            <div className="bg-[#e8f5f2] p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl text-stone-800 mb-4">Step 1: Prepare Your Space</h3>
              <p>
                Before beginning, take a moment to clear your environment. Turn off notifications, 
                dim harsh lights, and create a sense of sanctuary. This signals to your nervous system 
                that it's time to slow down.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Clear your tea-making area of clutter</li>
                <li>Light a candle (the soy candle from your Oracle Bag is perfect)</li>
                <li>Set out your favorite cup and teaware</li>
                <li>Consider placing your crystals nearby</li>
              </ul>
            </div>

            <div className="bg-[#f3eef5] p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl text-stone-800 mb-4">Step 2: Engage Your Senses</h3>
              <p>
                As you prepare the tea, engage fully with each sensory experience:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Sight:</strong> Observe the color and form of the dried herbs</li>
                <li><strong>Sound:</strong> Listen to the water coming to a boil, the pour into your cup</li>
                <li><strong>Smell:</strong> Breathe deeply as the hot water releases the herbs' aromatics</li>
                <li><strong>Touch:</strong> Feel the warmth of the cup in your hands</li>
                <li><strong>Taste:</strong> Sip slowly, noticing layers of flavor</li>
              </ul>
            </div>

            <div className="bg-[#fdf8f3] p-6 rounded-lg my-6">
              <h3 className="font-serif text-xl text-stone-800 mb-4">Step 3: Practice Presence</h3>
              <p>
                The goal isn't to drink tea while doing something else—it's to simply drink tea. 
                This single-pointed attention is the essence of meditation.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Put away your phone</li>
                <li>Close your laptop</li>
                <li>Let thoughts come and go without following them</li>
                <li>Return attention to the tea whenever you notice your mind wandering</li>
                <li>There's no need to empty your mind—just keep returning to the present</li>
              </ul>
            </div>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Oracle Bag Tea Ritual</h2>
            <p>
              Each Oracle Bag includes organic herbal tea carefully selected to complement your 
              crystal and oracle message experience. Here's a complete ritual for working with your bag:
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Set Your Intention:</strong> Before opening your Oracle Bag, take three deep 
                breaths. Set an intention for what you hope to receive—guidance, clarity, peace.
              </li>
              <li>
                <strong>Prepare the Space:</strong> Light your soy candle. Arrange your crystals where 
                you can see them. Create a sense of sacred space.
              </li>
              <li>
                <strong>Heat the Water:</strong> As you heat water, read the tea information included 
                with your bag. Each blend has unique properties to support your journey.
              </li>
              <li>
                <strong>Steep Mindfully:</strong> Pour water over the tea and observe the color blooming. 
                Use this time to hold your crystals and breathe deeply.
              </li>
              <li>
                <strong>Read Your Oracle Message:</strong> As your tea steeps, open and read your 
                personalized oracle message. Let the words settle without immediately analyzing.
              </li>
              <li>
                <strong>Drink in Silence:</strong> Spend at least five minutes drinking your tea in 
                complete silence. Let the message integrate with the warmth of the tea.
              </li>
              <li>
                <strong>Journal:</strong> After finishing, write down any thoughts, feelings, or insights 
                that arose. Don't censor—let it flow.
              </li>
            </ol>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Tea Varieties and Their Properties</h2>
            <p>
              Different herbs carry different energies. Here are some commonly used in herbal tea blends:
            </p>
            <div className="grid gap-4 my-6">
              <div className="flex gap-4 items-start">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#10665c] flex-shrink-0"></span>
                <div>
                  <strong>Chamomile:</strong> Calming, supports sleep, soothes digestion. Best for evening 
                  rituals or when seeking peace.
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#9b6cb0] flex-shrink-0"></span>
                <div>
                  <strong>Lavender:</strong> Relaxing, reduces anxiety, promotes restful sleep. Perfect 
                  for stress relief and emotional balance.
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#d4af37] flex-shrink-0"></span>
                <div>
                  <strong>Rose:</strong> Heart-opening, supports emotional healing, uplifting. Wonderful 
                  for self-love rituals.
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-3 h-3 mt-2 rounded-full bg-green-600 flex-shrink-0"></span>
                <div>
                  <strong>Peppermint:</strong> Energizing, clarifying, aids digestion. Best for morning 
                  rituals or when seeking clarity.
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-3 h-3 mt-2 rounded-full bg-amber-600 flex-shrink-0"></span>
                <div>
                  <strong>Lemon Balm:</strong> Uplifting, calms nerves, supports focus. Excellent for 
                  meditation and study.
                </div>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Making It Your Own</h2>
            <p>
              There's no wrong way to practice tea ceremony. The traditions described above are 
              guidelines, not rules. What matters is that you bring attention and intention to 
              your practice. Over time, you'll develop your own rituals and preferences.
            </p>
            <p>
              Some practitioners add music or mantras; others prefer silence. Some include movement 
              like yoga or stretching before tea; others sit in stillness. Trust what feels right 
              for you, and allow your practice to evolve.
            </p>

          </div>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <h3 className="font-serif text-2xl text-stone-800 mb-6">Continue Your Journey</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/sacred-herb-guide" className="group">
              <div className="bg-white p-6 border border-stone-200 hover:border-[#10665c] transition-colors">
                <span className="text-xs text-[#7c4d8f] uppercase tracking-widest">Herbs</span>
                <h4 className="font-serif text-lg text-stone-800 mt-2 group-hover:text-[#10665c] transition-colors">
                  Sacred Herb Guide
                </h4>
              </div>
            </Link>
            <Link to="/blog/meditation-space" className="group">
              <div className="bg-white p-6 border border-stone-200 hover:border-[#10665c] transition-colors">
                <span className="text-xs text-[#7c4d8f] uppercase tracking-widest">Meditation</span>
                <h4 className="font-serif text-lg text-stone-800 mt-2 group-hover:text-[#10665c] transition-colors">
                  Creating Your Meditation Space
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
