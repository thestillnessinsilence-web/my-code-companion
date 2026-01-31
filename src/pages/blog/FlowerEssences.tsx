import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import flowerEssencesImg from '@/assets/blog/flower-essences-dropper-bottles-wildflowers.jpg';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function FlowerEssences() {
  return (
    <>
      <Helmet>
        <title>The Healing Power of Flower Essences | Crystal Bloomery</title>
        <meta name="description" content="Discover the gentle healing power of flower essences for emotional balance. Learn about their rich history from Hildegard of Bingen to Dr. Edward Bach." />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" },
        { name: "Blog", url: "https://crystalbloomery.com/blog" },
        { name: "Flower Essences", url: "https://crystalbloomery.com/blog/flower-essences" }
      ]} />
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
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="bg-[#10665c] text-white px-3 py-1 text-xs tracking-widest uppercase rounded-sm">
                Wellness
              </span>
              <span className="flex items-center gap-1 text-stone-500 text-sm">
                <Calendar className="w-4 h-4" />
                January 28, 2026
              </span>
              <span className="flex items-center gap-1 text-stone-500 text-sm">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mb-6">
              The Healing Power of Flower Essences
            </h1>
            <p className="font-sans text-lg text-stone-600 leading-relaxed">
              Discover the gentle yet profound way that flower essences can support emotional balance, 
              and explore the rich history of this healing art from medieval monasteries to modern wellness practices.
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
              src={flowerEssencesImg}
              alt="Flower essence dropper bottles arranged with fresh wildflowers including roses, chamomile, and lavender on a rustic wooden surface"
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
              <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">What Are Flower Essences?</h2>
              <p>
                Flower essences are liquid preparations made by infusing the energetic imprint of flowers 
                into water, typically with the help of sunlight or moonlight. Unlike essential oils or 
                herbal tinctures, flower essences don't contain the physical properties of the plant—instead, 
                they capture the subtle vibrational energy of the bloom.
              </p>
              <p>
                These gentle remedies are used to address emotional imbalances, support mental well-being, 
                and help individuals move through challenging life transitions. They work on an energetic 
                level, gently encouraging the release of negative emotional patterns and supporting the 
                cultivation of positive states of being.
              </p>

              <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">A Sacred History: From Monastery Gardens to Modern Healing</h2>
              
              <div className="bg-purple-50 p-6 rounded-lg my-8">
                <h3 className="font-serif text-xl text-stone-800 mb-3">Hildegard of Bingen: The Visionary Healer</h3>
                <p>
                  Long before flower essences became known in the modern wellness world, a remarkable 
                  Catholic nun was pioneering the use of plants for emotional and spiritual healing. 
                  <strong> Saint Hildegard of Bingen</strong> (1098–1179), a German Benedictine abbess, 
                  was a visionary mystic, composer, and healer who understood the profound connection 
                  between plants and human well-being.
                </p>
                <p className="mt-3">
                  Hildegard believed that flowers and plants carried divine healing properties—what she 
                  called <em>"viriditas"</em> or "greening power"—the vital life force that flowed through 
                  all of creation. She documented her knowledge in texts like <em>Physica</em> and 
                  <em>Causae et Curae</em>, describing how certain plants could help balance the emotions, 
                  calm anxiety, and restore harmony to the soul.
                </p>
                <p className="mt-3">
                  She prepared plant remedies using water infusions, believing that the essence of the 
                  flower could be transferred to water and then used to help emotionally balance those 
                  in her care. Her work in the monastery gardens laid important groundwork for understanding 
                  the subtle healing properties of flowers.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg my-8">
                <h3 className="font-serif text-xl text-stone-800 mb-3">Dr. Edward Bach: Father of Modern Flower Essence Therapy</h3>
                <p>
                  In the 1930s, English physician <strong>Dr. Edward Bach</strong> formalized what would 
                  become known as flower essence therapy. A successful bacteriologist and homeopath, 
                  Dr. Bach became disillusioned with conventional medicine's focus on physical symptoms 
                  while ignoring emotional causes of disease.
                </p>
                <p className="mt-3">
                  He left his lucrative London practice to wander the English countryside, intuitively 
                  discovering 38 flower remedies that addressed specific emotional states. His most 
                  famous creation, <strong>Rescue Remedy</strong>, is still used worldwide today for 
                  stress and anxiety relief.
                </p>
                <p className="mt-3">
                  Dr. Bach's philosophy was simple yet profound: "Treat the person, not the disease." 
                  He believed that emotional harmony was essential for physical health, and that flowers 
                  held the key to restoring that balance.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">The Benefits of Flower Essences</h2>
              <p>
                Flower essences offer gentle support for a wide range of emotional and spiritual concerns:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-stone-100 p-5 rounded-lg">
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Emotional Balance</h4>
                  <p className="text-sm">
                    Help release stuck emotions like fear, anger, grief, or jealousy while encouraging 
                    positive states such as courage, peace, and self-acceptance.
                  </p>
                </div>
                <div className="bg-stone-100 p-5 rounded-lg">
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Stress Relief</h4>
                  <p className="text-sm">
                    Support the nervous system during times of overwhelm, helping to calm anxiety 
                    and restore a sense of inner peace.
                  </p>
                </div>
                <div className="bg-stone-100 p-5 rounded-lg">
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Life Transitions</h4>
                  <p className="text-sm">
                    Provide support during major life changes—new jobs, relationships, loss, or 
                    spiritual awakening—easing the emotional journey.
                  </p>
                </div>
                <div className="bg-stone-100 p-5 rounded-lg">
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Self-Discovery</h4>
                  <p className="text-sm">
                    Deepen self-awareness and support personal growth by helping to illuminate 
                    unconscious patterns and beliefs.
                  </p>
                </div>
                <div className="bg-stone-100 p-5 rounded-lg">
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Sleep Support</h4>
                  <p className="text-sm">
                    Calm racing thoughts and worries that prevent restful sleep, promoting 
                    a peaceful transition into slumber.
                  </p>
                </div>
                <div className="bg-stone-100 p-5 rounded-lg">
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Spiritual Connection</h4>
                  <p className="text-sm">
                    Enhance meditation practice and deepen connection to intuition, 
                    higher self, and spiritual guidance.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Popular Flower Essences and Their Uses</h2>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Rescue Remedy (Bach):</strong> A blend of five flowers for acute stress, 
                  shock, or overwhelming situations
                </li>
                <li>
                  <strong>Mimulus:</strong> For known fears—fear of public speaking, illness, 
                  animals, or everyday anxieties
                </li>
                <li>
                  <strong>Star of Bethlehem:</strong> For healing from trauma, grief, or shock—past or present
                </li>
                <li>
                  <strong>Walnut:</strong> Protection during times of change and transition; 
                  helps break free from old patterns
                </li>
                <li>
                  <strong>Wild Rose:</strong> For apathy, resignation, or lack of motivation; 
                  rekindles joy and enthusiasm for life
                </li>
                <li>
                  <strong>White Chestnut:</strong> For persistent, unwanted thoughts and mental chatter; 
                  promotes mental peace
                </li>
              </ul>

              <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">How to Use Flower Essences</h2>
              <p>
                Flower essences are remarkably simple to use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Oral Use:</strong> Place 2-4 drops under the tongue or in a glass of water, 
                  4 times daily
                </li>
                <li>
                  <strong>Topical Application:</strong> Add drops to bath water, body lotion, 
                  or apply directly to pulse points
                </li>
                <li>
                  <strong>Environmental Use:</strong> Add to a spray bottle with water to mist 
                  your space or pillow
                </li>
                <li>
                  <strong>Meditation:</strong> Take drops before meditation to deepen your practice
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-8">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> Flower essences are considered safe and gentle, with no known 
                  side effects or drug interactions. However, they are not intended to replace 
                  professional medical or psychological treatment. If you're dealing with serious 
                  emotional or mental health concerns, please seek appropriate professional support.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-stone-800 mt-8 mb-4">Connecting Flowers, Crystals, and Sacred Practice</h2>
              <p>
                At Crystal Bloomery, we honor the wisdom of healers like Hildegard of Bingen and 
                Dr. Edward Bach by incorporating the essence of flowers into our sacred offerings. 
                Our Bloom Satchels include organic floral teas that carry the gentle spirit of 
                healing flowers, paired with crystals and candles to create a complete ceremony 
                for emotional balance and spiritual connection.
              </p>
              <p>
                Whether you're drawn to flower essences, crystal healing, herbal teas, or all of 
                the above, remember that these ancient practices share a common thread: the belief 
                that nature provides what we need for healing, and that emotional wellness is the 
                foundation of a vibrant life.
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
              <Link to="/blog/crystal-healing" className="group">
                <div className="bg-white p-6 border border-stone-200 hover:border-[#10665c] transition-colors">
                  <span className="text-xs text-[#7c4d8f] uppercase tracking-widest">Crystals</span>
                  <h4 className="font-serif text-lg text-stone-800 mt-2 group-hover:text-[#10665c] transition-colors">
                    Crystal Healing for Beginners
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
