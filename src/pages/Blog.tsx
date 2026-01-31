import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import moonWaterImg from '@/assets/blog/moon-water.jpg';
import crystalHealingImg from '@/assets/blog/crystal-healing.jpg';
import sacredHerbsImg from '@/assets/blog/sacred-herbs.jpg';
import meditationSpaceImg from '@/assets/blog/meditation-space.jpg';
import teaCeremonyImg from '@/assets/blog/tea-ceremony.jpg';
import crystalEnergyImg from '@/assets/blog/crystal-energy.jpg';
import flowerEssencesImg from '@/assets/blog/flower-essences-dropper-bottles-wildflowers.jpg';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function Blog() {
  const posts = [
    {
      slug: 'moon-water',
      title: 'The Power of Moon Water',
      date: 'January 15, 2026',
      excerpt: 'Discover how to harness lunar energy through moon water ceremonies and crystal charging.',
      image: moonWaterImg,
      category: 'Ceremonies'
    },
    {
      slug: 'crystal-healing',
      title: 'Crystal Healing for Beginners',
      date: 'January 10, 2026',
      excerpt: 'Learn the fundamentals of working with healing crystals and how to choose the right stones for your journey.',
      image: crystalHealingImg,
      category: 'Crystals'
    },
    {
      slug: 'sacred-herb-guide',
      title: 'Sacred Herb Guide',
      date: 'January 5, 2026',
      excerpt: 'Explore the magical properties of lavender, mugwort, chamomile, and other sacred herbs in our collection.',
      image: sacredHerbsImg,
      category: 'Herbs'
    },
    {
      slug: 'meditation-space',
      title: 'Creating Your Meditation Space',
      date: 'December 28, 2025',
      excerpt: 'Tips for designing a peaceful sanctuary in your home where you can connect with your Spirit Blooms.',
      image: meditationSpaceImg,
      category: 'Meditation'
    },
    {
      slug: 'tea-ceremonies',
      title: 'The Art of Tea Ceremonies',
      date: 'December 20, 2025',
      excerpt: 'Transform your daily tea into a mindful ceremony with our guide to sacred tea practices.',
      image: teaCeremonyImg,
      category: 'Ceremonies'
    },
    {
      slug: 'crystal-energy',
      title: 'Understanding Crystal Energy',
      date: 'December 15, 2025',
      excerpt: 'Dive deep into the vibrational frequencies of amethyst, rose quartz, and other powerful healing stones.',
      image: crystalEnergyImg,
      category: 'Crystals'
    },
    {
      slug: 'flower-essences',
      title: 'The Healing Power of Flower Essences',
      date: 'January 28, 2026',
      excerpt: 'Discover how flower essences support emotional balance, from Hildegard of Bingen to Dr. Edward Bach.',
      image: flowerEssencesImg,
      category: 'Wellness'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Crystal Bloomery | The Bloomery Journal</title>
        <meta name="description" content="Explore sacred practices of crystal healing, herbalism, and mindful living through our curated collection of guides and stories from Crystal Bloomery." />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" },
        { name: "Blog", url: "https://crystalbloomery.com/blog" }
      ]} />
      <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Wisdom & Insights
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-800 mb-6">
            The Bloomery Journal
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
          <p className="font-sans text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Explore the sacred practices of crystal healing, herbalism, and mindful living through our curated collection of guides and stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-stone-200">
                  <img
                    src={post.image}
                    alt={`${post.title} - ritual herbal bag crystal ceremony spiritual gift Asheville`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#10665c] text-white px-3 py-1 text-xs tracking-widest uppercase rounded-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                    {post.date}
                  </p>
                  <h2 className="font-serif text-2xl text-stone-800 mb-3 group-hover:text-[#10665c] transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#10665c] font-sans text-sm tracking-widest uppercase group-hover:gap-3 transition-all">
                    Read More
                    <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
