import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import sacredHerbsImg from '@/assets/blog/herbal-apothecary-mortar-pestle-chamomile-lavender.jpg';

export default function SacredHerbGuide() {
  return (
    <>
      <Helmet>
        <title>Sacred Herb Guide: Appalachian Herbal Traditions | Crystal Bloomery</title>
        <meta name="description" content="Explore the rich heritage of Appalachian herbalism. Learn about lavender, chamomile, and other sacred plants that inspire our floral teas." />
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
              Herbs
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Calendar className="w-4 h-4" />
              January 5, 2026
            </span>
            <span className="flex items-center gap-1 text-stone-500 text-sm">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mb-6">
            Sacred Herb Guide: Appalachian Herbal Traditions
          </h1>
          <p className="font-sans text-lg text-stone-600 leading-relaxed">
            Explore the rich heritage of Appalachian herbalism and learn about the traditional uses of lavender, 
            chamomile, and other sacred plants that inspire the floral teas in our Oracle Bags.
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
            src={sacredHerbsImg}
            alt="Wooden mortar and pestle filled with fresh chamomile flowers and ground herbs, sitting next to a bundle of purple lavender on a rustic wooden table in the sunlight."
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
            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">The Living Tradition of Appalachian Herbalism</h2>
            <p>
              In the heart of Appalachia, medicine wasn't found in a pharmacy—it was found along the creeks, 
              hidden beneath the canopy of ancient trees, and growing wild along the hillsides. For generations, 
              Appalachian families relied on the wisdom of herbs to heal, protect, and nourish their bodies. 
              This knowledge wasn't written in textbooks but was passed down from grandmothers to granddaughters, 
              from mountain doctors to midwives.
            </p>
            <p>
              The tradition blends influences from Indigenous Cherokee plant knowledge, African healing practices 
              brought by enslaved peoples, and European folk medicine carried by Scots-Irish and German settlers. 
              This fusion created a unique pharmacopoeia suited to the plants available in these mountain ecosystems.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Herbs That Inspire Our Floral Teas</h2>

            <div className="grid gap-6 my-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-serif text-xl text-stone-800 mb-3">Lavender (Lavandula angustifolia)</h3>
                <p className="text-sm text-stone-600 mb-3">
                  <strong>Traditional Uses:</strong> Relaxation, sleep support, anxiety relief, wound care
                </p>
                <p>
                  Lavender has been used medicinally for over 2,500 years. The ancient Egyptians used it for 
                  mummification; Romans scented their baths with it (the name comes from the Latin "lavare," 
                  meaning "to wash"). Modern research has studied lavender's effects on sleep quality and 
                  anxiety, with some studies showing promising results for aromatherapy applications.
                </p>
                <p className="mt-3">
                  In Appalachian tradition, lavender sachets were placed under pillows for restful sleep, and 
                  lavender tea was given to calm nervous conditions. The floral teas included in our Oracle Bags 
                  are inspired by these calming traditions.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-serif text-xl text-stone-800 mb-3">Chamomile (Matricaria chamomilla)</h3>
                <p className="text-sm text-stone-600 mb-3">
                  <strong>Traditional Uses:</strong> Digestive support, relaxation, sleep aid, skin care
                </p>
                <p>
                  Chamomile is one of the oldest medicinal herbs known to humanity. Ancient Egyptians dedicated 
                  it to their sun god Ra, and it appears in the medical writings of Hippocrates, Dioscorides, 
                  and Galen. A 2016 systematic review published in Phytotherapy Research found evidence supporting 
                  chamomile's traditional use for promoting sleep and reducing anxiety.
                </p>
                <p className="mt-3">
                  Appalachian grannies kept dried chamomile in their apothecaries for "nervous stomach" and to 
                  help fussy children sleep. The organic floral tea included in each Oracle Bag is inspired by this gentle tradition.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="font-serif text-xl text-stone-800 mb-3">Mugwort (Artemisia vulgaris)</h3>
                <p className="text-sm text-stone-600 mb-3">
                  <strong>Traditional Uses:</strong> Dream work, protection, digestive support, ceremonial burning
                </p>
                <p>
                  Named for the Greek goddess Artemis, mugwort has a long history in European and Asian folk 
                  medicine. It was considered a protective plant—medieval travelers placed it in their shoes 
                  to ward off fatigue and evil spirits. In various traditions, mugwort is associated with 
                  enhancing dreams and psychic awareness.
                </p>
                <p className="mt-3">
                  Appalachian herbalists used mugwort in smudge bundles and dream pillows. It grows abundantly 
                  in the region and remains an important ceremonial herb for those working with lunar energies 
                  and dream practices.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-serif text-xl text-stone-800 mb-3">White Sage (Salvia apiana)</h3>
                <p className="text-sm text-stone-600 mb-3">
                  <strong>Traditional Uses:</strong> Ceremonial cleansing, purification, antimicrobial
                </p>
                <p>
                  White sage is native to the American Southwest and has been used in Indigenous ceremonies for 
                  centuries. Scientific studies have shown that sage smoke has antimicrobial properties—a 2007 
                  study published in the Journal of Ethnopharmacology found that medicinal smoke from burning 
                  herbs could purify air of certain bacteria.
                </p>
                <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mt-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Cultural Note:</strong> We acknowledge that white sage is sacred to many Indigenous 
                    peoples. We source our sage responsibly and encourage practitioners to approach smudging 
                    with respect for its origins. Consider also using locally abundant alternatives like 
                    garden sage or rosemary.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-serif text-xl text-stone-800 mb-3">Rosemary (Rosmarinus officinalis)</h3>
                <p className="text-sm text-stone-600 mb-3">
                  <strong>Traditional Uses:</strong> Memory enhancement, protection, purification, circulation
                </p>
                <p>
                  "There's rosemary, that's for remembrance," wrote Shakespeare in Hamlet. This woody, aromatic 
                  herb has been associated with memory since ancient times—Greek students wore rosemary garlands 
                  while studying. Modern research has explored rosemary's effects on cognitive function, with 
                  some studies suggesting aromatherapy may support alertness and memory.
                </p>
                <p className="mt-3">
                  In Appalachia, rosemary was planted by doorways for protection and burned to cleanse sickrooms. 
                  It's a wonderful local alternative for smoke cleansing rituals.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Working with Sacred Herbs</h2>
            <p>
              There are many ways to incorporate sacred herbs into your practice:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tea Infusions:</strong> Steep dried herbs in hot water for a calming ritual beverage</li>
              <li><strong>Smoke Cleansing:</strong> Burn dried herb bundles to purify spaces and objects</li>
              <li><strong>Sachets & Pillows:</strong> Place dried herbs under your pillow or in cloth pouches</li>
              <li><strong>Baths:</strong> Add herb infusions or sachets to bathwater for ritual cleansing</li>
              <li><strong>Altar Offerings:</strong> Include dried herbs as offerings or decorations</li>
            </ul>

            <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Honoring the Tradition</h2>
            <p>
              At Crystal Bloomery, we're honored to draw inspiration from the Appalachian tradition of herbal wisdom. 
              Each Spirit Blooms includes an organic floral tea blend crafted with care, along with crystals, a soy candle, 
              and a personal message from the universe. While we don't sell individual herbs, we celebrate their legacy through 
              the thoughtfully curated teas in our ceremony kits.
            </p>
            <p>
              When you open your Oracle Bag and brew the floral tea within, you're connecting 
              with a lineage of mountain healers, wise women, and plant lovers who understood that the earth 
              provides what we need for body, mind, and spirit.
            </p>

          </div>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <h3 className="font-serif text-2xl text-stone-800 mb-6">Continue Your Journey</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/tea-ceremonies" className="group">
              <div className="bg-white p-6 border border-stone-200 hover:border-[#10665c] transition-colors">
                <span className="text-xs text-[#7c4d8f] uppercase tracking-widest">Rituals</span>
                <h4 className="font-serif text-lg text-stone-800 mt-2 group-hover:text-[#10665c] transition-colors">
                  The Art of Tea Ceremonies
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
    </>
  );
}
